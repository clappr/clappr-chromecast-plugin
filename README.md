# Clappr Chromecast Plugin

A [Clappr](https://github.com/clappr/clappr) plugin that adds Chromecast support on Chrome browser. As with all apps running on Chromecast it requires the [Google Cast extension](https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd) installed on the browser.

Please notice it's still not production ready, as it lacks a way to select tracks (audio, subtitles), as well as display media information.

## Usage

```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/clappr-chromecast-plugin@latest/dist/clappr-chromecast-plugin.min.js"></script>
  </head>

  <body>
    <div id="player"></div>
    <script>
      var player = new Clappr.Player({
        source: '//clappr.io/highline.mp4',
        plugins: [ChromecastPlugin],
        parentId: '#player',
        chromecast: {
          appId: '9DFB77C0',
          contentType: 'video/mp4',
          media: {
            type: ChromecastPlugin.Movie,
            title: 'Awesome Hot Air Balloon Slackline',
            subtitle: 'You won\'t get much closer to Skylining than this!'
          },
          customData: {
            licenseURL: 'http://widevine/yourLicenseServer'
          }
        }
      });
    </script>
  </body>
</html>
```

There's also a [demo page](https://clappr.github.io/clappr-chromecast-plugin).

### Plugin parameters

The plugin parameters are passed through the embed parameters object under the `chromecast` key:

- appId: indicates what Chromecast application id should be used (defaults to Clappr app id: `9DFB77C0`).
- contentType: overrides the default content type used by the plugin when loading the video. If not present, the plugin infers its value from the source URL.
- media: an object that represents metadata to be presented on the Chromecast application. The supported metadata values are:
  - type: the type of the media. Currently the supported values are `ChromecastPlugin.Movie` (for movies), `ChromecastPlugin.TvSeries` (for TV episodes) and `ChromecastPlugin.None` (for generic metadata - can also be absent or set to `null`/`undefined`)
  - title: the title of the video/movie/episode
  - subtitle: the subtitle of the video/movie/episode
  - images: an array of content image URLs such as cover art or a thumbnail of the currently playing media
  - releaseDate: ISO 8601 date and/or time when the content was released
  - studio: movie studio (movie only)
  - originalAirdate: ISO 8601 date when the episode originally aired (TV episode only)
  - seriesTitle: TV series title (TV episode only)
  - season: TV episode season (TV episode only)
  - episode: TV episode number (TV episode only)
- poster: a URL for an image that should be used as a poster when casting (optional)
- customData: an object that can be used to pass additional parameters to a custom receiver (optional)


## Development

Install dependencies:

`npm install`

Build:

`npm run build`

Run:

`npm start`
