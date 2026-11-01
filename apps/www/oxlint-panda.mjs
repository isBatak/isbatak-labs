import { fileURLToPath } from "node:url"
import { createPandaPlugin } from "@pandacss/eslint-plugin"

const cwd = fileURLToPath(new URL(".", import.meta.url))

const { rules } = await createPandaPlugin({ cwd, configPath: `${cwd}panda.config.ts` })

export default { meta: { name: "@pandacss" }, rules }
