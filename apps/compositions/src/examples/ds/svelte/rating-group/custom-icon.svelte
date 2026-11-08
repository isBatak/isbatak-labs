<script lang="ts">
  import { RatingGroup } from "@isbatak/svelte-ui/rating-group"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { css } from "styled-system/css"
</script>

<RatingGroup.Root count={5} defaultValue={4} class={css({ colorPalette: "red" })}>
  <RatingGroup.Label>Favorite</RatingGroup.Label>
  <RatingGroup.HiddenInput />
  <RatingGroup.Control>
    <RatingGroup.Items>
      {#snippet icon(attrs)}<Icon name="heart-filled" {...attrs} />{/snippet}
    </RatingGroup.Items>
  </RatingGroup.Control>
</RatingGroup.Root>
