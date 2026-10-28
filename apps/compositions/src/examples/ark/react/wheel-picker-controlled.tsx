"use client"

import { css } from "styled-system/css"
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { WheelPicker } from "@isbatak/ark-wheel-picker/react"
import { useState } from "react"

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
    cursor: "button",
    _hover: { bg: "bg.muted" },
  }),
  output: css({ color: "fg.muted", textStyle: "sm", textAlign: "center" }),
}

export function WheelPickerControlled() {
  const [value, setValue] = useState("react")

  return (
    <div className={classes.root}>
      <WheelPicker.Root
        items={items}
        value={value}
        onValueChange={(details) => setValue(details.value)}
        className={styles.root}
      >
        <WheelPicker.Label className={styles.label}>Framework</WheelPicker.Label>
        <WheelPicker.Control className={styles.control}>
          <WheelPicker.Viewport className={styles.viewport}>
            <WheelPicker.ItemGroup className={styles.itemGroup}>
              <WheelPicker.Context>
                {(api) =>
                  api.rows.map(({ row, item }) => (
                    <WheelPicker.Item key={row} row={row} className={styles.item}>
                      {item.label}
                    </WheelPicker.Item>
                  ))
                }
              </WheelPicker.Context>
            </WheelPicker.ItemGroup>
          </WheelPicker.Viewport>
          <WheelPicker.Highlight className={styles.highlight} />
        </WheelPicker.Control>
        <WheelPicker.HiddenInput />
      </WheelPicker.Root>
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
