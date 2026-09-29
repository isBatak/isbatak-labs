import { styled } from "styled-system/jsx"

import { Icon } from "../ui/icon"

interface VideoDemoProps {
  src?: string | undefined
  poster?: string | undefined
  title: string
}

export function VideoDemo({ src, poster, title }: VideoDemoProps) {
  return (
    <styled.figure
      position="relative"
      display="grid"
      placeItems="center"
      aspectRatio="16 / 9"
      m="0"
      borderRadius="l3"
      borderWidth="1px"
      bg="bg.subtle"
      overflow="hidden"
    >
      {src ? (
        <styled.video
          src={src}
          poster={poster}
          title={title}
          controls
          playsInline
          preload="metadata"
          w="full"
          h="full"
          objectFit="cover"
        />
      ) : (
        <styled.div display="flex" flexDirection="column" alignItems="center" gap="4" color="fg.muted" p="6">
          <styled.span
            display="grid"
            placeItems="center"
            boxSize="14"
            borderRadius="full"
            borderWidth="1px"
            bg="bg"
            color="fg"
          >
            <Icon name="player-play" size="lg" />
          </styled.span>
          <styled.figcaption textStyle="sm">Video demo coming soon</styled.figcaption>
        </styled.div>
      )}
    </styled.figure>
  )
}
