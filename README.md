# Clappr Rate Media Plugin

![Screenshot](screenshot.png)

## Usage

Add both Clappr and Rate Media plugin scripts to your HTML:

```html
<head>
  <script type="text/javascript" src="http://cdn.clappr.io/latest/clappr.min.js"></script>
  <script type="text/javascript" src="dist/clappr-rate-media-plugin.min.js"></script>
</head>
```

Then just add `RateMediaPlugin` into the list of plugins of your player instance:

```javascript
var player = new Clappr.Player({
  source: "http://your.video/here.m3u8",
  plugins: [RateMediaPlugin]
});
```

After you have to configure the buttons to show on player. For each button must be specify the icon 
(only tree available for now: thumb-up, thumb-down, heart), a text to show tooltip and a url to do a ajax POST 
request on server:

```javascript
var player = new Clappr.Player({
  source: "http://your.video/here.m3u8",
  plugins: [RateMediaPlugin],
  rateMediaPlugin: {
    'buttons': {
      'like': {'text': 'Like', 'icon': {'default': 'thumbs-up'}, 'url': 'http://www.myserver.com/rate?like=1'},
      'dislike': {'text': 'Dislike', 'icon': {'default': 'thumbs-down'}, 'url': 'http://www.myserver.com/rate?dislike=1'},
      'love': {'text': 'Love', 'icon': {'default': 'heart'}, 'url': 'http://www.myserver.com/rate?love=1'}
    }
  },
});
```

## Compatibility

Tested in Clappr version 0.2.72
