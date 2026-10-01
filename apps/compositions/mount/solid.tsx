import { render } from "solid-js/web"
import { type ApiId, examples } from "virtual:examples"

export function mount(api: ApiId, id: string, container: HTMLElement) {
  const Example = examples[api][id]
  return render(() => <Example />, container)
}
