import { useState } from "react"
import { Icon, iconNames } from "@isbatak/react-ui/icon"
import { iconClasses as classes, filterIconNames } from "@isbatak/storybook-shared"

export function Gallery() {
  const [query, setQuery] = useState("")
  const names = filterIconNames(query)
  return (
    <div className={classes.gallery}>
      <input
        type="search"
        aria-label="Search icons"
        placeholder={`Search ${iconNames.length} icons`}
        className={classes.search}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {names.length === 0 && <p className={classes.empty}>No icons match “{query}”</p>}
      <div className={classes.grid}>
        {names.map((name) => (
          <div key={name} className={classes.cell}>
            <Icon name={name} size="lg" />
            <span className={classes.name}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
