<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Avatar } from "@isbatak/svelte-ui/avatar"
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { Spinner } from "@isbatak/svelte-ui/spinner"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"

  interface Result extends Command.ItemData {
    label: string
    value: string
    icon?: IconName
    image?: string
    description?: string
    title?: string
    placeholder?: string
  }

  const items: Result[] = [
    {
      label: "Search painters...",
      value: "painters",
      page: true,
      title: "Painters",
      placeholder: "Search painters by name...",
      icon: "account",
    },
    {
      label: "Search paintings...",
      value: "paintings",
      page: true,
      title: "Paintings",
      placeholder: "Search paintings...",
      icon: "image",
    },
    { label: "Create collection", value: "create-collection", icon: "plus" },
    { label: "Open settings", value: "settings", icon: "settings" },
  ]

  const painters = [
    {
      id: "monet",
      name: "Claude Monet",
      movement: "Impressionism",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/330px-Claude_Monet_1899_Nadar_crop.jpg",
    },
    {
      id: "cassatt",
      name: "Mary Cassatt",
      movement: "Impressionism",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Mary_Cassatt-Selfportrait.jpg/330px-Mary_Cassatt-Selfportrait.jpg",
    },
    {
      id: "rembrandt",
      name: "Rembrandt van Rijn",
      movement: "Dutch Golden Age",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
    },
    {
      id: "van-gogh",
      name: "Vincent van Gogh",
      movement: "Post-Impressionism",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
    },
  ]

  const paintings = [
    { id: "starry-night", title: "The Starry Night", year: 1889 },
    { id: "water-lilies", title: "Water Lilies", year: 1906 },
    { id: "night-watch", title: "The Night Watch", year: 1642 },
    { id: "boating-party", title: "The Boating Party", year: 1894 },
    { id: "sunflowers", title: "Sunflowers", year: 1888 },
    { id: "impression-sunrise", title: "Impression, Sunrise", year: 1872 },
  ]

  const matches = (text: string, query: string) => text.toLowerCase().includes(query.trim().toLowerCase())

  const searchPainters = (query: string): Result[] =>
    painters
      .filter((painter) => matches(painter.name, query))
      .map((painter) => ({
        label: painter.name,
        value: `painter:${painter.id}`,
        description: painter.movement,
        image: painter.image,
      }))

  const searchPaintings = (query: string): Result[] =>
    paintings
      .filter((painting) => matches(painting.title, query))
      .map((painting) => ({
        label: painting.title,
        value: `painting:${painting.id}`,
        description: String(painting.year),
        icon: "image",
      }))

  const wait = (ms: number, signal: AbortSignal) =>
    new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, ms)
      signal.addEventListener("abort", () => {
        clearTimeout(timer)
        reject(signal.reason)
      })
    })

  const command = useCommandCollection<Result>({
    initialItems: items,
    load: async ({ page, query, signal }) => {
      await wait(query ? 300 : 500, signal)
      if (page?.value === "painters") return searchPainters(query)
      if (page?.value === "paintings") return searchPaintings(query)
      return []
    },
  })
</script>

<Command.Provider value={command}>
  <Command.Dialog>
    <Command.DialogTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          variant="outline"
          size="sm"
          class={css({ minW: "64", justifyContent: "flex-start", color: "fg.muted" })}
        >
          <Icon name="search" /> Search...
        </Button>
      {/snippet}
    </Command.DialogTrigger>
    <Portal>
      <Command.DialogBackdrop />
      <Command.DialogContent>
        <Command.Root>
          <Command.Control>
            <Command.Indicator />
            {#if command.page}
              <Badge size="sm" variant="subtle" class={css({ flexShrink: "0" })}>{command.page.title}</Badge>
            {/if}
            <Command.Input placeholder={command.page?.placeholder ?? "Type a command or search..."} />
            {#if command.loading}
              <Spinner size="sm" class={css({ color: "fg.muted" })} />
            {/if}
          </Command.Control>
          <Command.List>
            {#if command.collection.size === 0}
              <Command.Loading>Loading {command.page?.title?.toLowerCase()}...</Command.Loading>
            {/if}
            {#each command.collection.items as item (item.value)}
              <Command.Item {item}>
                {#if item.image}
                  <Avatar.Root size="2xs">
                    <Avatar.Fallback name={item.label} />
                    <Avatar.Image src={item.image} />
                  </Avatar.Root>
                {:else}
                  <Icon name={item.icon ?? "image"} />
                {/if}
                <Command.ItemText text={item.label} highlight />
                {#if item.description}
                  <Text as="span" ms="auto" textStyle="xs" color="fg.muted" truncate>{item.description}</Text>
                {/if}
                {#if command.isPage(item)}
                  <Icon name="chevron-right" />
                {/if}
              </Command.Item>
            {/each}
            {#if command.error}
              <Command.Empty>
                Couldn't load results.
                <Button size="xs" variant="plain" onclick={() => command.reload()}>Retry</Button>
              </Command.Empty>
            {:else}
              <Command.Empty>No results found</Command.Empty>
            {/if}
          </Command.List>
        </Command.Root>
      </Command.DialogContent>
    </Portal>
  </Command.Dialog>
</Command.Provider>
