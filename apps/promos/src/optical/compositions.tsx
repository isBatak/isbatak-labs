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
              boxGuides: 72,
              iconBox: 42,
              emptyNote: 114,
              inkGuides: 150,
              change: 300,
              slide: 36,
              guidesOut: 486,
            },
            compare: { equal: 12, optical: 24, callouts: 132 },
            endIcon: { boxGuides: 24, iconBox: 60, emptyNote: 96, inkGuides: 132 },
            stacked: { labelGuide: 24, iconBox: 60, gap: 84, guides: 108, change: 240, slide: 36 },
            kbd: { iconBox: 36, emptyNote: 60, inkGuides: 84, change: 192, slide: 36 },
          },
        }}
      />
    </Folder>
  )
}
