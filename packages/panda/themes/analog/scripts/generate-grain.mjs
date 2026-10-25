import { writeFileSync } from "node:fs"
import { deflateSync } from "node:zlib"

const size = Number(process.env.GRAIN_SIZE ?? 192)
const scale = 2
const sigma = 6
const limit = 18
const step = 2
const bases = { dark: 43, light: 231 }
const output = size * scale

let seed = 0x2f6b4c1d
const random = () => {
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 0x100000000
}

const gaussian = () => Math.sqrt(-2 * Math.log(1 - random())) * Math.cos(2 * Math.PI * random())

const levels = limit / step
const deltas = Array.from({ length: levels * 2 + 1 }, (_, index) => (index - levels) * step)

const grain = Array.from(
  { length: size * size },
  () => Math.max(-levels, Math.min(levels, Math.round((gaussian() * sigma) / step))) + levels,
)

const palette = Buffer.from(deltas.flatMap((delta) => (delta >= 0 ? [255, 255, 255] : [0, 0, 0])))
const transparency = (base) =>
  Buffer.from(
    deltas.map((delta) =>
      Math.min(255, delta >= 0 ? Math.round((delta * 255) / (255 - base)) : Math.round((-delta * 255) / base)),
    ),
  )

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})

const crc32 = (buffer) => {
  let c = 0xffffffff
  for (const byte of buffer) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

const chunk = (type, data) => {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, "ascii"), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([length, body, crc])
}

const header = Buffer.alloc(13)
header.writeUInt32BE(output, 0)
header.writeUInt32BE(output, 4)
header[8] = 8
header[9] = 3

const stride = 1 + output
const rows = Buffer.alloc(output * stride)
for (let y = 0; y < output; y++) {
  const row = y * stride
  if (y % scale !== 0) {
    rows[row] = 2
    continue
  }
  for (let x = 0; x < output; x++) {
    rows[row + 1 + x] = grain[(y / scale) * size + Math.floor(x / scale)]
  }
}

const pixels = deflateSync(rows, { level: 9 })

const png = (base) =>
  Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", header),
    chunk("PLTE", palette),
    chunk("tRNS", transparency(base)),
    chunk("IDAT", pixels),
    chunk("IEND", Buffer.alloc(0)),
  ])

const tiles = Object.entries(bases).map(([mode, base]) => [mode, png(base)])

writeFileSync(
  new URL("../src/grain.ts", import.meta.url),
  `${tiles.map(([mode, tile]) => `export const grain${mode[0].toUpperCase()}${mode.slice(1)} = "data:image/png;base64,${tile.toString("base64")}"`).join("\n")}\n`,
)
console.log(
  tiles.map(([mode, tile]) => `${mode} ${tile.length} bytes`).join(", "),
  `for a ${size}px tile drawn at ${size}px`,
)
