import { T } from "../../src/sourcery/theme.ts"
import { createRandom, envelope, highpass, lowpass, mix, noise, tone, Track } from "../synth.ts"
import { length, seconds } from "./timing.ts"

const random = createRandom(11)

function mouseClick() {
  const snap = envelope(highpass(noise(0.012, random), 2500), { attack: 0.0005, decay: 0.01, curve: 6 })
  const body = envelope(tone({ frequency: 1900, duration: 0.02 }), { decay: 0.015, curve: 6 })
  return mix([snap, 0.8], [body, 0.25])
}

function keyPress(pitch = 1) {
  const clack = envelope(lowpass(highpass(noise(0.04, random), 1200 * pitch), 5000), {
    attack: 0.001,
    decay: 0.03,
    curve: 5,
  })
  const thump = envelope(tone({ frequency: 170 * pitch, glideTo: 90 * pitch, duration: 0.06 }), {
    decay: 0.05,
    curve: 5,
  })
  return mix([clack, 0.7], [thump, 0.5])
}

function pop(frequency: number) {
  return envelope(tone({ frequency: frequency * 1.5, glideTo: frequency, duration: 0.09 }), {
    attack: 0.002,
    decay: 0.08,
    curve: 5,
  })
}

function tick() {
  return envelope(highpass(noise(0.006, random), 5000), { attack: 0.0005, decay: 0.005, curve: 6 })
}

function whoosh(duration: number, rising = true) {
  const swept = lowpass(noise(duration, random), (progress) =>
    rising ? 300 + 1600 * Math.sin(progress * Math.PI) : 1900 - 1500 * progress,
  )
  return envelope(swept, { attack: duration * 0.35, decay: duration * 0.65, curve: 3, release: 0.02 })
}

function punch() {
  const body = envelope(tone({ frequency: 120, glideTo: 48, duration: 0.24 }), { decay: 0.22, curve: 4 })
  return mix([body, 1], [mouseClick(), 0.4])
}

export function scoreEffects() {
  const sfx = new Track(length)
  const at = (frame: number, samples: Float32Array, gain: number, pan = 0) =>
    sfx.add(seconds(frame), samples, gain, pan)

  for (const frame of T.hookWords) at(frame, punch(), 0.55)
  at(T.hookWords[1], mouseClick(), 0.5, 0.3)
  at(T.hookExpand - 3, whoosh(0.35), 0.14)

  at(T.keysIn, pop(660), 0.25, -0.2)
  at(T.keysIn + 4, pop(880), 0.25, 0.2)
  at(T.keysDown, keyPress(), 0.6, -0.15)
  at(T.keysDown + 3, keyPress(1.1), 0.6, 0.15)
  for (const frame of T.hunt.slice(1)) at(frame, tick(), 0.35, 0.1)
  at(T.click, mouseClick(), 0.8)
  at(T.open, whoosh(0.35), 0.12, 0.4)

  for (const frame of T.jumps) {
    at(frame, mouseClick(), 0.75)
    at(frame + 3, tick(), 0.3, 0.3)
  }
  for (const frame of T.roll) at(frame, tick(), 0.45, 0.2)

  at(T.pandaCard - 6, whoosh(0.3), 0.1, -0.3)
  at(T.config, whoosh(0.35), 0.1, 0.4)
  for (let char = 0; char < 13; char++) {
    at(
      T.typeFrom + ((T.typeTo - T.typeFrom) * char) / 13,
      keyPress(0.95 + random() * 0.2),
      0.32,
      (random() - 0.5) * 0.4,
    )
  }
  at(T.pandaBack - 6, whoosh(0.3, false), 0.08, 0.4)

  at(T.pandaBack, pop(660), 0.25, -0.2)
  at(T.pandaBack + 2, pop(880), 0.25, 0.2)
  at(T.pandaBack + 8, pop(990), 0.25, 0)
  at(T.altDown, keyPress(0.85), 0.65)
  at(T.pandaClick, mouseClick(), 0.8)
  at(T.pandaOpen, whoosh(0.35), 0.12, 0.4)

  at(T.swarm, whoosh(0.3, false), 0.06, 0.4)
  for (let box = 0; box < 12; box++) at(T.swarm + 12 + box * 3, pop(520 * 2 ** (box / 12)), 0.2, (box / 11 - 0.5) * 0.8)
  at(T.outro, punch(), 0.6)

  return sfx
}
