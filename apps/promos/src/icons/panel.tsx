import { styled } from "@isbatak/panda-ds/jsx"
import { card } from "@isbatak/panda-ds/recipes"
import { Badge } from "@isbatak/react-ui/badge"
import { CloseButton, IconButton } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { PasswordInput } from "@isbatak/react-ui/password-input"
import { SearchInput } from "@isbatak/react-ui/search-input"
import { createListCollection, Select } from "@isbatak/react-ui/select"
import type { CSSProperties } from "react"
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"

import { clamp } from "../sourcery/lib/motion"
import { activeSwap } from "./sprite"

const frameworks = createListCollection({ items: ["React", "Vue", "Svelte", "Solid", "Preact", "Lit"] })

function useIconScale(from: number) {
  const frame = useCurrentFrame() + from
  const { fps } = useVideoConfig()
  const [start, set] = activeSwap(frame)
  const [next, nextSet] = activeSwap(frame + 6)
  if (nextSet !== set) return interpolate(frame, [next - 6, next], [1, 0], clamp)
  if (activeSwap(start - 1)[1] === set) return 1
  return spring({ frame: frame - start, fps, config: { damping: 11, stiffness: 200, mass: 0.6 } })
}

export function Panel({ from, zoom, style }: { from: number; zoom: number; style?: CSSProperties }) {
  const scale = useIconScale(from)
  const classes = card({ variant: "elevated" })

  return (
    <styled.div
      className={classes.root}
      w="sm"
      css={{ "& svg[data-name]": { transform: "scale(var(--icon-scale))" } }}
      style={{ zoom, "--icon-scale": scale, ...style } as CSSProperties}
    >
      <styled.div className={classes.header} flexDirection="row" alignItems="center" justifyContent="space-between">
        <p className={classes.title}>Account</p>
        <CloseButton size="sm" />
      </styled.div>
      <styled.div className={classes.body} gap="5">
        <Select.Root collection={frameworks} defaultValue={["Svelte"]}>
          <Select.Label>Framework</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Pick a framework" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.ClearTrigger />
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Select.HiddenSelect />
        </Select.Root>

        <SearchInput.Root defaultValue="icons">
          <SearchInput.Control>
            <SearchInput.Icon>
              <Icon name="search" />
            </SearchInput.Icon>
            <SearchInput.Input aria-label="Search" />
            <SearchInput.ClearTrigger>
              <Icon name="close" />
            </SearchInput.ClearTrigger>
          </SearchInput.Control>
        </SearchInput.Root>

        <PasswordInput.Root>
          <PasswordInput.Control>
            <PasswordInput.Input defaultValue="boring-but-safe" aria-label="Password" />
            <PasswordInput.VisibilityTrigger>
              <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
                <Icon name="view" />
              </PasswordInput.Indicator>
            </PasswordInput.VisibilityTrigger>
          </PasswordInput.Control>
        </PasswordInput.Root>

        <styled.div display="flex" alignItems="center" gap="2">
          <IconButton variant="outline" size="sm" aria-label="Like">
            <Icon name="heart" />
          </IconButton>
          <IconButton variant="outline" size="sm" aria-label="Star">
            <Icon name="star" />
          </IconButton>
          <IconButton variant="outline" size="sm" aria-label="Notifications">
            <Icon name="bell" />
          </IconButton>
          <IconButton variant="outline" size="sm" aria-label="Mail">
            <Icon name="mail" />
          </IconButton>
          <IconButton variant="outline" size="sm" aria-label="Settings">
            <Icon name="settings" />
          </IconButton>
          <Badge ms="auto" colorPalette="green">
            <Icon name="check" />
            Saved
          </Badge>
        </styled.div>
      </styled.div>
    </styled.div>
  )
}
