import { fileURLToPath } from "node:url"
import { createPandaPlugin } from "@pandacss/eslint-plugin"

const { rules } = await createPandaPlugin({
  configPath: fileURLToPath(new URL("./packages/panda/ds/panda.config.ts", import.meta.url)),
})

export default { meta: { name: "@pandacss" }, rules }
