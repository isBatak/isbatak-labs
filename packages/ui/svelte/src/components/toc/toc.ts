import { Toc } from "@ark-ui/svelte/toc"

export { default as TocRoot, type TocRootProps } from "./toc-root.svelte"
export { default as TocTitle, type TocTitleProps } from "./toc-title.svelte"
export { default as TocList, type TocListProps } from "./toc-list.svelte"
export { default as TocItem, type TocItemProps } from "./toc-item.svelte"
export { default as TocLink, type TocLinkProps } from "./toc-link.svelte"
export { default as TocIndicator, type TocIndicatorProps } from "./toc-indicator.svelte"
export { default as TocTrack, type TocTrackProps } from "./toc-track.svelte"
export const TocContext = Toc.Context
export type TocContextProps = Toc.ContextProps
