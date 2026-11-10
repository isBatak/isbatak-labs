import { Button } from "@isbatak/react-ui/button"
import { Portal } from "@isbatak/react-ui/portal"
import { useState } from "react"
import { css } from "styled-system/css"

export function PortalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "3",
        maxW: "sm",
        p: "4",
        borderWidth: "1px",
        borderColor: "border.muted",
        borderRadius: "l3",
        overflow: "hidden",
        textStyle: "sm",
        color: "fg.muted",
      })}
    >
      This box clips its overflow. Content in a portal is moved to the end of the page, so it isn't clipped.
      <Button variant="outline" onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show"} portal content
      </Button>
      {open && (
        <Portal>
          <div
            data-portal-demo=""
            className={css({
              position: "fixed",
              insetEnd: "4",
              bottom: "4",
              zIndex: "toast",
              bg: "bg.panel",
              borderWidth: "1px",
              borderColor: "border.muted",
              borderRadius: "l3",
              boxShadow: "lg",
              px: "4",
              py: "3",
              textStyle: "sm",
            })}
          >
            Rendered in a portal
          </div>
        </Portal>
      )}
    </div>
  )
}
