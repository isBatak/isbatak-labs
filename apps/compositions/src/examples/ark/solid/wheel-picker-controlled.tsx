import { css } from "styled-system/css"
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { createWheelPickerCollection, WheelPicker } from "@isbatak/ark-wheel-picker/solid"
import { createSignal, Index } from "solid-js"

const collection = createWheelPickerCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
  ],
})

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
  const [value, setValue] = createSignal<string | null>("react")

  return (
    <div class={classes.root}>
      <WheelPicker.Root
        collection={collection}
        value={value()}
        onValueChange={(details) => setValue(details.value)}
        class={styles.root}
      >
        <WheelPicker.Label class={styles.label}>Framework</WheelPicker.Label>
        <WheelPicker.Control class={styles.control}>
          <WheelPicker.Viewport class={styles.viewport}>
            <WheelPicker.ItemGroup class={styles.itemGroup}>
              <WheelPicker.Context>
                {(api) => (
                  <Index each={api().items}>
                    {(entry) => (
                      <WheelPicker.Item item={entry().item} index={entry().index} class={styles.item}>
                        {entry().item.label}
                      </WheelPicker.Item>
                    )}
                  </Index>
                )}
              </WheelPicker.Context>
            </WheelPicker.ItemGroup>
            <WheelPicker.Highlight class={styles.highlight}>
              <WheelPicker.HighlightItemGroup class={styles.highlightItemGroup}>
                <WheelPicker.Context>
                  {(api) => (
                    <Index each={api().highlightItems}>
                      {(entry) => (
                        <WheelPicker.HighlightItem
                          item={entry().item}
                          index={entry().index}
                          class={styles.highlightItem}
                        >
                          {entry().item.label}
                        </WheelPicker.HighlightItem>
                      )}
                    </Index>
                  )}
                </WheelPicker.Context>
              </WheelPicker.HighlightItemGroup>
            </WheelPicker.Highlight>
          </WheelPicker.Viewport>
        </WheelPicker.Control>
      </WheelPicker.Root>
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
