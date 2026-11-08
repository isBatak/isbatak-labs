<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
  import { css } from "styled-system/css"

  const eventClass = css({ display: "flex", gap: "4", py: "4", borderBottomWidth: "1px", _last: { borderBottomWidth: "0" } })
  const timeClass = css({ w: "12", flexShrink: "0", color: "fg.muted", fontVariantNumeric: "tabular-nums" })
  const titleClass = css({ fontWeight: "medium" })
  const descriptionClass = css({ color: "fg.muted" })
</script>

{#snippet event(time: string, title: string, description: string)}
  <li class={eventClass}>
    <span class={timeClass}>{time}</span>
    <div>
      <p class={titleClass}>{title}</p>
      <p class={descriptionClass}>{description}</p>
    </div>
  </li>
{/snippet}

<Drawer.Root placement="bottom" snapPoints={[0.5, 1]} defaultSnapPoint={0.5}>
  <Drawer.Trigger>
    {#snippet asChild(props)}
      <Button {...props()}>View itinerary</Button>
    {/snippet}
  </Drawer.Trigger>
  <Portal>
    <Drawer.Backdrop />
    <Drawer.Positioner>
      <Drawer.Content class={css({ h: "[80dvh]" })}>
        <Drawer.Grabber>
          <Drawer.GrabberIndicator />
        </Drawer.Grabber>
        <Drawer.Header>
          <Drawer.Title>Team day itinerary</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body class={css({ overflowY: "hidden", "[data-expanded] &": { overflowY: "auto" } })}>
          <Drawer.Description>Swipe up to see the full schedule, or down to collapse or dismiss it.</Drawer.Description>
          <ol class={css({ mt: "2" })}>
            {@render event("09:00", "Coffee at the studio", "Meet the team and plan the day.")}
            {@render event("10:00", "Design workshop", "Explore ideas for the next release.")}
            {@render event("12:00", "Lunch together", "Take a break at our favorite local spot.")}
            {@render event("14:00", "Prototype review", "Walk through the new interactions.")}
            {@render event("16:00", "Team retrospective", "Share what worked and what to improve.")}
            {@render event("17:00", "Wrap up", "Capture next steps before heading home.")}
          </ol>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} variant="outline">Done</Button>
            {/snippet}
          </Drawer.ActionTrigger>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
