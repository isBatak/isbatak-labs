# @isbatak/zag-video-transcript

Core logic for a transcript that follows a video, implemented as a state machine and built on [Zag](https://zagjs.com).

- Highlights the cue at the playback position and scrolls it into view
- Stops following when the reader scrolls the transcript, and resumes on request
- Picking a cue calls `onSeek`, so the owner of the video decides how to seek

The machine does not own a video. Tell it the playback position with `api.setTime(seconds)` and handle `onSeek`. Link it
to `@isbatak/zag-video-player` in your framework layer.

## Installation

```sh
pnpm add @isbatak/zag-video-transcript
```

## Anatomy

```
root
├─ cue
└─ followTrigger
```

Pass the transcript as `cues` (`{ start, end, text }[]`, sorted by start).
