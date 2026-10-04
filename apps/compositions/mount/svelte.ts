import { mount as mountComponent, unmount } from "svelte"
import { type ApiId, examples } from "virtual:examples"
import { setCurrentExample } from "./example-state"

export function mount(api: ApiId, id: string, container: HTMLElement) {
  setCurrentExample(id)
  const component = mountComponent(examples[api][id], { target: container })
  return () => {
    unmount(component)
  }
}
