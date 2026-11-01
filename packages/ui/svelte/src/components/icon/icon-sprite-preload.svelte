<script lang="ts">
  import { getIconSprite } from "@isbatak/icons"
</script>

<svelte:head>
  <link rel="preload" as="image" type="image/svg+xml" href={getIconSprite()} />
</svelte:head>
