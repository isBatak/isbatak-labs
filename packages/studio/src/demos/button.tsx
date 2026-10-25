import { Button } from "@isbatak/react-ui/button"

import { Row, Section } from "../canvas/layout"
import { colorPalettes, recipes } from "../lib/theme-meta"
import type { SampleProps } from "./types"

export const title = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

export const variantGroups = Object.entries(recipes.button?.variantMap ?? {}).filter(([name]) => name !== "icon")

export function ButtonSample(props: SampleProps) {
  return <Button {...props}>Button</Button>
}

export function ButtonDemo() {
  return (
    <>
      {variantGroups.map(([name, values]) => (
        <Section key={name} title={title(name)}>
          <Row>
            {values.map((value) => {
              const props: SampleProps = { [name]: value }
              return (
                <Button key={value} {...props}>
                  {title(value)}
                </Button>
              )
            })}
          </Row>
        </Section>
      ))}
      <Section title="Colors">
        <Row>
          {colorPalettes.map((palette) => (
            <Button key={palette} colorPalette={palette}>
              {title(palette)}
            </Button>
          ))}
        </Row>
      </Section>
      <Section title="States">
        <Row>
          <Button loading loadingText="Saving">
            Save
          </Button>
          <Button disabled>Disabled</Button>
        </Row>
      </Section>
    </>
  )
}
