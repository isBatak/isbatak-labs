<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { type IconControls, iconArgs } from "@isbatak/storybook-shared"

  const { name = iconArgs.name, size = iconArgs.size }: Partial<IconControls> = $props()
</script>

<Icon {name} {size} />
