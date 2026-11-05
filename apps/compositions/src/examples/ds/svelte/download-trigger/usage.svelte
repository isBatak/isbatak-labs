<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { DownloadTrigger } from "@isbatak/svelte-ui/download-trigger"

  const data = "Remember to drink water."
</script>

<DownloadTrigger {data} fileName="notes.txt" mimeType="text/plain">
  {#snippet asChild(props)}
    <Button {...props()} variant="outline">Download txt</Button>
  {/snippet}
</DownloadTrigger>
