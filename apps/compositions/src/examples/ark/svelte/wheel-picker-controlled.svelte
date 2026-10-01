<script lang="ts">
  import { css } from "styled-system/css"
  import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
  import { createWheelPickerCollection, WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

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

  let value = $state<string | null>("react")
</script>

<div class={classes.root}>
  <WheelPicker.Root {collection} bind:value class={styles.root}>
    <WheelPicker.Label class={styles.label}>Framework</WheelPicker.Label>
    <WheelPicker.Control class={styles.control}>
      <WheelPicker.Viewport class={styles.viewport}>
        <WheelPicker.ItemGroup class={styles.itemGroup}>
          <WheelPicker.Context>
            {#snippet render(api)}
              {#each api().items as { item, index, key } (key)}
                <WheelPicker.Item {item} {index} class={styles.item}>{item.label}</WheelPicker.Item>
              {/each}
            {/snippet}
          </WheelPicker.Context>
        </WheelPicker.ItemGroup>
        <WheelPicker.Highlight class={styles.highlight}>
          <WheelPicker.HighlightItemGroup class={styles.highlightItemGroup}>
            <WheelPicker.Context>
              {#snippet render(api)}
                {#each api().highlightItems as { item, index, key } (key)}
                  <WheelPicker.HighlightItem {item} {index} class={styles.highlightItem}>{item.label}</WheelPicker.HighlightItem>
                {/each}
              {/snippet}
            </WheelPicker.Context>
          </WheelPicker.HighlightItemGroup>
        </WheelPicker.Highlight>
      </WheelPicker.Viewport>
    </WheelPicker.Control>
  </WheelPicker.Root>
  <div class={classes.actions}>
    <button type="button" class={classes.button} onclick={() => (value = "react")}>React</button>
    <button type="button" class={classes.button} onclick={() => (value = "svelte")}>Svelte</button>
  </div>
  <output class={classes.output}>Value: {value}</output>
</div>
