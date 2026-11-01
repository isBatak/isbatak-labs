import { Icon, iconNames } from "@isbatak/solid-ui/icon"
import { iconClasses as classes, filterIconNames } from "@isbatak/storybook-shared"
import { For, Show, createSignal } from "solid-js"

export function Gallery() {
  const [query, setQuery] = createSignal("")
  const names = () => filterIconNames(query())
  return (
    <div class={classes.gallery}>
      <input
        type="search"
        aria-label="Search icons"
        placeholder={`Search ${iconNames.length} icons`}
        class={classes.search}
        value={query()}
        onInput={(event) => setQuery(event.currentTarget.value)}
      />
      <Show when={names().length === 0}>
        <p class={classes.empty}>No icons match “{query()}”</p>
      </Show>
      <div class={classes.grid}>
        <For each={names()}>
          {(name) => (
            <div class={classes.cell}>
              <Icon name={name} size="lg" />
              <span class={classes.name}>{name}</span>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
