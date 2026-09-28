"use client"

import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { styled } from "styled-system/jsx"

import { CodeBlock } from "../code/code-block"
import { createPreference } from "../docs/preference"

type PackageManager = "pnpm" | "npm" | "yarn" | "bun"

const usePackageManager = createPreference<PackageManager, PackageManager>(
  "docs-package-manager",
  ["pnpm", "npm", "yarn", "bun"],
  "pnpm",
)

function getInstallCommand(manager: PackageManager, name: string, dev: boolean) {
  if (manager === "npm") return `npm install ${dev ? "--save-dev " : ""}${name}`
  if (manager === "bun") return `bun add ${dev ? "--dev " : ""}${name}`
  return `${manager} add ${dev ? "-D " : ""}${name}`
}

interface PackageInstallProps {
  name: string
  dev?: boolean
}

export function PackageInstall({ name, dev = false }: PackageInstallProps) {
  const [manager, setManager] = usePackageManager()

  return (
    <styled.div className="not-prose" my="6" textAlign="start">
      <SegmentGroup.Root
        size="xs"
        orientation="horizontal"
        value={manager}
        onValueChange={(details) => details.value && setManager(details.value as PackageManager)}
        aria-label="Package manager"
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="pnpm">
          <SegmentGroup.ItemText>pnpm</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="npm">
          <SegmentGroup.ItemText>npm</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="yarn">
          <SegmentGroup.ItemText>yarn</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="bun">
          <SegmentGroup.ItemText>bun</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
      <CodeBlock lang="sh" code={getInstallCommand(manager, name, dev)} />
    </styled.div>
  )
}
