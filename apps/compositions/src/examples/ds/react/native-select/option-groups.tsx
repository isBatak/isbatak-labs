import { NativeSelect } from "@isbatak/react-ui/native-select"

export function NativeSelectOptionGroupsDemo() {
  return (
    <NativeSelect.Root maxW="xs">
      <NativeSelect.Field aria-label="Fruit or vegetable">
        <optgroup label="Fruits">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
        </optgroup>
        <optgroup label="Vegetables">
          <option value="carrot">Carrot</option>
          <option value="pea">Pea</option>
        </optgroup>
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  )
}
