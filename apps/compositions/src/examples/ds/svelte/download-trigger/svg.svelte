<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { DownloadTrigger } from "@isbatak/svelte-ui/download-trigger"

  const data = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><circle cx="5" cy="5" r="5" /></svg>'
</script>

<DownloadTrigger {data} fileName="dot.svg" mimeType="image/svg+xml">
  {#snippet asChild(props)}
    <Button {...props()} variant="outline">Download svg</Button>
  {/snippet}
</DownloadTrigger>
