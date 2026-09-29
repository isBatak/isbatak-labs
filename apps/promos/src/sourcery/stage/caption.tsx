import type { ReactNode } from "react";
import { interpolate } from "remotion";
import { styled } from "@isbatak/panda-ds/jsx";

import { clamp, ease } from "../lib/motion";

export function Rise({
  progress,
  children,
  distance = 1,
}: {
  progress: number;
  children: ReactNode;
  distance?: number;
}) {
  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "top",
        paddingBottom: "0.12em",
      }}
    >
      <span
        style={{
          display: "inline-block",
          transform: `translateY(${(1 - progress) * 110 * distance}%)`,
          opacity: interpolate(progress, [0, 0.3], [0, 1], clamp),
        }}
      >
        {children}
      </span>
    </span>
  );
}

export function Eyebrow({
  size,
  progress,
  accent,
  children,
}: {
  size: number;
  progress: number;
  accent?: string | undefined;
  children: ReactNode;
}) {
  return (
    <styled.p
      fontFamily="mono"
      textTransform="uppercase"
      letterSpacing="widest"
      fontWeight="semibold"
      color="fg.subtle"
      style={{ fontSize: size * 0.4, marginBottom: size * 0.18, color: accent }}
    >
      <Rise progress={progress}>{children}</Rise>
    </styled.p>
  );
}

interface CaptionProps {
  frame: number;
  start: number;
  end: number;
  eyebrow: string;
  title: string;
  size: number;
  align?: "left" | "center";
  accent?: string;
}

export function Caption({
  frame,
  start,
  end,
  eyebrow,
  title,
  size,
  align = "left",
  accent,
}: CaptionProps) {
  if (frame < start - 1 || frame > end + 12) return null;
  const words = title.split(" ");
  const out = interpolate(frame, [end, end + 10], [0, 1], {
    ...clamp,
    easing: ease.in,
  });

  return (
    <div
      style={{
        textAlign: align,
        transform: `translateY(${-out * size * 0.3}px)`,
        opacity: 1 - out,
      }}
    >
      <Eyebrow
        size={size}
        accent={accent}
        progress={interpolate(frame, [start, start + 14], [0, 1], {
          ...clamp,
          easing: ease.out,
        })}
      >
        {eyebrow}
      </Eyebrow>
      <styled.h2
        fontWeight="medium"
        letterSpacing="tighter"
        color="fg"
        style={{ fontSize: size, lineHeight: 1.05 }}
      >
        {words.map((word, index) => (
          <span key={index}>
            <Rise
              progress={interpolate(
                frame,
                [start + 3 + index * 3, start + 19 + index * 3],
                [0, 1],
                {
                  ...clamp,
                  easing: ease.out,
                },
              )}
            >
              {word}
            </Rise>{" "}
          </span>
        ))}
      </styled.h2>
    </div>
  );
}
