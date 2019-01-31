import {Browser, Events, Log, Styler, UICorePlugin} from 'clappr'
import ChromecastPlayback from './chromecast_playback'
import chromecastStyle from './public/style.scss'
import assign from 'lodash.assign'
import castIconSvg from './public/ic_cast_24dp.svg'
import connecting1IconSvg from './public/ic_cast0_24dp.svg'
import connecting2IconSvg from './public/ic_cast1_24dp.svg'
import connecting3IconSvg from './public/ic_cast2_24dp.svg'
import connectedIconSvg from './public/ic_cast_connected_24dp.svg'

const DEVICE_STATE = {
  'IDLE' : 0,
  'ACTIVE' : 1,
  'WARNING' : 2,
  'ERROR' : 3
}

const DEFAULT_CLAPPR_APP_ID = '9DFB77C0'

const MIMETYPES = {
  'mp4': 'video/mp4',
  'ogg': 'video/ogg',
  '3gpp': 'video/3gpp',
  'webm': 'video/webm',
  'mkv': 'video/x-matroska',
  'm3u8': 'application/x-mpegurl',
  'mpd': 'application/dash+xml'
}
MIMETYPES['ogv'] = MIMETYPES['ogg']
MIMETYPES['3gp'] = MIMETYPES['3gpp']

export default class ChromecastPlugin extends UICorePlugin {
  static get Movie() { return 'movie' }
  static get TvShow() { return 'tv_show' }
  static get Generic() { return 'none' }

  static get version() { return VERSION }
  get version() { return VERSION }

  get name() { return 'chromecast' }
  get tagName() { return 'button' }
  get attributes() {
    return {
      'class' : 'chromecast-button'
    }
  }
  get events() {
    return {
      'click': 'click'
    }
  }
  get options() { return this.core.options.chromecast || (this.core.options.chromecast = {}) }
  get container() { return this.core.activeContainer }

  constructor(core) {
    super(core)

    this.bootTryDelay = this.options.bootTryDelay || 500      // Default is 500 milliseconds between each attempt
    this.bootMaxTryCount = this.options.bootMaxTryCount || 6  // Default is 6 attempts (3 seconds)
    this.bootTryCount = 0

    if (Browser.isChrome) {
      this.appId = this.options.appId || DEFAULT_CLAPPR_APP_ID
      this.deviceState = DEVICE_STATE.IDLE
      this.embedScript()
    } else {
      this.disable()
    }
  }

  bindEvents() {
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_RENDERED, this.render)
    this.listenTo(this.core, Events.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged)
    if (this.container) {
      this.listenTo(this.container, Events.CONTAINER_TIMEUPDATE, this.containerTimeUpdate)
      this.listenTo(this.container, Events.CONTAINER_PLAY, this.containerPlay)
      this.listenTo(this.container, Events.CONTAINER_ENDED, this.sessionStopped)
    }
  }

  enable() {
    super.enable()
    this.render()
    this.embedScript()
  }

  embedScript() {
    if (!window.chrome || !window.chrome.cast || !window.chrome.cast.isAvailable) {
      let script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('async', 'async')
      script.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js')
      script.onload = () => this.bootstrapCastApi()
      document.body.appendChild(script)
    } else {
      this.bootstrapCastApi()
    }
  }

  bootstrapCastApi() {
    this.bootTryCount++

    if (this.bootTryCount > this.bootMaxTryCount) {
      this.bootTryCount = 0
      Log.warn('GCastApi bootstrap timeout')
      this.disable()
      return
    }

    // The "chrome" property may not be available immediately on some iOS devices
    if (window.chrome) {
      this.bootTryCount = 0

      if (window.chrome.cast && window.chrome.cast.isAvailable) {
        this.appId = this.appId || DEFAULT_CLAPPR_APP_ID
        this.initializeCastApi()
      } else {
        window['__onGCastApiAvailable'] = (loaded, errorInfo) => {
          if (loaded) {
            this.appId = this.appId || DEFAULT_CLAPPR_APP_ID
            this.initializeCastApi()
          } else {
            Log.warn('GCastApi error', errorInfo)
            this.disable()
          }
        }
      }
    } else {
      setTimeout(() => { this.bootstrapCastApi() }, this.bootTryDelay)
    }
  }

  initializeCastApi() {
    let autoJoinPolicy = chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    let sessionRequest = new chrome.cast.SessionRequest(this.appId)
    let apiConfig = new chrome.cast.ApiConfig(sessionRequest,
      (session) => this.sessionListener(session), (e) => this.receiverListener(e), autoJoinPolicy)
    chrome.cast.initialize(apiConfig, () => Log.debug(this.name, 'init success'), () => Log.warn(this.name, 'init error'))
  }

  sessionListener(session) {
    Log.debug(this.name, 'new session id:' + session.sessionId)
    this.newSession(session)
  }

  sessionUpdateListener() {
    if (this.session) {
      Log.debug(this.name, this.session.status)
      if (this.session.status === chrome.cast.SessionStatus.STOPPED) {
        this.sessionStopped()
        this.session = null
      }
    }
  }

  receiverListener(e) {
    if ( e === chrome.cast.ReceiverAvailability.AVAILABLE ) {
      Log.debug(this.name, 'receiver found')
      this.show()
    } else {
      Log.debug(this.name, 'receiver list empty')
      this.hide()
    }
  }

  launchSuccess(session) {
    this.renderConnected()
    clearInterval(this.connectAnimInterval)
    this.core.mediaControl.resetKeepVisible()
    Log.debug(this.name, 'launch success - session: ' + session.sessionId)
    this.newSession(session)
  }

  launchError(e) {
    Log.debug(this.name, 'error on launch', e)
    this.renderDisconnected()
    clearInterval(this.connectAnimInterval)
    this.core.mediaControl.resetKeepVisible()
    this.container.play()
  }

  loadMediaSuccess(how, mediaSession) {
    Log.debug(this.name, 'new media session', mediaSession, '(', how , ')')

    this.originalPlayback = this.core.activePlayback

    let options = assign({}, this.originalPlayback.options, {
      currentMedia: mediaSession,
      mediaControl: this.core.mediaControl,
      poster: this.options.poster || this.core.options.poster,
      settings: this.originalPlayback.settings
    })
    this.src = this.originalPlayback.src
    this.playbackProxy = new ChromecastPlayback(options)
    this.playbackProxy.render()
    this.core.$el.addClass('chromecast-active')

    this.mediaSession = mediaSession

    this.originalPlayback.$el.remove()

    let container = this.core.activeContainer
    container.$el.append(this.playbackProxy.$el)
    container.stopListening()
    container.playback = this.playbackProxy
    container.bindEvents()
    container.settingsUpdate()
  }

  loadMediaError(e) {
    Log.warn(this.name, 'media error', e)
  }

  newSession(session) {
    this.session = session
    this.deviceState = DEVICE_STATE.ACTIVE
    this.renderConnected()

    session.addUpdateListener(() => this.sessionUpdateListener())

    this.containerPlay()
  }

  sessionStopped() {
    this.renderDisconnected()

    let time = this.currentTime

    let playerState = undefined
    if (this.mediaSession) {
      playerState = this.mediaSession.playerState
      this.mediaSession = null
    }

    this.core.$el.removeClass('chromecast-active')
    this.core.load(this.src || this.core.options.sources)

    let container = this.core.activeContainer

    if (this.playbackProxy) {
      if (this.playbackProxy.isPlaying() || playerState === 'PAUSED') {
        container.once(Events.CONTAINER_READY, () => {
          container.play()
          container.playback.seek(100 * time / container.getDuration())
        })
      }
      this.playbackProxy.stop()
    }
  }

  loadMedia() {
    this.container.pause()
    let src = this.container.options.src
    Log.debug(this.name, 'loading... ' + src)
    let mediaInfo = this.createMediaInfo(src)
    let request = new chrome.cast.media.LoadRequest(mediaInfo)
    request.autoplay = true
    request.currentTime = this.currentTime || 0
    this.session.loadMedia(request, (mediaSession) => this.loadMediaSuccess('loadMedia', mediaSession), (e) => this.loadMediaError(e))
  }

  createMediaInfo(src) {
    let mimeType = ChromecastPlugin.mimeTypeFor(src)
    let mediaInfo = new chrome.cast.media.MediaInfo(src)
    mediaInfo.contentType = this.options.contentType || mimeType
    mediaInfo.customData = this.options.customData
    let metadata = this.createMediaMetadata()
    mediaInfo.metadata = metadata
    return mediaInfo
  }

  createMediaMetadata() {
    this.options.media || (this.options.media = {})
    let type = this.options.media.type

    let metadata = this.createCastMediaMetadata(type)
    metadata.title = this.options.media.title
    metadata.subtitle = this.options.media.subtitle
    metadata.releaseDate = this.options.media.releaseDate

    if (type === ChromecastPlugin.TvShow) {
      metadata.episode = this.options.media.episode
      metadata.originalAirdate = this.options.media.originalAirdate
      metadata.season = this.options.media.season
      metadata.seriesTitle = this.options.media.seriesTitle
    } else if (type === ChromecastPlugin.Movie) {
      metadata.studio = this.options.media.studio
    }

    if (this.options.media.images) {
      metadata.images = this.options.media.images.map((url) => new chrome.cast.Image(url))
    }
    if (!metadata.images && this.options.poster) {
      metadata.images = [new chrome.cast.Image(this.options.poster)]
    }
    if (!metadata.images && this.core.options.poster) {
      metadata.images = [new chrome.cast.Image(this.core.options.poster)]
    }
    return metadata
  }

  createCastMediaMetadata(type) {
    switch (type) {
    case ChromecastPlugin.Movie: return new chrome.cast.media.MovieMediaMetadata()
    case ChromecastPlugin.TvShow: return new chrome.cast.media.TvShowMediaMetadata()
    default: return new chrome.cast.media.GenericMediaMetadata()
    }
  }

  show() {
    this.$el.show()
  }

  hide() {
    this.$el.hide()
  }

  click() {
    this.container.pause()
    chrome.cast.requestSession((session) => this.launchSuccess(session), (e) => this.launchError(e))
    if (!this.session) {
      let position = 0
      let connectingIcons = [connecting1IconSvg, connecting2IconSvg, connecting3IconSvg]
      clearInterval(this.connectAnimInterval)
      this.connectAnimInterval = setInterval(() => {
        this.$el.html(connectingIcons[position])
        position = (position + 1) % 3
      }, 600)
      this.core.mediaControl.setKeepVisible()
    }
  }

  containerChanged() {
    this.stopListening()
    this.bindEvents()
    this.currentTime = 0
  }

  containerTimeUpdate(timeProgress) {
    this.currentTime = timeProgress.current
  }

  containerPlay() {
    if (this.session && (!this.mediaSession || this.mediaSession.playerState === 'IDLE' || this.mediaSession.playerState === 'PAUSED')) {
      Log.debug(this.name, 'load media')
      this.currentTime = this.currentTime || 0
      this.loadMedia()
    }
  }

  renderConnected() {
    this.$el.html(connectedIconSvg)
  }

  renderDisconnected() {
    this.$el.html(castIconSvg)
  }

  render() {
    this.session ? this.renderConnected() : this.renderDisconnected()
    this.core.mediaControl.$el.find('.media-control-right-panel[data-media-control]').append(this.$el)
    this.$style && this.$style.remove()
    this.$style = Styler.getStyleFor(chromecastStyle, {baseUrl: this.core.options.baseUrl})
    this.core.$el.append(this.$style)
    return this
  }

  static mimeTypeFor(srcUrl) {
    let extension = (srcUrl.split('?')[0].match(/.*\.(.*)$/) || [])[1]
    if (MIMETYPES[extension]) {
      return MIMETYPES[extension]
    } else if (srcUrl.indexOf('.ism') > -1) {
      return 'application/vnd.ms-sstr+xml'
    }
  }
}
