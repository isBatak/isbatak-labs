import { render, type VNode } from "preact"
import { type ApiId, examples } from "virtual:examples"
import { setCurrentExample } from "./example-state"

let count = 0

const withUniqueIdRoot = (vnode: VNode) => Object.assign(vnode, { __m: [count++, 0] })

export function mount(api: ApiId, id: string, container: HTMLElement) {
  setCurrentExample(id)
  const Example = examples[api][id]
  render(withUniqueIdRoot(<Example />), container)
  return () => render(null, container)
}
