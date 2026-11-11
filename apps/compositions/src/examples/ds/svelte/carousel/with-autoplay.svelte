<script lang="ts">
  import { IconButton } from "@isbatak/svelte-ui/button"
  import { Carousel } from "@isbatak/svelte-ui/carousel"
  import { Center } from "@isbatak/svelte-ui/center"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { css } from "styled-system/css"
</script>

<Carousel.Root count={5} autoPlay={{ delay: 2000 }} class={css({ maxW: "xl", mx: "auto" })}>
  <Carousel.ItemGroup>
    <Carousel.Item index={0}>
      <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">1</Center>
    </Carousel.Item>
    <Carousel.Item index={1}>
      <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">2</Center>
    </Carousel.Item>
    <Carousel.Item index={2}>
      <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">3</Center>
    </Carousel.Item>
    <Carousel.Item index={3}>
      <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">4</Center>
    </Carousel.Item>
    <Carousel.Item index={4}>
      <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">5</Center>
    </Carousel.Item>
  </Carousel.ItemGroup>
  <Carousel.Control class={css({ justifyContent: "center", gap: "4" })}>
    <Carousel.PrevTrigger />
    <Carousel.AutoplayTrigger>
      {#snippet asChild(props)}
        <IconButton {...props()} aria-label="Toggle autoplay" size="xs" variant="ghost">
          <Carousel.AutoplayIndicator>
            <Icon name="pause" />
            {#snippet fallback()}
              <Icon name="play" />
            {/snippet}
          </Carousel.AutoplayIndicator>
        </IconButton>
      {/snippet}
    </Carousel.AutoplayTrigger>
    <Carousel.NextTrigger />
  </Carousel.Control>
</Carousel.Root>
