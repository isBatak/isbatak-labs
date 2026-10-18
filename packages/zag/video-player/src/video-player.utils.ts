export function formatTime(seconds: number) {
  const total = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const rest = String(total % 60).padStart(2, "0")
  return hours > 0 ? `${hours}:${String(minutes).padStart(2, "0")}:${rest}` : `${minutes}:${rest}`
}

export function fractionAt(rect: { left: number; width: number }, clientX: number) {
  return rect.width > 0 ? clamp((clientX - rect.left) / rect.width, 0, 1) : 0
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}
