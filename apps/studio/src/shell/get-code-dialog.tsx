import { Dialog } from "@ark-ui/react/dialog"
import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { dialog } from "@isbatak/panda-ds/recipes"
import { useState } from "react"
import { styled } from "styled-system/jsx"

import { generateCss } from "../lib/css"
import { toPresetSource } from "../lib/export"
import { codeBlock } from "./inspector"
import { Muted, Toggle, ToggleItem } from "./ui"
import type { Studio } from "./use-studio"

const { withRootProvider, withContext } = createSlotRecipeContext(dialog)
const DialogRoot = withRootProvider(Dialog.Root)
const DialogBackdrop = withContext(Dialog.Backdrop, "backdrop")
const DialogPositioner = withContext(Dialog.Positioner, "positioner")
const DialogContent = withContext(Dialog.Content, "content")
const DialogHeader = withContext("div", "header")
const DialogTitle = withContext(Dialog.Title, "title")
const DialogDescription = withContext(Dialog.Description, "description")
const DialogBody = withContext("div", "body")

type Format = "preset" | "css" | "json"

function download(filename: string, content: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }))
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

export function GetCodeDialog(props: { studio: Studio }) {
  const { doc, themeName } = props.studio.state
  const [format, setFormat] = useState<Format>("preset")
  const [copied, setCopied] = useState(false)

  const code =
    format === "preset"
      ? toPresetSource(doc, themeName)
      : format === "css"
        ? generateCss(doc) || "/* No edits yet */\n"
        : `${JSON.stringify(doc, null, 2)}\n`
  const filename =
    format === "preset" ? `${themeName}.preset.ts` : format === "css" ? `${themeName}.css` : `${themeName}.json`

  return (
    <DialogRoot size="lg" lazyMount unmountOnExit>
      <Dialog.Trigger asChild>
        <Button size="xs">Get code</Button>
      </Dialog.Trigger>
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent>
            <DialogHeader flexDirection="column" alignItems="flex-start" gap="1">
              <DialogTitle>Get code</DialogTitle>
              <DialogDescription>Take this theme into the design system or any Panda project.</DialogDescription>
            </DialogHeader>
            <DialogBody display="flex" flexDirection="column" gap="3" pb="6">
              <Toggle aria-label="Format" value={format} onChange={setFormat}>
                <ToggleItem value="preset">Panda preset</ToggleItem>
                <ToggleItem value="css">CSS</ToggleItem>
                <ToggleItem value="json">Studio JSON</ToggleItem>
              </Toggle>
              {format === "preset" && (
                <Muted>
                  Deep-merges into @isbatak/panda-ds through <code>theme.extend</code>. Add it to <code>presets</code>{" "}
                  in packages/panda/ds/panda.config.ts to make it part of the design system, or in an app's config.
                </Muted>
              )}
              {format === "css" && (
                <Muted>
                  Plain CSS layered like Panda's output. Load it after the Panda stylesheet to apply the theme.
                </Muted>
              )}
              {format === "json" && (
                <Muted>The raw studio document. Share it or save it under apps/studio/themes.</Muted>
              )}
              <pre className={codeBlock} style={{ maxHeight: "24rem" }}>
                {code}
              </pre>
              <styled.div display="flex" gap="2" justifyContent="flex-end">
                <Button
                  size="xs"
                  variant="outline"
                  onClick={() => download(filename, code, format === "json" ? "application/json" : "text/plain")}
                >
                  Download
                </Button>
                <Button
                  size="xs"
                  onClick={async () => {
                    await navigator.clipboard.writeText(code)
                    setCopied(true)
                    setTimeout(() => setCopied(false), 1500)
                  }}
                >
                  {copied ? "Copied" : "Copy"}
                </Button>
              </styled.div>
            </DialogBody>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  )
}
