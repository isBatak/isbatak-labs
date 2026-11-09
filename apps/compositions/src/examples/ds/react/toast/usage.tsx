import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { createToaster, Toaster } from "@isbatak/react-ui/toast"

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
