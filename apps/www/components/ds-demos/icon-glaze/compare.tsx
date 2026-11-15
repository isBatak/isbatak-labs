import { Icon } from "@isbatak/react-ui/icon"
import { styled } from "styled-system/jsx"

export function IconGlazeCompareDemo() {
  return (
    <styled.div
      position="relative"
      overflow="hidden"
      isolation="isolate"
      w="full"
      maxW="2xl"
      rounded="l3"
      px={{ base: "6", sm: "10" }}
      py="10"
    >
      <styled.img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/330px-Monet_-_Impression%2C_Sunrise.jpg"
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
      <styled.div display="grid" gridTemplateColumns={{ base: "1fr", sm: "repeat(2, minmax(0, 1fr))" }} gap="8">
        <styled.figure display="flex" flexDirection="column" alignItems="center" gap="4">
          <styled.div
            display="grid"
            gridTemplateColumns="repeat(2, auto)"
            gap="5"
            p="6"
            rounded="[2.5rem]"
            cornerShape="squircle"
            bg="whiteAlpha.300"
            backdropFilter="auto"
            backdropBlur="2xl"
          >
            <styled.div
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize="16"
              rounded="[32%]"
              cornerShape="squircle"
              bg="blue.600"
              color="white"
            >
              <Icon name="mail" boxSize="[50%]" />
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
              bg="red.600"
              color="white"
            >
              <Icon name="heart-filled" boxSize="[50%]" />
            </styled.div>
            <styled.div
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize="16"
              rounded="[32%]"
              cornerShape="squircle"
              bg="green.600"
              color="white"
            >
              <Icon name="map-pin" boxSize="[50%]" />
            </styled.div>
          </styled.div>
          <styled.figcaption textStyle="xs" fontFamily="mono" color="white">
            Flat
          </styled.figcaption>
        </styled.figure>
        <styled.figure display="flex" flexDirection="column" alignItems="center" gap="4">
          <styled.div
            display="grid"
            gridTemplateColumns="repeat(2, auto)"
            gap="5"
            p="6"
            rounded="[2.5rem]"
            cornerShape="squircle"
            layerStyle="frostGlaze"
          >
            <styled.div
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize="16"
              rounded="[32%]"
              cornerShape="squircle"
              bg="blue.600"
              color="white"
              layerStyle="iconGlaze"
            >
              <Icon name="mail" boxSize="[50%]" />
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
              boxSize="16"
              rounded="[32%]"
              cornerShape="squircle"
              bg="red.600"
              color="white"
              layerStyle="iconGlaze"
            >
              <Icon name="heart-filled" boxSize="[50%]" />
            </styled.div>
            <styled.div
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize="16"
              rounded="[32%]"
              cornerShape="squircle"
              bg="green.600"
              color="white"
              layerStyle="iconGlaze"
            >
              <Icon name="map-pin" boxSize="[50%]" />
            </styled.div>
          </styled.div>
          <styled.figcaption textStyle="xs" fontFamily="mono" color="white">
            iconGlaze + frostGlaze
          </styled.figcaption>
        </styled.figure>
      </styled.div>
    </styled.div>
  )
}
