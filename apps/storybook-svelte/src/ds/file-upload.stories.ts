import type { Meta, StoryObj } from "@storybook/svelte-vite"
import FileUploadDemo from "@isbatak/compositions/ds/svelte/file-upload/usage"
import FileUploadDisabledDemo from "@isbatak/compositions/ds/svelte/file-upload/disabled"
import FileUploadDropzoneDemo from "@isbatak/compositions/ds/svelte/file-upload/dropzone"
import FileUploadFileTextDemo from "@isbatak/compositions/ds/svelte/file-upload/file-text"
import FileUploadImagePreviewDemo from "@isbatak/compositions/ds/svelte/file-upload/image-preview"

const meta = {
  title: "DS/File upload",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof FileUploadDemo> = {
  render: () => ({ Component: FileUploadDemo }),
}

export const Disabled: StoryObj<typeof FileUploadDisabledDemo> = {
  render: () => ({ Component: FileUploadDisabledDemo }),
}

export const Dropzone: StoryObj<typeof FileUploadDropzoneDemo> = {
  render: () => ({ Component: FileUploadDropzoneDemo }),
}

export const FileText: StoryObj<typeof FileUploadFileTextDemo> = {
  render: () => ({ Component: FileUploadFileTextDemo }),
}

export const ImagePreview: StoryObj<typeof FileUploadImagePreviewDemo> = {
  render: () => ({ Component: FileUploadImagePreviewDemo }),
}
