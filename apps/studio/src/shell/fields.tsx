import { useState } from "react"
import { styled } from "styled-system/jsx"

import { listTokens } from "../lib/theme-meta"
import { ColorPill, ColorTokenPicker } from "./color-token-picker"
import { Icon, IconButton, ResetIcon, TextInput, dot } from "./ui"

/** `<datalist>`s with token suggestions, rendered once and referenced by id from inputs */
export function TokenDatalists() {
  return (
    <>
      <TokenDatalist category="colors" />
      <TokenDatalist category="spacing" />
      <TokenDatalist category="sizes" />
      <TokenDatalist category="radii" />
      <TokenDatalist category="shadows" />
      <TokenDatalist category="fonts" />
      <TokenDatalist category="fontSizes" />
      <TokenDatalist category="fontWeights" />
      <TokenDatalist category="lineHeights" />
      <TokenDatalist category="letterSpacings" />
      <TokenDatalist category="borders" />
    </>
  )
}

function TokenDatalist(props: { category: string }) {
  const { category } = props
  return (
    <>
      <datalist id={`names-${category}`}>
        {listTokens(category).map((entry) => (
          <option key={`${entry.name}-${entry.semantic}`} value={entry.name} />
        ))}
      </datalist>
      <datalist id={`refs-${category}`}>
        {listTokens(category, { semantic: false }).map((entry) => (
          <option key={entry.name} value={`{${category}.${entry.name}}`} />
        ))}
      </datalist>
    </>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Field
 * -----------------------------------------------------------------------------------------------*/

export interface FieldProps {
  label: string
  /** Current override, if any */
  value: string | undefined
  /** Value inherited from the theme, shown as placeholder */
  inherited: string | undefined
  /** Where the inherited value comes from, when it isn't the current scope */
  hint?: string | undefined
  /** Token category for suggestions */
  category?: string | undefined
  /** Suggest `{category.name}` references (semantic tokens) instead of bare names (recipes) */
  references?: boolean
  onChange: (value: string | undefined) => void
  color?: boolean
  /** Opens the color picker on mount (a swatch was just clicked on the canvas) */
  autoOpen?: boolean
}

export function Field(props: FieldProps) {
  const overridden = props.value !== undefined
  const effective = props.value ?? props.inherited ?? ""
  const listId = props.category ? `${props.references ? "refs" : "names"}-${props.category}` : undefined

  return (
    <styled.div display="grid" gridTemplateColumns="6.5rem 1fr" alignItems="center" gap="2">
      <styled.span
        display="flex"
        alignItems="center"
        gap="1.5"
        textStyle="xs"
        color="fg.muted"
        truncate
        title={props.label}
      >
        {props.label}
        {overridden && <span className={dot} />}
      </styled.span>
      <styled.div display="flex" alignItems="center" gap="1" minW="0">
        {props.color ? (
          <>
            <ColorTokenPicker
              label={props.label}
              value={effective}
              references={props.references}
              defaultOpen={props.autoOpen}
              onChange={(value) => props.onChange(value)}
            >
              <ColorPill value={effective} inherited={!overridden} label={props.label} />
            </ColorTokenPicker>
            <CopyButton value={effective} label={props.label} />
          </>
        ) : (
          <TextInput
            aria-label={props.label}
            list={listId}
            value={props.value ?? ""}
            placeholder={props.inherited ?? "not set"}
            onChange={(event) => props.onChange(event.target.value || undefined)}
          />
        )}
        {overridden ? (
          <IconButton label={`Reset ${props.label}`} onClick={() => props.onChange(undefined)}>
            <ResetIcon />
          </IconButton>
        ) : (
          <styled.span w="7" flexShrink="0" />
        )}
      </styled.div>
      {props.hint && !overridden && (
        <styled.span gridColumn="2" textStyle="2xs" color="fg.subtle" mt="-1">
          {props.hint}
        </styled.span>
      )}
    </styled.div>
  )
}

function CopyButton(props: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <IconButton
      label={copied ? "Copied" : `Copy ${props.label}`}
      onClick={() => {
        navigator.clipboard.writeText(props.value).then(
          () => {
            setCopied(true)
            setTimeout(() => setCopied(false), 1200)
          },
          () => {},
        )
      }}
    >
      {copied ? (
        <Icon>
          <path d="M20 6 9 17l-5-5" />
        </Icon>
      ) : (
        <Icon>
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </Icon>
      )}
    </IconButton>
  )
}
