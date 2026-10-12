import { css } from "styled-system/css"
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps } from "@zag-js/preact"
import { useEffect, useId, useLayoutEffect, useRef, useState } from "preact/hooks"

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
]

const styles = wheelPickerRecipe()

const classes = {
  root: css({ display: "grid", gap: "4" }),
  actions: css({ display: "flex", justifyContent: "center", gap: "2" }),
  button: css({
    px: "3",
    py: "1.5",
    borderWidth: "1px",
    borderRadius: "l2",
    textStyle: "sm",
    cursor: "pointer",
    _hover: { bg: "bg.muted" },
  }),
  output: css({ color: "fg.muted", textStyle: "sm", textAlign: "center" }),
}

export function WheelPickerControlled() {
  const id = useId()
  const [value, setValue] = useState("react")
  const [picker] = useState(() => wheelPicker.createWheelPicker())

  const props: wheelPicker.Props = {
    id,
    items,
    value,
    onValueChange: (details) => setValue(details.value),
  }
  const latestProps = useRef(props)
  latestProps.current = props

  useEffect(() => picker.mount(() => latestProps.current), [picker])
  useLayoutEffect(() => picker.sync(latestProps.current), [picker, value])

  const api = picker.connect(props, normalizeProps)

  return (
    <div className={classes.root}>
      <div {...api.getRootProps()} className={styles.root}>
        <span {...api.getLabelProps()} className={styles.label}>
          Framework
        </span>
        <div {...api.getControlProps()} className={styles.control}>
          <div {...api.getViewportProps()} className={styles.viewport}>
            <div {...api.getItemGroupProps()} className={styles.itemGroup}>
              {api.rows.map(({ row, item }) => (
                <div key={row} {...api.getItemProps({ row })} className={styles.item}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <div {...api.getHighlightProps()} className={styles.highlight} />
        </div>
        <input {...api.getHiddenInputProps()} />
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes.button} onClick={() => setValue("react")}>
          React
        </button>
        <button type="button" className={classes.button} onClick={() => setValue("svelte")}>
          Svelte
        </button>
      </div>
      <output className={classes.output}>Value: {value}</output>
    </div>
  )
}
