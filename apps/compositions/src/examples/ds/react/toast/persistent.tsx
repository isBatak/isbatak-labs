import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { createToaster, Toaster } from "@isbatak/react-ui/toast"

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
