import { type ApiId, examples } from "virtual:examples"

export function mount(api: ApiId, id: string, container: HTMLElement): () => void {
  return examples[api][id](container)
}
