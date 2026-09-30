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

/** The Panda CSS mark */
function PandaMark() {
  return (
    <styled.svg viewBox="0 0.3 33.05 33.4" w="6" h="6" flexShrink="0" aria-hidden>
      <path
        d="M0 4.12886C0 2.01551 1.71321 0.302307 3.82656 0.302307H29.221C31.3343 0.302307 33.0475 2.01551 33.0475 4.12886V29.8711C33.0475 31.9845 31.3343 33.6977 29.221 33.6977H3.82656C1.71321 33.6977 0 31.9845 0 29.8711V4.12886Z"
        fill="#F6E458"
      />
      <path
        d="M21.1783 7.76704C19.355 7.24329 17.4952 7.17211 15.6 7.34161C14.5394 7.45181 13.5198 7.66234 12.5363 8.03177C10.4105 8.83028 8.81442 10.2132 7.86268 12.2955C7.18036 13.7883 6.93376 15.374 6.90806 17.0011C6.8809 18.7205 7.09638 20.4162 7.43877 22.0974C7.74912 23.6212 8.16242 25.1152 8.75268 26.5574C8.80876 26.6944 8.87861 26.7406 9.02829 26.7403C10.8951 26.7363 12.762 26.7363 14.6289 26.7363C15.1815 26.7363 15.7342 26.7363 16.2869 26.7362C16.3292 26.7362 16.3715 26.7339 16.4202 26.7312C16.445 26.7299 16.4715 26.7284 16.5005 26.7271C16.4893 26.7004 16.4793 26.6759 16.4698 26.6529C16.4514 26.6077 16.4353 26.5684 16.4173 26.5299C16.2823 26.2411 16.1445 25.9536 16.0067 25.666C15.7078 25.0422 15.409 24.4184 15.1387 23.7824C14.3188 21.8537 13.691 19.8678 13.4994 17.7657C13.4149 16.8382 13.4266 15.916 13.684 15.0122C13.9781 13.9791 14.6093 13.2498 15.6558 12.9449C16.6168 12.665 17.5912 12.6668 18.5469 12.9759C19.3999 13.2517 19.956 13.8344 20.1926 14.7068C20.3743 15.3768 20.3742 16.054 20.2368 16.7295C20.1309 17.2495 19.9179 17.7241 19.5344 18.1037C18.8464 18.7847 17.9873 18.9413 17.0654 18.8891C16.9014 18.8798 16.7379 18.8619 16.5694 18.8433C16.4905 18.8347 16.4105 18.8259 16.3288 18.8178C16.3311 18.8439 16.3324 18.8679 16.3337 18.8904C16.336 18.9347 16.3381 18.9731 16.3472 19.0098C16.3865 19.1677 16.424 19.3262 16.4614 19.4847C16.5516 19.8665 16.6418 20.2483 16.7577 20.6221C16.9855 21.3561 17.2502 22.0725 17.5504 22.7719C19.6902 22.6049 21.661 22.073 23.7528 20.8173C23.7842 20.7975 23.8128 20.7796 23.8414 20.7618C24.7399 20.2024 25.4671 19.4768 25.9686 18.5398C26.7808 17.0224 26.9391 15.3997 26.6978 13.7248C26.4488 11.9962 25.6731 10.5453 24.3377 9.40723C23.4116 8.61786 22.3406 8.10091 21.1783 7.76704Z"
        fill="black"
      />
    </styled.svg>
  )
}
