import "../styled-system/styles.css"
import "./fonts"

import { IconsCompositions } from "./icons/compositions"
import { SourceryCompositions } from "./sourcery/compositions"

export function RemotionRoot() {
  return (
    <>
      <SourceryCompositions />
      <IconsCompositions />
    </>
  )
}
