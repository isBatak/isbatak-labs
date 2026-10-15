"use client"

import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps } from "@zag-js/react"
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react"

const items = Array.from({ length: 60 }, (_, minute) => {
  const label = String(minute).padStart(2, "0")
  return { label, value: label }
})

const styles = wheelPickerRecipe()

export function WheelPickerLoop() {
  const id = useId()
  const [value, setValue] = useState("30")
  const [picker] = useState(() => wheelPicker.createWheelPicker())

  const props: wheelPicker.Props = {
    id,
    items,
    value,
    loop: true,
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
        Minute
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
