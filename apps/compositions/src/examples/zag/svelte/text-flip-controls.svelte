<script lang="ts">
  import { css } from "styled-system/css"
  import { textFlip as textFlipRecipe } from "styled-system/recipes"
  import * as textFlip from "@isbatak/zag-text-flip"
  import { normalizeProps, useMachine } from "@zag-js/svelte"

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
      cursor: "button",
      _hover: { bg: "bg.muted" },
    }),
  }

  const id = $props.id()
  const service = useMachine(textFlip.machine, {
    id,
  })

  const api = $derived(textFlip.connect(service, normalizeProps))
</script>

<div class={classes.stack}>
  <p class={classes.heading}>
    <span {...api.getRootProps()} class={styles.root}>
      <span {...api.getItemProps({ index: 0 })} class={styles.item}>Hello</span>
      <span {...api.getItemProps({ index: 1 })} class={styles.item}>Bonjour</span>
      <span {...api.getItemProps({ index: 2 })} class={styles.item}>Hola</span>
      <span {...api.getItemProps({ index: 3 })} class={styles.item}>Ciao</span>
      <span {...api.getItemProps({ index: 4 })} class={styles.item}>Hallo</span>
    </span>
  </p>
  <div class={classes.actions}>
    <button type="button" class={classes.button} onclick={() => api.prev()}>Previous</button>
    <button type="button" class={classes.button} onclick={() => (api.playing ? api.pause() : api.play())}>
      {api.playing ? "Pause" : "Play"}
    </button>
    <button type="button" class={classes.button} onclick={() => api.next()}>Next</button>
  </div>
</div>
