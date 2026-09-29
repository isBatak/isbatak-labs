import { T } from "../../src/sourcery/theme.ts"
import {
  createRandom,
  drum,
  envelope,
  highpass,
  lowpass,
  midiToHz,
  mix,
  noise,
  saturate,
  sidechain,
  tapeStop,
  tone,
  Track,
} from "../synth.ts"
import { length, seconds } from "./timing.ts"

const random = createRandom(7)

const BAR = seconds(T.outro - T.config) / 7
const BEAT = BAR / 4
const SIXTEENTH = BEAT / 4
const TAPE_STOP = 0.55

const PROGRESSION = [
  { root: 33, notes: [57, 60, 64, 69] },
  { root: 29, notes: [57, 60, 65, 69] },
  { root: 36, notes: [55, 60, 64, 67] },
  { root: 31, notes: [55, 59, 62, 67] },
] as const

const ARP = [0, 1, 2, 3, 2, 1, 2, 3] as const

type Chord = (typeof PROGRESSION)[number]

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

function supersaw(note: number, duration: number, spread = 10) {
  const frequency = midiToHz(note)
  return mix(
    [tone({ frequency, duration, wave: "saw", detuneCents: -spread }), 0.35],
    [tone({ frequency, duration, wave: "saw" }), 0.3],
    [tone({ frequency, duration, wave: "saw", detuneCents: spread }), 0.35],
  )
}

function synthPluck(note: number, decay = 0.2, brightness = 5000) {
  const duration = decay * 3
  const body = lowpass(
    supersaw(note, duration, 7),
    (progress) => 300 + brightness * Math.exp((-progress * duration) / (decay * 0.5)),
  )
  return envelope(body, { attack: 0.002, decay: duration, curve: duration / decay, release: 0.02 })
}

function arp(note: number, cutoff: number) {
  const duration = SIXTEENTH * 1.6
  const frequency = midiToHz(note)
  const body = mix(
    [tone({ frequency, duration, wave: "square" }), 0.4],
    [tone({ frequency, duration, wave: "saw", detuneCents: 6 }), 0.6],
  )
  return envelope(lowpass(lowpass(body, cutoff), cutoff), { attack: 0.002, decay: duration, curve: 4, release: 0.01 })
}

function bass(note: number, duration: number) {
  const body = lowpass(
    tone({ frequency: midiToHz(note), duration, wave: "saw" }),
    (progress) => 180 + 1300 * Math.exp(-progress * 5),
  )
  return envelope(saturate(body, 1.8), { attack: 0.003, decay: duration, sustain: 0.4, curve: 3, release: 0.02 })
}

function sub(note: number, duration: number) {
  return envelope(tone({ frequency: midiToHz(note), duration }), {
    attack: 0.01,
    decay: duration,
    sustain: 0.8,
    release: 0.04,
  })
}

function pad(notes: readonly number[], duration: number) {
  const voices = notes.map((note): [Float32Array, number] => [
    lowpass(supersaw(note, duration, 12), 1300),
    1 / notes.length,
  ])
  return envelope(mix(...voices), { attack: 0.25, decay: 0.3, sustain: 0.8, release: 0.3 })
}

function hit(duration: number, brightness: number) {
  const voices = [45, 52, 57, 60, 64, 69].map((note): [Float32Array, number] => [supersaw(note, duration, 14), 1 / 6])
  const body = lowpass(saturate(mix(...voices), 1.5), (progress) => 300 + brightness * Math.exp(-progress * 6))
  return envelope(body, { attack: 0.003, decay: duration, curve: 4, release: 0.05 })
}

function lift(duration: number) {
  const frequency = midiToHz(45)
  const glideTo = midiToHz(81)
  const body = mix(
    [tone({ frequency, glideTo, duration, wave: "saw", detuneCents: -8 }), 0.5],
    [tone({ frequency, glideTo, duration, wave: "saw", detuneCents: 8 }), 0.5],
  )
  return envelope(
    lowpass(body, (progress) => 400 + 7000 * progress * progress),
    {
      attack: duration * 0.9,
      decay: 0.01,
      sustain: 1,
      release: duration * 0.1,
    },
  )
}

function kick() {
  const click = envelope(highpass(noise(0.012, random), 3000), { attack: 0.0005, decay: 0.01, curve: 5 })
  return mix([saturate(drum(0.36, 44, 190, 0.026, 0.13), 2.2), 1], [click, 0.25])
}

function snare() {
  const body = envelope(tone({ frequency: 240, glideTo: 170, duration: 0.12 }), { decay: 0.1, curve: 5 })
  const rattle = envelope(lowpass(highpass(noise(0.22, random), 1400), 9000), { attack: 0.001, decay: 0.2, curve: 5 })
  return mix([body, 0.5], [rattle, 0.9])
}

function hat(open: boolean) {
  const duration = open ? 0.18 : 0.04
  return envelope(highpass(noise(duration, random), 7500), { attack: 0.001, decay: duration, curve: open ? 4 : 6 })
}

function crash(duration = 1.8) {
  return envelope(lowpass(highpass(noise(duration, random), 4500), 12000), {
    attack: 0.002,
    decay: duration,
    curve: 4,
    release: 0.05,
  })
}

function riser(duration: number, from = 250, to = 9000) {
  const swept = lowpass(highpass(noise(duration, random), 150), (progress) => from * (to / from) ** progress)
  return envelope(swept, { attack: duration * 0.96, decay: 0.01, sustain: 1, release: duration * 0.04 })
}

export function scoreTechLaunch() {
  const drums = new Track(length)
  const synths = new Track(length)
  const fx = new Track(length)
  const kicks: number[] = []
  const drop = seconds(T.keysDown)
  const card = seconds(T.pandaCard)
  const restart = seconds(T.config)
  const outro = seconds(T.outro)
  const rollFrom = outro - BAR

  const kickAt = (time: number, gain: number) => {
    drums.add(time, kick(), gain)
    kicks.push(time)
  }

  fx.add(0, saturate(drum(2.6, 28, 90, 0.35, 0.8), 1.6), 0.75)
  fx.add(0, riser(drop), 0.22)
  for (const { time, step, chord } of steps(drop, 0, drop)) {
    if (step % 2) continue
    const note = chord.notes[ARP[step / 2] ?? 0] + 12
    synths.add(time, synthPluck(note, 0.16, 1500 + (3500 * time) / drop), 0.12, step % 4 ? 0.25 : -0.25)
  }

  const groove = (anchor: number, from: number, to: number) => {
    for (const { time, step, bar, chord } of steps(anchor, from, to)) {
      if (step % 4 === 0) {
        kickAt(time, 0.9)
        synths.add(time, sub(chord.root, BEAT * 0.95), 0.4)
      } else {
        synths.add(time, bass(chord.root + (step % 8 === 6 ? 24 : 12), SIXTEENTH * 0.9), 0.22)
      }
      if (step === 4 || step === 12) drums.add(time, snare(), 0.5, -0.05)
      drums.add(time, hat(step % 4 === 2), step % 4 === 2 ? 0.12 : 0.05, 0.3)
      const cutoff = 900 + 2600 * (0.5 - 0.5 * Math.cos((Math.PI * ((bar % 2) * 16 + step)) / 16))
      const pan = step % 2 ? 0.35 : -0.35
      const note = arp(chord.notes[ARP[step % 8] ?? 0] + 12, cutoff)
      synths.add(time, note, 0.11, pan)
      synths.add(time + SIXTEENTH * 3, note, 0.04, -pan)
      if (step === 0) synths.add(time, pad(chord.notes, BAR), 0.09)
    }
  }

  drums.add(drop, crash(), 0.3, 0.2)
  groove(drop, drop, card + TAPE_STOP)
  groove(restart, restart, rollFrom)

  fx.add(restart - 1, riser(1, 400, 7000), 0.1)
  fx.add(restart, hit(1.4, 7000), 0.5)
  fx.add(restart, crash(), 0.35, -0.2)

  for (const { time, step, chord } of steps(restart, rollFrom, outro)) {
    if (step === 0 || step === 4) kickAt(time, 0.9)
    if (step === 0) synths.add(time, sub(chord.root, BEAT * 2), 0.4)
  }
  for (let position = 0; position < 16; position += position < 8 ? 2 : position < 12 ? 1 : 0.5) {
    const progress = position / 16
    fx.add(rollFrom + position * SIXTEENTH, snare(), 0.18 + 0.4 * progress, (progress - 0.5) * 0.4)
  }
  fx.add(rollFrom, lift(BAR), 0.22)
  fx.add(rollFrom, riser(BAR), 0.2)

  fx.add(outro, saturate(drum(3.8, 30, 160, 0.05, 0.9), 1.8), 1)
  fx.add(outro, hit(3.6, 2500), 0.35)
  fx.add(outro, crash(2.6), 0.3)
  for (let echo = 1; echo <= 5; echo++) {
    fx.add(outro + echo * BEAT * 1.5, drum(1.2, 34, 140, 0.05, 0.3), 0.5 * 0.55 ** echo, echo % 2 ? 0.4 : -0.4)
  }

  const accents = [...T.hunt, T.click, ...T.jumps, ...T.roll, T.altDown, T.pandaClick]
  for (const frame of accents) {
    const time = seconds(frame)
    const anchor = time < restart ? drop : restart
    const note = chordOf(Math.floor((time - anchor) / BAR + 1e-6)).notes[3] + 12
    const pluck = synthPluck(note, 0.14, 7000)
    synths.add(time, pluck, 0.1, 0.2)
    synths.add(time + SIXTEENTH * 3, pluck, 0.05, -0.2)
  }

  synths.applyGain(sidechain(kicks, 0.65, BEAT * 0.8))
  const music = new Track(length)
  music.mixIn(drums)
  music.mixIn(synths)
  tapeStop(music, card, TAPE_STOP)
  music.applyGain((time) => (time >= card + TAPE_STOP && time < restart ? 0 : 1))
  music.mixIn(fx)
  music.applyGain((time) => Math.min(1, time / 0.01, (length - time) / 0.25))
  return music
}
