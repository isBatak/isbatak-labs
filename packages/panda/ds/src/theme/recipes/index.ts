import { accordionSlotRecipe } from "./accordion"
import { actionBarSlotRecipe } from "./action-bar"
import { alertSlotRecipe } from "./alert"
import { avatarSlotRecipe } from "./avatar"
import { badgeRecipe } from "./badge"
import { blockquoteSlotRecipe } from "./blockquote"
import { breadcrumbSlotRecipe } from "./breadcrumb"
import { buttonRecipe } from "./button"
import { cardSlotRecipe } from "./card"
import { carouselSlotRecipe } from "./carousel"
import { checkboxSlotRecipe } from "./checkbox"
import { checkboxCardSlotRecipe } from "./checkbox-card"
import { checkmarkRecipe } from "./checkmark"
import { codeRecipe } from "./code"
import { collapsibleSlotRecipe } from "./collapsible"
import { colorPickerSlotRecipe } from "./color-picker"
import { colorSwatchRecipe } from "./color-swatch"
import { comboboxSlotRecipe } from "./combobox"
import { dataListSlotRecipe } from "./data-list"
import { dateInputSlotRecipe } from "./date-input"
import { datePickerSlotRecipe } from "./date-picker"
import { dialogSlotRecipe } from "./dialog"
import { drawerSlotRecipe } from "./drawer"
import { editableSlotRecipe } from "./editable"
import { emptyStateSlotRecipe } from "./empty-state"
import { fieldSlotRecipe } from "./field"
import { fieldsetSlotRecipe } from "./fieldset"
import { fileUploadSlotRecipe } from "./file-upload"
import { floatingPanelSlotRecipe } from "./floating-panel"
import { gridTableSlotRecipe } from "./grid-table"
import { groupRecipe } from "./group"
import { headingRecipe } from "./heading"
import { hoverCardSlotRecipe } from "./hover-card"
import { iconRecipe } from "./icon"
import { inputRecipe } from "./input"
import { inputAddonRecipe } from "./input-addon"
import { inputElementRecipe } from "./input-element"
import { kbdRecipe } from "./kbd"
import { linkRecipe } from "./link"
import { listSlotRecipe } from "./list"
import { listboxSlotRecipe } from "./listbox"
import { markRecipe } from "./mark"
import { marqueeSlotRecipe } from "./marquee"
import { menuSlotRecipe } from "./menu"
import { nativeSelectSlotRecipe } from "./native-select"
import { navigationMenuSlotRecipe } from "./navigation-menu"
import { numberInputSlotRecipe } from "./number-input"
import { pinInputSlotRecipe } from "./pin-input"
import { popoverSlotRecipe } from "./popover"
import { progressSlotRecipe } from "./progress"
import { progressCircleSlotRecipe } from "./progress-circle"
import { qrCodeSlotRecipe } from "./qr-code"
import { radioCardSlotRecipe } from "./radio-card"
import { radioGroupSlotRecipe } from "./radio-group"
import { radiomarkRecipe } from "./radiomark"
import { ratingGroupSlotRecipe } from "./rating-group"
import { scrollAreaSlotRecipe } from "./scroll-area"
import { segmentGroupSlotRecipe } from "./segment-group"
import { selectSlotRecipe } from "./select"
import { separatorRecipe } from "./separator"
import { skeletonRecipe } from "./skeleton"
import { skipNavLinkRecipe } from "./skip-nav-link"
import { sliderSlotRecipe } from "./slider"
import { spinnerRecipe } from "./spinner"
import { splitterSlotRecipe } from "./splitter"
import { statSlotRecipe } from "./stat"
import { statusSlotRecipe } from "./status"
import { stepsSlotRecipe } from "./steps"
import { switchSlotRecipe } from "./switch"
import { tableSlotRecipe } from "./table"
import { tabsSlotRecipe } from "./tabs"
import { tagSlotRecipe } from "./tag"
import { tagsInputSlotRecipe } from "./tags-input"
import { textareaRecipe } from "./textarea"
import { timelineSlotRecipe } from "./timeline"
import { toastSlotRecipe } from "./toast"
import { tocSlotRecipe } from "./toc"
import { tooltipSlotRecipe } from "./tooltip"
import { tourSlotRecipe } from "./tour"
import { treeViewSlotRecipe } from "./tree-view"

export const recipes = {
  badge: badgeRecipe,
  button: buttonRecipe,
  code: codeRecipe,
  heading: headingRecipe,
  input: inputRecipe,
  inputAddon: inputAddonRecipe,
  inputElement: inputElementRecipe,
  kbd: kbdRecipe,
  link: linkRecipe,
  mark: markRecipe,
  separator: separatorRecipe,
  skeleton: skeletonRecipe,
  skipNavLink: skipNavLinkRecipe,
  spinner: spinnerRecipe,
  textarea: textareaRecipe,
  icon: iconRecipe,
  checkmark: checkmarkRecipe,
  radiomark: radiomarkRecipe,
  colorSwatch: colorSwatchRecipe,
  group: groupRecipe,
}

export const slotRecipes = {
  accordion: accordionSlotRecipe,
  actionBar: actionBarSlotRecipe,
  alert: alertSlotRecipe,
  avatar: avatarSlotRecipe,
  blockquote: blockquoteSlotRecipe,
  breadcrumb: breadcrumbSlotRecipe,
  card: cardSlotRecipe,
  carousel: carouselSlotRecipe,
  checkbox: checkboxSlotRecipe,
  checkboxCard: checkboxCardSlotRecipe,
  collapsible: collapsibleSlotRecipe,
  dataList: dataListSlotRecipe,
  dateInput: dateInputSlotRecipe,
  datePicker: datePickerSlotRecipe,
  dialog: dialogSlotRecipe,
  drawer: drawerSlotRecipe,
  editable: editableSlotRecipe,
  emptyState: emptyStateSlotRecipe,
  field: fieldSlotRecipe,
  fieldset: fieldsetSlotRecipe,
  fileUpload: fileUploadSlotRecipe,
  hoverCard: hoverCardSlotRecipe,
  list: listSlotRecipe,
  listbox: listboxSlotRecipe,
  menu: menuSlotRecipe,
  nativeSelect: nativeSelectSlotRecipe,
  navigationMenu: navigationMenuSlotRecipe,
  numberInput: numberInputSlotRecipe,
  pinInput: pinInputSlotRecipe,
  popover: popoverSlotRecipe,
  progress: progressSlotRecipe,
  progressCircle: progressCircleSlotRecipe,
  radioCard: radioCardSlotRecipe,
  radioGroup: radioGroupSlotRecipe,
  ratingGroup: ratingGroupSlotRecipe,
  scrollArea: scrollAreaSlotRecipe,
  segmentGroup: segmentGroupSlotRecipe,
  select: selectSlotRecipe,
  combobox: comboboxSlotRecipe,
  slider: sliderSlotRecipe,
  splitter: splitterSlotRecipe,
  stat: statSlotRecipe,
  steps: stepsSlotRecipe,
  swittch: switchSlotRecipe,
  table: tableSlotRecipe,
  tabs: tabsSlotRecipe,
  tag: tagSlotRecipe,
  tagsInput: tagsInputSlotRecipe,
  toast: toastSlotRecipe,
  toc: tocSlotRecipe,
  tooltip: tooltipSlotRecipe,
  tour: tourSlotRecipe,
  status: statusSlotRecipe,
  timeline: timelineSlotRecipe,
  colorPicker: colorPickerSlotRecipe,
  qrCode: qrCodeSlotRecipe,
  treeView: treeViewSlotRecipe,
  marquee: marqueeSlotRecipe,
  floatingPanel: floatingPanelSlotRecipe,
  gridTable: gridTableSlotRecipe,
}
