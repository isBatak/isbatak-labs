import type { MDXComponents } from "../mdx-content"
import { CodeFile, CodeFiles } from "./code-files"
import { DocTabs, Tab } from "./doc-tabs"
import { Editor, Editors } from "./editors"
import { Faq, FaqItem } from "./faq"
import { Kbd } from "./kbd"
import { PackageInstall } from "./package-install"
import { SetupPrompt } from "./setup-prompt"
import { Term } from "./term"

export const toolComponents: MDXComponents = {
  CodeFile,
  CodeFiles,
  Editor,
  Editors,
  Faq,
  FaqItem,
  Kbd,
  PackageInstall,
  SetupPrompt,
  Tab,
  Tabs: DocTabs,
  Term,
}
