import { accordionSlotRecipe } from "./accordion"
import { actionBarSlotRecipe } from "./action-bar"
import { actionItemSlotRecipe } from "./action-item"
import { alertSlotRecipe } from "./alert"
import { angleSliderSlotRecipe } from "./angle-slider"
import { avatarSlotRecipe } from "./avatar"
import { badgeRecipe } from "./badge"
import { beaconRecipe } from "./beacon"
import { blockquoteSlotRecipe } from "./blockquote"
import { bottomNavBarSlotRecipe } from "./bottom-nav-bar"
import { breadcrumbSlotRecipe } from "./breadcrumb"
import { buttonRecipe } from "./button"
import { cardSlotRecipe } from "./card"
import { carouselSlotRecipe } from "./carousel"
import { checkboxSlotRecipe } from "./checkbox"
import { checkboxCardSlotRecipe } from "./checkbox-card"
import { checkmarkRecipe } from "./checkmark"
import { clipboardSlotRecipe } from "./clipboard"
import { codeRecipe } from "./code"
import { collapsibleSlotRecipe } from "./collapsible"
import { colorPickerSlotRecipe } from "./color-picker"
import { colorSwatchRecipe } from "./color-swatch"
import { comboboxSlotRecipe } from "./combobox"
import { commandSlotRecipe } from "./command"
import { containerRecipe } from "./container"
import { dataListSlotRecipe } from "./data-list"
import { dateInputSlotRecipe } from "./date-input"
import { datePickerSlotRecipe } from "./date-picker"
import { dialogSlotRecipe } from "./dialog"
import { drawerSlotRecipe } from "./drawer"
import { editableSlotRecipe } from "./editable"
import { emRecipe } from "./em"
import { emptyStateSlotRecipe } from "./empty-state"
import { fieldSlotRecipe } from "./field"
import { fieldsetSlotRecipe } from "./fieldset"
import { fileUploadSlotRecipe } from "./file-upload"
import { floatingPanelSlotRecipe } from "./floating-panel"
import { gridTableSlotRecipe } from "./grid-table"
import { groupRecipe } from "./group"
import { headingRecipe } from "./heading"
import { hoverCardSlotRecipe } from "./hover-card"
import { imageCropperSlotRecipe } from "./image-cropper"
import { iconRecipe } from "./icon"
import { imageRecipe } from "./image"
import { frameRecipe } from "./frame"
import { jsonTreeViewSlotRecipe } from "./json-tree-view"
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
import { menubarSlotRecipe } from "./menubar"
import { nativeSelectSlotRecipe } from "./native-select"
import { navigationMenuSlotRecipe } from "./navigation-menu"
import { numberInputSlotRecipe } from "./number-input"
import { numberStepperInputSlotRecipe } from "./number-stepper-input"
import { paginationSlotRecipe } from "./pagination"
import { passwordInputSlotRecipe } from "./password-input"
import { pinInputSlotRecipe } from "./pin-input"
import { popoverSlotRecipe } from "./popover"
import { progressSlotRecipe } from "./progress"
import { progressCircleSlotRecipe } from "./progress-circle"
import { qrCodeSlotRecipe } from "./qr-code"
import { radioCardSlotRecipe } from "./radio-card"
import { radioGroupSlotRecipe } from "./radio-group"
import { radiomarkRecipe } from "./radiomark"
import { ratingGroupSlotRecipe } from "./rating-group"
import { rippleRecipe } from "./ripple"
import { scrollAreaSlotRecipe } from "./scroll-area"
import { searchInputSlotRecipe } from "./search-input"
import { segmentGroupSlotRecipe } from "./segment-group"
import { selectSlotRecipe } from "./select"
import { separatorRecipe } from "./separator"
import { sidebarSlotRecipe } from "./sidebar"
import { signaturePadSlotRecipe } from "./signature-pad"
import { skeletonRecipe } from "./skeleton"
import { skipNavLinkRecipe } from "./skip-nav-link"
import { sliderSlotRecipe } from "./slider"
import { spinnerRecipe } from "./spinner"
import { splitterSlotRecipe } from "./splitter"
import { statSlotRecipe } from "./stat"
import { statusSlotRecipe } from "./status"
import { stepsSlotRecipe } from "./steps"
import { strongRecipe } from "./strong"
import { swapSlotRecipe } from "./swap"
import { switchSlotRecipe } from "./switch"
import { tableSlotRecipe } from "./table"
import { tabsSlotRecipe } from "./tabs"
import { tagSlotRecipe } from "./tag"
import { tagsInputSlotRecipe } from "./tags-input"
import { textareaRecipe } from "./textarea"
import { timelineSlotRecipe } from "./timeline"
import { timerSlotRecipe } from "./timer"
import { toastSlotRecipe } from "./toast"
import { tocSlotRecipe } from "./toc"
import { toggleGroupSlotRecipe } from "./toggle-group"
import { toneSlotRecipe } from "./tone"
import { tooltipSlotRecipe } from "./tooltip"
import { tourSlotRecipe } from "./tour"
import { treeViewSlotRecipe } from "./tree-view"
import { virtualizerSlotRecipe } from "./virtualizer"

export const recipes = {
  badge: badgeRecipe,
  beacon: beaconRecipe,
  button: buttonRecipe,
  code: codeRecipe,
  container: containerRecipe,
  em: emRecipe,
  heading: headingRecipe,
  input: inputRecipe,
  inputAddon: inputAddonRecipe,
  inputElement: inputElementRecipe,
  kbd: kbdRecipe,
  link: linkRecipe,
  mark: markRecipe,
  ripple: rippleRecipe,
  separator: separatorRecipe,
  strong: strongRecipe,
  skeleton: skeletonRecipe,
  skipNavLink: skipNavLinkRecipe,
  spinner: spinnerRecipe,
  textarea: textareaRecipe,
  icon: iconRecipe,
  image: imageRecipe,
  frame: frameRecipe,
  checkmark: checkmarkRecipe,
  radiomark: radiomarkRecipe,
  colorSwatch: colorSwatchRecipe,
  group: groupRecipe,
}

export const slotRecipes = {
  accordion: accordionSlotRecipe,
  actionBar: actionBarSlotRecipe,
  actionItem: actionItemSlotRecipe,
  angleSlider: angleSliderSlotRecipe,
  alert: alertSlotRecipe,
  avatar: avatarSlotRecipe,
  blockquote: blockquoteSlotRecipe,
  bottomNavBar: bottomNavBarSlotRecipe,
  breadcrumb: breadcrumbSlotRecipe,
  card: cardSlotRecipe,
  carousel: carouselSlotRecipe,
  checkbox: checkboxSlotRecipe,
  clipboard: clipboardSlotRecipe,
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
  imageCropper: imageCropperSlotRecipe,
  jsonTreeView: jsonTreeViewSlotRecipe,
  list: listSlotRecipe,
  listbox: listboxSlotRecipe,
  menu: menuSlotRecipe,
  menubar: menubarSlotRecipe,
  nativeSelect: nativeSelectSlotRecipe,
  navigationMenu: navigationMenuSlotRecipe,
  numberInput: numberInputSlotRecipe,
  numberStepperInput: numberStepperInputSlotRecipe,
  pagination: paginationSlotRecipe,
  passwordInput: passwordInputSlotRecipe,
  pinInput: pinInputSlotRecipe,
  popover: popoverSlotRecipe,
  progress: progressSlotRecipe,
  progressCircle: progressCircleSlotRecipe,
  radioCard: radioCardSlotRecipe,
  radioGroup: radioGroupSlotRecipe,
  ratingGroup: ratingGroupSlotRecipe,
  scrollArea: scrollAreaSlotRecipe,
  searchInput: searchInputSlotRecipe,
  segmentGroup: segmentGroupSlotRecipe,
  select: selectSlotRecipe,
  sidebar: sidebarSlotRecipe,
  signaturePad: signaturePadSlotRecipe,
  combobox: comboboxSlotRecipe,
  command: commandSlotRecipe,
  slider: sliderSlotRecipe,
  splitter: splitterSlotRecipe,
  stat: statSlotRecipe,
  steps: stepsSlotRecipe,
  swittch: switchSlotRecipe,
  table: tableSlotRecipe,
  tabs: tabsSlotRecipe,
  tag: tagSlotRecipe,
  tagsInput: tagsInputSlotRecipe,
  timer: timerSlotRecipe,
  toast: toastSlotRecipe,
  toc: tocSlotRecipe,
  tone: toneSlotRecipe,
  toggleGroup: toggleGroupSlotRecipe,
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
  swap: swapSlotRecipe,
  virtualizer: virtualizerSlotRecipe,
}
