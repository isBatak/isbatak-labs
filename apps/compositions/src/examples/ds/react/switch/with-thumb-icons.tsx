import { Icon } from "@isbatak/react-ui/icon"
import { Switch } from "@isbatak/react-ui/switch"

export function SwitchWithThumbIconsDemo() {
  return (
    <Switch.Root size="lg">
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb>
          <Switch.ThumbIndicator fallback={<Icon name="sun" color="fg.muted" />}>
            <Icon name="moon" />
          </Switch.ThumbIndicator>
        </Switch.Thumb>
      </Switch.Control>
      <Switch.Label>Dark mode</Switch.Label>
    </Switch.Root>
  )
}
