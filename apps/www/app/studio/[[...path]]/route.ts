import { readdirSync, readFileSync } from "node:fs"
import { extname, join, relative } from "node:path"

const root = join(process.cwd(), ".studio")

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
}

const files = readdirSync(root, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => relative(root, join(entry.parentPath, entry.name)).split("\\").join("/"))

const indexes = files.filter((file) => file.endsWith("/index.html")).map((file) => file.slice(0, -"/index.html".length))

export function generateStaticParams() {
  return [{ path: [] }, ...[...files, ...indexes].map((file) => ({ path: file.split("/") }))]
}

export async function GET(_request: Request, { params }: RouteContext<"/studio/[[...path]]">) {
  const path = (await params).path?.join("/")
  const file = !path ? "index.html" : indexes.includes(path) ? `${path}/index.html` : path
  if (!files.includes(file)) return new Response(null, { status: 404 })
  return new Response(readFileSync(join(root, file)), {
    headers: { "Content-Type": contentTypes[extname(file)] ?? "application/octet-stream" },
  })
}
