import { Frame } from "@isbatak/react-ui/frame"

const srcDoc = `<html><head><link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" /><base target="_blank" /><style>body { margin: 0; padding: 1.5rem; font-family: "Open Sans", sans-serif; overflow: hidden; } h1 { font-size: 1.25rem; font-weight: 600; } p { margin-top: 0.5rem; }</style></head><body></body></html>`

export function FrameSrcDocDemo() {
  return (
    <Frame title="Custom frame" srcDoc={srcDoc} maxW="3xl">
      <h1>Hello from inside the frame!</h1>
      <p>The frame starts from its own document, which loads Open Sans and opens links in a new tab.</p>
    </Frame>
  )
}
