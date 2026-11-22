"use client"

import { Flex } from "@isbatak/react-ui/flex"
import { Icon } from "@isbatak/react-ui/icon"
import { Slider } from "@isbatak/react-ui/slider"
import { Span } from "@isbatak/react-ui/span"
import { Text } from "@isbatak/react-ui/text"
import { type CSSProperties, useState } from "react"

export function IconPullOffsetDemo() {
  const [offset, setOffset] = useState(0)
  const style = { "--icon-offset": `${offset}px` } as CSSProperties

  return (
    <Flex direction="column" gap="6" w="full" maxW="sm">
      <Flex justifyContent="center">
        <Flex
          alignItems="center"
          gap="2"
          h="16"
          px="6"
          borderWidth="1px"
          rounded="l2"
          textStyle="md"
          fontWeight="medium"
        >
          <Icon name="plus" size="lg" iconPullStart="1" style={style} />
          New file
        </Flex>
      </Flex>
      <Slider.Root
        value={[offset]}
        min={-4}
        max={4}
        step={0.25}
        onValueChange={(details) => setOffset(details.value[0] ?? 0)}
      >
        <Flex justifyContent="space-between" textStyle="sm">
          <Slider.Label>--icon-offset</Slider.Label>
          <Span fontFamily="mono" color="fg.muted">
            {offset}px
          </Span>
        </Flex>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0}>
            <Slider.HiddenInput />
          </Slider.Thumb>
        </Slider.Control>
      </Slider.Root>
      <Text textStyle="xs" fontFamily="mono" color="fg.muted" textAlign="center">
        margin-inline-start: calc((spacing.1 + {offset}px) * -1)
      </Text>
    </Flex>
  )
}
