<script lang="ts">
  import { css } from "styled-system/css"
  import { textFlip as textFlipRecipe } from "styled-system/recipes"
  import * as textFlip from "@isbatak/zag-text-flip"
  import { normalizeProps, useMachine } from "@zag-js/svelte"

  const styles = textFlipRecipe()

  const classes = {
    heading: css({ textStyle: "3xl", fontWeight: "semibold", letterSpacing: "tight" }),
  }

  const id = $props.id()
  const service = useMachine(textFlip.machine, {
    id,
  })

  const api = $derived(textFlip.connect(service, normalizeProps))
</script>

<p class={classes.heading}>
  Build for
  <span {...api.getRootProps()} class={styles.root}>
    <span {...api.getItemProps({ index: 0 })} class={styles.item}>React</span>
    <span {...api.getItemProps({ index: 1 })} class={styles.item}>Vue</span>
    <span {...api.getItemProps({ index: 2 })} class={styles.item}>Svelte</span>
    <span {...api.getItemProps({ index: 3 })} class={styles.item}>Solid</span>
  </span>
</p>
