import type { Cue } from "./video-transcript.types"

export function findActiveCue(cues: Cue[], time: number) {
  let low = 0
  let high = cues.length - 1
  let found = -1
  while (low <= high) {
    const mid = (low + high) >> 1
    if (cues[mid]!.start <= time) {
      found = mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  if (found < 0 || time >= cues[found]!.end) return -1
  return found
}

export function formatTime(seconds: number) {
  const total = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const rest = String(total % 60).padStart(2, "0")
  return hours > 0 ? `${hours}:${String(minutes).padStart(2, "0")}:${rest}` : `${minutes}:${rest}`
}
