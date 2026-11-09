<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  
  import { createToaster, Toaster } from "@isbatak/svelte-ui/toast"

  const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

  const showToast = () =>
    toaster.create({ type: "info", title: "Stays until closed", description: "Close it with the button.", duration: Infinity })
</script>

<Button variant="outline" onclick={showToast}>Show persistent toast</Button>
<Portal>
  <Toaster {toaster} />
</Portal>
