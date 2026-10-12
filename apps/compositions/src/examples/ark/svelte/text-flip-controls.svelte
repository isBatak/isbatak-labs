<script lang="ts">
  import { css } from "styled-system/css"
  import { textFlip as textFlipRecipe } from "styled-system/recipes"
  import { TextFlip, useTextFlip } from "@isbatak/ark-text-flip/svelte"

  const styles = textFlipRecipe()

  const classes = {
    stack: css({ display: "grid", justifyItems: "center", gap: "6" }),
    heading: css({ textStyle: "3xl", fontWeight: "semibold", letterSpacing: "tight" }),
    actions: css({ display: "flex", gap: "2" }),
    button: css({
      px: "3",
      py: "1.5",
      borderWidth: "1px",
      borderRadius: "l2",
      textStyle: "sm",
      cursor: "pointer",
      _hover: { bg: "bg.muted" },
    }),
  }

  const id = $props.id()
  const textFlip = useTextFlip({ id })
</script>

<div class={classes.stack}>
  <p class={classes.heading}>
    <TextFlip.RootProvider value={textFlip} class={styles.root}>
      <TextFlip.Item index={0} class={styles.item}>Hello</TextFlip.Item>
      <TextFlip.Item index={1} class={styles.item}>Bonjour</TextFlip.Item>
      <TextFlip.Item index={2} class={styles.item}>Hola</TextFlip.Item>
      <TextFlip.Item index={3} class={styles.item}>Ciao</TextFlip.Item>
      <TextFlip.Item index={4} class={styles.item}>Hallo</TextFlip.Item>
    </TextFlip.RootProvider>
  </p>
  <div class={classes.actions}>
    <button type="button" class={classes.button} onclick={() => textFlip().prev()}>Previous</button>
    <button
      type="button"
      class={classes.button}
      onclick={() => (textFlip().playing ? textFlip().pause() : textFlip().play())}
    >
      {textFlip().playing ? "Pause" : "Play"}
    </button>
    <button type="button" class={classes.button} onclick={() => textFlip().next()}>Next</button>
  </div>
</div>
