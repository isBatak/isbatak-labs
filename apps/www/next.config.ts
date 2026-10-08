import { resolve } from "node:path"
import type { NextConfig } from "next"
import { withPandaCss } from "@isbatak/panda-turbopack/next"
import { withSourcery } from "@isbatak/sourcery/next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    turbopackRustReactCompiler: true,
    turbopackLazyDynamicImports: true,
    turbopackGc: true,
  },
  // Workspace packages that export their TypeScript source
  transpilePackages: [
    "@isbatak/zag-masonry",
    "@isbatak/zag-wheel-picker",
    "@isbatak/ark-masonry",
    "@isbatak/ark-wheel-picker",
    "@isbatak/panda-ds",
    "@isbatak/panda-masonry",
    "@isbatak/panda-wheel-picker",
    "@isbatak/compositions",
    "@isbatak/react-ui",
  ],
  async redirects() {
    return [
      { source: "/ds", destination: "/ds/components", permanent: false },
      { source: "/components/ds", destination: "/ds/components", permanent: true },
      { source: "/components/ds/:slug", destination: "/ds/components/:slug", permanent: true },
      { source: "/components/prototypes", destination: "/components", permanent: true },
      { source: "/docs/components/:slug", destination: "/components/prototypes/:slug", permanent: true },
      { source: "/docs/:path*", destination: "/components", permanent: true },
      {
        source: "/components/:slug(wheel-picker|masonry).md",
        destination: "/components/prototypes/:slug.md",
        permanent: true,
      },
      {
        source: "/components/:slug(wheel-picker|masonry)/:path*",
        destination: "/components/prototypes/:slug/:path*",
        permanent: true,
      },
      {
        source: "/components/prototypes/:slug/:framework(react|vue|svelte|solid|preact|vanilla)/:styling(panda|css)",
        destination: "/components/prototypes/:slug/:framework/:styling/zag",
        permanent: false,
        missing: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
      },
    ]
  },
  async rewrites() {
    return [
      { source: "/components/prototypes/:slug.md", destination: "/md/prototypes/:slug" },
      { source: "/components/prototypes/:slug/:section.md", destination: "/md/prototypes/:slug/:section" },
      {
        source: "/components/prototypes/:slug/:framework/:styling/:api?",
        destination: "/md/prototypes/:slug",
        has: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
      },
      {
        source: "/components/prototypes/:path+",
        destination: "/md/prototypes/:path+",
        has: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
      },
    ]
  },
}

const withPanda = withPandaCss(nextConfig, {
  include: ["./app/**/*.tsx", "./components/**/*.tsx"],
})

export default withSourcery(withPanda, {
  injectTo: resolve("components/providers.tsx"),
  exclude: ["/packages/"],
  panda: true,
})
