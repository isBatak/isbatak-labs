<script lang="ts">
  import { Frame } from "@isbatak/svelte-ui/frame"

  let ref = $state<HTMLIFrameElement | null>(null)

  function onMount() {
    const doc = ref?.contentDocument
    if (!doc) return
    const script = doc.createElement("script")
    script.textContent = 'document.getElementById("output").textContent = "Written by a script running inside the frame."'
    doc.body.appendChild(script)
  }
</script>

<Frame bind:ref title="Frame with a script" {onMount}>
  {#snippet head()}
    {@html "<style>body { font-family: system-ui, sans-serif; } .frame-root { padding: 1.5rem; } h1 { font-size: 1.25rem; font-weight: 600; } p { margin-top: 0.5rem; }</style>"}
  {/snippet}
  <h1>Hello from inside the frame!</h1>
  <p id="output">Waiting for the script…</p>
</Frame>
