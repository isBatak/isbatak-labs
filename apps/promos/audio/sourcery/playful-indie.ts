import { T } from "../../src/sourcery/theme.ts"
import {
  createRandom,
  envelope,
  highpass,
  lowpass,
  midiToHz,
  mix,
  noise,
  pluck,
  SAMPLE_RATE,
  tone,
  Track,
} from "../synth.ts"
import { length, seconds } from "./timing.ts"

const random = createRandom(23)

const BEAT = 60 / 118
const BAR = BEAT * 4
const SIXTEENTH = BEAT / 4
const UKE = 1.2

const PROGRESSION = [
  { uke: [67, 60, 64, 72], root: 36, melody: { 0: 76, 2: 79, 4: 84, 10: 83, 12: 79 } },
  { uke: [67, 62, 67, 71], root: 31, melody: { 0: 83, 4: 79, 6: 81, 8: 79, 14: 74 } },
  { uke: [69, 60, 64, 69], root: 33, melody: { 0: 76, 2: 79, 4: 81, 8: 84, 12: 83, 14: 81 } },
  { uke: [69, 60, 65, 69], root: 29, melody: { 0: 81, 4: 77, 6: 76, 8: 77, 12: 79 } },
] as const

type Chord = (typeof PROGRESSION)[number]
type Stroke = "down" | "up" | "ghost" | "chuck"

const STRUM: Record<number, Stroke> = {
  0: "down",
  2: "ghost",
  4: "chuck",
  6: "up",
  8: "down",
  10: "up",
  12: "chuck",
  14: "up",
}
const BASS: Record<number, number> = { 0: 0, 3: 12, 6: 7, 8: 0, 10: 12, 14: 7 }

interface Step {
  time: number
  step: number
  bar: number
  chord: Chord
}

function chordOf(bar: number) {
  return PROGRESSION[((bar % 4) + 4) % 4] ?? PROGRESSION[0]
}

function steps(anchor: number, from: number, to: number) {
  const result: Step[] = []
  for (let index = Math.ceil((from - anchor) / SIXTEENTH - 1e-6); anchor + index * SIXTEENTH < to - 1e-6; index++) {
    const bar = Math.floor(index / 16)
    result.push({ time: anchor + index * SIXTEENTH, step: index - bar * 16, bar, chord: chordOf(bar) })
  }
  return result
}

function shift(samples: Float32Array, by: number) {
  const offset = Math.round(by * SAMPLE_RATE)
  const output = new Float32Array(samples.length + offset)
  output.set(samples, offset)
  return output
}

interface StrumOptions {
  up?: boolean
  spread?: number
  duration?: number
  damping?: number
  brightness?: number
}

function strum(
  voicing: readonly number[],
  {
    up = false,
    spread = up ? 0.008 : 0.012,
    duration = 0.7,
    damping = 0.994,
    brightness = up ? 0.45 : 0.65,
  }: StrumOptions = {},
) {
  const order = up ? [...voicing].reverse() : voicing
  const strings = order.map((note, index): [Float32Array, number] => [
    shift(pluck(midiToHz(note), duration, random, damping, brightness), index * spread),
    1 / order.length,
  ])
  return envelope(lowpass(highpass(mix(...strings), 160), 6500), { attack: 0.001, sustain: 1, release: 0.03 })
}

function stroke(voicing: readonly number[], kind: Stroke) {
  if (kind === "down") return strum(voicing)
  if (kind === "up") return strum(voicing, { up: true })
  if (kind === "ghost") return strum(voicing, { up: true, brightness: 0.3, duration: 0.3 })
  const thud = envelope(lowpass(noise(0.05, random), 2200), { attack: 0.001, decay: 0.04, curve: 5 })
  return mix([strum(voicing, { duration: 0.08, damping: 0.9, spread: 0.004 }), 1], [thud, 0.5])
}

const STROKE_GAIN: Record<Stroke, number> = { down: 0.9, up: 0.55, ghost: 0.3, chuck: 0.7 }

function bass(note: number, duration: number) {
  const body = lowpass(pluck(midiToHz(note), duration, random, 0.997, 0.35), 1100)
  const fundamental = tone({ frequency: midiToHz(note), duration })
  return envelope(mix([body, 0.8], [fundamental, 0.5]), {
    attack: 0.004,
    decay: duration,
    sustain: 0.5,
    curve: 3,
    release: 0.04,
  })
}

function whistle(duration: number, pitchAt: (time: number) => number) {
  const samples = new Float32Array(Math.ceil(duration * SAMPLE_RATE))
  let phase = 0
  for (let index = 0; index < samples.length; index++) {
    const time = index / SAMPLE_RATE
    const vibrato = 0.22 * Math.min(1, time / 0.25) * Math.sin(2 * Math.PI * 5.6 * time)
    phase += midiToHz(pitchAt(time) + vibrato) / SAMPLE_RATE
    samples[index] = Math.sin(2 * Math.PI * phase)
  }
  const breath = lowpass(highpass(noise(duration, random), 1800), 5000)
  return envelope(mix([samples, 1], [breath, 0.05]), {
    attack: 0.03,
    decay: 0.2,
    sustain: 0.85,
    release: Math.min(0.08, duration * 0.3),
  })
}

function slideWhistle() {
  return whistle(0.9, (time) =>
    time < 0.5 ? 70 + 22 * (time / 0.5) ** 0.7 : time < 0.65 ? 92 : 92 - (12 * (time - 0.65)) / 0.25,
  )
}

function bell(note: number, decay: number) {
  const frequency = midiToHz(note)
  const samples = new Float32Array(Math.ceil(decay * 4 * SAMPLE_RATE))
  for (let index = 0; index < samples.length; index++) {
    const time = index / SAMPLE_RATE
    const partials =
      Math.sin(2 * Math.PI * frequency * time) * Math.exp(-time / decay) +
      0.4 * Math.sin(2 * Math.PI * frequency * 2.76 * time) * Math.exp(-time / (decay * 0.35)) +
      0.15 * Math.sin(2 * Math.PI * frequency * 5.4 * time) * Math.exp(-time / (decay * 0.15))
    samples[index] = partials * Math.min(1, time / 0.001)
  }
  return samples
}

function clap() {
  const burst = (duration: number, decay: number) =>
    envelope(lowpass(highpass(noise(duration, random), 900), 3500), { attack: 0.0005, decay, curve: 5 })
  return mix([burst(0.01, 0.008), 1], [shift(burst(0.01, 0.008), 0.009), 0.9], [shift(burst(0.16, 0.14), 0.018), 1])
}

function tambourine(accent: boolean) {
  const duration = accent ? 0.16 : 0.05
  const jingle = lowpass(highpass(noise(duration, random), 6500), 14000)
  const ring = mix(
    [tone({ frequency: 7400, duration }), 1],
    [tone({ frequency: 9800, duration }), 0.7],
    [tone({ frequency: 12100, duration }), 0.5],
  )
  return envelope(mix([jingle, 1], [ring, accent ? 0.12 : 0.05]), {
    attack: accent ? 0.004 : 0.008,
    decay: duration,
    curve: accent ? 4 : 5,
  })
}

function stomp() {
  const body = envelope(tone({ frequency: 120, glideTo: 50, duration: 0.25 }), { attack: 0.002, decay: 0.22, curve: 4 })
  const thump = envelope(lowpass(noise(0.08, random), 400), { attack: 0.001, decay: 0.07, curve: 4 })
  return mix([body, 1], [thump, 0.6])
}

function stick() {
  const body = envelope(tone({ frequency: 2400, duration: 0.05 }), { decay: 0.04, curve: 6 })
  const tick = envelope(highpass(noise(0.03, random), 3000), { attack: 0.0005, decay: 0.02, curve: 6 })
  return mix([body, 0.5], [tick, 0.7])
}

function melodyAt(chord: Chord, step: number) {
  const melody: Record<number, number> = chord.melody
  const note = melody[step]
  if (note === undefined) return undefined
  const next = Object.keys(melody)
    .map(Number)
    .find((key) => key > step)
  return { note, duration: Math.min((next ?? 16) - step, 6) * SIXTEENTH * 0.92 }
}

export function scorePlayfulIndie() {
  const music = new Track(length)
  const groove = seconds(T.keysDown)
  const card = seconds(T.pandaCard)
  const outro = seconds(T.outro)
  const stopAt = groove + Math.floor((card - groove) / BEAT) * BEAT
  const restart = outro - 6 * BAR
  const buildFrom = outro - BAR

  const play = (anchor: number, from: number, to: number, band: boolean, whistleGain: (bar: number) => number) => {
    for (const { time, step, bar, chord } of steps(anchor, from, to)) {
      const kind = STRUM[step]
      if (kind) music.add(time, stroke(chord.uke, kind), UKE * STROKE_GAIN[kind], -0.2)
      const melody = melodyAt(chord, step)
      const gain = whistleGain(bar)
      if (melody && gain > 0) {
        music.add(
          time,
          whistle(melody.duration, (at) => melody.note - 0.6 * Math.exp(-at / 0.03)),
          gain,
          0.1,
        )
      }
      if (!band) continue
      const interval = BASS[step]
      if (interval !== undefined) {
        music.add(time, bass(chord.root + interval, SIXTEENTH * (step === 0 ? 2.5 : 1.5)), 0.42)
      }
      if (step === 0 || step === 8) music.add(time, stomp(), 0.38)
      if (step === 4 || step === 12) {
        music.add(time, clap(), 0.32, -0.15)
        music.add(time + 0.004, clap(), 0.22, 0.2)
      }
      music.add(time, tambourine(step % 4 === 2), step % 4 === 2 ? 0.12 : 0.04, 0.4)
    }
  }

  play(groove, 0, groove, false, (bar) => (bar === -1 ? 0.16 : 0))
  play(groove, groove, stopAt, true, (bar) => (bar >= 4 ? 0.1 : 0))

  const stopChord = chordOf(Math.floor((stopAt - groove) / BAR + 1e-6))
  music.add(stopAt, stroke(stopChord.uke, "down"), UKE, -0.2)
  music.add(stopAt, bass(stopChord.root, BEAT), 0.45)
  music.add(stopAt, stomp(), 0.5)
  music.add(stopAt, clap(), 0.35)
  music.add(card, slideWhistle(), 0.14, 0.2)

  for (let beat = 0; beat < 4; beat++) {
    const time = restart - (4 - beat) * BEAT
    music.add(time, stick(), 0.35 + beat * 0.05, 0.1)
    if (beat === 3) {
      music.add(time, clap(), 0.3)
      music.add(time, tambourine(true), 0.14, 0.4)
    }
  }

  play(restart, restart, buildFrom, true, (bar) => (bar < 4 ? 0.1 : 0))

  for (const { time, step, chord } of steps(restart, buildFrom, outro)) {
    if (step % 4 === 0) {
      music.add(time, stroke(chord.uke, "down"), UKE, -0.2)
      music.add(time, stomp(), 0.38)
      music.add(time, bass(chord.root, SIXTEENTH * 1.5), 0.42)
    }
    music.add(time, tambourine(step % 4 === 2), step % 4 === 2 ? 0.12 : 0.05, 0.4)
  }
  for (let position = 0; position < 16; position += position < 8 ? 2 : position < 12 ? 1 : 0.5) {
    const progress = position / 16
    music.add(buildFrom + position * SIXTEENTH, clap(), 0.15 + 0.3 * progress, (progress - 0.5) * 0.5)
  }

  music.add(outro, strum(PROGRESSION[0].uke, { spread: 0.03, duration: 3.2, damping: 0.998 }), UKE * 1.3, -0.1)
  music.add(outro, bass(PROGRESSION[0].root, 2.4), 0.45)
  music.add(outro, stomp(), 0.55)
  music.add(outro + 0.12, bell(96, 1.1), 0.2, 0.25)

  const sparkle = (frames: readonly number[], notes: readonly number[]) => {
    for (const [index, frame] of frames.entries()) {
      music.add(seconds(frame), bell(notes[index % notes.length] ?? 84, 0.22), 0.14, 0.3)
    }
  }
  sparkle(T.hunt.slice(1), [84, 88, 91])
  sparkle([T.click], [96])
  sparkle(T.jumps, [88, 91, 96])
  sparkle(T.roll, [84, 86, 88, 91, 93, 96])
  sparkle([T.altDown, T.pandaClick], [91, 96])

  music.applyGain((time) => Math.min(1, time / 0.01, (length - time) / 0.25))
  return music
}
