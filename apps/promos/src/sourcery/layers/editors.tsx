import { ease, tween } from "../lib/motion"
import { Eyebrow, Rise } from "../stage/caption"
import { useStage } from "../stage/context"
import { sourcery, T } from "../theme"
import { CaptionSlot, captionPlacement } from "./captions"

export function EditorsSegment() {
  const { frame, tall } = useStage()
  const size = captionPlacement(tall).size
  const roll = T.roll.reduce((total, at) => total + tween(frame, at, 5, ease.snap), 0)

  return (
    <CaptionSlot>
      <div style={{ opacity: 1 - tween(frame, T.pandaCard - 8, 6) }}>
        <Eyebrow size={size} progress={tween(frame, T.editors - 2, 14)}>
          Your editor
        </Eyebrow>
        <h2
          style={{
            fontSize: size,
            lineHeight: 1.05,
            fontWeight: 500,
            letterSpacing: "-0.05em",
            display: "flex",
            gap: "0.25em",
          }}
        >
          <Rise progress={tween(frame, T.editors, 14)}>Opens in</Rise>
          <span style={{ display: "inline-block", height: "1.1em", overflow: "hidden", color: sourcery.violetLabel }}>
            <span style={{ display: "flex", flexDirection: "column", transform: `translateY(${-roll * 1.1}em)` }}>
              <span style={{ height: "1.1em" }} />
              <span style={{ height: "1.1em" }}>VS Code</span>
              <span style={{ height: "1.1em" }}>Cursor</span>
              <span style={{ height: "1.1em" }}>Windsurf</span>
              <span style={{ height: "1.1em" }}>Zed</span>
              <span style={{ height: "1.1em" }}>WebStorm</span>
              <span style={{ height: "1.1em" }}>your editor.</span>
            </span>
          </span>
        </h2>
      </div>
    </CaptionSlot>
  )
}
