# Clappr Chromecast Plugin

A [Clappr](https://github.com/clappr/clappr) plugin that adds Chromecast support on Chrome browser. As with all apps running on Chromecast it requires the [Google Cast extension](https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd) installed on the browser.

Please notice it's still not production ready, as it lacks a way to select tracks (audio, subtitles), as well as display media information.

## Usage

```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/clappr/latest/clappr.min.js"></script>
    <script src="https://cdn.jsdelivr.net/clappr.chromecast-plugin/latest/clappr-chromecast-plugin.js"></script>
  </head>

  <body>
    <div id="player"></div>
    <script>
      var player = new Clappr.Player({
        source: '//clappr.io/highline.mp4',
        plugins: [ChromecastPlugin],
        parentId: '#player'
      });
    </script>
  </body>
</html>
```

There's also a [demo page](https://clappr.github.io/clappr-chromecast-plugin).

## Development

Install dependencies:

`npm install`

Build:

`npm run build`

Run:

`npm start`
