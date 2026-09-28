import { type ComponentProps, type ComponentType, isValidElement, type ReactNode } from "react"
import * as runtime from "react/jsx-runtime"
import { styled } from "styled-system/jsx"

import { CodeBlock } from "./code/code-block"
import { ApiTable } from "./docs/api-table"
import { ArkWheelPickerExample } from "./docs/ark-wheel-picker-example"
import { Example, ExampleSource, FrameworkInstall, Installation } from "./docs/framework-code"
import { FrameworkHint } from "./docs/framework-hint"
import type { DocVariant } from "./docs/variant"

export type MDXComponents = Record<string, ComponentType<any>>

function Pre({ children }: { children?: ReactNode }) {
  if (!isValidElement<{ children?: ReactNode; className?: string }>(children)) return <pre>{children}</pre>
  const { children: code, className } = children.props
  return <CodeBlock code={String(code ?? "")} lang={className?.replace("language-", "")} />
}

function ArkExample() {
  return (
    <styled.div
      className="not-prose"
      display="grid"
      placeItems="center"
      my="6"
      py="10"
      borderRadius="l3"
      borderWidth="1px"
      bg="bg.subtle"
    >
      <ArkWheelPickerExample />
    </styled.div>
  )
}

const sharedComponents: MDXComponents = {
  pre: Pre,
  ApiTable,
  ArkExample,
  FrameworkHint,
}

type VariantComponentProps<P> = Omit<P, keyof DocVariant>

const variantComponents = (variant: DocVariant): MDXComponents => ({
  Example: (props: VariantComponentProps<ComponentProps<typeof Example>>) => <Example {...props} {...variant} />,
  ExampleCode: (props: VariantComponentProps<ComponentProps<typeof ExampleSource>>) => (
    <ExampleSource {...props} {...variant} />
  ),
  FrameworkInstall: (props: VariantComponentProps<ComponentProps<typeof FrameworkInstall>>) => (
    <FrameworkInstall {...props} {...variant} />
  ),
  Installation: (props: VariantComponentProps<ComponentProps<typeof Installation>>) => (
    <Installation {...props} {...variant} />
  ),
})

function getMDXComponent(code: string): ComponentType<{ components?: MDXComponents }> {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXContentProps {
  code: string
  variant?: DocVariant
  components?: MDXComponents
}

export function MDXContent({ code, variant, components }: MDXContentProps) {
  const Component = getMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...(variant && variantComponents(variant)), ...components }} />
}
