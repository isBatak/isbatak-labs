import { definePattern } from "@pandacss/dev"

const absoluteCenter = definePattern({
  jsxName: "AbsoluteCenter",
  properties: {
    axis: { type: "enum", value: ["horizontal", "vertical", "both"] },
  },
  defaultValues: {
    axis: "both",
  },
  transform(props) {
    const { axis, ...rest } = props
    const styles = {
      horizontal: {
        insetInlineStart: "50%",
        translate: "-50%",
        _rtl: { translate: "50%" },
      },
      vertical: {
        top: "50%",
        translate: "0 -50%",
      },
      both: {
        insetInlineStart: "50%",
        top: "50%",
        translate: "-50% -50%",
        _rtl: { translate: "50% -50%" },
      },
    }
    return {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...styles[axis as keyof typeof styles],
      ...rest,
    }
  },
})

export const patterns = {
  absoluteCenter,
}
