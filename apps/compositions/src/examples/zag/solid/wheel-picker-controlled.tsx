import { css } from "styled-system/css"
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps } from "@zag-js/solid"
import { createEffect, createMemo, createSignal, createUniqueId, Index, on, onCleanup, onMount } from "solid-js"

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
  const id = createUniqueId()
  const picker = wheelPicker.createWheelPicker()
  const [value, setValue] = createSignal("react")

  const props = createMemo<wheelPicker.Props>(() => ({
    id,
    items,
    value: value(),
    onValueChange: (details) => setValue(details.value),
  }))

  onMount(() => onCleanup(picker.mount(props)))
  createEffect(on(value, () => picker.sync(props())))

  const api = createMemo(() => picker.connect(props(), normalizeProps))

  return (
    <div class={classes.root}>
      <div {...api().getRootProps()} class={styles.root}>
        <span {...api().getLabelProps()} class={styles.label}>
          Framework
        </span>
        <div {...api().getControlProps()} class={styles.control}>
          <div {...api().getViewportProps()} class={styles.viewport}>
            <div {...api().getItemGroupProps()} class={styles.itemGroup}>
              <Index each={api().rows}>
                {(entry) => (
                  <div {...api().getItemProps({ row: entry().row })} class={styles.item}>
                    {entry().item.label}
                  </div>
                )}
              </Index>
            </div>
          </div>
          <div {...api().getHighlightProps()} class={styles.highlight} />
        </div>
        <input {...api().getHiddenInputProps()} />
      </div>
      <div class={classes.actions}>
        <button type="button" class={classes.button} onClick={() => setValue("react")}>
          React
        </button>
        <button type="button" class={classes.button} onClick={() => setValue("svelte")}>
          Svelte
        </button>
      </div>
      <output class={classes.output}>Value: {value()}</output>
    </div>
  )
}
