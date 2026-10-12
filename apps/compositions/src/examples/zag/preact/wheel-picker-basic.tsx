import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps } from "@zag-js/preact"
import { useEffect, useId, useLayoutEffect, useRef, useState } from "preact/hooks"

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular", disabled: true },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
]

const styles = wheelPickerRecipe()

export function WheelPickerBasic() {
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
  )
}
