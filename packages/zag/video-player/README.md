# @isbatak/zag-video-player

Core logic for a video player implemented as a state machine, built on [Zag](https://zagjs.com).

- Play, seek, volume, mute, loop, picture in picture and fullscreen, driven by the native `<video>` element
- A seek preview with the time under the pointer and an optional caption from `getPreviewText`
- Keyboard shortcuts: space or `k` toggles playback, arrow keys seek, `m` mutes and `f` toggles fullscreen
- Works with `@isbatak/zag-video-transcript`, which follows the video and seeks it

## Installation

```sh
pnpm add @isbatak/zag-video-player
```

## Anatomy

```
root
├─ frame
│  ├─ video
│  ├─ overlay
│  └─ controls
│     ├─ playTrigger
│     ├─ seekGroup
│     │  ├─ seek (seekTrack › seekRange, seekThumb, seekInput)
│     │  └─ preview (previewVideo, previewTime, previewText)
│     ├─ time
│     ├─ skipBackTrigger
│     ├─ skipForwardTrigger
│     ├─ muteTrigger
│     ├─ volume (volumeTrack › volumeRange, volumeThumb, volumeInput)
│     ├─ pipTrigger
│     ├─ loopTrigger
│     └─ fullscreenTrigger
```

Use `videoPlayer.machine` and `videoPlayer.connect` with the Zag adapter for your framework, including
`@isbatak/zag-lit` and `@zag-js/vanilla`.
