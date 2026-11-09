<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  
  import { createToaster, Toaster } from "@isbatak/svelte-ui/toast"

  const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

  const showToast = () =>
    toaster.create({
      title: "Email archived",
      action: { label: "Undo", onClick: () => toaster.create({ type: "success", title: "Email restored" }) },
    })
</script>

<Button variant="outline" onclick={showToast}>Archive email</Button>
<Portal>
  <Toaster {toaster} />
</Portal>
