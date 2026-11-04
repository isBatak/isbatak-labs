import { Text } from "@isbatak/solid-ui/text"

export function TextAsChildDemo() {
  return (
    <Text
      color="fg.muted"
      asChild={(props) => (
        <label for="text-as-child" {...props()}>
          Rendered as a label
        </label>
      )}
    />
  )
}
