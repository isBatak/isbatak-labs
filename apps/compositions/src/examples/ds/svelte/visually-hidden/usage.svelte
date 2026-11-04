<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { VisuallyHidden } from "@isbatak/svelte-ui/visually-hidden"
</script>

<Button variant="outline">
  <Icon name="bell" />
  <VisuallyHidden>3 new notifications</VisuallyHidden>
</Button>
