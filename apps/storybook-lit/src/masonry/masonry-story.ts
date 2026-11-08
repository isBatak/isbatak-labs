import type { MasonryControls } from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { LitElement, type PropertyDeclarations, type ReactiveController, type ReactiveControllerHost } from "lit"
import { normalizeProps } from "@isbatak/zag-lit"

export interface MasonryStoryProps extends Partial<MasonryControls> {
  onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
}

export class MasonryController implements ReactiveController {
  readonly #host: ReactiveControllerHost
  readonly #masonry = masonry.createMasonry()
  readonly #getProps: () => masonry.Props
  #layout: masonry.Layout | null = null
  #stop: (() => void) | undefined
  #reflowed: string | undefined

  constructor(host: ReactiveControllerHost, getProps: () => Omit<masonry.Props, "id">) {
    const id = crypto.randomUUID()
    this.#host = host
    this.#getProps = () => ({ id, ...getProps() })
    host.addController(this)
  }

  get api() {
    return this.#masonry.connect(this.#getProps(), this.#layout, normalizeProps)
  }

  hostUpdated() {
    this.#stop ??= this.#masonry.mount(this.#getProps, (layout) => {
      this.#layout = layout
      this.#host.requestUpdate()
    })
    const { sequential, columns, minColumnWidth, gap } = this.#getProps()
    const reflowed = [sequential, columns, minColumnWidth, gap].join()
    if (this.#reflowed !== undefined && reflowed !== this.#reflowed) this.#masonry.reflow()
    this.#reflowed = reflowed
  }

  hostDisconnected() {
    this.#stop?.()
    this.#stop = undefined
    this.#layout = null
    this.#reflowed = undefined
  }
}

export class MasonryStory extends LitElement {
  static properties: PropertyDeclarations = {
    columns: { type: Number },
    gap: { type: Number },
    sequential: { type: Boolean },
    minColumnWidth: {},
    direction: { attribute: "dir" },
    onLayoutChange: { attribute: false },
  }

  declare columns: number | undefined
  declare gap: number | undefined
  declare sequential: boolean | undefined
  declare minColumnWidth: string | undefined
  declare direction: "ltr" | "rtl" | undefined
  declare onLayoutChange: ((details: masonry.LayoutChangeDetails) => void) | undefined

  protected readonly masonry = new MasonryController(this, () => ({
    columns: this.columns,
    gap: this.gap,
    sequential: this.sequential,
    minColumnWidth: this.minColumnWidth,
    dir: this.direction,
    onLayoutChange: this.onLayoutChange,
  }))

  protected createRenderRoot() {
    return this
  }
}
