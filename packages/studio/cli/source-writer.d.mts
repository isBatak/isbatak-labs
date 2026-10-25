import type { Plugin } from "vite"

export interface SourceWriterOptions {
  projectRoot: string
  designSystem: string
  configPath: string
}

export interface SourceWriteResult {
  commit: () => void
  written: string[]
  skipped: Array<{ key: string; reason: string }>
}

export function writeEditsToSource(options: SourceWriterOptions & { edits: unknown[] }): SourceWriteResult

export function studioSource(options: SourceWriterOptions): Plugin
