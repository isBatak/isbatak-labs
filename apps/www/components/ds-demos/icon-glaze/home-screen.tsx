import { Icon } from "@isbatak/react-ui/icon"
import { styled } from "styled-system/jsx"

export function IconGlazeHomeScreenDemo() {
  return (
    <styled.div
      position="relative"
      overflow="hidden"
      isolation="isolate"
      w="full"
      maxW="md"
      rounded="l3"
      px="6"
      py="10"
    >
      <styled.img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/330px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
        alt=""
        aria-hidden
        position="absolute"
        inset="0"
        zIndex="-1"
        w="full"
        h="full"
        objectFit="cover"
        filter="auto"
        blur="2xl"
        saturate="1.3"
        transform="scale(1.3)"
      />
      <styled.div
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        rowGap="5"
        columnGap="4"
        justifyItems="center"
      >
        <styled.div display="flex" flexDirection="column" alignItems="center" gap="1.5">
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
            <Icon name="mail" boxSize="[50%]" />
          </styled.div>
          <styled.span textStyle="xs" color="white">
            Mail
          </styled.span>
        </styled.div>
        <styled.div display="flex" flexDirection="column" alignItems="center" gap="1.5">
          <styled.div
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize="14"
            rounded="[32%]"
            cornerShape="squircle"
            bg="yellow.400"
            color="gray.900"
            layerStyle="iconGlaze"
          >
            <Icon name="sun" boxSize="[50%]" />
          </styled.div>
          <styled.span textStyle="xs" color="white">
            Weather
          </styled.span>
        </styled.div>
        <styled.div display="flex" flexDirection="column" alignItems="center" gap="1.5">
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
            <Icon name="play-filled" boxSize="[50%]" />
          </styled.div>
          <styled.span textStyle="xs" color="white">
            Videos
          </styled.span>
        </styled.div>
        <styled.div display="flex" flexDirection="column" alignItems="center" gap="1.5">
          <styled.div
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize="14"
            rounded="[32%]"
            cornerShape="squircle"
            bg="green.600"
            color="white"
            layerStyle="iconGlaze"
          >
            <Icon name="phone" boxSize="[50%]" />
          </styled.div>
          <styled.span textStyle="xs" color="white">
            Phone
          </styled.span>
        </styled.div>
        <styled.div display="flex" flexDirection="column" alignItems="center" gap="1.5">
          <styled.div
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize="14"
            rounded="[32%]"
            cornerShape="squircle"
            bg="purple.600"
            color="white"
            layerStyle="iconGlaze"
          >
            <Icon name="moon" boxSize="[50%]" />
          </styled.div>
          <styled.span textStyle="xs" color="white">
            Sleep
          </styled.span>
        </styled.div>
        <styled.div display="flex" flexDirection="column" alignItems="center" gap="1.5">
          <styled.div
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize="14"
            rounded="[32%]"
            cornerShape="squircle"
            bg="orange.500"
            color="white"
            layerStyle="iconGlaze"
          >
            <Icon name="calendar" boxSize="[50%]" />
          </styled.div>
          <styled.span textStyle="xs" color="white">
            Calendar
          </styled.span>
        </styled.div>
        <styled.div display="flex" flexDirection="column" alignItems="center" gap="1.5">
          <styled.div
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize="14"
            rounded="[32%]"
            cornerShape="squircle"
            bg="pink.500"
            color="white"
            layerStyle="iconGlaze"
          >
            <Icon name="heart-filled" boxSize="[50%]" />
          </styled.div>
          <styled.span textStyle="xs" color="white">
            Health
          </styled.span>
        </styled.div>
        <styled.div display="flex" flexDirection="column" alignItems="center" gap="1.5">
          <styled.div
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize="14"
            rounded="[32%]"
            cornerShape="squircle"
            bg="white"
            color="teal.600"
            layerStyle="iconGlaze"
          >
            <Icon name="map-pin" boxSize="[50%]" />
          </styled.div>
          <styled.span textStyle="xs" color="white">
            Maps
          </styled.span>
        </styled.div>
      </styled.div>
    </styled.div>
  )
}
