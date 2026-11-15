import { Frame } from "@isbatak/solid-ui/frame"

export function FrameScriptDemo() {
  let ref: HTMLIFrameElement | undefined
  return (
    <Frame
      ref={(el) => (ref = el)}
      title="Frame with a script"
      head={
        <style>
          {
            "body { font-family: system-ui, sans-serif; } .frame-root { padding: 1.5rem; } h1 { font-size: 1.25rem; font-weight: 600; } p { margin-top: 0.5rem; }"
          }
        </style>
      }
      onMount={() => {
        const doc = ref?.contentDocument
        if (!doc) return
        const script = doc.createElement("script")
        script.textContent =
          'document.getElementById("output").textContent = "Written by a script running inside the frame."'
        doc.body.appendChild(script)
      }}
    >
      <h1>Hello from inside the frame!</h1>
      <p id="output">Waiting for the script…</p>
    </Frame>
  )
}
