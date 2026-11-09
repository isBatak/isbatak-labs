<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { createToaster, Toaster } from "@isbatak/svelte-ui/toast"

  const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

  const showSuccess = () =>
    toaster.create({ type: "success", title: "Payment received", description: "We emailed you a receipt." })
  const showError = () =>
    toaster.create({ type: "error", title: "Upload failed", description: "The file is larger than 10 MB." })
  const showWarning = () =>
    toaster.create({ type: "warning", title: "Storage almost full", description: "You have used 90% of your space." })
  const showInfo = () =>
    toaster.create({ type: "info", title: "New version", description: "Reload the page to update." })
</script>

<HStack gap="3" flexWrap="wrap">
  <Button variant="outline" onclick={showSuccess}>Success</Button>
  <Button variant="outline" onclick={showError}>Error</Button>
  <Button variant="outline" onclick={showWarning}>Warning</Button>
  <Button variant="outline" onclick={showInfo}>Info</Button>
</HStack>
<Portal>
  <Toaster {toaster} />
</Portal>
