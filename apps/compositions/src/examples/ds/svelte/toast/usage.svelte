<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  
  import { createToaster, Toaster } from "@isbatak/svelte-ui/toast"

  const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

  const showToast = () =>
    toaster.create({ title: "File saved", description: "Your changes are saved to the cloud." })
</script>

<Button variant="outline" onclick={showToast}>Show toast</Button>
<Portal>
  <Toaster {toaster} />
</Portal>
