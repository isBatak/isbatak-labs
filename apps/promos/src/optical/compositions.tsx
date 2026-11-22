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
              boxGuides: 96,
              iconBox: 60,
              emptyNote: 150,
              inkGuides: 192,
              reach: 252,
              click: 288,
              slide: 36,
              release: 360,
              guidesOut: 474,
            },
            compare: { equal: 12, optical: 24 },
          },
        }}
      />
    </Folder>
  )
}
