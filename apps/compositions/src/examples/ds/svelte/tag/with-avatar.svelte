<script lang="ts">
  import { Avatar } from "@isbatak/svelte-ui/avatar"
  import { Tag } from "@isbatak/svelte-ui/tag"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="2">
  <Tag.Root size="sm" class={css({ rounded: "full" })}>
    <Tag.StartElement>
      <Avatar.Root size="full">
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.Root>
    </Tag.StartElement>
    <Tag.Label>Segun</Tag.Label>
  </Tag.Root>
  <Tag.Root size="md" class={css({ rounded: "full" })}>
    <Tag.StartElement>
      <Avatar.Root size="full">
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.Root>
    </Tag.StartElement>
    <Tag.Label>Segun</Tag.Label>
  </Tag.Root>
  <Tag.Root size="lg" class={css({ rounded: "full" })}>
    <Tag.StartElement>
      <Avatar.Root size="full">
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.Root>
    </Tag.StartElement>
    <Tag.Label>Segun</Tag.Label>
  </Tag.Root>
  <Tag.Root size="xl" class={css({ rounded: "full" })}>
    <Tag.StartElement>
      <Avatar.Root size="full">
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.Root>
    </Tag.StartElement>
    <Tag.Label>Segun</Tag.Label>
  </Tag.Root>
</HStack>
