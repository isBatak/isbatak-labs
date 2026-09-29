import heroSource from "../site/tool-hero.tsx?raw"
import siteSource from "../site/site.tsx?raw"
import { format, type Location, locate } from "../lib/source"

export const HERO_FILE = "src/site/tool-hero.tsx"
export const SITE_FILE = "src/site/site.tsx"
export const CONFIG_FILE = "next.config.ts"

export const SOURCES = { hero: heroSource }

export interface Spot {
  tag: string
  file: string
  at: Location
  needle: string
  styled?: { file: string; at: Location; needle: string } | undefined
}

function spot(tag: string, file: string, source: string, needle: string, styled?: Spot["styled"]): Spot {
  return { tag, file, at: locate(source, needle), needle, styled }
}

function styledAt(file: string, source: string, needle: string) {
  return { file, at: locate(source, needle), needle }
}

export const SPOTS = {
  wordmark: spot("span", SITE_FILE, siteSource, '<styled.span color="fg" letterSpacing'),
  nav: spot("div", SITE_FILE, siteSource, '<HStack gap="5"'),
  eyebrow: spot("nav", HERO_FILE, heroSource, "<styled.nav"),
  title: spot("h1", HERO_FILE, heroSource, "<styled.h1"),
  package: spot("p", HERO_FILE, heroSource, '<styled.p mt="4"'),
  description: spot("p", HERO_FILE, heroSource, '<styled.p mt="5"'),
  managers: spot("div", HERO_FILE, heroSource, "<div className={managers.root}>"),
  install: spot("div", HERO_FILE, heroSource, "<CodeFrame", styledAt(HERO_FILE, heroSource, 'styled("div"')),
  copy: spot("button", HERO_FILE, heroSource, '<Button variant="ghost"'),
  npm: spot("button", HERO_FILE, heroSource, '<Button variant="outline"'),
  source: spot("div", HERO_FILE, heroSource, '<HStack gap="2"'),
  demo: spot("div", HERO_FILE, heroSource, '<styled.div\n          height="480px"'),
} satisfies Record<string, Spot>

export type SpotName = keyof typeof SPOTS

export function label(name: SpotName, mode: "plain" | "hint" | "styled" = "plain") {
  const target: Spot = SPOTS[name]
  if (mode === "styled" && target.styled) return `styled  ${format(target.styled.file, target.styled.at)}`
  const hint = mode === "hint" && target.styled ? "  ⌥ styled" : ""
  return `${target.tag}  ${format(target.file, target.at)}${hint}`
}
