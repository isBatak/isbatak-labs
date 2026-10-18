const svg = (body: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`,
  )}")`

const filled = (body: string) => svg(`<g fill="black" stroke="none">${body}</g>`)

const skip = (direction: "back" | "forward") => {
  const arrow =
    direction === "back" ? '<path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6"/>' : '<path d="M12 5V2l5 4-5 4V7a6 6 0 1 0 6 6"/>'
  return svg(
    `${arrow}<text x="12" y="17" font-size="7.5" font-weight="700" font-family="sans-serif" text-anchor="middle" fill="black" stroke="none">10</text>`,
  )
}

export const icons = {
  play: filled('<path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z"/>'),
  pause: filled(
    '<rect x="5.5" y="4" width="4.5" height="16" rx="1.2"/><rect x="14" y="4" width="4.5" height="16" rx="1.2"/>',
  ),
  skipBack: skip("back"),
  skipForward: skip("forward"),
  volume: svg(
    '<path d="M11 5 6 9H3v6h3l5 4z" fill="black"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
  ),
  muted: svg('<path d="M11 5 6 9H3v6h3l5 4z" fill="black"/><path d="m16 9 5 6"/><path d="m21 9-5 6"/>'),
  pip: svg(
    '<rect x="2" y="4" width="20" height="16" rx="2.5"/><rect x="12" y="12" width="7" height="5" rx="1" fill="black"/>',
  ),
  loop: svg(
    '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  ),
  enterFullscreen: svg(
    '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  ),
  exitFullscreen: svg(
    '<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>',
  ),
}
