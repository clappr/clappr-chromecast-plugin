import {Browser, Events, Log, Styler, UICorePlugin} from 'Clappr'
import ChromecastPlayback from './chromecast_playback'
import chromecastStyle from './public/style.scss'
import assign from 'lodash.assign'
import castIconSvg from './public/ic_cast_24dp.svg'
import connecting1IconSvg from './public/ic_cast0_24dp.svg'
import connecting2IconSvg from './public/ic_cast1_24dp.svg'
import connecting3IconSvg from './public/ic_cast2_24dp.svg'
import connectedIconSvg from './public/ic_cast_connected_24dp.svg'

var DEVICE_STATE = {
  'IDLE' : 0,
  'ACTIVE' : 1,
  'WARNING' : 2,
  'ERROR' : 3,
};

var DEFAULT_CLAPPR_APP_ID = '9DFB77C0'

export default class Chromecast extends UICorePlugin {
  get name() { return 'chromecast' }
  get tagName() { return 'button' }
  get attributes() {
    return {
      'class' : 'chromecast-button'
    }
  }
  constructor(core) {
    super(core)
    if (Browser.isChrome) {
      this.appId = core.options.chromecastAppId || DEFAULT_CLAPPR_APP_ID
      this.deviceState = DEVICE_STATE.IDLE
      this.embedScript()
    } else {
      this.disable()
    }
  }

  bindEvents() {
    this.container = this.container || this.core.mediaControl.container
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_RENDERED, this.settingsUpdate)
    this.listenTo(this.core.mediaControl, Events.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged)
    this.listenTo(this.container, Events.CONTAINER_TIMEUPDATE, this.containerTimeUpdate)
    this.listenTo(this.container, Events.CONTAINER_PLAY, this.containerPlay)
    this.listenTo(this.container, Events.CONTAINER_ENDED, this.sessionStopped)
  }

  enable() {
    super.enable()
    this.render()
    this.embedScript()
  }

  embedScript() {
    if (!window.chrome.cast || !window.chrome.cast.isAvailable) {
      var script = document.createElement('script')
      script.setAttribute("type", "text/javascript")
      script.setAttribute("async", "async")
      script.setAttribute("src", "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js")
      script.onload = () => this.bootstrapCastApi()
      document.body.appendChild(script)
    } else {
      this.bootstrapCastApi()
    }
  }

  bootstrapCastApi() {
    if (!window.chrome.cast || !window.chrome.cast.isAvailable) {
      window['__onGCastApiAvailable'] = (loaded, errorInfo) => {
        if (!!loaded) {
          this.appId = this.appId || DEFAULT_CLAPPR_APP_ID
          this.initializeCastApi()
        } else {
          Log.warn('GCastApi error', errorInfo)
          this.disable()
        }
      }
    } else {
      this.appId = this.appId || DEFAULT_CLAPPR_APP_ID
      this.initializeCastApi()
    }
  }

  initializeCastApi() {
    var autoJoinPolicy = chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    var sessionRequest = new chrome.cast.SessionRequest(this.appId)
    var apiConfig = new chrome.cast.ApiConfig(sessionRequest,
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
      Log.debug(this.name, "receiver found")
      this.show()
    } else {
      Log.debug(this.name, "receiver list empty");
      this.hide()
    }
  }

  launchSuccess(session) {
    this.renderConnected()
    clearInterval(this.connectAnimInterval)
    this.connectAnimInterval = null
    this.core.mediaControl.resetKeepVisible()
    Log.debug(this.name, 'launch success - session: ' + session.sessionId)
    this.newSession(session)
  }

  launchError(e) {
    Log.debug(this.name, 'error on launch', e)
    this.renderDisconnected()
    clearInterval(this.connectAnimInterval)
    this.connectAnimInterval = null
    this.core.mediaControl.resetKeepVisible()
  }

  loadMediaSuccess(how, mediaSession) {
    Log.debug(this.name, 'new media session', mediaSession, '(', how , ')');

    this.originalPlayback = this.core.mediaControl.container.playback

    var options = assign({}, this.originalPlayback.options, {currentMedia: mediaSession, mediaControl: this.core.mediaControl})
    this.src = this.originalPlayback.src
    this.playbackProxy = new ChromecastPlayback(options)
    this.playbackProxy.settings = this.originalPlayback.settings
    this.playbackProxy.render()

    this.mediaSession = mediaSession

    this.originalPlayback.$el.remove()
    this.core.mediaControl.container.$el.append(this.playbackProxy.$el)

    var container = this.core.mediaControl.container
    container.stopListening()
    container.playback = this.playbackProxy
    container.bindEvents()
    container.settingsUpdate()

    if (!this.originalPlaybackPlaying) {
      setTimeout(() => container.pause(), 100)
    }
  }

  loadMediaError(e) {
    Log.warn(this.name, "media error", e);
  }

  newSession(session) {
    this.session = session
    this.deviceState = DEVICE_STATE.ACTIVE
    this.renderConnected()

    session.addUpdateListener(() => this.sessionUpdateListener())

    this.originalPlaybackPlaying = this.core.mediaControl.container.isPlaying()
    if (this.originalPlaybackPlaying) {
      this.containerPlay()
    }
  }

  sessionStopped() {
    this.renderDisconnected()

    var time = this.currentTime

    var playerState = undefined
    if (this.mediaSession) {
      playerState = this.mediaSession.playerState
      this.mediaSession = null
    }

    this.core.load(this.src)

    var container = this.core.mediaControl.container

    if (this.playbackProxy.isPlaying() || playerState === 'PAUSED') {
      container.once(Events.CONTAINER_READY, () => {
        container.play()
        container.playback.seek(100 * time / container.getDuration())
      })
    }

    this.playbackProxy.stop()
  }

  loadMedia() {
    this.container.pause()
    var src = this.core.mediaControl.container.playback.src
    Log.debug(this.name, "loading... " + src)
    var mediaInfo = new chrome.cast.media.MediaInfo(src)
    mediaInfo.contentType = 'video/mp4'
    var request = new chrome.cast.media.LoadRequest(mediaInfo)
    request.autoplay = true
    request.currentTime = this.currentTime || 0
    this.session.loadMedia(request, (mediaSession) => this.loadMediaSuccess('loadMedia', mediaSession), (e) => this.loadMediaError(e))
  }

  show() {
    this.$el.show()
  }

  hide() {
    this.$el.hide()
  }

  click() {
    chrome.cast.requestSession((session) => this.launchSuccess(session), (e) => this.launchError(e))
    if (!this.session) {
      var position = 0
      var connectingIcons = [connecting1IconSvg, connecting2IconSvg, connecting3IconSvg]
      this.connectAnimInterval = setInterval(() => {
        this.$el.html(connectingIcons[position])
        position = (position + 1) % 3
      }, 600)
      this.core.mediaControl.setKeepVisible()
    }
  }

  settingsUpdate() {
    this.core.mediaControl.$el.find('.media-control-right-panel[data-media-control]').append(this.$el)
  }

  containerChanged() {
    this.container = this.core.mediaControl.container
    this.stopListening()
    this.bindEvents()
    this.currentTime = 0
  }

  containerTimeUpdate(position, duration) {
    this.currentTime = position
  }

  playbackTimeUpdate(position, duration) {
    this.currentTime = position
  }

  containerPlay() {
    if (!!this.session && (!this.mediaSession || this.mediaSession.playerStatus === 'IDLE')) {
      Log.debug(this.name, 'load media')
      this.currentTime = 0
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
    this.renderDisconnected()
    this.$el.click(() => this.click())
    this.core.mediaControl.$el.find('.media-control-right-panel[data-media-control]').append(this.$el)
    this.hide()
    var style = Styler.getStyleFor(chromecastStyle, {baseUrl: this.core.options.baseUrl})
    this.core.$el.append(style)
    return this
  }
}
