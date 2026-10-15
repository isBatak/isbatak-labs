# @isbatak/zag-video-player

Core logic for a video player with a transcript that follows the video, implemented as a state machine and built on
[Zag](https://zagjs.com).

- Play, seek, volume, mute and fullscreen, driven by the native `<video>` element
- Highlights the transcript cue at the playback position and scrolls it into view
- Stops following when the reader scrolls the transcript, and resumes on request
- Clicking a cue seeks to it
- Keyboard shortcuts: space or `k` toggles playback, arrow keys seek, `m` mutes and `f` toggles fullscreen

## Installation

```sh
pnpm add @isbatak/zag-video-player
```

## Anatomy

```
root
├─ video
├─ controls
│  ├─ playTrigger
│  ├─ seek
│  ├─ time
│  ├─ muteTrigger
│  ├─ volume
│  └─ fullscreenTrigger
└─ transcript
   ├─ cue
   └─ followTrigger
```

Pass the transcript as `cues` (`{ start, end, text }[]`, sorted by start). Use `videoPlayer.machine` and
`videoPlayer.connect` with the Zag adapter for your framework, including `@isbatak/zag-lit` and `@zag-js/vanilla`.
