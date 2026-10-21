import { type ComponentProps, type ComponentType, isValidElement, type ReactNode } from "react"
import * as runtime from "react/jsx-runtime"
import { Table as DsTable } from "@isbatak/react-ui/table"
import { styled } from "styled-system/jsx"

import { CodeBlock } from "./code/code-block"
import { ApiTable } from "./docs/api-table"
import { Example, ExampleSource, FrameworkInstall, Installation } from "./docs/framework-code"
import { FrameworkHint } from "./docs/framework-hint"
import { UpstreamNotice } from "./docs/upstream-notice"
import type { DocVariant } from "./docs/variant"

export type MDXComponents = Record<string, ComponentType<any>>

function Pre({ children }: { children?: ReactNode }) {
  if (!isValidElement<{ children?: ReactNode; className?: string }>(children)) return <pre>{children}</pre>
  const { children: code, className } = children.props
  return <CodeBlock code={String(code ?? "")} lang={className?.replace("language-", "")} />
}

function Table({ children }: { children?: ReactNode }) {
  return (
    <styled.div
      className="not-prose"
      overflowX="auto"
      my="6"
      css={{
        "& code": {
          fontFamily: "mono",
          fontSize: "0.875em",
          whiteSpace: "nowrap",
          px: "1",
          py: "0.5",
          borderRadius: "l1",
          bg: "bg.muted",
        },
      }}
    >
      <DsTable.Root size="sm">{children}</DsTable.Root>
    </styled.div>
  )
}

const sharedComponents: MDXComponents = {
  pre: Pre,
  table: Table,
  thead: DsTable.Header,
  tbody: DsTable.Body,
  tfoot: DsTable.Footer,
  tr: DsTable.Row,
  th: DsTable.ColumnHeader,
  td: DsTable.Cell,
  ApiTable,
  FrameworkHint,
  UpstreamNotice,
}

type VariantComponentProps<P> = Omit<P, keyof DocVariant>

const variantComponents = (variant: DocVariant, docsUrl: string): MDXComponents => ({
  Example: (props: VariantComponentProps<ComponentProps<typeof Example>>) => <Example {...props} {...variant} />,
  ExampleCode: (props: VariantComponentProps<ComponentProps<typeof ExampleSource>>) => (
    <ExampleSource {...props} {...variant} scrollable />
  ),
  FrameworkInstall: (props: VariantComponentProps<ComponentProps<typeof FrameworkInstall>>) => (
    <FrameworkInstall {...props} {...variant} />
  ),
  Installation: (props: Omit<VariantComponentProps<ComponentProps<typeof Installation>>, "docsUrl">) => (
    <Installation {...props} {...variant} docsUrl={docsUrl} />
  ),
})

function getMDXComponent(code: string): ComponentType<{ components?: MDXComponents }> {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXContentProps {
  code: string
  variant?: DocVariant
  docsUrl?: string
  components?: MDXComponents
}

export function MDXContent({ code, variant, docsUrl, components }: MDXContentProps) {
  const Component = getMDXComponent(code)
  return (
    <Component
      components={{ ...sharedComponents, ...(variant && variantComponents(variant, docsUrl ?? "")), ...components }}
    />
  )
}
