import "../styled-system/styles.css"
import "./fonts"

import { IconsCompositions } from "./icons/compositions"
import { SourceryCompositions } from "./sourcery/compositions"

document.documentElement.dataset.radius = "none"

export function RemotionRoot() {
  return (
    <>
      <SourceryCompositions />
      <IconsCompositions />
    </>
  )
}
