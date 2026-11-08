<script lang="ts">
  import { RatingGroup } from "@isbatak/svelte-ui/rating-group"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<Stack gap="4">
  <RatingGroup.Root count={5} defaultValue={3} class={css({ colorPalette: "gray" })}>
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items />
    </RatingGroup.Control>
  </RatingGroup.Root>
  <RatingGroup.Root count={5} defaultValue={3} class={css({ colorPalette: "blue" })}>
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items />
    </RatingGroup.Control>
  </RatingGroup.Root>
  <RatingGroup.Root count={5} defaultValue={3} class={css({ colorPalette: "green" })}>
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items />
    </RatingGroup.Control>
  </RatingGroup.Root>
  <RatingGroup.Root count={5} defaultValue={3} class={css({ colorPalette: "orange" })}>
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items />
    </RatingGroup.Control>
  </RatingGroup.Root>
  <RatingGroup.Root count={5} defaultValue={3} class={css({ colorPalette: "pink" })}>
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items />
    </RatingGroup.Control>
  </RatingGroup.Root>
</Stack>
