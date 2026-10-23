import { Avatar as ArkAvatar } from "@ark-ui/react/avatar"
import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox"
import { Switch as ArkSwitch } from "@ark-ui/react/switch"
import { createSlotRecipeContext, styled } from "@isbatak/panda-ds/jsx"
import { alert, avatar, card, checkbox, input, kbd, swittch } from "@isbatak/panda-ds/recipes"

/**
 * Minimal styled components for recipes that don't have a component in `@isbatak/react-ui` yet, so the studio can
 * preview and edit them too.
 */

const cardContext = createSlotRecipeContext(card)
export const Card = {
  Root: cardContext.withProvider("div", "root"),
  Header: cardContext.withContext("div", "header"),
  Body: cardContext.withContext("div", "body"),
  Footer: cardContext.withContext("div", "footer"),
  Title: cardContext.withContext("h3", "title"),
  Description: cardContext.withContext("p", "description"),
}

const alertContext = createSlotRecipeContext(alert)
export const Alert = {
  Root: alertContext.withProvider("div", "root"),
  Indicator: alertContext.withContext("span", "indicator"),
  Content: alertContext.withContext("div", "content"),
  Title: alertContext.withContext("div", "title"),
  Description: alertContext.withContext("div", "description"),
}

const avatarContext = createSlotRecipeContext(avatar)
export const Avatar = {
  Root: avatarContext.withProvider(ArkAvatar.Root, "root"),
  Image: avatarContext.withContext(ArkAvatar.Image, "image"),
  Fallback: avatarContext.withContext(ArkAvatar.Fallback, "fallback"),
}

const checkboxContext = createSlotRecipeContext(checkbox)
export const Checkbox = {
  Root: checkboxContext.withProvider(ArkCheckbox.Root, "root"),
  Control: checkboxContext.withContext(ArkCheckbox.Control, "control"),
  Indicator: checkboxContext.withContext(ArkCheckbox.Indicator, "indicator"),
  Label: checkboxContext.withContext(ArkCheckbox.Label, "label"),
  HiddenInput: ArkCheckbox.HiddenInput,
}

const switchContext = createSlotRecipeContext(swittch)
export const Switch = {
  Root: switchContext.withProvider(ArkSwitch.Root, "root"),
  Control: switchContext.withContext(ArkSwitch.Control, "control"),
  Thumb: switchContext.withContext(ArkSwitch.Thumb, "thumb"),
  Label: switchContext.withContext(ArkSwitch.Label, "label"),
  HiddenInput: ArkSwitch.HiddenInput,
}

export const Input = styled("input", input)

export const Kbd = styled("kbd", kbd)

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  )
}
