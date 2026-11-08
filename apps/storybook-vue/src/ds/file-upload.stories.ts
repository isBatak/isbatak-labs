import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import FileUploadDemo from "@isbatak/compositions/ds/vue/file-upload/usage"
import FileUploadDisabledDemo from "@isbatak/compositions/ds/vue/file-upload/disabled"
import FileUploadDropzoneDemo from "@isbatak/compositions/ds/vue/file-upload/dropzone"
import FileUploadFileTextDemo from "@isbatak/compositions/ds/vue/file-upload/file-text"
import FileUploadImagePreviewDemo from "@isbatak/compositions/ds/vue/file-upload/image-preview"

const meta = {
  title: "DS/File upload",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(FileUploadDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(FileUploadDisabledDemo) }),
}

export const Dropzone: Story = {
  render: () => ({ setup: () => () => h(FileUploadDropzoneDemo) }),
}

export const FileText: Story = {
  render: () => ({ setup: () => () => h(FileUploadFileTextDemo) }),
}

export const ImagePreview: Story = {
  render: () => ({ setup: () => () => h(FileUploadImagePreviewDemo) }),
}
