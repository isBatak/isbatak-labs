import { defineCollection, defineConfig, s } from "velite"

const category = s.enum([
  "Layout",
  "Typography",
  "Buttons",
  "Date & Time",
  "Forms",
  "Collections",
  "Overlays",
  "Disclosure",
  "Feedback",
  "Data Display",
])

const status = s.enum(["new", "beta", "stable"]).optional()

const components = defineCollection({
  name: "Component",
  pattern: "components/ds/*/index.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      description: s.string().max(999),
      order: s.number().default(0),
      category,
      status,
      frameworks: s.array(s.enum(["react", "vue", "solid", "svelte"])),
      links: s.object({
        source: s.string(),
        recipe: s.string().optional(),
        ark: s.string().url().optional(),
      }),
      path: s.path(),
      code: s.mdx(),
    })
    .transform(({ path, ...data }) => {
      const slug = path.replace(/^components\/ds\//, "")
      return { ...data, slug, permalink: `/ds/components/${slug}` }
    }),
})

const prototypes = defineCollection({
  name: "Prototype",
  pattern: "components/prototypes/*/index.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      order: s.number().default(0),
      category,
      status,
      preview: s.string().optional(),
      links: s
        .object({
          source: s.string().optional(),
          storybook: s.string().optional(),
          recipe: s.string().optional(),
          ark: s.string().optional(),
        })
        .default({}),
      path: s.path(),
      toc: s.toc(),
      metadata: s.metadata(),
      raw: s.raw(),
      code: s.mdx(),
    })
    .transform(({ path, ...data }) => {
      const slug = path.replace(/^components\/prototypes\//, "")
      return { ...data, slug, permalink: `/components/prototypes/${slug}` }
    }),
})

const tools = defineCollection({
  name: "Tool",
  pattern: "tools/*/index.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      package: s.string(),
      description: s.string().max(999),
      order: s.number().default(0),
      category: s.string(),
      icon: s.string().default("tool"),
      logo: s.file().optional(),
      wordmark: s.file().optional(),
      color: s.string().default("gray"),
      status: s.enum(["new", "beta", "stable"]).optional(),
      href: s.string().url().optional(),
      video: s.string().optional(),
      poster: s.string().optional(),
      links: s
        .object({
          source: s.string().optional(),
          npm: s.string().url().optional(),
        })
        .default({}),
      path: s.path(),
      toc: s.toc(),
      metadata: s.metadata(),
      raw: s.raw(),
      code: s.mdx(),
    })
    .transform(({ path, ...data }) => {
      const slug = path.replace(/^tools\//, "")
      return { ...data, slug, external: Boolean(data.href), permalink: data.href ?? `/tools/${slug}` }
    }),
})

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { components, prototypes, tools },
})
