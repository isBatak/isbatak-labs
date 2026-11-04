import { Text } from "@isbatak/react-ui/text"

export function TextAsChildDemo() {
  return (
    <Text asChild color="fg.muted">
      <label htmlFor="text-as-child">Rendered as a label</label>
    </Text>
  )
}
