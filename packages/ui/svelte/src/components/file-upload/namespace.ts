export { default as Root, type FileUploadRootProps as RootProps } from "./file-upload-root.svelte"
export {
  default as RootProvider,
  type FileUploadRootProviderProps as RootProviderProps,
} from "./file-upload-root-provider.svelte"
export { default as Label, type FileUploadLabelProps as LabelProps } from "./file-upload-label.svelte"
export { default as Dropzone, type FileUploadDropzoneProps as DropzoneProps } from "./file-upload-dropzone.svelte"
export {
  default as DropzoneContent,
  type FileUploadDropzoneContentProps as DropzoneContentProps,
} from "./file-upload-dropzone-content.svelte"
export { default as Trigger, type FileUploadTriggerProps as TriggerProps } from "./file-upload-trigger.svelte"
export {
  default as ClearTrigger,
  type FileUploadClearTriggerProps as ClearTriggerProps,
} from "./file-upload-clear-trigger.svelte"
export { default as ItemGroup, type FileUploadItemGroupProps as ItemGroupProps } from "./file-upload-item-group.svelte"
export { default as Item, type FileUploadItemProps as ItemProps } from "./file-upload-item.svelte"
export {
  default as ItemPreview,
  type FileUploadItemPreviewProps as ItemPreviewProps,
} from "./file-upload-item-preview.svelte"
export {
  default as ItemPreviewImage,
  type FileUploadItemPreviewImageProps as ItemPreviewImageProps,
} from "./file-upload-item-preview-image.svelte"
export {
  default as ItemContent,
  type FileUploadItemContentProps as ItemContentProps,
} from "./file-upload-item-content.svelte"
export { default as ItemName, type FileUploadItemNameProps as ItemNameProps } from "./file-upload-item-name.svelte"
export {
  default as ItemSizeText,
  type FileUploadItemSizeTextProps as ItemSizeTextProps,
} from "./file-upload-item-size-text.svelte"
export {
  default as ItemDeleteTrigger,
  type FileUploadItemDeleteTriggerProps as ItemDeleteTriggerProps,
} from "./file-upload-item-delete-trigger.svelte"
export { default as FileText, type FileUploadFileTextProps as FileTextProps } from "./file-upload-file-text.svelte"
export { default as Items, type FileUploadItemsProps as ItemsProps } from "./file-upload-items.svelte"
export { default as List, type FileUploadListProps as ListProps } from "./file-upload-list.svelte"

import { FileUpload } from "@ark-ui/svelte/file-upload"

export const HiddenInput = FileUpload.HiddenInput
export const Context = FileUpload.Context
