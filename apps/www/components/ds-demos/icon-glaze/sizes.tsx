import { Icon } from "@isbatak/react-ui/icon"
import { styled } from "styled-system/jsx"

export function IconGlazeSizesDemo() {
  return (
    <styled.div
      position="relative"
      overflow="hidden"
      isolation="isolate"
      display="flex"
      flexWrap="wrap"
      alignItems="flex-end"
      justifyContent="center"
      gap="8"
      w="full"
      maxW="xl"
      rounded="l3"
      px="6"
      py="10"
    >
      <styled.img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/330px-Vincent_Willem_van_Gogh_127.jpg"
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
        saturate="1.3"
        transform="scale(1.3)"
      />
      <styled.div
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSize="10"
        rounded="[32%]"
        cornerShape="squircle"
        bg="yellow.400"
        color="gray.900"
        layerStyle="iconGlaze"
      >
        <Icon name="star-filled" boxSize="[50%]" />
      </styled.div>
      <styled.div
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSize="16"
        rounded="[32%]"
        cornerShape="squircle"
        bg="yellow.400"
        color="gray.900"
        layerStyle="iconGlaze"
      >
        <Icon name="star-filled" boxSize="[50%]" />
      </styled.div>
      <styled.div
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSize="24"
        rounded="[32%]"
        cornerShape="squircle"
        bg="yellow.400"
        color="gray.900"
        layerStyle="iconGlaze"
      >
        <Icon name="star-filled" boxSize="[50%]" />
      </styled.div>
      <styled.div
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSize="32"
        rounded="[32%]"
        cornerShape="squircle"
        bg="yellow.400"
        color="gray.900"
        layerStyle="iconGlaze"
      >
        <Icon name="star-filled" boxSize="[50%]" />
      </styled.div>
    </styled.div>
  )
}
