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

const flex = definePattern({
  jsxName: "Flex",
  properties: {
    align: { type: "property", value: "alignItems" },
    justify: { type: "property", value: "justifyContent" },
    direction: { type: "property", value: "flexDirection" },
    wrap: { type: "property", value: "flexWrap" },
    basis: { type: "property", value: "flexBasis" },
    grow: { type: "property", value: "flexGrow" },
    shrink: { type: "property", value: "flexShrink" },
    inline: { type: "boolean" },
  },
  transform(props) {
    const { direction, align, justify, wrap, basis, grow, shrink, inline, ...rest } = props
    return {
      display: inline ? "inline-flex" : "flex",
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap,
      flexBasis: basis,
      flexGrow: grow,
      flexShrink: shrink,
      ...rest,
    }
  },
})

const stack = definePattern({
  jsxName: "Stack",
  properties: {
    align: { type: "property", value: "alignItems" },
    justify: { type: "property", value: "justifyContent" },
    direction: { type: "property", value: "flexDirection" },
    wrap: { type: "property", value: "flexWrap" },
    gap: { type: "property", value: "gap" },
    separator: { type: "boolean" },
  },
  defaultValues: {
    direction: "column",
    gap: "2",
  },
  transform(props, { map }) {
    const { align, justify, direction, wrap, gap, separator, ...rest } = props
    return {
      display: "flex",
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap,
      gap,
      ...(separator && {
        gap: "0",
        "& > * + *": {
          borderColor: "border",
          borderStyle: "solid",
          borderWidth: "0",
          borderInlineStartWidth: map(direction, (value: string) => (value.startsWith("row") ? "1px" : "0")),
          borderBlockStartWidth: map(direction, (value: string) => (value.startsWith("row") ? "0" : "1px")),
          paddingInlineStart: map(direction, (value: string) => (value.startsWith("row") ? gap : "0")),
          marginInlineStart: map(direction, (value: string) => (value.startsWith("row") ? gap : "0")),
          paddingBlockStart: map(direction, (value: string) => (value.startsWith("row") ? "0" : gap)),
          marginBlockStart: map(direction, (value: string) => (value.startsWith("row") ? "0" : gap)),
        },
      }),
      ...rest,
    }
  },
})

const hstack = definePattern({
  jsxName: "HStack",
  properties: {
    justify: { type: "property", value: "justifyContent" },
    gap: { type: "property", value: "gap" },
    separator: { type: "boolean" },
  },
  defaultValues: {
    gap: "2",
  },
  transform(props) {
    const { justify, gap, separator, ...rest } = props
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: justify,
      gap,
      flexDirection: "row",
      ...(separator && {
        gap: "0",
        "& > * + *": {
          borderColor: "border",
          borderStyle: "solid",
          borderWidth: "0",
          borderInlineStartWidth: "1px",
          paddingInlineStart: gap,
          marginInlineStart: gap,
        },
      }),
      ...rest,
    }
  },
})

const vstack = definePattern({
  jsxName: "VStack",
  properties: {
    justify: { type: "property", value: "justifyContent" },
    gap: { type: "property", value: "gap" },
    separator: { type: "boolean" },
  },
  defaultValues: {
    gap: "2",
  },
  transform(props) {
    const { justify, gap, separator, ...rest } = props
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: justify,
      gap,
      flexDirection: "column",
      ...(separator && {
        gap: "0",
        "& > * + *": {
          borderColor: "border",
          borderStyle: "solid",
          borderWidth: "0",
          borderBlockStartWidth: "1px",
          paddingBlockStart: gap,
          marginBlockStart: gap,
        },
      }),
      ...rest,
    }
  },
})

const wrap = definePattern({
  jsxName: "Wrap",
  properties: {
    gap: { type: "property", value: "gap" },
    rowGap: { type: "property", value: "gap" },
    columnGap: { type: "property", value: "gap" },
    align: { type: "property", value: "alignItems" },
    justify: { type: "property", value: "justifyContent" },
    direction: { type: "property", value: "flexDirection" },
  },
  defaultValues(props) {
    return { gap: props.columnGap || props.rowGap ? undefined : "2" }
  },
  transform(props) {
    const { columnGap, rowGap, gap, align, justify, direction, ...rest } = props
    return {
      display: "flex",
      flexWrap: "wrap",
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
      gap,
      columnGap,
      rowGap,
      ...rest,
    }
  },
})

const grid = definePattern({
  jsxName: "Grid",
  properties: {
    gap: { type: "property", value: "gap" },
    columnGap: { type: "property", value: "gap" },
    rowGap: { type: "property", value: "gap" },
    columns: { type: "number" },
    minChildWidth: { type: "token", value: "sizes", property: "width" },
    templateColumns: { type: "property", value: "gridTemplateColumns" },
    templateRows: { type: "property", value: "gridTemplateRows" },
    templateAreas: { type: "property", value: "gridTemplateAreas" },
    autoFlow: { type: "property", value: "gridAutoFlow" },
    autoRows: { type: "property", value: "gridAutoRows" },
    autoColumns: { type: "property", value: "gridAutoColumns" },
    column: { type: "property", value: "gridColumn" },
    row: { type: "property", value: "gridRow" },
    inline: { type: "boolean" },
  },
  transform(props, { map, isCssUnit }) {
    const {
      columnGap,
      rowGap,
      gap,
      columns,
      minChildWidth,
      templateColumns,
      templateRows,
      templateAreas,
      autoFlow,
      autoRows,
      autoColumns,
      column,
      row,
      inline,
      ...rest
    } = props
    const getValue = (value: string) => (isCssUnit(value) ? value : `token(sizes.${value}, ${value})`)
    const autoTemplateColumns = () => {
      if (columns !== undefined) return map(columns, (value: number) => `repeat(${value}, minmax(0, 1fr))`)
      if (minChildWidth !== undefined) {
        return map(minChildWidth, (value: string) => `repeat(auto-fit, minmax(${getValue(value)}, 1fr))`)
      }
      return undefined
    }
    return {
      display: inline ? "inline-grid" : "grid",
      gridTemplateColumns: templateColumns ?? autoTemplateColumns(),
      gridTemplateRows: templateRows,
      gridTemplateAreas: templateAreas,
      gridAutoFlow: autoFlow,
      gridAutoRows: autoRows,
      gridAutoColumns: autoColumns,
      gridColumn: column,
      gridRow: row,
      gap,
      columnGap,
      rowGap,
      ...rest,
    }
  },
})

const gridItem = definePattern({
  jsxName: "GridItem",
  properties: {
    area: { type: "property", value: "gridArea" },
    colSpan: { type: "number" },
    rowSpan: { type: "number" },
    colStart: { type: "number" },
    rowStart: { type: "number" },
    colEnd: { type: "number" },
    rowEnd: { type: "number" },
  },
  transform(props, { map }) {
    const { area, colSpan, rowSpan, colStart, rowStart, colEnd, rowEnd, ...rest } = props
    const span = (value: number | "auto") => (value === "auto" ? value : `span ${value}`)
    return {
      gridArea: area,
      gridColumn: colSpan !== undefined ? map(colSpan, span) : undefined,
      gridRow: rowSpan !== undefined ? map(rowSpan, span) : undefined,
      gridColumnStart: colStart,
      gridColumnEnd: colEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd,
      ...rest,
    }
  },
})

const bleed = definePattern({
  jsxName: "Bleed",
  properties: {
    inline: { type: "property", value: "marginInline" },
    block: { type: "property", value: "marginBlock" },
    inlineStart: { type: "property", value: "marginInlineStart" },
    inlineEnd: { type: "property", value: "marginInlineEnd" },
    blockStart: { type: "property", value: "marginBlockStart" },
    blockEnd: { type: "property", value: "marginBlockEnd" },
  },
  transform(props, { map, isCssUnit, isCssVar }) {
    const { inline, block, inlineStart, inlineEnd, blockStart, blockEnd, ...rest } = props
    const spacing = (value: string) =>
      isCssUnit(value) || isCssVar(value) ? value : `token(spacing.${value}, ${value})`
    return {
      "--bleed-inline-start": map(inlineStart ?? inline, spacing),
      "--bleed-inline-end": map(inlineEnd ?? inline, spacing),
      "--bleed-block-start": map(blockStart ?? block, spacing),
      "--bleed-block-end": map(blockEnd ?? block, spacing),
      marginInlineStart: "calc(var(--bleed-inline-start, 0px) * -1)",
      marginInlineEnd: "calc(var(--bleed-inline-end, 0px) * -1)",
      marginBlockStart: "calc(var(--bleed-block-start, 0px) * -1)",
      marginBlockEnd: "calc(var(--bleed-block-end, 0px) * -1)",
      ...rest,
    }
  },
})

const sticky = definePattern({
  jsxName: "Sticky",
  transform(props) {
    return {
      position: "sticky",
      top: "0",
      ...props,
    }
  },
})

const floatGap = definePattern({
  jsxName: "FloatGap",
  jsxElement: "span",
  properties: {
    placement: {
      type: "enum",
      value: [
        "bottom-end",
        "bottom-start",
        "top-end",
        "top-start",
        "bottom-center",
        "top-center",
        "middle-center",
        "middle-end",
        "middle-start",
      ],
    },
    offset: { type: "token", value: "spacing" },
    offsetX: { type: "token", value: "spacing" },
    offsetY: { type: "token", value: "spacing" },
    cutoutSize: { type: "token", value: "spacing" },
    cutoutWidth: { type: "token", value: "spacing" },
    cutoutW: { type: "token", value: "spacing" },
    cutoutHeight: { type: "token", value: "spacing" },
    cutoutH: { type: "token", value: "spacing" },
    cutoutRadius: { type: "token", value: "radii" },
    cutoutGap: { type: "token", value: "spacing" },
  },
  defaultValues: {
    placement: "top-end",
    offset: "0",
    cutoutSize: "3",
    cutoutRadius: "sm",
    cutoutGap: "0.5",
  },
  transform(props, { map, isCssUnit, isCssVar }) {
    const {
      placement,
      offset,
      offsetX,
      offsetY,
      cutoutSize,
      cutoutWidth,
      cutoutW,
      cutoutHeight,
      cutoutH,
      cutoutRadius,
      cutoutGap,
      ...rest
    } = props

    const spacing = (value: string | number) =>
      value === 0 || value === "0"
        ? "0px"
        : isCssUnit(value) || isCssVar(value)
          ? value
          : `token(spacing.${value}, ${value})`
    const radii = (value: string) => (isCssUnit(value) || isCssVar(value) ? value : `token(radii.${value}, ${value})`)

    const centerX: Record<string, string> = {
      start: "var(--float-gap-offset-x)",
      center: "50%",
      end: "calc(100% - var(--float-gap-offset-x))",
    }
    const centerY: Record<string, string> = {
      top: "var(--float-gap-offset-y)",
      middle: "50%",
      bottom: "calc(100% - var(--float-gap-offset-y))",
    }

    const halfWidth = "(var(--float-gap-w) / 2 + var(--float-gap))"
    const halfHeight = "(var(--float-gap-h) / 2 + var(--float-gap))"
    const radius = `min(var(--float-gap-radius) + var(--float-gap), ${halfWidth}, ${halfHeight})`
    const left = `calc(var(--float-gap-center-x) - ${halfWidth})`
    const right = `calc(var(--float-gap-center-x) + ${halfWidth})`
    const top = `calc(var(--float-gap-center-y) - ${halfHeight})`
    const bottom = `calc(var(--float-gap-center-y) + ${halfHeight})`

    return {
      display: "inline-flex",
      clipPath: [
        "shape(evenodd from 0 0",
        "hline to 100%",
        "vline to 100%",
        "hline to 0",
        "close",
        `move to calc(${left} + ${radius}) ${top}`,
        `hline to calc(${right} - ${radius})`,
        `arc to ${right} calc(${top} + ${radius}) of ${radius} cw`,
        `vline to calc(${bottom} - ${radius})`,
        `arc to calc(${right} - ${radius}) ${bottom} of ${radius} cw`,
        `hline to calc(${left} + ${radius})`,
        `arc to ${left} calc(${bottom} - ${radius}) of ${radius} cw`,
        `vline to calc(${top} + ${radius})`,
        `arc to calc(${left} + ${radius}) ${top} of ${radius} cw`,
        "close)",
      ].join(", "),
      "--float-gap-center-x": map(placement, (value: string) => centerX[value.split("-")[1] ?? ""]),
      "--float-gap-center-y": map(placement, (value: string) => centerY[value.split("-")[0] ?? ""]),
      "--float-gap-w": map(cutoutWidth ?? cutoutW ?? cutoutSize, spacing),
      "--float-gap-h": map(cutoutHeight ?? cutoutH ?? cutoutSize, spacing),
      "--float-gap": map(cutoutGap, spacing),
      "--float-gap-radius": map(cutoutRadius, radii),
      "--float-gap-offset-x": map(offsetX ?? offset, spacing),
      "--float-gap-offset-y": map(offsetY ?? offset, spacing),
      ...rest,
    }
  },
})

export const patterns = {
  absoluteCenter,
  bleed,
  flex,
  floatGap,
  grid,
  gridItem,
  hstack,
  stack,
  sticky,
  vstack,
  wrap,
}
