import { Button } from "@isbatak/react-ui/button"
import type { Metadata } from "next"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { CodeBlock } from "../../../../components/code/code-block"
import { Eyebrow, Section } from "../../../../components/home/section"
import { REPO_URL } from "../../../../components/layout/site-links"
import { PackageInstall } from "../../../../components/tools/package-install"
import { Icon } from "../../../../components/ui/icon"
import { Prose } from "../../../../components/ui/prose"

export const metadata: Metadata = {
  title: "Design system installation",
  description: "Install @isbatak/panda-ds, point Panda CSS at it and add the Ark UI components you need.",
}

const pandaConfig = `import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  preflight: true,
  jsxFramework: "react",
  include: ["./src/**/*.{ts,tsx}"],
  globalCss: {
    extend: {
      html: { colorPalette: "orange" },
    },
  },
})`

const usage = `import { Button } from "./components/ui/button"

export function Save() {
  return <Button variant="solid">Save changes</Button>
}`

const radius = `<html data-radius="md">`

export default function InstallationPage() {
  return (
    <Section>
      <styled.div maxW="3xl" mx="auto" pt={{ base: "16", md: "28" }} pb="24">
        <Eyebrow>Design system</Eyebrow>
        <styled.h1
          mt="4"
          textStyle={{ base: "4xl", md: "5xl" }}
          fontWeight="medium"
          lineHeight="1.05"
          letterSpacing="tighter"
          textWrap="balance"
        >
          Installation
        </styled.h1>
        <styled.p mt="5" maxW="lg" color="fg.muted" lineHeight="1.7" textWrap="pretty">
          The design system is a Panda CSS preset with tokens, recipes and slot recipes. The components are Ark UI parts
          wired to those recipes, copied into your project so you own the code.
        </styled.p>

        <Prose>
          <h2>Install the packages</h2>
          <p>Add the design system and Ark UI, and Panda CSS as a dev dependency.</p>
          <PackageInstall name="@isbatak/panda-ds @ark-ui/react" />
          <PackageInstall name="@pandacss/dev" dev />

          <h2>Configure Panda</h2>
          <p>
            Point <code>designSystem</code> at the package in <code>panda.config.ts</code>. Set{" "}
            <code>colorPalette</code> on <code>html</code> to pick the accent every component uses.
          </p>
          <CodeBlock code={pandaConfig} lang="ts" title="panda.config.ts" />

          <h2>Add components</h2>
          <p>
            Copy the components you need from{" "}
            <a href={`${REPO_URL}/tree/main/packages/ui/react/src/components`} target="_blank" rel="noopener">
              packages/ui/react
            </a>{" "}
            into your project. Each one imports its recipe from <code>@isbatak/panda-ds/recipes</code>, so it picks up
            your theme with no extra setup. Vue, Solid and Svelte versions live next to it under{" "}
            <code>packages/ui</code>.
          </p>
          <CodeBlock code={usage} lang="tsx" title="save.tsx" />

          <h2>Choose a radius</h2>
          <p>
            Corners follow a radius preset: <code>none</code>, <code>xs</code>, <code>sm</code>, <code>md</code>,{" "}
            <code>lg</code>, <code>xl</code> or <code>2xl</code>. Set it with <code>data-radius</code> on any element,
            and everything inside follows. Without it, components use <code>sm</code>.
          </p>
          <CodeBlock code={radius} lang="html" title="layout" />
        </Prose>

        <Button asChild size="sm" mt="10">
          <Link href="/ds/components">
            Browse components
            <Icon name="arrow-right" />
          </Link>
        </Button>
      </styled.div>
    </Section>
  )
}
