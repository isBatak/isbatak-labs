import { type ApiId, examples } from "virtual:examples"
import { setCurrentExample } from "./example-state"

export function mount(api: ApiId, id: string, container: HTMLElement) {
  setCurrentExample(id)
  const element: HTMLElement = new examples[api][id]()
  container.append(element)
  return () => element.remove()
}
