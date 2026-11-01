import { useState } from "preact/hooks"
import { Icon, iconNames } from "@isbatak/preact-ui/icon"
import { iconClasses as classes, filterIconNames } from "@isbatak/storybook-shared"

export function Gallery() {
  const [query, setQuery] = useState("")
  const names = filterIconNames(query)
  return (
    <div class={classes.gallery}>
      <input
        type="search"
        aria-label="Search icons"
        placeholder={`Search ${iconNames.length} icons`}
        class={classes.search}
        value={query}
        onInput={(event) => setQuery(event.currentTarget.value)}
      />
      {names.length === 0 && <p class={classes.empty}>No icons match “{query}”</p>}
      <div class={classes.grid}>
        {names.map((name) => (
          <div key={name} class={classes.cell}>
            <Icon name={name} size="lg" />
            <span class={classes.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
