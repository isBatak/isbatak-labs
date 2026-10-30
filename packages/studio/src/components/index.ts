import { recipeName } from "../component-matrix/axes"
import type { ComponentMatrix } from "../component-matrix/define-component-matrix"
import { accordionMatrix } from "./accordion"
import { alertMatrix } from "./alert"
import { avatarMatrix } from "./avatar"
import { badgeMatrix } from "./badge"
import { buttonMatrix } from "./button"
import { cardMatrix } from "./card"
import { checkboxMatrix } from "./checkbox"
import { closeButtonMatrix } from "./close-button"
import { drawerMatrix } from "./drawer"
import { hoverCardMatrix } from "./hover-card"
import { iconButtonMatrix } from "./icon-button"
import { inputMatrix } from "./input"
import { kbdMatrix } from "./kbd"
import { menuMatrix } from "./menu"
import { popoverMatrix } from "./popover"
import { radioCardMatrix } from "./radio-card"
import { segmentGroupMatrix } from "./segment-group"
import { selectMatrix } from "./select"
import { sliderMatrix } from "./slider"
import { spinnerMatrix } from "./spinner"
import { switchMatrix } from "./switch"
import { tabsMatrix } from "./tabs"
import { tooltipMatrix } from "./tooltip"

function component(label: string, matrices: ComponentMatrix[]) {
  const [recipe, ...others] = new Set(matrices.map((matrix) => recipeName(matrix.recipe)))
  if (!recipe || others.length) throw new Error(`${label}: every matrix on a page must use the same recipe`)
  return { label, recipe, matrices }
}

/** Component pages, in sidebar order */
export const components = {
  accordion: component("Accordion", [accordionMatrix]),
  alert: component("Alert", [alertMatrix]),
  avatar: component("Avatar", [avatarMatrix]),
  badge: component("Badge", [badgeMatrix]),
  button: component("Button", [buttonMatrix]),
  card: component("Card", [cardMatrix]),
  checkbox: component("Checkbox", [checkboxMatrix]),
  closeButton: component("Close Button", [closeButtonMatrix]),
  drawer: component("Drawer", [drawerMatrix]),
  hoverCard: component("Hover Card", [hoverCardMatrix]),
  iconButton: component("Icon Button", [iconButtonMatrix]),
  input: component("Input", [inputMatrix]),
  kbd: component("Kbd", [kbdMatrix]),
  menu: component("Menu", [menuMatrix]),
  popover: component("Popover", [popoverMatrix]),
  radioCard: component("Radio Card", [radioCardMatrix]),
  segmentGroup: component("Segment Group", [segmentGroupMatrix]),
  select: component("Select", [selectMatrix]),
  slider: component("Slider", [sliderMatrix]),
  spinner: component("Spinner", [spinnerMatrix]),
  switch: component("Switch", [switchMatrix]),
  tabs: component("Tabs", [tabsMatrix]),
  tooltip: component("Tooltip", [tooltipMatrix]),
}
