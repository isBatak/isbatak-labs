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
  reverb,
  type ReverbOptions,
  SAMPLE_RATE,
  saturate,
  sidechain,
  stutter,
  tone,
  Track,
} from "../synth.ts"
import { length, seconds } from "./timing.ts"

const random = createRandom(31)

const BAR = seconds(T.outro - T.typeFrom) / 6
const BEAT = BAR / 4
const SIXTEENTH = BEAT / 4

const PROGRESSION = [
  { root: 38, glass: [74, 77, 81, 86] },
  { root: 34, glass: [74, 77, 82, 86] },
  { root: 31, glass: [74, 79, 82, 86] },
  { root: 33, glass: [73, 76, 81, 85] },
] as const

const MOTIF = [62, 65, 64, 57] as const
const ARP = [0, 2, 3, 1, 2, 3, 0, 3] as const
const BASS: Record<number, [number, number]> = {
  0: [0, 1],
  2: [0, 0.6],
  3: [12, 0.7],
  6: [0, 0.8],
  7: [0, 0.5],
  10: [12, 0.7],
  11: [0, 0.6],
  14: [7, 0.7],
}

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

function glass(note: number, decay = 0.35) {
  const frequency = midiToHz(note)
  const samples = new Float32Array(Math.ceil(decay * 4 * SAMPLE_RATE))
  for (let index = 0; index < samples.length; index++) {
    const time = index / SAMPLE_RATE
    const partials =
      Math.sin(2 * Math.PI * frequency * time) * Math.exp(-time / decay) +
      0.5 * Math.sin(2 * Math.PI * frequency * 1.003 * time) * Math.exp(-time / decay) +
      0.35 * Math.sin(2 * Math.PI * frequency * 2 * time) * Math.exp(-time / (decay * 0.6)) +
      0.2 * Math.sin(2 * Math.PI * frequency * 4.2 * time) * Math.exp(-time / (decay * 0.25))
    samples[index] = partials * Math.min(1, time / 0.002)
  }
  return samples
}

function cello(note: number, duration: number) {
  const frequency = midiToHz(note)
  const samples = new Float32Array(Math.ceil(duration * SAMPLE_RATE))
  let low = 0
  let high = 0
  for (let index = 0; index < samples.length; index++) {
    const time = index / SAMPLE_RATE
    const vibrato = 2 ** ((0.15 * Math.min(1, time / 0.4) * Math.sin(2 * Math.PI * 5 * time)) / 12)
    low += (frequency * vibrato * 2 ** (-4 / 1200)) / SAMPLE_RATE
    high += (frequency * vibrato * 2 ** (4 / 1200)) / SAMPLE_RATE
    samples[index] = low - Math.floor(low) + high - Math.floor(high) - 1
  }
  const bow = lowpass(highpass(noise(duration, random), 1200), 3000)
  return envelope(lowpass(lowpass(mix([samples, 1], [bow, 0.04]), 1500), 2200), {
    attack: 0.15,
    decay: 0.3,
    sustain: 0.9,
    release: Math.min(0.25, duration * 0.4),
  })
}

function analogBass(note: number, duration: number) {
  const frequency = midiToHz(note)
  const body = mix(
    [tone({ frequency, duration, wave: "saw" }), 0.5],
    [tone({ frequency, duration, wave: "saw", detuneCents: 6 }), 0.5],
  )
  const filtered = lowpass(body, (progress) => 150 + 1500 * Math.exp(-progress * 6))
  return envelope(saturate(filtered, 2), { attack: 0.003, decay: duration, sustain: 0.5, curve: 3, release: 0.02 })
}

function mutedKick() {
  return lowpass(saturate(drum(0.38, 40, 150, 0.03, 0.16), 2), 900)
}

function rim(accent = true) {
  const ring = mix(
    [envelope(tone({ frequency: 1750, duration: 0.05 }), { attack: 0.0005, decay: 0.04, curve: 6 }), 0.6],
    [envelope(tone({ frequency: 2630, duration: 0.04 }), { attack: 0.0005, decay: 0.03, curve: 6 }), 0.4],
  )
  const snap = envelope(lowpass(highpass(noise(0.03, random), 2000), 7000), {
    attack: 0.0005,
    decay: accent ? 0.025 : 0.012,
    curve: 6,
  })
  return mix([ring, 1], [snap, 0.9])
}

function metalHat(open: boolean) {
  const duration = open ? 0.2 : 0.045
  const metal = mix(
    ...[263, 400, 421, 474, 587, 845].map((frequency): [Float32Array, number] => [
      tone({ frequency: frequency * 1.6, duration, wave: "square" }),
      1 / 6,
    ]),
  )
  return envelope(highpass(highpass(metal, 7000), 7000), { attack: 0.0005, decay: duration, curve: open ? 4 : 6 })
}

function drone(duration: number, from: number, to: number) {
  const samples = new Float32Array(Math.ceil(duration * SAMPLE_RATE))
  const phases = [0, 0, 0]
  for (let index = 0; index < samples.length; index++) {
    const progress = index / samples.length
    const glide = progress < 0.5 ? from : from + (to - from) * ((progress - 0.5) * 2) ** 1.6
    const frequency = midiToHz(glide)
    phases[0] = (phases[0] ?? 0) + (frequency * 2 ** (-7 / 1200)) / SAMPLE_RATE
    phases[1] = (phases[1] ?? 0) + (frequency * 2 ** (7 / 1200)) / SAMPLE_RATE
    phases[2] = (phases[2] ?? 0) + frequency / 2 / SAMPLE_RATE
    const saws = phases.slice(0, 2).reduce((sum, phase) => sum + 2 * (phase - Math.floor(phase)) - 1, 0)
    const sub = (phases[2] ?? 0) % 1 < 0.5 ? 1 : -1
    samples[index] = saws * 0.4 + sub * 0.3
  }
  const filtered = lowpass(
    lowpass(samples, (progress) => 250 + 5000 * progress ** 2),
    (progress) => 400 + 6000 * progress ** 2,
  )
  return envelope(filtered, { attack: duration * 0.9, decay: 0.01, sustain: 1, release: 0.004 })
}

function hum(duration: number) {
  const samples = new Float32Array(Math.ceil(duration * SAMPLE_RATE))
  for (let index = 0; index < samples.length; index++) {
    const time = index / SAMPLE_RATE
    const shimmer = 0.6 + 0.4 * Math.sin(2 * Math.PI * 3 * time)
    samples[index] =
      Math.sin(2 * Math.PI * midiToHz(62) * time) +
      0.6 * Math.sin(2 * Math.PI * midiToHz(69) * 1.002 * time) +
      0.3 * shimmer * Math.sin(2 * Math.PI * midiToHz(86) * time)
  }
  return envelope(samples, { attack: duration * 0.35, decay: 0.01, sustain: 1, release: duration * 0.6 })
}

function swell(duration: number, note: number) {
  const body = mix([glass(note, 0.5), 0.6], [lowpass(highpass(noise(2, random), 2500), 9000), 0.15])
  const tail = envelope(body.subarray(0, Math.ceil(duration * SAMPLE_RATE)), {
    attack: 0.001,
    decay: duration,
    curve: 3,
  })
  return tail.slice().reverse()
}

export function scoreTechNoir() {
  const drums = new Track(length)
  const bass = new Track(length)
  const lead = new Track(length)
  const fx = new Track(length)
  const kicks: number[] = []
  const groove = seconds(T.pageIn)
  const card = seconds(T.pandaCard)
  const stopAt = groove + Math.round((card - groove) / BAR) * BAR
  const restart = seconds(T.typeFrom)
  const outro = seconds(T.outro)
  const buildFrom = outro - 2 * BAR

  const echo = (track: Track, time: number, samples: Float32Array, gain: number, taps = 3) => {
    track.add(time, samples, gain, 0.2)
    for (let tap = 1; tap <= taps; tap++)
      track.add(time + tap * BEAT * 0.75, samples, gain * 0.45 ** tap, tap % 2 ? -0.6 : 0.6)
  }
  const cavern = (time: number, samples: Float32Array, gain: number, options: ReverbOptions) => {
    fx.add(time, reverb(samples, options), gain, -1)
    fx.add(time, reverb(samples, { ...options, spread: 23 }), gain, 1)
  }

  const boom = saturate(drum(3.2, 26, 80, 0.25, 1), 1.6)
  fx.add(0, boom, 0.8)
  cavern(0, boom, 0.5, { tail: 3, feedback: 0.9, damping: 0.4 })
  for (let tap = 1; tap <= 3; tap++)
    fx.add(tap * BEAT * 1.5, lowpass(drum(1.2, 30, 70, 0.2, 0.5), 300), 0.35 * 0.5 ** tap)

  for (const { time, step } of steps(groove, 0, groove)) {
    const note = PROGRESSION[0].glass[ARP[step % 8] ?? 0]
    echo(lead, time, glass(note), 0.09 * Math.min(1, 0.3 + time / groove))
  }

  const introNotes: Array<[number, number, number]> = [
    [0.05, groove - 3 * BEAT, MOTIF[0]],
    [groove - 3 * BEAT, groove - BEAT, MOTIF[1]],
    [groove - BEAT, groove, MOTIF[2]],
    [groove, groove + 2 * BEAT, MOTIF[3]],
  ]
  for (const [from, to, note] of introNotes) lead.add(from, cello(note, to - from + 0.1), 0.22, -0.1)

  const motif = (anchor: number, bar: number) => {
    for (const [index, note] of MOTIF.entries()) {
      lead.add(anchor + bar * BAR + index * 2 * BEAT, cello(note, 2 * BEAT * 0.98), 0.2, -0.1)
    }
  }

  const play = (anchor: number, from: number, to: number) => {
    for (const { time, step, chord } of steps(anchor, from, to)) {
      if (step % 4 === 0) {
        drums.add(time, mutedKick(), 0.95)
        kicks.push(time)
      }
      if (step === 4 || step === 12) drums.add(time, rim(), 0.4, 0.15)
      if (step === 11) drums.add(time, rim(false), 0.12, -0.2)
      drums.add(time, metalHat(step % 4 === 2), step % 4 === 2 ? 0.1 : 0.045, 0.35)
      const pulse = BASS[step]
      if (pulse) bass.add(time, analogBass(chord.root + pulse[0], SIXTEENTH * 0.95), 0.34 * pulse[1])
      if (step % 2 === 0) echo(lead, time, glass(chord.glass[ARP[(step / 2) % 8] ?? 0] + 12, 0.25), 0.035, 2)
    }
  }

  play(groove, groove, stopAt)
  motif(groove, 2)
  motif(groove, 6)
  play(restart, restart, outro)
  motif(restart, 2)

  const lastHit = mix([mutedKick(), 1], [rim(), 0.5], [analogBass(PROGRESSION[0].root, BEAT), 0.4])
  fx.add(stopAt, lastHit, 0.9)
  cavern(stopAt, lastHit, 0.9, { tail: 4, size: 1.5, feedback: 0.93, damping: 0.35 })
  const chimeAt = card + 0.25
  echo(fx, chimeAt, glass(86, 1.4), 0.16, 5)
  cavern(chimeAt, glass(86, 1.4), 0.3, { tail: 3.5, size: 1.4, feedback: 0.9, damping: 0.2 })

  fx.add(restart - 1, swell(1, 74), 0.25)
  fx.add(restart, saturate(drum(1.4, 28, 120, 0.12, 0.5), 2), 0.9)

  for (const frame of [...T.hunt, T.pandaBack]) {
    const time = seconds(frame)
    const anchor = time < restart ? groove : restart
    const chord = chordOf(Math.floor((time - anchor) / BAR + 1e-6))
    fx.add(time - 0.6, swell(0.6, chord.glass[3] + 12), 0.18, 0.3)
  }

  bass.applyGain(sidechain(kicks, 0.7, BEAT * 0.6))
  const music = new Track(length)
  music.mixIn(drums)
  music.mixIn(bass)
  music.mixIn(lead)
  const duck = (time: number) =>
    T.hookWords.reduce((gain, frame) => {
      const distance = time - seconds(frame)
      return distance > -0.05 && distance < 0.4 ? gain * (0.4 + 0.6 * Math.min(1, Math.abs(distance) / 0.4)) : gain
    }, 1)
  music.applyGain((time) =>
    time >= stopAt && time < restart ? Math.max(0, 1 - (time - stopAt) / 0.02) : time >= outro ? 0 : duck(time),
  )

  stutter(music, outro - 2 * BEAT, BEAT / 2, outro - BEAT)
  stutter(music, outro - BEAT, BEAT / 4, outro - BEAT / 2)
  stutter(music, outro - BEAT / 2, BEAT / 8, outro)

  fx.add(buildFrom, drone(outro - buildFrom, 38, 62), 0.28)
  const impact = mix([saturate(drum(3.6, 26, 140, 0.06, 0.9), 2), 1], [mutedKick(), 0.6])
  fx.add(outro, impact, 1)
  cavern(outro, impact, 0.6, { tail: 3.5, size: 1.5, feedback: 0.92, damping: 0.45 })
  for (let tap = 1; tap <= 4; tap++) {
    fx.add(
      outro + tap * BEAT * 1.5,
      lowpass(drum(1.2, 30, 110, 0.05, 0.3), 400),
      0.45 * 0.5 ** tap,
      tap % 2 ? 0.5 : -0.5,
    )
  }
  fx.add(outro + 0.3, hum(length - outro - 0.3), 0.05)

  music.mixIn(fx)
  music.applyGain((time) => Math.min(1, time / 0.01, (length - time) / 0.25))
  return music
}
