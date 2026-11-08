import { ark } from "@ark-ui/vue/factory"
import { FileUpload, useFileUploadContext } from "@ark-ui/vue/file-upload"
import { type Component, type PropType, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { fileUpload } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(fileUpload)

export const FileUploadRoot = withProvider(FileUpload.Root, "root")
export type FileUploadRootProps = ComponentProps<typeof FileUploadRoot>

export const FileUploadRootProvider = withProvider(FileUpload.RootProvider, "root")
export type FileUploadRootProviderProps = ComponentProps<typeof FileUploadRootProvider>

export const FileUploadLabel = withContext(FileUpload.Label, "label")
export type FileUploadLabelProps = ComponentProps<typeof FileUploadLabel>

export const FileUploadDropzone = withContext(FileUpload.Dropzone, "dropzone")
export type FileUploadDropzoneProps = ComponentProps<typeof FileUploadDropzone>

export const FileUploadDropzoneContent = withContext(ark.div, "dropzoneContent")
export type FileUploadDropzoneContentProps = ComponentProps<typeof FileUploadDropzoneContent>

export const FileUploadTrigger = withContext(FileUpload.Trigger, "trigger")
export type FileUploadTriggerProps = ComponentProps<typeof FileUploadTrigger>

export const FileUploadClearTrigger = withContext(FileUpload.ClearTrigger, "clearTrigger")
export type FileUploadClearTriggerProps = ComponentProps<typeof FileUploadClearTrigger>

export const FileUploadItemGroup = withContext(FileUpload.ItemGroup, "itemGroup")
export type FileUploadItemGroupProps = ComponentProps<typeof FileUploadItemGroup>

export const FileUploadItem = withContext(FileUpload.Item, "item")
export type FileUploadItemProps = ComponentProps<typeof FileUploadItem>

export const FileUploadItemPreviewImage = withContext(FileUpload.ItemPreviewImage, "itemPreviewImage")
export type FileUploadItemPreviewImageProps = ComponentProps<typeof FileUploadItemPreviewImage>

export const FileUploadItemContent = withContext(ark.div, "itemContent")
export type FileUploadItemContentProps = ComponentProps<typeof FileUploadItemContent>

export const FileUploadItemName = withContext(FileUpload.ItemName, "itemName")
export type FileUploadItemNameProps = ComponentProps<typeof FileUploadItemName>

export const FileUploadItemSizeText = withContext(FileUpload.ItemSizeText, "itemSizeText")
export type FileUploadItemSizeTextProps = ComponentProps<typeof FileUploadItemSizeText>

const StyledFileUploadItemPreview = withContext(FileUpload.ItemPreview, "itemPreview")
export type FileUploadItemPreviewProps = ComponentProps<typeof StyledFileUploadItemPreview>

export const FileUploadItemPreview = defineComponent({
  name: "FileUploadItemPreview",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledFileUploadItemPreview as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "file" }))
  },
}) as unknown as typeof StyledFileUploadItemPreview

const StyledFileUploadItemDeleteTrigger = withContext(FileUpload.ItemDeleteTrigger, "itemDeleteTrigger")
export type FileUploadItemDeleteTriggerProps = ComponentProps<typeof StyledFileUploadItemDeleteTrigger>

export const FileUploadItemDeleteTrigger = defineComponent({
  name: "FileUploadItemDeleteTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        StyledFileUploadItemDeleteTrigger as Component,
        { "aria-label": "Remove file", ...attrs },
        () => slots.default?.() ?? h(Icon, { name: "close" }),
      )
  },
}) as unknown as typeof StyledFileUploadItemDeleteTrigger

const StyledFileUploadFileText = withContext(ark.span, "fileText")

export type FileUploadFileTextProps = ComponentProps<typeof StyledFileUploadFileText> & {
  fallback?: string | undefined
}

export const FileUploadFileText = defineComponent({
  name: "FileUploadFileText",
  inheritAttrs: false,
  props: {
    fallback: { type: String, default: "Select file" },
  },
  setup(props, { attrs, slots }) {
    const fileUpload = useFileUploadContext()
    return () => {
      const files = fileUpload.value.acceptedFiles
      const text = files.length === 0 ? props.fallback : files.length === 1 ? files[0]?.name : `${files.length} files`
      return h(StyledFileUploadFileText as Component, attrs, () => slots.default?.() ?? text)
    }
  },
}) as unknown as Component<FileUploadFileTextProps>

export type FileUploadItemsProps = Omit<FileUploadItemProps, "file"> & {
  showSize?: boolean | undefined
  clearable?: boolean | undefined
}

export const FileUploadItems = defineComponent({
  name: "FileUploadItems",
  inheritAttrs: false,
  props: {
    showSize: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    clearable: { type: Boolean as PropType<boolean | undefined>, default: undefined },
  },
  setup(props, { attrs }) {
    const fileUpload = useFileUploadContext()
    return () =>
      fileUpload.value.acceptedFiles.map((file) =>
        h(FileUploadItem as Component, { key: file.name, file, ...attrs }, () => [
          h(FileUploadItemPreview as Component),
          props.showSize
            ? h(FileUploadItemContent as Component, null, () => [
                h(FileUploadItemName as Component),
                h(FileUploadItemSizeText as Component),
              ])
            : h(FileUploadItemName as Component, { flex: "1" }),
          props.clearable ? h(FileUploadItemDeleteTrigger as Component) : null,
        ]),
      )
  },
}) as unknown as Component<FileUploadItemsProps>

export type FileUploadListProps = FileUploadItemGroupProps & Pick<FileUploadItemsProps, "showSize" | "clearable">

export const FileUploadList = defineComponent({
  name: "FileUploadList",
  inheritAttrs: false,
  props: {
    showSize: { type: Boolean as PropType<boolean | undefined>, default: undefined },
    clearable: { type: Boolean as PropType<boolean | undefined>, default: undefined },
  },
  setup(props, { attrs }) {
    return () =>
      h(FileUploadItemGroup as Component, attrs, () =>
        h(FileUploadItems as Component, { showSize: props.showSize, clearable: props.clearable }),
      )
  },
}) as unknown as Component<FileUploadListProps>

export const FileUploadHiddenInput = FileUpload.HiddenInput
export type FileUploadHiddenInputProps = ComponentProps<typeof FileUploadHiddenInput>

export const FileUploadContext = FileUpload.Context
export type FileUploadContextProps = ComponentProps<typeof FileUploadContext>
