<script lang="ts">
  import { Spinner } from "@isbatak/svelte-ui/spinner"
  import { VStack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"
</script>

<VStack gap="2" class={css({ colorPalette: "blue", color: "colorPalette.solid" })}>
  <Spinner />
  <Text>Loading...</Text>
</VStack>
