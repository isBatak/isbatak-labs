import { iconNames, spriteUrl } from "@isbatak/icons"
import { icon } from "@isbatak/panda-ds/recipes"
import { iconClasses as classes, filterIconNames } from "@isbatak/storybook-shared"
import { createElement } from "../mount"

export function createGallery() {
  const gallery = createElement(`
    <div class="${classes.gallery}">
      <input
        type="search"
        aria-label="Search icons"
        placeholder="Search ${iconNames.length} icons"
        class="${classes.search}"
      />
      <p data-el="empty" class="${classes.empty}" hidden></p>
      <div data-el="grid" class="${classes.grid}"></div>
    </div>
  `)
  const search = gallery.querySelector("input")!
  const empty = gallery.querySelector<HTMLElement>("[data-el=empty]")!
  const grid = gallery.querySelector<HTMLElement>("[data-el=grid]")!

  function render() {
    const names = filterIconNames(search.value)
    empty.hidden = names.length > 0
    empty.textContent = `No icons match “${search.value}”`
    grid.replaceChildren(
      ...names.map((name) =>
        createElement(`
          <div class="${classes.cell}">
            <svg aria-hidden="true" class="${icon({ size: "lg" })}"><use href="${spriteUrl}#${name}"></use></svg>
            <span class="${classes.name}">${name}</span>
          </div>
        `),
      ),
    )
  }

  search.addEventListener("input", render)
  render()
  return gallery
}
