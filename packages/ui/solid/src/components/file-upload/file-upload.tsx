import { ark } from "@ark-ui/solid/factory"
import { FileUpload, useFileUploadContext } from "@ark-ui/solid/file-upload"
import { type ComponentProps, For, type JSX, Show, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
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

export function FileUploadItemPreview(props: FileUploadItemPreviewProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledFileUploadItemPreview {...rest}>{local.children ?? <Icon name="file" />}</StyledFileUploadItemPreview>
}

const StyledFileUploadItemDeleteTrigger = withContext(FileUpload.ItemDeleteTrigger, "itemDeleteTrigger")
export type FileUploadItemDeleteTriggerProps = ComponentProps<typeof StyledFileUploadItemDeleteTrigger>

export function FileUploadItemDeleteTrigger(props: FileUploadItemDeleteTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledFileUploadItemDeleteTrigger aria-label="Remove file" {...rest}>
      {local.children ?? <Icon name="close" />}
    </StyledFileUploadItemDeleteTrigger>
  )
}

const StyledFileUploadFileText = withContext(ark.span, "fileText")

export type FileUploadFileTextProps = ComponentProps<typeof StyledFileUploadFileText> & {
  fallback?: JSX.Element | undefined
}

export function FileUploadFileText(props: FileUploadFileTextProps) {
  const [local, rest] = splitProps(props, ["fallback", "children"])
  const fileUpload = useFileUploadContext()
  const text = () => {
    const files = fileUpload().acceptedFiles
    if (files.length === 0) return local.fallback ?? "Select file"
    return files.length === 1 ? files[0]?.name : `${files.length} files`
  }
  return <StyledFileUploadFileText {...rest}>{local.children ?? text()}</StyledFileUploadFileText>
}

export type FileUploadItemsProps = Omit<FileUploadItemProps, "file"> & {
  showSize?: boolean | undefined
  clearable?: boolean | undefined
}

export function FileUploadItems(props: FileUploadItemsProps) {
  const [local, rest] = splitProps(props, ["showSize", "clearable"])
  const fileUpload = useFileUploadContext()
  return (
    <For each={fileUpload().acceptedFiles}>
      {(file) => (
        <FileUploadItem file={file} {...rest}>
          <FileUploadItemPreview />
          <Show when={local.showSize} fallback={<FileUploadItemName flex="1" />}>
            <FileUploadItemContent>
              <FileUploadItemName />
              <FileUploadItemSizeText />
            </FileUploadItemContent>
          </Show>
          <Show when={local.clearable}>
            <FileUploadItemDeleteTrigger />
          </Show>
        </FileUploadItem>
      )}
    </For>
  )
}

export type FileUploadListProps = FileUploadItemGroupProps & Pick<FileUploadItemsProps, "showSize" | "clearable">

export function FileUploadList(props: FileUploadListProps) {
  const [local, rest] = splitProps(props, ["showSize", "clearable"])
  return (
    <FileUploadItemGroup {...rest}>
      <FileUploadItems showSize={local.showSize} clearable={local.clearable} />
    </FileUploadItemGroup>
  )
}

export const FileUploadHiddenInput = FileUpload.HiddenInput
export type FileUploadHiddenInputProps = ComponentProps<typeof FileUploadHiddenInput>

export const FileUploadContext = FileUpload.Context
export type FileUploadContextProps = ComponentProps<typeof FileUploadContext>
