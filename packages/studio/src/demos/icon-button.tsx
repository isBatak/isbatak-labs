import { IconButton } from "@isbatak/react-ui/button"

import { Row, Section } from "../canvas/layout"
import { colorPalettes } from "../lib/theme-meta"
import { title, variantGroups } from "./button"
import { PlusIcon } from "./primitives"
import type { SampleProps } from "./types"

export function IconButtonSample(props: SampleProps) {
  return (
    <IconButton aria-label="Add" {...props}>
      <PlusIcon />
    </IconButton>
  )
}

export function IconButtonDemo() {
  return (
    <>
      {variantGroups.map(([name, values]) => (
        <Section key={name} title={title(name)}>
          <Row>
            {values.map((value) => {
              const props: SampleProps = { [name]: value }
              return (
                <IconButton key={value} aria-label={`Add (${value})`} {...props}>
                  <PlusIcon />
                </IconButton>
              )
            })}
          </Row>
        </Section>
      ))}
      <Section title="Colors">
        <Row>
          {colorPalettes.map((palette) => (
            <IconButton key={palette} aria-label={`Add (${palette})`} colorPalette={palette}>
              <PlusIcon />
            </IconButton>
          ))}
        </Row>
      </Section>
      <Section title="States">
        <Row>
          <IconButton aria-label="Saving" loading>
            <PlusIcon />
          </IconButton>
          <IconButton aria-label="Add (disabled)" disabled>
            <PlusIcon />
          </IconButton>
        </Row>
      </Section>
    </>
  )
}
