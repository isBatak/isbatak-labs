<script lang="ts">
  import { Button, CloseButton } from "@isbatak/svelte-ui/button"
  import { Heading } from "@isbatak/svelte-ui/heading"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Tabs } from "@isbatak/svelte-ui/tabs"
  import { Text } from "@isbatak/svelte-ui/text"

  interface Item {
    id: string
    title: string
  }

  const uid = () => Math.random().toString(36).slice(2, 10)

  let tabs = $state<Item[]>([
    { id: "1", title: "Tab" },
    { id: "2", title: "Tab" },
    { id: "3", title: "Tab" },
  ])
  let selected = $state<string | null>("1")

  const addTab = () => {
    const id = uid()
    tabs = [...tabs, { id, title: "Tab" }]
    selected = id
  }

  const removeTab = (id: string) => {
    if (tabs.length > 1) tabs = tabs.filter((tab) => tab.id !== id)
  }
</script>

<Tabs.Root bind:value={selected} variant="folder" size="sm" w="full">
  <Tabs.List>
    {#each tabs as item (item.id)}
      <Tabs.Trigger value={item.id}>
        {item.title}
        <CloseButton
          size="2xs"
          me="-2"
          onclick={(event: MouseEvent) => {
            event.stopPropagation()
            removeTab(item.id)
          }}
        >
          {#snippet asChild(props)}
            <span {...props()} role="button" aria-label="Close tab"><Icon name="close" /></span>
          {/snippet}
        </CloseButton>
      </Tabs.Trigger>
    {/each}
    <Tabs.Indicator />
    <Button alignSelf="center" ms="2" size="2xs" variant="ghost" onclick={addTab}>
      <Icon name="plus" />
      Add tab
    </Button>
  </Tabs.List>
  {#each tabs as item (item.id)}
    <Tabs.Content value={item.id}>
      <Heading size="xl" mb="2">Tab {item.id}</Heading>
      <Text>Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat ex.</Text>
    </Tabs.Content>
  {/each}
</Tabs.Root>
