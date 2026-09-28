import { type ResolvedOptions, type SourceryOptions, resolveOptions } from "./options"
import { startServer } from "./server"

export async function prepareOptions(options: SourceryOptions): Promise<ResolvedOptions> {
  const resolved = resolveOptions(options)
  return { ...resolved, port: await startServer(resolved) }
}
