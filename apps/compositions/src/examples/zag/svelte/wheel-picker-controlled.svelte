<script lang="ts">
  import { css } from "styled-system/css"
  import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
  import * as wheelPicker from "@isbatak/zag-wheel-picker"
  import { normalizeProps } from "@zag-js/svelte"
  import { untrack } from "svelte"

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

  const id = $props.id()
  const picker = wheelPicker.createWheelPicker()
  let value = $state("react")

  const pickerProps = $derived<wheelPicker.Props>({
    id,
    items,
    value,
    onValueChange: (details) => (value = details.value),
  })

  $effect(() => untrack(() => picker.mount(() => pickerProps)))

  $effect(() => {
    void value
    untrack(() => picker.sync(pickerProps))
  })

  const api = $derived(picker.connect(pickerProps, normalizeProps))
</script>

<div class={classes.root}>
  <div {...api.getRootProps()} class={styles.root}>
    <span {...api.getLabelProps()} class={styles.label}>Framework</span>
    <div {...api.getControlProps()} class={styles.control}>
      <div {...api.getViewportProps()} class={styles.viewport}>
        <div {...api.getItemGroupProps()} class={styles.itemGroup}>
          {#each api.rows as { row, item } (row)}
            <div {...api.getItemProps({ row })} class={styles.item}>{item.label}</div>
          {/each}
        </div>
      </div>
      <div {...api.getHighlightProps()} class={styles.highlight}></div>
    </div>
    <input {...api.getHiddenInputProps()} />
  </div>
  <div class={classes.actions}>
    <button type="button" class={classes.button} onclick={() => (value = "react")}>React</button>
    <button type="button" class={classes.button} onclick={() => (value = "svelte")}>Svelte</button>
  </div>
  <output class={classes.output}>Value: {value}</output>
</div>
