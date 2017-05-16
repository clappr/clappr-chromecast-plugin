import {Events, Log, Playback, template} from 'clappr'
import chromecastHTML from './public/chromecast.html'

const TICK_INTERVAL = 100

export default class ChromecastPlayback extends Playback {

  get name() { return 'chromecast_playback' }
  get template() { return template(chromecastHTML) }
  get attributes() { return { class: 'chromecast-playback' } }

  get isReady() { return true }

  constructor(options) {
    super(options)
    this.src = options.src
    this.currentMedia = options.currentMedia
    this.mediaControl = options.mediaControl
    this.currentMedia.addUpdateListener(() => this.onMediaStatusUpdate())
    this.settings = options.settings
    let noVolume = (name) => name != 'volume'
    this.settings.default && (this.settings.default = this.settings.default.filter(noVolume))
    this.settings.left && (this.settings.left = this.settings.left.filter(noVolume))
    this.settings.right && (this.settings.right = this.settings.right.filter(noVolume))
  }

  render() {
    let template = this.template()
    this.$el.html(template)
    if (this.options.poster) {
      this.$('.chromecast-playback-background').css('background-image', 'url(' + this.options.poster + ')')
    } else {
      this.$('.chromecast-playback-background').css('background-color', '#666')
    }
  }

  play() {
    this.currentMedia.play()
  }

  pause() {
    this.stopTimer()
    this.currentMedia.pause()
  }

  stop() {
    this.stopTimer()
    this.currentMedia.pause() // FIXME: properly handle media stop
  }

  seek(time) {
    this.stopTimer()
    let request = new chrome.cast.media.SeekRequest()
    request.currentTime = time
    this.currentMedia.seek(request,
      () => this.startTimer(), () => Log.warn('seek failed'))
  }

  seekPercentage(percentage) {
    if (percentage >= 0 && percentage <= 100) {
      let duration = this.getDuration()
      this.seek(percentage * duration / 100)
    }
  }

  startTimer() {
    this.timer = setInterval(() => this.updateMediaControl(), TICK_INTERVAL)
  }

  stopTimer() {
    clearInterval(this.timer)
    this.timer = null
  }

  getDuration() {
    return this.currentMedia.media.duration
  }

  isPlaying() {
    return this.currentMedia.playerState === 'PLAYING' || this.currentMedia.playerState === 'BUFFERING'
  }

  getPlaybackType() {
    return this.currentMedia.streamType == 'LIVE' ? Playback.LIVE : Playback.VOD
  }

  onMediaStatusUpdate() {
    this.mediaControl.changeTogglePlay()
    if (this.isPlaying() && !this.timer) {
      this.startTimer()
    }

    if (this.currentMedia.playerState === 'BUFFERING') {
      this.isBuffering = true
      this.trigger(Events.PLAYBACK_BUFFERING, this.name)
    } else if (this.currentMedia.playerState === 'PLAYING') {
      if (this.isBuffering) {
        this.isBuffering = false
        this.trigger(Events.PLAYBACK_BUFFERFULL, this.name)
      }
      if (this.prevState !== this.currentMedia.playerState) {
        this.trigger(Events.PLAYBACK_PLAY, this.name)
      }
    } else if (this.currentMedia.playerState === 'IDLE') {
      if (this.isBuffering) {
        this.isBuffering = false
        this.trigger(Events.PLAYBACK_BUFFERFULL, this.name)
      }
      this.trigger(Events.PLAYBACK_ENDED, this.name)
    } else if (this.currentMedia.playerState === 'PAUSED') {
      if (this.prevState !== this.currentMedia.playerState) {
        this.trigger(Events.PLAYBACK_PAUSE, this.name)
      }
    }

    this.prevState = this.currentMedia.playerState
  }

  updateMediaControl() {
    let position = this.currentMedia.getEstimatedTime()
    let duration = this.currentMedia.media.duration
    this.trigger(Events.PLAYBACK_TIMEUPDATE, {current: position, total: duration}, this.name)
  }

  show() {
    this.$el.show()
  }

  hide() {
    this.$el.hide()
  }
}
