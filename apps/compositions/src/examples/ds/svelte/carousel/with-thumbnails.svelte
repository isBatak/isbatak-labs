<script lang="ts">
  import { AspectRatio } from "@isbatak/svelte-ui/aspect-ratio"
  import { IconButton } from "@isbatak/svelte-ui/button"
  import { Carousel } from "@isbatak/svelte-ui/carousel"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { css } from "styled-system/css"
</script>

<Carousel.Root count={5} class={css({ maxW: "2xl", mx: "auto", gap: "4" })}>
  <Carousel.Control class={css({ justifyContent: "center", gap: "4", w: "full" })}>
    <Carousel.PrevTrigger>
      {#snippet asChild(props)}
        <IconButton {...props()} size="xs" variant="outline">
          <Icon name="chevron-left" />
        </IconButton>
      {/snippet}
    </Carousel.PrevTrigger>
    <Carousel.ItemGroup class={css({ w: "full" })}>
      <Carousel.Item index={0}>
        <AspectRatio ratio={16 / 9} borderRadius="l2" overflow="hidden">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/1280px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
        </AspectRatio>
      </Carousel.Item>
      <Carousel.Item index={1}>
        <AspectRatio ratio={16 / 9} borderRadius="l2" overflow="hidden">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_%28National_Gallery_version%29.jpg/1280px-Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_%28National_Gallery_version%29.jpg" alt="Wheat Field with Cypresses by Vincent van Gogh" />
        </AspectRatio>
      </Carousel.Item>
      <Carousel.Item index={2}>
        <AspectRatio ratio={16 / 9} borderRadius="l2" overflow="hidden">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg" alt="The Great Wave off Kanagawa by Hokusai" />
        </AspectRatio>
      </Carousel.Item>
      <Carousel.Item index={3}>
        <AspectRatio ratio={16 / 9} borderRadius="l2" overflow="hidden">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg" alt="Impression, Sunrise by Claude Monet" />
        </AspectRatio>
      </Carousel.Item>
      <Carousel.Item index={4}>
        <AspectRatio ratio={16 / 9} borderRadius="l2" overflow="hidden">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aivazovsky%2C_Ivan_-_The_Ninth_Wave.jpg/1280px-Aivazovsky%2C_Ivan_-_The_Ninth_Wave.jpg" alt="The Ninth Wave by Ivan Aivazovsky" />
        </AspectRatio>
      </Carousel.Item>
    </Carousel.ItemGroup>
    <Carousel.NextTrigger>
      {#snippet asChild(props)}
        <IconButton {...props()} size="xs" variant="outline">
          <Icon name="chevron-right" />
        </IconButton>
      {/snippet}
    </Carousel.NextTrigger>
  </Carousel.Control>
  <Carousel.IndicatorGroup>
    <Carousel.Indicator index={0} unstyled class={css({ w: "20", borderRadius: "l1", overflow: "hidden", cursor: "button", _current: { outlineStyle: "solid", outlineWidth: "[2px]", outlineColor: "colorPalette.solid", outlineOffset: "[2px]" } })}>
      <AspectRatio ratio={16 / 9}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/330px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
      </AspectRatio>
    </Carousel.Indicator>
    <Carousel.Indicator index={1} unstyled class={css({ w: "20", borderRadius: "l1", overflow: "hidden", cursor: "button", _current: { outlineStyle: "solid", outlineWidth: "[2px]", outlineColor: "colorPalette.solid", outlineOffset: "[2px]" } })}>
      <AspectRatio ratio={16 / 9}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_%28National_Gallery_version%29.jpg/330px-Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_%28National_Gallery_version%29.jpg" alt="Wheat Field with Cypresses by Vincent van Gogh" />
      </AspectRatio>
    </Carousel.Indicator>
    <Carousel.Indicator index={2} unstyled class={css({ w: "20", borderRadius: "l1", overflow: "hidden", cursor: "button", _current: { outlineStyle: "solid", outlineWidth: "[2px]", outlineColor: "colorPalette.solid", outlineOffset: "[2px]" } })}>
      <AspectRatio ratio={16 / 9}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/330px-Tsunami_by_hokusai_19th_century.jpg" alt="The Great Wave off Kanagawa by Hokusai" />
      </AspectRatio>
    </Carousel.Indicator>
    <Carousel.Indicator index={3} unstyled class={css({ w: "20", borderRadius: "l1", overflow: "hidden", cursor: "button", _current: { outlineStyle: "solid", outlineWidth: "[2px]", outlineColor: "colorPalette.solid", outlineOffset: "[2px]" } })}>
      <AspectRatio ratio={16 / 9}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/330px-Monet_-_Impression%2C_Sunrise.jpg" alt="Impression, Sunrise by Claude Monet" />
      </AspectRatio>
    </Carousel.Indicator>
    <Carousel.Indicator index={4} unstyled class={css({ w: "20", borderRadius: "l1", overflow: "hidden", cursor: "button", _current: { outlineStyle: "solid", outlineWidth: "[2px]", outlineColor: "colorPalette.solid", outlineOffset: "[2px]" } })}>
      <AspectRatio ratio={16 / 9}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aivazovsky%2C_Ivan_-_The_Ninth_Wave.jpg/330px-Aivazovsky%2C_Ivan_-_The_Ninth_Wave.jpg" alt="The Ninth Wave by Ivan Aivazovsky" />
      </AspectRatio>
    </Carousel.Indicator>
  </Carousel.IndicatorGroup>
</Carousel.Root>
