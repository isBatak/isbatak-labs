import { readFileSync } from "node:fs"
import { join } from "node:path"

const grain = readFileSync(join(process.cwd(), "node_modules/@isbatak/panda-theme-analog/assets/grain.png"))

export function GET() {
  return new Response(grain, { headers: { "Content-Type": "image/png" } })
}
