import { Button } from "@isbatak/react-ui/button"
import type { ReactNode } from "react"

import { Icon, type IconName } from "../ui/icon"

interface ResourceLinkProps {
  href: string
  icon: IconName
  children: ReactNode
}

export function ResourceLink({ href, icon, children }: ResourceLinkProps) {
  return (
    <Button asChild variant="subtle" size="xs">
      <a href={href} target="_blank" rel="noopener">
        <Icon name={icon} />
        {children}
        <Icon name="external-link" color="fg.subtle" />
      </a>
    </Button>
  )
}
