<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { css } from "styled-system/css"

  interface LinkItem extends Command.ItemData {
    label: string
    value: string
    group: string
    href: string
    icon: IconName
  }

  const links: LinkItem[] = [
    {
      label: "Installation",
      value: "installation",
      group: "Design system",
      href: "/ds/installation",
      icon: "file-text",
      keywords: ["install", "setup"],
    },
    { label: "Components", value: "components", group: "Design system", href: "/ds/components", icon: "components" },
    {
      label: "Styles",
      value: "styles",
      group: "Design system",
      href: "/ds/styles",
      icon: "color-picker",
      keywords: ["tokens", "colors"],
    },
    { label: "Icons", value: "icons", group: "Design system", href: "/ds/icons", icon: "star" },
    {
      label: "GitHub repository",
      value: "github",
      group: "Resources",
      href: "https://github.com/isBatak/isbatak-labs",
      icon: "brand-github",
      keywords: ["source", "code"],
    },
  ]

  const command = useCommandCollection({ initialItems: links, groupBy: (item) => item.group })
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
          <Icon name="search" /> Search documentation...
        </Button>
      {/snippet}
    </Command.DialogTrigger>
    <Portal>
      <Command.DialogBackdrop />
      <Command.DialogContent>
        <Command.Root>
          <Command.Control>
            <Command.Indicator />
            <Command.Input placeholder="Search documentation..." />
          </Command.Control>
          <Command.List>
            {#each command.collection.group() as [group, items] (group)}
              <Command.ItemGroup>
                <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                {#each items as item (item.value)}
                  <Command.Item {item}>
                    {#snippet asChild(props)}
                      <a {...props()} href={item.href} target="_blank" rel="noreferrer">
                        <Icon name={item.icon} />
                        <Command.ItemText text={item.label} highlight />
                        <Icon name="external-link" class={css({ color: "fg.subtle", ms: "auto" })} />
                      </a>
                    {/snippet}
                  </Command.Item>
                {/each}
              </Command.ItemGroup>
            {/each}
            <Command.Empty>No results found</Command.Empty>
          </Command.List>
        </Command.Root>
      </Command.DialogContent>
    </Portal>
  </Command.Dialog>
</Command.Provider>
