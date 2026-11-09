import { Button } from "@isbatak/solid-ui/button"

import { createToaster, Toaster } from "@isbatak/solid-ui/toast"
import { Portal } from "solid-js/web"

const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

const upload = () =>
  toaster.promise(new Promise<void>((resolve) => setTimeout(resolve, 2000)), {
    loading: { title: "Uploading…", description: "Hold on a moment." },
    success: { title: "Uploaded", description: "Your file is ready." },
    error: { title: "Upload failed", description: "Try again later." },
  })

export function ToastPromiseDemo() {
  return (
    <>
      <Button variant="outline" onClick={upload}>
        Upload file
      </Button>
      <Portal>
        <Toaster toaster={toaster} />
      </Portal>
    </>
  )
}
