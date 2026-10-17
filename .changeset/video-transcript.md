---
"@isbatak/zag-video-transcript": minor
"@isbatak/panda-video-transcript": minor
---

Add a video transcript machine and its Panda slot recipe. It highlights the cue at the playback position and scrolls it
into view, stops following when the reader scrolls and resumes from a follow trigger, and calls `onSeek` when a cue is
picked. Link it to `@isbatak/zag-video-player` in your framework layer.
