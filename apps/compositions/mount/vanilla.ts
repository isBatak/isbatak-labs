import { type ApiId, examples } from "virtual:examples"
import { setCurrentExample } from "./example-state"

export function mount(api: ApiId, id: string, container: HTMLElement): () => void {
  setCurrentExample(id)
  return examples[api][id](container)
}
