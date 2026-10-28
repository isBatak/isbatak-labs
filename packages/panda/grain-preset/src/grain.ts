export interface GrainStrength {
  white: number
  black: number
}

export interface GrainTileOptions extends GrainStrength {
  size?: number
  frequency?: number
}

const speckle = (channel: number, strength: number) =>
  `0 0 0 0 ${channel} 0 0 0 0 ${channel} 0 0 0 0 ${channel} ${strength} 0 0 0 ${-strength / 2}`

export const createGrain = ({ size = 192, frequency = 0.8, white, black }: GrainTileOptions) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><filter id="grain" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="${frequency}" numOctaves="3" stitchTiles="stitch" result="noise"/><feColorMatrix in="noise" values="${speckle(1, white)}" result="white"/><feColorMatrix in="noise" values="${speckle(0, -black)}" result="black"/><feMerge><feMergeNode in="black"/><feMergeNode in="white"/></feMerge></filter><rect width="100%" height="100%" filter="url(#grain)"/></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
