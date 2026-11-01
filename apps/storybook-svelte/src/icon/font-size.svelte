<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { iconClasses as classes } from "@isbatak/storybook-shared"
</script>

<div class={classes.stack}>
  <span class={classes.small}>Small text <Icon name="arrow-right" /></span>
  <span>Body text <Icon name="arrow-right" /></span>
  <span class={classes.large}>Large text <Icon name="arrow-right" /></span>
</div>
