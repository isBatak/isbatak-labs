<script lang="ts">
  import { RatingGroup } from "@isbatak/svelte-ui/rating-group"
</script>

<RatingGroup.Root count={5} defaultValue={3}>
  <RatingGroup.Label>Rating</RatingGroup.Label>
  <RatingGroup.HiddenInput />
  <RatingGroup.Control>
    <RatingGroup.Items />
  </RatingGroup.Control>
</RatingGroup.Root>
