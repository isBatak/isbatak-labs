<script lang="ts">
  import { Highlight } from "@isbatak/svelte-ui/highlight"
  import { Text } from "@isbatak/svelte-ui/text"
</script>

<Text>
  <Highlight query={["spotlight", "emphasize"]} text="Spotlight or emphasize several words at once." variant="subtle" ignoreCase />
</Text>
