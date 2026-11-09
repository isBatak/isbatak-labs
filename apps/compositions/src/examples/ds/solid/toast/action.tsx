import { Button } from "@isbatak/solid-ui/button"

import { createToaster, Toaster } from "@isbatak/solid-ui/toast"
import { Portal } from "solid-js/web"

const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

const showToast = () =>
  toaster.create({
    title: "Email archived",
    action: { label: "Undo", onClick: () => toaster.create({ type: "success", title: "Email restored" }) },
  })

export function ToastActionDemo() {
  return (
    <>
      <Button variant="outline" onClick={showToast}>
        Archive email
      </Button>
      <Portal>
        <Toaster toaster={toaster} />
      </Portal>
    </>
  )
}
