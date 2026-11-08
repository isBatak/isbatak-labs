<script lang="ts">
  import { RatingGroup } from "@isbatak/svelte-ui/rating-group"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let value = $state(3)
</script>

<Stack gap="3">
  <RatingGroup.Root count={5} bind:value>
    <RatingGroup.Label>Rating</RatingGroup.Label>
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items />
    </RatingGroup.Control>
  </RatingGroup.Root>
  <Text textStyle="sm" color="fg.muted">Value: {value}</Text>
</Stack>
