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
          <Avatar.Fallback name="Vincent van Gogh" />
          <Avatar.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"
            alt="Vincent van Gogh"
            outlineStyle={outlineStyle}
          />
        </Avatar.Root>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Claude Monet" />
          <Avatar.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/330px-Claude_Monet_1899_Nadar_crop.jpg"
            alt="Claude Monet"
            outlineStyle={outlineStyle}
          />
        </Avatar.Root>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Ivan Aivazovsky" />
          <Avatar.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Aivazovsky_-_Self-portrait_1874.jpg/330px-Aivazovsky_-_Self-portrait_1874.jpg"
            alt="Ivan Aivazovsky"
            outlineStyle={outlineStyle}
          />
        </Avatar.Root>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Berthe Morisot" />
        </Avatar.Root>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Rembrandt van Rijn" />
          <Avatar.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg"
            alt="Rembrandt van Rijn"
            outlineStyle={outlineStyle}
          />
        </Avatar.Root>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Edgar Degas" />
          <Avatar.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Edgar_Degas_self_portrait_1855.jpeg/330px-Edgar_Degas_self_portrait_1855.jpeg"
            alt="Edgar Degas"
            outlineStyle={outlineStyle}
          />
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
