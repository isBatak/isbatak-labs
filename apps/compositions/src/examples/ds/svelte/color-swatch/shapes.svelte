<script lang="ts">
  import { ColorSwatch } from "@isbatak/svelte-ui/color-swatch"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="2">
  <ColorSwatch value="oklch(0.62 0.19 260)" size="xl" shape="square" />
  <ColorSwatch value="oklch(0.62 0.19 260)" size="xl" shape="rounded" />
  <ColorSwatch value="oklch(0.62 0.19 260)" size="xl" shape="circle" />
</HStack>
