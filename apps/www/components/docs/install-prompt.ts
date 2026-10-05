import { componentMeta, componentOf } from "./component-meta"
import type { ExampleFiles } from "./framework-code"
import { registryUrl } from "./registry"
import type { DocVariant } from "./variant"

interface InstallPromptOptions extends DocVariant {
  id: string
  example: ExampleFiles
  frameworkLabel: string
  docsUrl: string
}

const list = (items: string[]) => {
  const quoted = items.map((item) => `\`${item}\``)
  return quoted.length > 1 ? `${quoted.slice(0, -1).join(", ")} and ${quoted.at(-1)}` : (quoted[0] ?? "")
}

export function installPrompt({ example, frameworkLabel, docsUrl, ...item }: InstallPromptOptions) {
  const folder = example.files[0]!.target.replace(/[^/]+$/, "")
  const url = registryUrl(item)
  const ark = item.api === "ark"
  const panda = item.styling === "panda"
  const meta = componentMeta[componentOf(item.id)]

  const setup = [
    panda &&
      `- Panda CSS: add \`"${meta.pandaPackage}"\` to the presets in the Panda config (or import \`${meta.preset}\` from it if the config already imports its presets), then run \`panda codegen\`. If the project doesn't use Panda CSS, stop and tell me to pick the CSS version in the docs instead.`,
    !panda && "- The component imports its own stylesheet, so there's no styling setup.",
    item.framework === "preact" &&
      ark &&
      "- Preact: Ark UI has no Preact adapter, so this uses the React components. Make sure `react` and `react-dom` resolve to `preact/compat`. `@preact/preset-vite` does this by default; with another bundler, add the aliases.",
  ].filter(Boolean)

  return `Add the ${meta.name} from isbatak-labs to this project. ${meta.summary} Use the ${frameworkLabel} version styled with ${panda ? "Panda CSS" : "plain CSS"} and built on ${ark ? "Ark UI components" : "the Zag state machine"}. Docs: ${docsUrl}

1. Install it with the shadcn CLI. Swap \`pnpm dlx\` for \`npx\`, \`yarn dlx\` or \`bunx\` to match the project's lockfile:

pnpm dlx shadcn@latest add ${url}

This installs ${list(example.dependencies)}${example.devDependencies.length > 0 ? `, plus ${list(example.devDependencies)} as ${example.devDependencies.length > 1 ? "dev dependencies" : "a dev dependency"},` : ""} and adds the component to \`${folder}\`. If the CLI can't run here, install those packages yourself and write the files listed in ${url} (each entry has its content and target path).

2. Finish the setup:

${setup.join("\n")}

3. ${meta.usage[item.api]}

4. Start the dev server, ${meta.check}, then stop it. If you can't run it, tell me how to check it myself.`
}
