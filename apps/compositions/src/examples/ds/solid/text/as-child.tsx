import { Text } from "@isbatak/solid-ui/text"

export function TextAsChildDemo() {
  return (
    <Text
      color="fg.muted"
      asChild={(props) => (
        <label {...props()} for="text-as-child">
          Rendered as a label
        </label>
      )}
    />
  )
}
