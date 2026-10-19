# @isbatak/zag-video-transcript

## 0.1.0

### Minor Changes

- f8ed651: Add a video transcript machine and its Panda slot recipe. It highlights the cue at the playback position and
  scrolls it into view, stops following when the reader scrolls and resumes from a follow trigger, and calls `onSeek`
  when a cue is picked. Link it to `@isbatak/zag-video-player` in your framework layer.
