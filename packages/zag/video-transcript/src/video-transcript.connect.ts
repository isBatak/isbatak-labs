import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { parts } from "./video-transcript.anatomy"
import * as dom from "./video-transcript.dom"
import type { VideoTranscriptApi, VideoTranscriptService } from "./video-transcript.types"
import { formatTime } from "./video-transcript.utils"

export function connect<T extends PropTypes>(
  service: VideoTranscriptService,
  normalize: NormalizeProps<T>,
): VideoTranscriptApi<T> {
  const { computed, context, prop, scope, send } = service
  const following = context.get("following")
  const activeCue = computed("activeCue")
  const cues = prop("cues")

  return {
    currentTime: context.get("currentTime"),
    following,
    activeCue,

    setTime(time) {
      send({ type: "TIME.SET", time })
    },
    resumeFollow() {
      send({ type: "FOLLOW.RESUME" })
    },
    seekToCue(index) {
      send({ type: "CUE.SELECT", index })
    },
    isCueActive(props) {
      return props.index === activeCue
    },

    getRootProps() {
      const detach = () => {
        if (following) send({ type: "FOLLOW.PAUSE" })
      }
      return normalize.element({
        ...parts.root.attrs(scope.id),
        id: dom.getRootId(scope),
        role: "list",
        "aria-label": "Transcript",
        "data-following": following ? "" : undefined,
        onWheel: detach,
        onTouchStart: detach,
      })
    },

    getCueProps(props) {
      const active = props.index === activeCue
      const cue = cues[props.index]
      const select = () => send({ type: "CUE.SELECT", index: props.index })
      return normalize.element({
        ...parts.cue.attrs(scope.id),
        id: dom.getCueId(scope, props.index),
        role: "listitem",
        tabIndex: 0,
        "data-index": props.index,
        "data-start": cue?.start,
        "data-time": cue ? formatTime(cue.start) : undefined,
        "data-active": active ? "" : undefined,
        "aria-current": active ? "true" : undefined,
        onClick: select,
        onKeyDown(event) {
          if (event.key !== "Enter" && event.key !== " ") return
          event.preventDefault()
          event.stopPropagation()
          select()
        },
      })
    },

    getFollowTriggerProps() {
      return normalize.element({
        ...parts.followTrigger.attrs(scope.id),
        type: "button",
        hidden: following,
        onClick() {
          send({ type: "FOLLOW.RESUME" })
        },
      })
    },
  }
}
