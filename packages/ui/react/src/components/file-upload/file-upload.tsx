"use client"

import { ark } from "@ark-ui/react/factory"
import { FileUpload, useFileUploadContext } from "@ark-ui/react/file-upload"
import type { ComponentProps, ReactNode } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { fileUpload } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

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

const StyledFileUploadItemPreview = withContext(FileUpload.ItemPreview, "itemPreview")
export type FileUploadItemPreviewProps = ComponentProps<typeof StyledFileUploadItemPreview>

export function FileUploadItemPreview({ children, ...props }: FileUploadItemPreviewProps) {
  return <StyledFileUploadItemPreview {...props}>{children ?? <Icon name="file" />}</StyledFileUploadItemPreview>
}

export const FileUploadItemPreviewImage = withContext(FileUpload.ItemPreviewImage, "itemPreviewImage")
export type FileUploadItemPreviewImageProps = ComponentProps<typeof FileUploadItemPreviewImage>

export const FileUploadItemContent = withContext(ark.div, "itemContent")
export type FileUploadItemContentProps = ComponentProps<typeof FileUploadItemContent>

export const FileUploadItemName = withContext(FileUpload.ItemName, "itemName")
export type FileUploadItemNameProps = ComponentProps<typeof FileUploadItemName>

export const FileUploadItemSizeText = withContext(FileUpload.ItemSizeText, "itemSizeText")
export type FileUploadItemSizeTextProps = ComponentProps<typeof FileUploadItemSizeText>

const StyledFileUploadItemDeleteTrigger = withContext(FileUpload.ItemDeleteTrigger, "itemDeleteTrigger")
export type FileUploadItemDeleteTriggerProps = ComponentProps<typeof StyledFileUploadItemDeleteTrigger>

export function FileUploadItemDeleteTrigger({ children, ...props }: FileUploadItemDeleteTriggerProps) {
  return (
    <StyledFileUploadItemDeleteTrigger aria-label="Remove file" {...props}>
      {children ?? <Icon name="close" />}
    </StyledFileUploadItemDeleteTrigger>
  )
}

const StyledFileUploadFileText = withContext(ark.span, "fileText")

export type FileUploadFileTextProps = ComponentProps<typeof StyledFileUploadFileText> & {
  /**
   * The text to show when no file is picked.
   * @default "Select file"
   */
  fallback?: ReactNode | undefined
}

export function FileUploadFileText({ fallback = "Select file", children, ...props }: FileUploadFileTextProps) {
  const fileUpload = useFileUploadContext()
  const files = fileUpload.acceptedFiles
  const text = files.length === 0 ? fallback : files.length === 1 ? files[0]?.name : `${files.length} files`
  return <StyledFileUploadFileText {...props}>{children ?? text}</StyledFileUploadFileText>
}

export type FileUploadItemsProps = Omit<FileUploadItemProps, "file"> & {
  /**
   * Show each file's size under its name.
   */
  showSize?: boolean | undefined
  /**
   * Show a button on each file that removes it.
   */
  clearable?: boolean | undefined
}

export function FileUploadItems({ showSize, clearable, ...props }: FileUploadItemsProps) {
  const fileUpload = useFileUploadContext()
  return fileUpload.acceptedFiles.map((file) => (
    <FileUploadItem key={file.name} file={file} {...props}>
      <FileUploadItemPreview />
      {showSize ? (
        <FileUploadItemContent>
          <FileUploadItemName />
          <FileUploadItemSizeText />
        </FileUploadItemContent>
      ) : (
        <FileUploadItemName flex="1" />
      )}
      {clearable && <FileUploadItemDeleteTrigger />}
    </FileUploadItem>
  ))
}

export type FileUploadListProps = FileUploadItemGroupProps & Pick<FileUploadItemsProps, "showSize" | "clearable">

export function FileUploadList({ showSize, clearable, ...props }: FileUploadListProps) {
  return (
    <FileUploadItemGroup {...props}>
      <FileUploadItems showSize={showSize} clearable={clearable} />
    </FileUploadItemGroup>
  )
}

export const FileUploadHiddenInput = FileUpload.HiddenInput
export type FileUploadHiddenInputProps = ComponentProps<typeof FileUploadHiddenInput>

export const FileUploadContext = FileUpload.Context
export type FileUploadContextProps = FileUpload.ContextProps
