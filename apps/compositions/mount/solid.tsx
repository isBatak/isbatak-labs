import { render } from "solid-js/web"
import { type ApiId, examples } from "virtual:examples"
import { setCurrentExample } from "./example-state"

export function mount(api: ApiId, id: string, container: HTMLElement) {
  setCurrentExample(id)
  const Example = examples[api][id]
  return render(() => <Example />, container)
}
