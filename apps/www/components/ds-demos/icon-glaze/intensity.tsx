"use client"

import { Icon } from "@isbatak/react-ui/icon"
import { Slider } from "@isbatak/react-ui/slider"
import { type CSSProperties, useState } from "react"
import { styled } from "styled-system/jsx"

function describe(intensity: number) {
  if (intensity < 0.5) return "Too faint: the tile reads as flat again."
  if (intensity > 1.5) return "Too strong: the highlights look like plastic and the sides go muddy."
  return "Lit from above, with soft edges and enough shape to sit on any background."
}

export function IconGlazeIntensityDemo() {
  const [intensity, setIntensity] = useState(1)
  const style = { "--icon-glaze-intensity": intensity } as CSSProperties

  return (
    <styled.div display="flex" flexDirection="column" gap="6" w="full" maxW="sm">
      <styled.div
        position="relative"
        overflow="hidden"
        isolation="isolate"
        display="flex"
        justifyContent="center"
        rounded="l3"
        py="12"
      >
        <styled.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vassily_Kandinsky%2C_1913_-_Composition_7.jpg/330px-Vassily_Kandinsky%2C_1913_-_Composition_7.jpg"
          alt=""
          aria-hidden
          position="absolute"
          inset="0"
          zIndex="-1"
          w="full"
          h="full"
          objectFit="cover"
          filter="auto"
          blur="3xl"
          saturate="1.4"
          transform="scale(1.3)"
        />
        <styled.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxSize="28"
          rounded="[32%]"
          cornerShape="squircle"
          bg="blue.600"
          color="white"
          layerStyle="iconGlaze"
          style={style}
        >
          <Icon name="sparkles" boxSize="[50%]" />
        </styled.div>
      </styled.div>
      <Slider.Root
        value={[intensity]}
        min={0}
        max={2}
        step={0.05}
        onValueChange={(details) => setIntensity(details.value[0] ?? 0)}
      >
        <styled.div display="flex" justifyContent="space-between" textStyle="sm">
          <Slider.Label>--icon-glaze-intensity</Slider.Label>
          <styled.span fontFamily="mono" color="fg.muted">
            {intensity.toFixed(2)}
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
        {describe(intensity)}
      </styled.p>
    </styled.div>
  )
}
