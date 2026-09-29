import { Tabs } from "@isbatak/react-ui/tabs"
import { Children, isValidElement, type ReactNode } from "react"

import { CodeBody } from "../code/code-block"
import { CodeTabs } from "../code/code-tabs"

interface CodeFileProps {
  name: string
  children: ReactNode
}

interface CodeElementProps {
  children?: ReactNode
  className?: string
}

export function CodeFile({ children }: CodeFileProps) {
  return <>{children}</>
}

export function readCode(children: ReactNode) {
  const pre = Children.toArray(children).find(isValidElement<{ children?: ReactNode }>)
  const code = pre && Children.toArray(pre.props.children).find(isValidElement<CodeElementProps>)
  return {
    code: String(code?.props.children ?? ""),
    lang: code?.props.className?.replace("language-", ""),
  }
}

export function CodeFiles({ children }: { children: ReactNode }) {
  const files = Children.toArray(children)
    .filter(isValidElement<CodeFileProps>)
    .map((file) => ({ name: file.props.name, ...readCode(file.props.children) }))

  return (
    <CodeTabs files={files}>
      {files.map((file) => (
        <Tabs.Content key={file.name} value={file.name} p="0">
          <CodeBody code={file.code} lang={file.lang} />
        </Tabs.Content>
      ))}
    </CodeTabs>
  )
}
