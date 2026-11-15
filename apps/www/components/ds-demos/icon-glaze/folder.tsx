import { Icon } from "@isbatak/react-ui/icon"
import { styled } from "styled-system/jsx"

export function IconGlazeFolderDemo() {
  return (
    <styled.div
      position="relative"
      overflow="hidden"
      isolation="isolate"
      display="flex"
      justifyContent="center"
      w="full"
      maxW="xl"
      rounded="l3"
      px="6"
      py="12"
    >
      <styled.img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg/330px-The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg"
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
        saturate="1.2"
        transform="scale(1.3)"
      />
      <styled.div
        display="grid"
        gridTemplateColumns="repeat(3, auto)"
        alignContent="start"
        gap="5"
        boxSize="64"
        p="7"
        rounded="[3.5rem]"
        cornerShape="squircle"
        layerStyle="frostGlaze"
      >
        <styled.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxSize="14"
          rounded="[32%]"
          cornerShape="squircle"
          bg="red.600"
          color="white"
          layerStyle="iconGlaze"
        >
          <Icon name="shopping-bag" boxSize="[50%]" />
        </styled.div>
        <styled.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxSize="14"
          rounded="[32%]"
          cornerShape="squircle"
          bg="white"
          color="yellow.500"
          layerStyle="iconGlaze"
        >
          <Icon name="heart-filled" boxSize="[55%]" />
        </styled.div>
        <styled.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxSize="14"
          rounded="[32%]"
          cornerShape="squircle"
          bg="blue.600"
          color="white"
          layerStyle="iconGlaze"
        >
          <Icon name="gift-bag" boxSize="[50%]" />
        </styled.div>
      </styled.div>
    </styled.div>
  )
}
