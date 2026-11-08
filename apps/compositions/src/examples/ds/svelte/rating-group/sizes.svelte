<script lang="ts">
  import { RatingGroup } from "@isbatak/svelte-ui/rating-group"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="4">
  <RatingGroup.Root count={5} defaultValue={3} size="xs">
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items />
    </RatingGroup.Control>
  </RatingGroup.Root>
  <RatingGroup.Root count={5} defaultValue={3} size="sm">
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items />
    </RatingGroup.Control>
  </RatingGroup.Root>
  <RatingGroup.Root count={5} defaultValue={3} size="md">
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items />
    </RatingGroup.Control>
  </RatingGroup.Root>
  <RatingGroup.Root count={5} defaultValue={3} size="lg">
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items />
    </RatingGroup.Control>
  </RatingGroup.Root>
</Stack>
