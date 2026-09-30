import { writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"

import { hatSvg, lockupSvg } from "../src/sourcery/brand/marks.ts"

const root = (path: string) => fileURLToPath(new URL(`../../../${path}`, import.meta.url))

writeFileSync(root("apps/www/content/tools/sourcery/logo.svg"), hatSvg())
writeFileSync(root("apps/www/content/tools/sourcery/wordmark.svg"), lockupSvg())
writeFileSync(root("packages/tools/sourcery/assets/wordmark.svg"), lockupSvg())
console.log("sourcery brand: www logo.svg and wordmark.svg, packages/tools/sourcery/assets/wordmark.svg")
