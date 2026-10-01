import { type ApiId, examples } from "virtual:examples"
import { createApp } from "vue"

let count = 0

export function mount(api: ApiId, id: string, container: HTMLElement) {
  const app = createApp(examples[api][id])
  app.config.idPrefix = `v${count++}`
  app.mount(container)
  return () => app.unmount()
}
