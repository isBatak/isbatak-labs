<script lang="ts">
  import { RatingGroup } from "@isbatak/svelte-ui/rating-group"
</script>

<RatingGroup.Root count={5} defaultValue={2.5} allowHalf>
  <RatingGroup.Label>Rating</RatingGroup.Label>
  <RatingGroup.HiddenInput />
  <RatingGroup.Control>
    <RatingGroup.Items />
  </RatingGroup.Control>
</RatingGroup.Root>
