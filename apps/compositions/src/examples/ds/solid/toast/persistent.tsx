import { Button } from "@isbatak/solid-ui/button"

import { createToaster, Toaster } from "@isbatak/solid-ui/toast"
import { Portal } from "solid-js/web"

const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

const showToast = () =>
  toaster.create({
    type: "info",
    title: "Stays until closed",
    description: "Close it with the button.",
    duration: Infinity,
  })

export function ToastPersistentDemo() {
  return (
    <>
      <Button variant="outline" onClick={showToast}>
        Show persistent toast
      </Button>
      <Portal>
        <Toaster toaster={toaster} />
      </Portal>
    </>
  )
}
