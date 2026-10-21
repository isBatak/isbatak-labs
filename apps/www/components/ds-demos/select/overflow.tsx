"use client"

import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"

const countries = createListCollection({
  items: [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Belgium",
    "Bolivia",
    "Brazil",
    "Bulgaria",
    "Canada",
    "Chile",
    "Croatia",
  ],
})

export function SelectOverflowDemo() {
  return (
    <Select.Root collection={countries} maxW="xs">
      <Select.HiddenSelect />
      <Select.Label>Country</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select country" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content maxH="56">
            <Select.Item item="Afghanistan">
              <Select.ItemText>Afghanistan</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Albania">
              <Select.ItemText>Albania</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Algeria">
              <Select.ItemText>Algeria</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Andorra">
              <Select.ItemText>Andorra</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Angola">
              <Select.ItemText>Angola</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Argentina">
              <Select.ItemText>Argentina</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Armenia">
              <Select.ItemText>Armenia</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Australia">
              <Select.ItemText>Australia</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Austria">
              <Select.ItemText>Austria</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Azerbaijan">
              <Select.ItemText>Azerbaijan</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Bahamas">
              <Select.ItemText>Bahamas</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Bahrain">
              <Select.ItemText>Bahrain</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Bangladesh">
              <Select.ItemText>Bangladesh</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Belgium">
              <Select.ItemText>Belgium</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Bolivia">
              <Select.ItemText>Bolivia</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Brazil">
              <Select.ItemText>Brazil</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Bulgaria">
              <Select.ItemText>Bulgaria</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Canada">
              <Select.ItemText>Canada</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Chile">
              <Select.ItemText>Chile</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item="Croatia">
              <Select.ItemText>Croatia</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
