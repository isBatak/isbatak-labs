import { mount as mountComponent, unmount } from "svelte"
import { type ApiId, examples } from "virtual:examples"

export function mount(api: ApiId, id: string, container: HTMLElement) {
  const component = mountComponent(examples[api][id], { target: container })
  return () => {
    unmount(component)
  }
}
