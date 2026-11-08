<script lang="ts">
  import { ColorSwatch } from "@isbatak/svelte-ui/color-swatch"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="2">
  <ColorSwatch value="oklch(0.62 0.19 260)" size="xl" />
  <ColorSwatch value="oklch(0.62 0.19 260 / 0.6)" size="xl" />
  <ColorSwatch value="oklch(0.62 0.19 260 / 0.3)" size="xl" />
  <ColorSwatch value="transparent" size="xl" />
</HStack>
