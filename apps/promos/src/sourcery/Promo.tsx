import { AbsoluteFill, Html5Audio, Sequence, staticFile } from "remotion"

import { Background } from "./layers/background"
import { CardSegment } from "./layers/card"
import { ConfigSegment } from "./layers/config"
import { EditorLayer } from "./layers/editor"
import { EditorsSegment } from "./layers/editors"
import { HookSegment } from "./layers/hook"
import { HuntSegment } from "./layers/hunt"
import { JumpsSegment } from "./layers/jumps"
import { OpenSegment } from "./layers/open"
import { OutroSegment } from "./layers/outro"
import { PandaSegment } from "./layers/panda"
import { SwarmSegment } from "./layers/swarm"
import { World } from "./layers/world"
import { StageProvider } from "./stage/context"
import { LAYERS } from "./timeline"

const MUSIC_VOLUME = 0.55
const EFFECTS_VOLUME = 0.9

export function Promo() {
  return (
    <StageProvider>
      <AbsoluteFill style={{ background: "#ffffff", overflow: "hidden" }}>
        <Sequence name="Background" layout="none">
          <Background />
        </Sequence>
        <Sequence name="World · site in browser" layout="none">
          <World />
        </Sequence>
        <Sequence name="1 · Hook" {...LAYERS.hook} layout="none">
          <HookSegment />
        </Sequence>
        <Sequence name="Editor · hero" {...LAYERS.editorHero} layout="none">
          <EditorLayer />
        </Sequence>
        <Sequence name="Editor · next.config.ts" {...LAYERS.editorConfig} layout="none">
          <EditorLayer />
        </Sequence>
        <Sequence name="Editor · styled()" {...LAYERS.editorStyled} layout="none">
          <EditorLayer />
        </Sequence>
        <Sequence name="2 · Hunt" {...LAYERS.hunt} layout="none">
          <HuntSegment />
        </Sequence>
        <Sequence name="3 · Open" {...LAYERS.open} layout="none">
          <OpenSegment />
        </Sequence>
        <Sequence name="4 · Jumps" {...LAYERS.jumps} layout="none">
          <JumpsSegment />
        </Sequence>
        <Sequence name="5 · Editors" {...LAYERS.editors} layout="none">
          <EditorsSegment />
        </Sequence>
        <Sequence name="6 · Panda card" {...LAYERS.card} layout="none">
          <CardSegment />
        </Sequence>
        <Sequence name="7 · Config" {...LAYERS.config} layout="none">
          <ConfigSegment />
        </Sequence>
        <Sequence name="8 · Panda keys" {...LAYERS.panda} layout="none">
          <PandaSegment />
        </Sequence>
        <Sequence name="9 · Swarm" {...LAYERS.swarm} layout="none">
          <SwarmSegment />
        </Sequence>
        <Sequence name="10 · Outro" {...LAYERS.outro} layout="none">
          <OutroSegment />
        </Sequence>
        <Sequence name="Audio · music · tech launch" layout="none" hidden>
          <Html5Audio src={staticFile("sourcery/music-tech-launch.wav")} volume={MUSIC_VOLUME} />
        </Sequence>
        <Sequence name="Audio · music · playful indie" layout="none" hidden>
          <Html5Audio src={staticFile("sourcery/music-playful-indie.wav")} volume={MUSIC_VOLUME} />
        </Sequence>
        <Sequence name="Audio · music · tech noir" layout="none">
          <Html5Audio src={staticFile("sourcery/music-tech-noir.wav")} volume={MUSIC_VOLUME} />
        </Sequence>
        <Sequence name="Audio · sound effects" layout="none">
          <Html5Audio src={staticFile("sourcery/sfx.wav")} volume={EFFECTS_VOLUME} />
        </Sequence>
      </AbsoluteFill>
    </StageProvider>
  )
}
