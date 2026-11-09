import { Button } from "@isbatak/solid-ui/button"

import { createToaster, Toaster } from "@isbatak/solid-ui/toast"
import { Portal } from "solid-js/web"

const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

const showToast = () => toaster.create({ title: "File saved", description: "Your changes are saved to the cloud." })

export function ToastDemo() {
  return (
    <>
      <Button variant="outline" onClick={showToast}>
        Show toast
      </Button>
      <Portal>
        <Toaster toaster={toaster} />
      </Portal>
    </>
  )
}
