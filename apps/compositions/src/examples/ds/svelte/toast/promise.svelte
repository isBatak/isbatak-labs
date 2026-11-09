<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  
  import { createToaster, Toaster } from "@isbatak/svelte-ui/toast"

  const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

  const upload = () =>
    toaster.promise(new Promise<void>((resolve) => setTimeout(resolve, 2000)), {
      loading: { title: "Uploading…", description: "Hold on a moment." },
      success: { title: "Uploaded", description: "Your file is ready." },
      error: { title: "Upload failed", description: "Try again later." },
    })
</script>

<Button variant="outline" onclick={upload}>Upload file</Button>
<Portal>
  <Toaster {toaster} />
</Portal>
