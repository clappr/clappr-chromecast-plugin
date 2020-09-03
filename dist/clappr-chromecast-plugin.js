(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["ChromecastPlugin"] = factory(require("clappr"));
	else
		root["ChromecastPlugin"] = factory(root["Clappr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _clappr = __webpack_require__(1);

	var _chromecast_playback = __webpack_require__(2);

	var _chromecast_playback2 = _interopRequireDefault(_chromecast_playback);

	var _publicStyleScss = __webpack_require__(4);

	var _publicStyleScss2 = _interopRequireDefault(_publicStyleScss);

	var _lodashAssign = __webpack_require__(6);

	var _lodashAssign2 = _interopRequireDefault(_lodashAssign);

	var _publicIc_cast_24dpSvg = __webpack_require__(17);

	var _publicIc_cast_24dpSvg2 = _interopRequireDefault(_publicIc_cast_24dpSvg);

	var _publicIc_cast0_24dpSvg = __webpack_require__(18);

	var _publicIc_cast0_24dpSvg2 = _interopRequireDefault(_publicIc_cast0_24dpSvg);

	var _publicIc_cast1_24dpSvg = __webpack_require__(19);

	var _publicIc_cast1_24dpSvg2 = _interopRequireDefault(_publicIc_cast1_24dpSvg);

	var _publicIc_cast2_24dpSvg = __webpack_require__(20);

	var _publicIc_cast2_24dpSvg2 = _interopRequireDefault(_publicIc_cast2_24dpSvg);

	var _publicIc_cast_connected_24dpSvg = __webpack_require__(21);

	var _publicIc_cast_connected_24dpSvg2 = _interopRequireDefault(_publicIc_cast_connected_24dpSvg);

	var DEVICE_STATE = {
	  'IDLE': 0,
	  'ACTIVE': 1,
	  'WARNING': 2,
	  'ERROR': 3
	};

	var DEFAULT_CLAPPR_APP_ID = '9DFB77C0';

	var MIMETYPES = {
	  'mp4': 'video/mp4',
	  'ogg': 'video/ogg',
	  '3gpp': 'video/3gpp',
	  'webm': 'video/webm',
	  'mkv': 'video/x-matroska',
	  'm3u8': 'application/x-mpegurl',
	  'mpd': 'application/dash+xml'
	};
	MIMETYPES['ogv'] = MIMETYPES['ogg'];
	MIMETYPES['3gp'] = MIMETYPES['3gpp'];

	var ChromecastPlugin = (function (_UICorePlugin) {
	  _inherits(ChromecastPlugin, _UICorePlugin);

	  _createClass(ChromecastPlugin, [{
	    key: 'version',
	    get: function get() {
	      return ("0.1.2");
	    }
	  }, {
	    key: 'name',
	    get: function get() {
	      return 'chromecast';
	    }
	  }, {
	    key: 'tagName',
	    get: function get() {
	      return 'button';
	    }
	  }, {
	    key: 'attributes',
	    get: function get() {
	      return {
	        'class': 'chromecast-button',
	        'type': 'button'
	      };
	    }
	  }, {
	    key: 'events',
	    get: function get() {
	      return {
	        'click': 'click'
	      };
	    }
	  }, {
	    key: 'options',
	    get: function get() {
	      return this.core.options.chromecast || (this.core.options.chromecast = {});
	    }
	  }, {
	    key: 'container',
	    get: function get() {
	      return this.core.getCurrentContainer ? this.core.getCurrentContainer() : this.core.activeContainer; // Clappr 0.3.0 or greater
	    }
	  }, {
	    key: 'playback',
	    get: function get() {
	      return this.core.getCurrentPlayback ? this.core.getCurrentPlayback() : this.core.activePlayback; // Clappr 0.3.0 or greater
	    }
	  }], [{
	    key: 'Movie',
	    get: function get() {
	      return 'movie';
	    }
	  }, {
	    key: 'TvShow',
	    get: function get() {
	      return 'tv_show';
	    }
	  }, {
	    key: 'Generic',
	    get: function get() {
	      return 'none';
	    }
	  }, {
	    key: 'version',
	    get: function get() {
	      return ("0.1.2");
	    }
	  }]);

	  function ChromecastPlugin(core) {
	    _classCallCheck(this, ChromecastPlugin);

	    _get(Object.getPrototypeOf(ChromecastPlugin.prototype), 'constructor', this).call(this, core);

	    this.bootTryDelay = this.options.bootTryDelay || 500; // Default is 500 milliseconds between each attempt
	    this.bootMaxTryCount = this.options.bootMaxTryCount || 6; // Default is 6 attempts (3 seconds)
	    this.bootTryCount = 0;

	    if (this.isBootable()) {
	      this.appId = this.options.appId || DEFAULT_CLAPPR_APP_ID;
	      this.deviceState = DEVICE_STATE.IDLE;
	      this.embedScript();
	    } else {
	      this.disable();
	    }
	  }

	  _createClass(ChromecastPlugin, [{
	    key: 'bindEvents',
	    value: function bindEvents() {
	      this.listenTo(this.core.mediaControl, _clappr.Events.MEDIACONTROL_RENDERED, this.render);

	      if (_clappr.Events.CORE_ACTIVE_CONTAINER_CHANGED) {
	        // Clappr 0.3.0 or greater
	        this.listenTo(this.core, _clappr.Events.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged);
	      } else {
	        this.listenTo(this.core.mediaControl, _clappr.Events.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged);
	      }

	      if (this.container) {
	        this.listenTo(this.container, _clappr.Events.CONTAINER_TIMEUPDATE, this.containerTimeUpdate);
	        this.listenTo(this.container, _clappr.Events.CONTAINER_PLAY, this.containerPlay);
	        this.listenTo(this.container, _clappr.Events.CONTAINER_ENDED, this.sessionStopped);
	      }
	    }
	  }, {
	    key: 'isBootable',
	    value: function isBootable() {
	      // Browser must be Chrome
	      if (!_clappr.Browser.isChrome) {
	        return false;
	      }

	      // Chrome lesser than or equals to 71
	      // does not require secure page
	      if (_clappr.Browser.version <= 71) {
	        return true;
	      }

	      // Chrome greater than or equals to 72
	      // require secure page or localhost
	      return this.isSecure() || this.isLocalhost();
	    }
	  }, {
	    key: 'isLocalhost',
	    value: function isLocalhost() {
	      return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
	    }
	  }, {
	    key: 'isSecure',
	    value: function isSecure() {
	      return window.location.protocol === 'https:';
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      _get(Object.getPrototypeOf(ChromecastPlugin.prototype), 'enable', this).call(this);
	      this.render();
	      this.embedScript();
	    }
	  }, {
	    key: 'embedScript',
	    value: function embedScript() {
	      var _this = this;

	      if (!window.chrome || !window.chrome.cast || !window.chrome.cast.isAvailable) {
	        var script = document.createElement('script');
	        script.setAttribute('type', 'text/javascript');
	        script.setAttribute('async', 'async');
	        script.setAttribute('src', 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js');
	        script.onload = function () {
	          return _this.bootstrapCastApi();
	        };
	        document.body.appendChild(script);
	      } else {
	        this.bootstrapCastApi();
	      }
	    }
	  }, {
	    key: 'bootstrapCastApi',
	    value: function bootstrapCastApi() {
	      var _this2 = this;

	      this.bootTryCount++;

	      if (this.bootTryCount > this.bootMaxTryCount) {
	        this.bootTryCount = 0;
	        _clappr.Log.warn('GCastApi bootstrap timeout');
	        this.disable();
	        return;
	      }

	      // The "chrome" property may not be available immediately on some iOS devices
	      if (window.chrome) {
	        this.bootTryCount = 0;

	        if (window.chrome.cast && window.chrome.cast.isAvailable) {
	          this.appId = this.appId || DEFAULT_CLAPPR_APP_ID;
	          this.initializeCastApi();
	        } else {
	          window['__onGCastApiAvailable'] = function (loaded, errorInfo) {
	            if (loaded) {
	              _this2.appId = _this2.appId || DEFAULT_CLAPPR_APP_ID;
	              _this2.initializeCastApi();
	            } else {
	              _clappr.Log.warn('GCastApi error', errorInfo);
	              _this2.disable();
	            }
	          };
	        }
	      } else {
	        setTimeout(function () {
	          _this2.bootstrapCastApi();
	        }, this.bootTryDelay);
	      }
	    }
	  }, {
	    key: 'initializeCastApi',
	    value: function initializeCastApi() {
	      var _this3 = this;

	      var autoJoinPolicy = chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED;
	      var sessionRequest = new chrome.cast.SessionRequest(this.appId);
	      var apiConfig = new chrome.cast.ApiConfig(sessionRequest, function (session) {
	        return _this3.sessionListener(session);
	      }, function (e) {
	        return _this3.receiverListener(e);
	      }, autoJoinPolicy);
	      chrome.cast.initialize(apiConfig, function () {
	        return _clappr.Log.debug(_this3.name, 'init success');
	      }, function () {
	        return _clappr.Log.warn(_this3.name, 'init error');
	      });
	    }
	  }, {
	    key: 'sessionListener',
	    value: function sessionListener(session) {
	      _clappr.Log.debug(this.name, 'new session id:' + session.sessionId);
	      this.newSession(session);
	    }
	  }, {
	    key: 'sessionUpdateListener',
	    value: function sessionUpdateListener() {
	      if (this.session) {
	        _clappr.Log.debug(this.name, this.session.status);
	        if (this.session.status === chrome.cast.SessionStatus.STOPPED) {
	          this.sessionStopped();
	          this.session = null;
	        }
	      }
	    }
	  }, {
	    key: 'receiverListener',
	    value: function receiverListener(e) {
	      if (e === chrome.cast.ReceiverAvailability.AVAILABLE) {
	        _clappr.Log.debug(this.name, 'receiver found');
	        this.show();
	      } else {
	        _clappr.Log.debug(this.name, 'receiver list empty');
	        this.hide();
	      }
	    }
	  }, {
	    key: 'launchSuccess',
	    value: function launchSuccess(session) {
	      this.renderConnected();
	      clearInterval(this.connectAnimInterval);
	      this.core.mediaControl.resetKeepVisible();
	      _clappr.Log.debug(this.name, 'launch success - session: ' + session.sessionId);
	      this.newSession(session);
	    }
	  }, {
	    key: 'launchError',
	    value: function launchError(e) {
	      _clappr.Log.debug(this.name, 'error on launch', e);
	      this.renderDisconnected();
	      clearInterval(this.connectAnimInterval);
	      this.core.mediaControl.resetKeepVisible();
	      this.container.play();
	    }
	  }, {
	    key: 'loadMediaSuccess',
	    value: function loadMediaSuccess(how, mediaSession) {
	      _clappr.Log.debug(this.name, 'new media session', mediaSession, '(', how, ')');

	      this.originalPlayback = this.playback;

	      var options = (0, _lodashAssign2['default'])({}, this.originalPlayback.options, {
	        currentMedia: mediaSession,
	        mediaControl: this.core.mediaControl,
	        poster: this.options.poster || this.core.options.poster,
	        settings: this.originalPlayback.settings
	      });
	      this.src = this.originalPlayback.src;
	      this.playbackProxy = new _chromecast_playback2['default'](options);
	      this.playbackProxy.render();
	      this.core.$el.addClass('chromecast-active');

	      this.mediaSession = mediaSession;

	      this.originalPlayback.$el.remove();

	      var container = this.container;
	      container.$el.append(this.playbackProxy.$el);
	      container.stopListening();
	      container.playback = this.playbackProxy;
	      container.bindEvents();
	      container.settingsUpdate();
	    }
	  }, {
	    key: 'loadMediaError',
	    value: function loadMediaError(e) {
	      _clappr.Log.warn(this.name, 'media error', e);
	    }
	  }, {
	    key: 'newSession',
	    value: function newSession(session) {
	      var _this4 = this;

	      this.session = session;
	      this.deviceState = DEVICE_STATE.ACTIVE;
	      this.renderConnected();

	      session.addUpdateListener(function () {
	        return _this4.sessionUpdateListener();
	      });

	      this.containerPlay();
	    }
	  }, {
	    key: 'sessionStopped',
	    value: function sessionStopped() {
	      this.renderDisconnected();

	      var time = this.currentTime;

	      var playerState = undefined;
	      if (this.mediaSession) {
	        playerState = this.mediaSession.playerState;
	        this.mediaSession = null;
	      }

	      this.core.$el.removeClass('chromecast-active');
	      this.core.load(this.src || this.core.options.sources);

	      var container = this.container;

	      if (this.playbackProxy) {
	        if (this.playbackProxy.isPlaying() || playerState === 'PAUSED') {
	          container.once(_clappr.Events.CONTAINER_READY, function () {
	            container.play();
	            container.playback.seek(100 * time / container.getDuration());
	          });
	        }
	        this.playbackProxy.stop();
	      }
	    }
	  }, {
	    key: 'loadMedia',
	    value: function loadMedia() {
	      var _this5 = this;

	      this.container.pause();
	      var src = this.options.source || this.container.options.src;
	      _clappr.Log.debug(this.name, 'loading... ' + src);
	      var mediaInfo = this.createMediaInfo(src);
	      var request = new chrome.cast.media.LoadRequest(mediaInfo);
	      request.autoplay = true;
	      if (this.currentTime) {
	        request.currentTime = this.currentTime;
	      }
	      this.session.loadMedia(request, function (mediaSession) {
	        return _this5.loadMediaSuccess('loadMedia', mediaSession);
	      }, function (e) {
	        return _this5.loadMediaError(e);
	      });
	    }
	  }, {
	    key: 'createMediaInfo',
	    value: function createMediaInfo(src) {
	      var mimeType = ChromecastPlugin.mimeTypeFor(src);
	      var mediaInfo = new chrome.cast.media.MediaInfo(src);
	      mediaInfo.contentType = this.options.contentType || mimeType;
	      mediaInfo.customData = this.options.customData;
	      var metadata = this.createMediaMetadata();
	      mediaInfo.metadata = metadata;
	      return mediaInfo;
	    }
	  }, {
	    key: 'createMediaMetadata',
	    value: function createMediaMetadata() {
	      this.options.media || (this.options.media = {});
	      var type = this.options.media.type;

	      var metadata = this.createCastMediaMetadata(type);
	      metadata.title = this.options.media.title;
	      metadata.subtitle = this.options.media.subtitle;
	      metadata.releaseDate = this.options.media.releaseDate;

	      if (type === ChromecastPlugin.TvShow) {
	        metadata.episode = this.options.media.episode;
	        metadata.originalAirdate = this.options.media.originalAirdate;
	        metadata.season = this.options.media.season;
	        metadata.seriesTitle = this.options.media.seriesTitle;
	      } else if (type === ChromecastPlugin.Movie) {
	        metadata.studio = this.options.media.studio;
	      }

	      if (this.options.media.images) {
	        metadata.images = this.options.media.images.map(function (url) {
	          return new chrome.cast.Image(url);
	        });
	      }
	      if (!metadata.images && this.options.poster) {
	        metadata.images = [new chrome.cast.Image(this.options.poster)];
	      }
	      if (!metadata.images && this.core.options.poster) {
	        metadata.images = [new chrome.cast.Image(this.core.options.poster)];
	      }
	      return metadata;
	    }
	  }, {
	    key: 'createCastMediaMetadata',
	    value: function createCastMediaMetadata(type) {
	      switch (type) {
	        case ChromecastPlugin.Movie:
	          return new chrome.cast.media.MovieMediaMetadata();
	        case ChromecastPlugin.TvShow:
	          return new chrome.cast.media.TvShowMediaMetadata();
	        default:
	          return new chrome.cast.media.GenericMediaMetadata();
	      }
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.$el.show();
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.$el.hide();
	    }
	  }, {
	    key: 'click',
	    value: function click() {
	      var _this6 = this;

	      this.currentTime = this.container.getCurrentTime();
	      this.container.pause();
	      chrome.cast.requestSession(function (session) {
	        return _this6.launchSuccess(session);
	      }, function (e) {
	        return _this6.launchError(e);
	      });
	      if (!this.session) {
	        (function () {
	          var position = 0;
	          var connectingIcons = [_publicIc_cast0_24dpSvg2['default'], _publicIc_cast1_24dpSvg2['default'], _publicIc_cast2_24dpSvg2['default']];
	          clearInterval(_this6.connectAnimInterval);
	          _this6.connectAnimInterval = setInterval(function () {
	            _this6.$el.html(connectingIcons[position]);
	            position = (position + 1) % 3;
	          }, 600);
	          _this6.core.mediaControl.setKeepVisible();
	        })();
	      }
	    }
	  }, {
	    key: 'containerChanged',
	    value: function containerChanged() {
	      this.stopListening();
	      this.bindEvents();
	    }
	  }, {
	    key: 'containerTimeUpdate',
	    value: function containerTimeUpdate(timeProgress) {
	      this.currentTime = timeProgress.current;
	    }
	  }, {
	    key: 'containerPlay',
	    value: function containerPlay() {
	      if (this.session && (!this.mediaSession || this.mediaSession.playerState === 'IDLE' || this.mediaSession.playerState === 'PAUSED')) {
	        _clappr.Log.debug(this.name, 'load media');
	        this.loadMedia();
	      }
	    }
	  }, {
	    key: 'renderConnected',
	    value: function renderConnected() {
	      this.$el.html(_publicIc_cast_connected_24dpSvg2['default']);
	    }
	  }, {
	    key: 'renderDisconnected',
	    value: function renderDisconnected() {
	      this.$el.html(_publicIc_cast_24dpSvg2['default']);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.session ? this.renderConnected() : this.renderDisconnected();
	      this.core.mediaControl.$el.find('.media-control-right-panel[data-media-control]').append(this.$el);
	      this.$style && this.$style.remove();
	      this.$style = _clappr.Styler.getStyleFor(_publicStyleScss2['default'], { baseUrl: this.core.options.baseUrl });
	      this.core.$el.append(this.$style);
	      return this;
	    }
	  }], [{
	    key: 'mimeTypeFor',
	    value: function mimeTypeFor(srcUrl) {
	      var extension = (srcUrl.split('?')[0].match(/.*\.(.*)$/) || [])[1];
	      if (MIMETYPES[extension]) {
	        return MIMETYPES[extension];
	      } else if (srcUrl.indexOf('.ism') > -1) {
	        return 'application/vnd.ms-sstr+xml';
	      }
	    }
	  }]);

	  return ChromecastPlugin;
	})(_clappr.UICorePlugin);

	exports['default'] = ChromecastPlugin;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _clappr = __webpack_require__(1);

	var _publicChromecastHtml = __webpack_require__(3);

	var _publicChromecastHtml2 = _interopRequireDefault(_publicChromecastHtml);

	var TICK_INTERVAL = 100;

	var ChromecastPlayback = (function (_Playback) {
	  _inherits(ChromecastPlayback, _Playback);

	  _createClass(ChromecastPlayback, [{
	    key: 'name',
	    get: function get() {
	      return 'chromecast_playback';
	    }
	  }, {
	    key: 'template',
	    get: function get() {
	      return (0, _clappr.template)(_publicChromecastHtml2['default']);
	    }
	  }, {
	    key: 'attributes',
	    get: function get() {
	      return { 'class': 'chromecast-playback' };
	    }
	  }, {
	    key: 'isReady',
	    get: function get() {
	      return true;
	    }
	  }]);

	  function ChromecastPlayback(options) {
	    var _this = this;

	    _classCallCheck(this, ChromecastPlayback);

	    _get(Object.getPrototypeOf(ChromecastPlayback.prototype), 'constructor', this).call(this, options);
	    this.src = options.src;
	    this.currentMedia = options.currentMedia;
	    this.mediaControl = options.mediaControl;
	    this.currentMedia.addUpdateListener(function () {
	      return _this.onMediaStatusUpdate();
	    });
	    this.settings = options.settings;
	    var noVolume = function noVolume(name) {
	      return name != 'volume';
	    };
	    this.settings['default'] && (this.settings['default'] = this.settings['default'].filter(noVolume));
	    this.settings.left && (this.settings.left = this.settings.left.filter(noVolume));
	    this.settings.right && (this.settings.right = this.settings.right.filter(noVolume));
	  }

	  _createClass(ChromecastPlayback, [{
	    key: 'render',
	    value: function render() {
	      var template = this.template();
	      this.$el.html(template);
	      if (this.options.poster) {
	        this.$('.chromecast-playback-background').css('background-image', 'url(' + this.options.poster + ')');
	      } else {
	        this.$('.chromecast-playback-background').css('background-color', '#666');
	      }
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      this.currentMedia.play();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.stopTimer();
	      this.currentMedia.pause();
	      if (this.getPlaybackType() === _clappr.Playback.LIVE) {
	        this.trigger(_clappr.Events.PLAYBACK_DVR, true);
	      }
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.stopTimer();
	      this.currentMedia.pause(); // FIXME: properly handle media stop
	    }
	  }, {
	    key: 'seek',
	    value: function seek(time) {
	      var _this2 = this;

	      this.stopTimer();
	      var request = new chrome.cast.media.SeekRequest();
	      request.currentTime = time;
	      this.currentMedia.seek(request, function () {
	        return _this2.startTimer();
	      }, function () {
	        return _clappr.Log.warn('seek failed');
	      });
	      if (this.getPlaybackType() === _clappr.Playback.LIVE) {
	        // assume live if time within 30 seconds of end of live stream
	        this.trigger(_clappr.Events.PLAYBACK_DVR, time < this.getDuration() - 30);
	      }
	    }
	  }, {
	    key: 'seekPercentage',
	    value: function seekPercentage(percentage) {
	      if (percentage >= 0 && percentage <= 100) {
	        var duration = this.getDuration();
	        this.seek(percentage * duration / 100);
	      }
	    }
	  }, {
	    key: 'startTimer',
	    value: function startTimer() {
	      var _this3 = this;

	      this.timer = setInterval(function () {
	        return _this3.updateMediaControl();
	      }, TICK_INTERVAL);
	    }
	  }, {
	    key: 'stopTimer',
	    value: function stopTimer() {
	      clearInterval(this.timer);
	      this.timer = null;
	    }
	  }, {
	    key: 'getDuration',
	    value: function getDuration() {
	      return this.currentMedia.media.duration;
	    }
	  }, {
	    key: 'isPlaying',
	    value: function isPlaying() {
	      return this.currentMedia.playerState === 'PLAYING' || this.currentMedia.playerState === 'BUFFERING';
	    }
	  }, {
	    key: 'getPlaybackType',
	    value: function getPlaybackType() {
	      return !!this.currentMedia.liveSeekableRange ? _clappr.Playback.LIVE : _clappr.Playback.VOD; // eslint-disable-line no-extra-boolean-cast
	    }
	  }, {
	    key: 'onMediaStatusUpdate',
	    value: function onMediaStatusUpdate() {
	      this.mediaControl.changeTogglePlay();
	      if (this.isPlaying() && !this.timer) {
	        this.startTimer();
	      }

	      if (this.currentMedia.playerState === 'BUFFERING') {
	        this.isBuffering = true;
	        this.trigger(_clappr.Events.PLAYBACK_BUFFERING, this.name);
	      } else if (this.currentMedia.playerState === 'PLAYING') {
	        if (this.isBuffering) {
	          this.isBuffering = false;
	          this.trigger(_clappr.Events.PLAYBACK_BUFFERFULL, this.name);
	        }
	        if (this.prevState !== this.currentMedia.playerState) {
	          this.trigger(_clappr.Events.PLAYBACK_PLAY, this.name);
	        }
	      } else if (this.currentMedia.playerState === 'IDLE') {
	        if (this.isBuffering) {
	          this.isBuffering = false;
	          this.trigger(_clappr.Events.PLAYBACK_BUFFERFULL, this.name);
	        }
	        this.trigger(_clappr.Events.PLAYBACK_ENDED, this.name);
	      } else if (this.currentMedia.playerState === 'PAUSED') {
	        if (this.prevState !== this.currentMedia.playerState) {
	          this.trigger(_clappr.Events.PLAYBACK_PAUSE, this.name);
	        }
	      }

	      this.prevState = this.currentMedia.playerState;
	    }
	  }, {
	    key: 'updateMediaControl',
	    value: function updateMediaControl() {
	      var position = this.currentMedia.getEstimatedTime();
	      var duration = this.currentMedia.media.duration;
	      this.trigger(_clappr.Events.PLAYBACK_TIMEUPDATE, { current: position, total: duration }, this.name);
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.$el.show();
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.$el.hide();
	    }
	  }]);

	  return ChromecastPlayback;
	})(_clappr.Playback);

	exports['default'] = ChromecastPlayback;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=chromecast-playback-background></div><div class=chromecast-playback-overlay></div>";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".chromecast-playback {\n  height: 100%;\n  width: 100%; }\n  .chromecast-playback .chromecast-playback-background, .chromecast-playback .chromecast-playback-overlay {\n    position: absolute;\n    height: 100%;\n    width: 100%; }\n  .chromecast-playback .chromecast-playback-background {\n    background-size: contain; }\n  .chromecast-playback .chromecast-playback-overlay {\n    background-color: #000;\n    opacity: 0.4; }\n\n.chromecast-button {\n  background: transparent;\n  border: 0;\n  width: 32px;\n  height: 32px;\n  font-size: 22px;\n  line-height: 32px;\n  letter-spacing: 0;\n  margin: 0 6px;\n  color: #fff;\n  opacity: 0.5;\n  vertical-align: middle;\n  text-align: left;\n  cursor: pointer;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition: all 0.1s ease;\n  -moz-transition: all 0.1s ease;\n  -o-transition: all 0.1s ease;\n  transition: all 0.1s ease; }\n  .chromecast-button:hover {\n    opacity: 0.75;\n    text-shadow: rgba(255, 255, 255, 0.8) 0 0 5px; }\n  .chromecast-button:focus {\n    outline: none; }\n  .chromecast-button svg {\n    width: 24px;\n    height: 24px; }\n    .chromecast-button svg #cast, .chromecast-button svg #cast-on, .chromecast-button svg #Path {\n      fill: #fff;\n      stroke: #fff;\n      stroke-width: 0.5px; }\n", ""]);

	// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseAssign = __webpack_require__(7),
	    createAssigner = __webpack_require__(13),
	    keys = __webpack_require__(9);

	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;

	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);

	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}

	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it is invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});

	module.exports = assign;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseCopy = __webpack_require__(8),
	    keys = __webpack_require__(9);

	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	module.exports = baseCopy;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(10),
	    isArguments = __webpack_require__(11),
	    isArray = __webpack_require__(12);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = getNative;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isArguments;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var bindCallback = __webpack_require__(14),
	    isIterateeCall = __webpack_require__(15),
	    restParam = __webpack_require__(16);

	/**
	 * Creates a function that assigns properties of source object(s) to a given
	 * destination object.
	 *
	 * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;

	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = bindCallback;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/**
	 * lodash 3.0.9 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isIterateeCall;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/**
	 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Page-1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"ic_cast_black_24dp\"><g id=\"ic_remove_circle_white_24dp\"><path d=\"M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" id=\"cast\" fill=\"#000\"></path><path id=\"bounds\" d=\"M0 0h24v24H0z\"></path></g></g></g></svg>"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Page-1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"ic_cast0_black_24dp\"><g id=\"ic_remove_circle_white_24dp\"><path d=\"M1 18v3h3c0-1.66-1.34-3-3-3z\" id=\"Path\" fill=\"#000\"></path><path d=\"M1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z\" id=\"Path\" opacity=\".3\" fill=\"#000\"></path><path d=\"M1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z\" id=\"Path\" opacity=\".3\" fill=\"#000\"></path><path d=\"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" id=\"Path\" fill=\"#000\"></path><path id=\"bounds\" d=\"M0 0h24v24H0z\"></path></g></g></g></svg>"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Page-1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"ic_cast1_black_24dp\"><g id=\"ic_remove_circle_white_24dp\"><path d=\"M1 18v3h3c0-1.66-1.34-3-3-3z\" id=\"Path\" opacity=\".3\" fill=\"#000\"></path><path d=\"M1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z\" id=\"Path\" fill=\"#000\"></path><path d=\"M1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z\" id=\"Path\" opacity=\".3\" fill=\"#000\"></path><path d=\"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" id=\"cast\" fill=\"#000\"></path><path id=\"bounds\" d=\"M0 0h24v24H0z\"></path></g></g></g></svg>"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Page-1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"ic_cast2_black_24dp\"><g id=\"ic_remove_circle_white_24dp\"><path d=\"M1 18v3h3c0-1.66-1.34-3-3-3zM1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z\" id=\"Path\" opacity=\".3\" fill=\"#000\"></path><path d=\"M1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z\" id=\"Path\" fill=\"#000\"></path><path d=\"M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" id=\"cast\" fill=\"#000\"></path><path id=\"bounds\" d=\"M0 0h24v24H0z\"></path></g></g></g></svg>"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Page-1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"ic_cast_connected_black_24dp\"><g id=\"ic_remove_circle_white_24dp\"><path d=\"M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" id=\"cast-on\" fill=\"#000\"></path><path id=\"bounds\" d=\"M0 0h24v24H0z\"></path></g></g></g></svg>"

/***/ })
/******/ ])
});
;