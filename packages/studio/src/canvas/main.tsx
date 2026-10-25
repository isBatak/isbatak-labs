import "../index.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { CanvasApp } from "./canvas-app"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CanvasApp />
  </StrictMode>,
)
