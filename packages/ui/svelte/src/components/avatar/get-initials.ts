export function getInitials(name: string) {
  const names = name.trim().split(/\s+/)
  const first = names[0] ?? ""
  const last = names.length > 1 ? (names[names.length - 1] ?? "") : ""
  return first && last ? `${first.charAt(0)}${last.charAt(0)}` : first.charAt(0)
}
