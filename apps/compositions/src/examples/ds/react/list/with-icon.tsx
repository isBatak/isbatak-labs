import { Icon } from "@isbatak/react-ui/icon"
import { List } from "@isbatak/react-ui/list"

export function ListWithIconDemo() {
  return (
    <List.Root variant="plain" align="center" gap="2">
      <List.Item>
        <List.Indicator color="fg.success">
          <Icon name="check" />
        </List.Indicator>
        Accessible by default
      </List.Item>
      <List.Item>
        <List.Indicator color="fg.success">
          <Icon name="check" />
        </List.Indicator>
        Works in four frameworks
      </List.Item>
      <List.Item>
        <List.Indicator color="fg.success">
          <Icon name="check" />
        </List.Indicator>
        Themeable with recipes
      </List.Item>
    </List.Root>
  )
}
