import { Button } from "@isbatak/react-ui/button"
import { Wordmark } from "@isbatak/react-ui/wordmark"
import { useState } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"
import { themeVariants } from "virtual:panda-studio/project"

import { countOverrides } from "../lib/doc"
import { GetCodeDialog } from "./get-code-dialog"
import { MoonIcon, SelectInput, SunIcon, Toggle, ToggleItem } from "./ui"
import { type Studio, encodeShare } from "./use-studio"

export function TopBar(props: { studio: Studio }) {
  const { state, dispatch, saveToSource } = props.studio
  const [status, setStatus] = useState<string>()

  const flash = (message: string) => {
    setStatus(message)
    setTimeout(() => setStatus(undefined), 2000)
  }

  return (
    <styled.header
      gridColumn="1 / -1"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      h="12"
      px="3"
      borderBottomWidth="1px"
      borderColor="border.muted"
      bg="bg"
    >
      <styled.div display="flex" alignItems="center" gap="2">
        <Wordmark product="studio" />
      </styled.div>

      <styled.div display="flex" alignItems="center" gap="2">
        {status && (
          <styled.span textStyle="xs" color="fg.muted">
            {status}
          </styled.span>
        )}
        {themeVariants.length > 0 && (
          <SelectInput
            aria-label="Theme variant"
            value={state.themeVariant ?? ""}
            className={css({ w: "32" })}
            options={[{ value: "", label: "Default" }, ...themeVariants.map((name) => ({ value: name, label: name }))]}
            onValueChange={(value) =>
              dispatch({
                type: "theme-variant",
                themeVariant: value || undefined,
              })
            }
          />
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
            title="Writes the edits into the theme's source files"
            disabled={!countOverrides(state.doc)}
            onClick={() =>
              saveToSource().then(
                ({ saved, written, skipped }) =>
                  flash(
                    skipped.length
                      ? `Saved ${saved}, kept ${skipped.length} (${skipped[0]!.reason})`
                      : `Saved ${saved} to ${written.join(", ")}`,
                  ),
                (error: unknown) => flash(`Save failed: ${String(error)}`),
              )
            }
          >
            Save to source
          </Button>
        )}
        <GetCodeDialog studio={props.studio} />
      </styled.div>
    </styled.header>
  )
}
