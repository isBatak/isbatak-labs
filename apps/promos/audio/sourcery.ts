import { fileURLToPath } from "node:url"

import { writeWav } from "./synth.ts"
import { scoreEffects } from "./sourcery/effects.ts"
import { scorePlayfulIndie } from "./sourcery/playful-indie.ts"
import { scoreTechLaunch } from "./sourcery/tech-launch.ts"
import { scoreTechNoir } from "./sourcery/tech-noir.ts"
import { length } from "./sourcery/timing.ts"

const outDir = fileURLToPath(new URL("../public/sourcery/", import.meta.url))
writeWav(`${outDir}music-tech-launch.wav`, scoreTechLaunch(), 0.6)
writeWav(`${outDir}music-playful-indie.wav`, scorePlayfulIndie(), 0.9)
writeWav(`${outDir}music-tech-noir.wav`, scoreTechNoir(), 0.6)
writeWav(`${outDir}sfx.wav`, scoreEffects(), 0.85)
console.log(
  `sourcery audio: ${length.toFixed(1)}s -> public/sourcery/music-tech-launch.wav, music-playful-indie.wav, music-tech-noir.wav, sfx.wav`,
)
