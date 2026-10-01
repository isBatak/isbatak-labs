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

  const setup = [
    panda &&
      "- Panda CSS: add `wheelPickerPreset` from `@isbatak/panda-wheel-picker` to the presets in the Panda config, then run `panda codegen`. If the project doesn't use Panda CSS, stop and tell me to pick the CSS version in the docs instead.",
    !panda && "- The component imports its own stylesheet, so there's no styling setup.",
    item.framework === "preact" &&
      ark &&
      "- Preact: Ark UI has no Preact adapter, so this uses the React components. Make sure `react` and `react-dom` resolve to `preact/compat`. `@preact/preset-vite` does this by default; with another bundler, add the aliases.",
  ].filter(Boolean)

  return `Add the wheel picker from isbatak-labs to this project. It's a scrollable wheel for picking one value from a list, with inertia scrolling, snapping and optional looping. Use the ${frameworkLabel} version styled with ${panda ? "Panda CSS" : "plain CSS"} and built on ${ark ? "Ark UI components" : "the Zag state machine"}. Docs: ${docsUrl}

1. Install it with the shadcn CLI. Swap \`pnpm dlx\` for \`npx\`, \`yarn dlx\` or \`bunx\` to match the project's lockfile:

pnpm dlx shadcn@latest add ${url}

This installs ${list(example.dependencies)}${example.devDependencies.length > 0 ? `, plus ${list(example.devDependencies)} as ${example.devDependencies.length > 1 ? "dev dependencies" : "a dev dependency"},` : ""} and adds the component to \`${folder}\`. If the CLI can't run here, install those packages yourself and write the files listed in ${url} (each entry has its content and target path).

2. Finish the setup:

${setup.join("\n")}

3. Ask me where the picker should go and what it should list, and suggest a spot if one stands out. Then render it there: copy the installed component, give it a name that fits, replace the items and the label with mine, and keep the value ${ark ? "props" : "options"} that fit (a default value, or a controlled value with a change handler).

4. Start the dev server, check that the picker renders, scrolls and snaps to a value, then stop it. If you can't run it, tell me how to check it myself.`
}
