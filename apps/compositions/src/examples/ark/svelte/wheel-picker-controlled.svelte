<script lang="ts">
  import { css } from "styled-system/css"
  import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
  import { WheelPicker } from "@isbatak/ark-wheel-picker/svelte"

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

  let value = $state("react")
</script>

<div class={classes.root}>
  <WheelPicker.Root {items} bind:value class={styles.root}>
    <WheelPicker.Label class={styles.label}>Framework</WheelPicker.Label>
    <WheelPicker.Control class={styles.control}>
      <WheelPicker.Viewport class={styles.viewport}>
        <WheelPicker.ItemGroup class={styles.itemGroup}>
          <WheelPicker.Context>
            {#snippet render(api)}
              {#each api().rows as { row, item } (row)}
                <WheelPicker.Item {row} class={styles.item}>{item.label}</WheelPicker.Item>
              {/each}
            {/snippet}
          </WheelPicker.Context>
        </WheelPicker.ItemGroup>
      </WheelPicker.Viewport>
      <WheelPicker.Highlight class={styles.highlight}></WheelPicker.Highlight>
    </WheelPicker.Control>
    <WheelPicker.HiddenInput />
  </WheelPicker.Root>
  <div class={classes.actions}>
    <button type="button" class={classes.button} onclick={() => (value = "react")}>React</button>
    <button type="button" class={classes.button} onclick={() => (value = "svelte")}>Svelte</button>
  </div>
  <output class={classes.output}>Value: {value}</output>
</div>
