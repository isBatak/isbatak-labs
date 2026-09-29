import { Button } from "@isbatak/react-ui/button"
import { useState } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { emptyDoc } from "../lib/doc"
import { GetCodeDialog } from "./get-code-dialog"
import { IconButton, MoonIcon, NativeSelect, RedoIcon, SunIcon, Toggle, ToggleItem, UndoIcon } from "./ui"
import { type Studio, encodeShare } from "./use-studio"

const NEW_THEME = "__new__"

export function TopBar(props: { studio: Studio }) {
  const { state, dispatch, saveToRepo } = props.studio
  const [status, setStatus] = useState<string>()

  const flash = (message: string) => {
    setStatus(message)
    setTimeout(() => setStatus(undefined), 2000)
  }

  return (
    <styled.header
      gridColumn="1 / -1"
      display="grid"
      gridTemplateColumns="1fr auto 1fr"
      alignItems="center"
      h="12"
      px="3"
      borderBottomWidth="1px"
      borderColor="border.muted"
      bg="bg"
    >
      <styled.div display="flex" alignItems="center" gap="2">
        <PandaMark />
        <styled.span textStyle="sm" fontWeight="semibold">
          Panda Studio
        </styled.span>
        <styled.span textStyle="2xs" px="1.5" py="0.5" borderRadius="sm" bg="bg.muted" color="fg.muted">
          @isbatak/panda-ds
        </styled.span>
      </styled.div>

      <styled.div display="flex" alignItems="center" gap="1">
        <NativeSelect
          aria-label="Theme"
          value={state.themeName}
          className={css({ w: "40" })}
          onChange={(event) => {
            if (event.target.value !== NEW_THEME) {
              dispatch({ type: "switch-theme", name: event.target.value })
              return
            }
            const name = window.prompt("Theme name (letters, numbers, dashes)")?.trim()
            if (!name) return
            if (!/^[\w-]+$/.test(name)) {
              window.alert("Use letters, numbers, dashes and underscores only.")
              return
            }
            dispatch({ type: "switch-theme", name, doc: state.themes[name] ?? emptyDoc() })
          }}
        >
          {Object.keys(state.themes).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
          <option value={NEW_THEME}>New theme…</option>
        </NativeSelect>
        <IconButton label="Undo (⌘Z)" disabled={!state.past.length} onClick={() => dispatch({ type: "undo" })}>
          <UndoIcon />
        </IconButton>
        <IconButton label="Redo (⇧⌘Z)" disabled={!state.future.length} onClick={() => dispatch({ type: "redo" })}>
          <RedoIcon />
        </IconButton>
      </styled.div>

      <styled.div display="flex" alignItems="center" justifyContent="flex-end" gap="2">
        {status && (
          <styled.span textStyle="xs" color="fg.muted">
            {status}
          </styled.span>
        )}
        <Toggle
          aria-label="Canvas color mode"
          value={state.colorMode}
          onChange={(colorMode) => dispatch({ type: "color-mode", colorMode })}
        >
          <ToggleItem value="base">
            <SunIcon />
          </ToggleItem>
          <ToggleItem value="_dark">
            <MoonIcon />
          </ToggleItem>
        </Toggle>
        <Button
          size="xs"
          variant="outline"
          onClick={async () => {
            const url = new URL(window.location.href)
            url.searchParams.set("theme", encodeShare(state.doc))
            await navigator.clipboard.writeText(url.toString())
            flash("Link copied")
          }}
        >
          Share
        </Button>
        {import.meta.env.DEV && (
          <Button
            size="xs"
            variant="outline"
            title={`Writes apps/studio/themes/${state.themeName}.json and .preset.ts`}
            onClick={() =>
              saveToRepo().then(
                () => flash(`Saved themes/${state.themeName}`),
                (error: unknown) => flash(`Save failed: ${String(error)}`),
              )
            }
          >
            Save to repo
          </Button>
        )}
        <GetCodeDialog studio={props.studio} />
      </styled.div>
    </styled.header>
  )
}

function PandaMark() {
  return (
    <styled.svg viewBox="0 0 24 24" w="5" h="5" aria-hidden>
      <rect width="24" height="24" rx="6" fill="currentColor" />
      <circle cx="8.5" cy="10" r="2.5" fill="white" />
      <circle cx="15.5" cy="10" r="2.5" fill="white" />
      <path d="M9 16.5c1.8 1.2 4.2 1.2 6 0" stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </styled.svg>
  )
}
