import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { FileUploadDemo } from "@isbatak/compositions/ds/solid/file-upload/usage"
import { FileUploadDisabledDemo } from "@isbatak/compositions/ds/solid/file-upload/disabled"
import { FileUploadDropzoneDemo } from "@isbatak/compositions/ds/solid/file-upload/dropzone"
import { FileUploadFileTextDemo } from "@isbatak/compositions/ds/solid/file-upload/file-text"
import { FileUploadImagePreviewDemo } from "@isbatak/compositions/ds/solid/file-upload/image-preview"

const meta = {
  title: "DS/File upload",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <FileUploadDemo />,
}

export const Disabled: Story = {
  render: () => <FileUploadDisabledDemo />,
}

export const Dropzone: Story = {
  render: () => <FileUploadDropzoneDemo />,
}

export const FileText: Story = {
  render: () => <FileUploadFileTextDemo />,
}

export const ImagePreview: Story = {
  render: () => <FileUploadImagePreviewDemo />,
}
