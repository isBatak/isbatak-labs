"use client"

import { Slider } from "@isbatak/react-ui/slider"
import { type CSSProperties, useState } from "react"
import { styled } from "styled-system/jsx"

function describe(percent: number) {
  if (percent < 5) return "Too faint: the edge disappears against pale backgrounds."
  if (percent > 20) return "Too strong: it reads as a frame instead of an edge."
  return "A defined edge that doesn't read as a border."
}

export function ImageOutlineStrengthDemo() {
  const [percent, setPercent] = useState(10)
  const style = { "--image-outline-opacity": percent / 100 } as CSSProperties

  return (
    <styled.div display="flex" flexDirection="column" gap="6" w="full" maxW="sm">
      <styled.img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/960px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg"
        alt="Water Lilies by Claude Monet"
        w="full"
        rounded="l3"
        layerStyle="imageOutline"
        style={style}
      />
      <Slider.Root value={[percent]} min={0} max={30} onValueChange={(details) => setPercent(details.value[0] ?? 0)}>
        <styled.div display="flex" justifyContent="space-between" textStyle="sm">
          <Slider.Label>--image-outline-opacity</Slider.Label>
          <styled.span fontFamily="mono" color="fg.muted">
            {(percent / 100).toFixed(2)}
          </styled.span>
        </styled.div>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0}>
            <Slider.HiddenInput />
          </Slider.Thumb>
        </Slider.Control>
      </Slider.Root>
      <styled.p textStyle="sm" color="fg.muted">
        {describe(percent)}
      </styled.p>
    </styled.div>
  )
}
