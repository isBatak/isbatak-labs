export function Cursor({
  x,
  y,
  size,
  press = 0,
  opacity = 1,
}: {
  x: number
  y: number
  size: number
  press?: number
  opacity?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{
        position: "absolute",
        left: x - size * 0.3,
        top: y - size * 0.2,
        opacity,
        transform: `scale(${1 - press * 0.18})`,
        transformOrigin: "30% 20%",
        filter: "drop-shadow(0 3px 6px rgb(0 0 0 / 0.28))",
      }}
    >
      <path d="M8.2 5.6v16.1l3.9-3.8 2.5 5.9 3-1.3-2.5-5.8h5.5z" fill="#fff" />
      <path d="M9.4 8.4v10.4l2.9-2.8 2.7 6.2 1.1-.5-2.6-6.1h4.1z" fill="#0b0b0f" />
    </svg>
  )
}

export function Ripple({
  x,
  y,
  progress,
  size,
  color,
}: {
  x: number
  y: number
  progress: number
  size: number
  color: string
}) {
  if (progress <= 0 || progress >= 1) return null
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: x - size / 2,
          top: y - size / 2,
          width: size,
          height: size,
          borderRadius: "50%",
          border: `${3 * (1 - progress) + 1}px solid ${color}`,
          opacity: 1 - progress,
          transform: `scale(${0.2 + progress * 1.2})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: x - size / 2,
          top: y - size / 2,
          width: size,
          height: size,
          borderRadius: "50%",
          background: color,
          opacity: (1 - progress) * 0.25,
          transform: `scale(${0.1 + progress * 0.7})`,
        }}
      />
    </>
  )
}
