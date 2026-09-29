import { mkdirSync, writeFileSync } from "node:fs"
import { dirname } from "node:path"

export const SAMPLE_RATE = 44100

export type Wave = "sine" | "triangle" | "saw" | "square"

export function midiToHz(note: number) {
  return 440 * 2 ** ((note - 69) / 12)
}

export function createRandom(seed: number) {
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let value = Math.imul(state ^ (state >>> 15), 1 | state)
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

export class Track {
  readonly left: Float32Array
  readonly right: Float32Array

  constructor(seconds: number) {
    const length = Math.ceil(seconds * SAMPLE_RATE)
    this.left = new Float32Array(length)
    this.right = new Float32Array(length)
  }

  add(at: number, samples: Float32Array, gain = 1, pan = 0) {
    const offset = Math.round(at * SAMPLE_RATE)
    const leftGain = gain * Math.cos(((pan + 1) * Math.PI) / 4)
    const rightGain = gain * Math.sin(((pan + 1) * Math.PI) / 4)
    for (let index = 0; index < samples.length; index++) {
      const target = offset + index
      if (target < 0 || target >= this.left.length) continue
      const sample = samples[index] ?? 0
      this.left[target] = (this.left[target] ?? 0) + sample * leftGain
      this.right[target] = (this.right[target] ?? 0) + sample * rightGain
    }
  }

  mixIn(other: Track, gain = 1) {
    for (let index = 0; index < this.left.length; index++) {
      this.left[index] = (this.left[index] ?? 0) + (other.left[index] ?? 0) * gain
      this.right[index] = (this.right[index] ?? 0) + (other.right[index] ?? 0) * gain
    }
  }

  applyGain(gainAt: (seconds: number) => number) {
    for (let index = 0; index < this.left.length; index++) {
      const gain = gainAt(index / SAMPLE_RATE)
      this.left[index] = (this.left[index] ?? 0) * gain
      this.right[index] = (this.right[index] ?? 0) * gain
    }
  }
}

function oscillator(wave: Wave, phase: number) {
  const cycle = phase - Math.floor(phase)
  if (wave === "sine") return Math.sin(2 * Math.PI * cycle)
  if (wave === "triangle") return 1 - 4 * Math.abs(cycle - 0.5)
  if (wave === "square") return cycle < 0.5 ? 1 : -1
  return 2 * cycle - 1
}

export interface ToneOptions {
  frequency: number
  duration: number
  wave?: Wave
  glideTo?: number
  detuneCents?: number
}

export function tone({ frequency, duration, wave = "sine", glideTo, detuneCents = 0 }: ToneOptions) {
  const length = Math.ceil(duration * SAMPLE_RATE)
  const samples = new Float32Array(length)
  const detune = 2 ** (detuneCents / 1200)
  let phase = 0
  for (let index = 0; index < length; index++) {
    const progress = index / length
    const current = glideTo ? frequency * (glideTo / frequency) ** progress : frequency
    phase += (current * detune) / SAMPLE_RATE
    samples[index] = oscillator(wave, phase)
  }
  return samples
}

export function saturate(samples: Float32Array, drive: number) {
  const output = new Float32Array(samples.length)
  for (let index = 0; index < samples.length; index++)
    output[index] = Math.tanh((samples[index] ?? 0) * drive) / Math.tanh(drive)
  return output
}

export function tapeStop(track: Track, at: number, duration: number) {
  const start = Math.round(at * SAMPLE_RATE)
  const length = Math.round(duration * SAMPLE_RATE)
  const fade = SAMPLE_RATE * 0.02
  for (const channel of [track.left, track.right]) {
    const source = channel.slice(start, start + length)
    let position = 0
    for (let index = 0; index < length && start + index < channel.length; index++) {
      const whole = Math.floor(position)
      const fraction = position - whole
      const sample = (source[whole] ?? 0) * (1 - fraction) + (source[whole + 1] ?? 0) * fraction
      channel[start + index] = sample * Math.min(1, (length - index) / fade)
      position += (1 - index / length) ** 1.6
    }
  }
}

export function drum(duration: number, bottom: number, top: number, sweep: number, tail: number) {
  const samples = new Float32Array(Math.ceil(duration * SAMPLE_RATE))
  let phase = 0
  for (let index = 0; index < samples.length; index++) {
    const time = index / SAMPLE_RATE
    phase += (bottom + (top - bottom) * Math.exp(-time / sweep)) / SAMPLE_RATE
    samples[index] = Math.sin(2 * Math.PI * phase) * Math.exp(-time / tail) * Math.min(1, (duration - time) / 0.02)
  }
  return samples
}

export function sidechain(kicks: number[], depth: number, release: number) {
  const sorted = [...kicks].sort((left, right) => left - right)
  let next = 0
  let last = -Infinity
  return (time: number) => {
    while (next < sorted.length && (sorted[next] ?? Infinity) <= time) {
      last = sorted[next] ?? last
      next++
    }
    return 1 - depth * (1 - Math.min(1, (time - last) / release)) ** 2
  }
}

export function stutter(track: Track, at: number, slice: number, until: number) {
  const start = Math.round(at * SAMPLE_RATE)
  const size = Math.max(1, Math.round(slice * SAMPLE_RATE))
  const end = Math.min(track.left.length, Math.round(until * SAMPLE_RATE))
  const edge = Math.min(size / 4, SAMPLE_RATE * 0.003)
  for (const channel of [track.left, track.right]) {
    const source = channel.slice(start, start + size)
    for (let index = start; index < end; index++) {
      const position = (index - start) % size
      channel[index] = (source[position] ?? 0) * Math.min(1, position / edge, (size - position) / edge)
    }
  }
}

export interface ReverbOptions {
  tail?: number
  size?: number
  feedback?: number
  damping?: number
  spread?: number
}

export function reverb(
  samples: Float32Array,
  { tail = 3, size = 1, feedback = 0.86, damping = 0.3, spread = 0 }: ReverbOptions = {},
) {
  const output = new Float32Array(samples.length + Math.ceil(tail * SAMPLE_RATE))
  const combs = [1557, 1617, 1491, 1422, 1277, 1356, 1188, 1116].map((delay) => ({
    buffer: new Float32Array(Math.round((delay + spread) * size)),
    index: 0,
    store: 0,
  }))
  const allpasses = [556, 441, 341, 225].map((delay) => ({
    buffer: new Float32Array(Math.round((delay + spread) * size)),
    index: 0,
  }))
  for (let index = 0; index < output.length; index++) {
    const input = (samples[index] ?? 0) * 0.015
    let sum = 0
    for (const comb of combs) {
      const delayed = comb.buffer[comb.index] ?? 0
      comb.store = delayed * (1 - damping) + comb.store * damping
      comb.buffer[comb.index] = input + comb.store * feedback
      comb.index = (comb.index + 1) % comb.buffer.length
      sum += delayed
    }
    for (const allpass of allpasses) {
      const delayed = allpass.buffer[allpass.index] ?? 0
      allpass.buffer[allpass.index] = sum + delayed * 0.5
      allpass.index = (allpass.index + 1) % allpass.buffer.length
      sum = delayed - sum
    }
    output[index] = sum
  }
  return output
}

export function noise(duration: number, random: () => number) {
  const samples = new Float32Array(Math.ceil(duration * SAMPLE_RATE))
  for (let index = 0; index < samples.length; index++) samples[index] = random() * 2 - 1
  return samples
}

export function pluck(frequency: number, duration: number, random: () => number, damping = 0.996, brightness = 0.6) {
  const samples = new Float32Array(Math.ceil(duration * SAMPLE_RATE))
  const period = Math.max(2, Math.round(SAMPLE_RATE / frequency))
  const line = new Float32Array(period)
  let smooth = 0
  for (let index = 0; index < period; index++) {
    smooth += brightness * (random() * 2 - 1 - smooth)
    line[index] = smooth
  }
  for (let index = 0; index < samples.length; index++) {
    const position = index % period
    const current = line[position] ?? 0
    const next = line[(index + 1) % period] ?? 0
    samples[index] = current
    line[position] = damping * 0.5 * (current + next)
  }
  return samples
}

export function lowpass(samples: Float32Array, cutoff: number | ((progress: number) => number)) {
  const output = new Float32Array(samples.length)
  let state = 0
  for (let index = 0; index < samples.length; index++) {
    const hz = typeof cutoff === "number" ? cutoff : cutoff(index / samples.length)
    const alpha = 1 - Math.exp((-2 * Math.PI * hz) / SAMPLE_RATE)
    state += alpha * ((samples[index] ?? 0) - state)
    output[index] = state
  }
  return output
}

export function highpass(samples: Float32Array, cutoff: number) {
  const low = lowpass(samples, cutoff)
  const output = new Float32Array(samples.length)
  for (let index = 0; index < samples.length; index++) output[index] = (samples[index] ?? 0) - (low[index] ?? 0)
  return output
}

export interface EnvelopeOptions {
  attack?: number
  decay?: number
  sustain?: number
  release?: number
  curve?: number
}

export function envelope(
  samples: Float32Array,
  { attack = 0.005, decay = 0.1, sustain = 0, release = 0.05, curve = 3 }: EnvelopeOptions,
) {
  const output = new Float32Array(samples.length)
  const total = samples.length / SAMPLE_RATE
  const releaseAt = total - release
  for (let index = 0; index < samples.length; index++) {
    const time = index / SAMPLE_RATE
    let gain: number
    if (time < attack) gain = time / attack
    else if (time < attack + decay) gain = sustain + (1 - sustain) * Math.exp((-curve * (time - attack)) / decay)
    else gain = sustain
    if (time > releaseAt) gain *= Math.max(0, (total - time) / release)
    output[index] = (samples[index] ?? 0) * gain
  }
  return output
}

export function mix(...layers: Array<[Float32Array, number]>) {
  const length = Math.max(...layers.map(([samples]) => samples.length))
  const output = new Float32Array(length)
  for (const [samples, gain] of layers) {
    for (let index = 0; index < samples.length; index++)
      output[index] = (output[index] ?? 0) + (samples[index] ?? 0) * gain
  }
  return output
}

export function writeWav(path: string, track: Track, peak = 0.89) {
  let max = 0
  for (let index = 0; index < track.left.length; index++) {
    max = Math.max(max, Math.abs(track.left[index] ?? 0), Math.abs(track.right[index] ?? 0))
  }
  const scale = max > 0 ? peak / max : 1
  const frames = track.left.length
  const buffer = Buffer.alloc(44 + frames * 4)

  buffer.write("RIFF", 0)
  buffer.writeUInt32LE(36 + frames * 4, 4)
  buffer.write("WAVE", 8)
  buffer.write("fmt ", 12)
  buffer.writeUInt32LE(16, 16)
  buffer.writeUInt16LE(1, 20)
  buffer.writeUInt16LE(2, 22)
  buffer.writeUInt32LE(SAMPLE_RATE, 24)
  buffer.writeUInt32LE(SAMPLE_RATE * 4, 28)
  buffer.writeUInt16LE(4, 32)
  buffer.writeUInt16LE(16, 34)
  buffer.write("data", 36)
  buffer.writeUInt32LE(frames * 4, 40)

  for (let index = 0; index < frames; index++) {
    const left = Math.tanh((track.left[index] ?? 0) * scale * 1.1) / Math.tanh(1.1)
    const right = Math.tanh((track.right[index] ?? 0) * scale * 1.1) / Math.tanh(1.1)
    buffer.writeInt16LE(Math.round(Math.max(-1, Math.min(1, left)) * 32767), 44 + index * 4)
    buffer.writeInt16LE(Math.round(Math.max(-1, Math.min(1, right)) * 32767), 46 + index * 4)
  }

  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, buffer)
}
