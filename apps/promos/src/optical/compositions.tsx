import { Composition, Folder } from "remotion"

import { Promo } from "./Promo"
import { promoSchema, SIZE, VIDEO } from "./theme"

export function OpticalCompositions() {
  return (
    <Folder name="optical">
      <Composition
        id="OpticalPromo"
        component={Promo}
        schema={promoSchema}
        calculateMetadata={({ props }) => SIZE[props.shape]}
        durationInFrames={VIDEO.duration}
        fps={VIDEO.fps}
        width={SIZE.square.width}
        height={SIZE.square.height}
        defaultProps={{
          shape: "square",
          timing: {
            measure: {
              boxGuides: 48,
              iconBox: 30,
              emptyNote: 84,
              inkGuides: 114,
              change: 210,
              slide: 36,
              guidesOut: 318,
            },
            compare: { equal: 6, optical: 14, callouts: 48 },
            endIcon: { boxGuides: 18, iconBox: 42, emptyNote: 66, inkGuides: 96 },
            stacked: { labelGuide: 18, iconBox: 48, gap: 66, guides: 84, change: 180, slide: 36 },
            kbd: { iconBox: 30, emptyNote: 48, inkGuides: 66, change: 150, slide: 36, marksOut: 234 },
          },
        }}
      />
    </Folder>
  )
}
