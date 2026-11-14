"use client"

import { Avatar } from "@isbatak/react-ui/avatar"
import { Icon } from "@isbatak/react-ui/icon"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { useState } from "react"
import { styled } from "styled-system/jsx"

export function ImageOutlineAvatarDemo() {
  const [value, setValue] = useState("outline")
  const outlineStyle = value === "outline" ? undefined : "none"

  return (
    <styled.div display="flex" flexDirection="column" alignItems="center" gap="8">
      <styled.div
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap="4"
        p="5"
        rounded="l3"
        borderWidth="1px"
        bg="bg.panel"
      >
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Jane Doe" />
          <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" outlineStyle={outlineStyle} />
        </Avatar.Root>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Sasuke" />
          <Avatar.Image src="https://i.pravatar.cc/300?u=sasuke" outlineStyle={outlineStyle} />
        </Avatar.Root>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Marko" />
          <Avatar.Image src="https://randomuser.me/api/portraits/men/70.jpg" outlineStyle={outlineStyle} />
        </Avatar.Root>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Guest" />
        </Avatar.Root>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Baki" />
          <Avatar.Image src="https://i.pravatar.cc/300?u=baki" outlineStyle={outlineStyle} />
        </Avatar.Root>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Jane" />
          <Avatar.Image src="https://i.pravatar.cc/300?u=jane" outlineStyle={outlineStyle} />
        </Avatar.Root>
      </styled.div>

      <SegmentGroup.Root
        value={value}
        onValueChange={(details) => setValue(details.value ?? "outline")}
        orientation="horizontal"
        aria-label="Image outline"
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="none">
          <SegmentGroup.ItemText display="inline-flex" alignItems="center" gap="2">
            <styled.span
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              boxSize="4"
              rounded="full"
              colorPalette="red"
              bg="colorPalette.solid"
              color="colorPalette.contrast"
            >
              <Icon name="close" boxSize="3" />
            </styled.span>
            No outline
          </SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="outline">
          <SegmentGroup.ItemText display="inline-flex" alignItems="center" gap="2">
            <styled.span
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              boxSize="4"
              rounded="full"
              colorPalette="green"
              bg="colorPalette.solid"
              color="colorPalette.contrast"
            >
              <Icon name="check" boxSize="3" />
            </styled.span>
            Outline
          </SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </styled.div>
  )
}
