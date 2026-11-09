import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"
import { createToaster, Toaster } from "@isbatak/solid-ui/toast"
import { Portal } from "solid-js/web"

const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

const showSuccess = () =>
  toaster.create({ type: "success", title: "Payment received", description: "We emailed you a receipt." })
const showError = () =>
  toaster.create({ type: "error", title: "Upload failed", description: "The file is larger than 10 MB." })
const showWarning = () =>
  toaster.create({ type: "warning", title: "Storage almost full", description: "You have used 90% of your space." })
const showInfo = () => toaster.create({ type: "info", title: "New version", description: "Reload the page to update." })

export function ToastTypesDemo() {
  return (
    <HStack gap="3" flexWrap="wrap">
      <Button variant="outline" onClick={showSuccess}>
        Success
      </Button>
      <Button variant="outline" onClick={showError}>
        Error
      </Button>
      <Button variant="outline" onClick={showWarning}>
        Warning
      </Button>
      <Button variant="outline" onClick={showInfo}>
        Info
      </Button>
      <Portal>
        <Toaster toaster={toaster} />
      </Portal>
    </HStack>
  )
}
