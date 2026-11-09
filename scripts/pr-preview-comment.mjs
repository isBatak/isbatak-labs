import { execFileSync } from "node:child_process"
import { existsSync, readdirSync } from "node:fs"

const { BASE_SHA, PR_NUMBER, WEBSITE_URL, STORYBOOK_URL, GITHUB_REPOSITORY } = process.env
const marker = "<!-- pr-preview -->"
const frameworks = ["react", "vue", "svelte", "solid"]

const changed = execFileSync("git", ["diff", "--name-only", `${BASE_SHA}...HEAD`], { encoding: "utf8" })
  .split("\n")
  .filter(Boolean)

const patterns = [
  /^packages\/ui\/[^/]+\/src\/components\/([^/]+)\//,
  /^packages\/panda\/ds\/src\/theme\/recipes\/([^/]+)\.ts$/,
  /^packages\/panda\/themes\/[^/]+\/src\/recipes\/([^/]+)\.ts$/,
  /^apps\/compositions\/src\/examples\/ds\/[^/]+\/([^/]+)\//,
  /^apps\/storybook-[^/]+\/src\/ds\/([^/.]+)\.stories\./,
  /^apps\/www\/content\/components\/ds\/([^/]+)\//,
]

const slugs = [
  ...new Set(changed.flatMap((file) => patterns.map((pattern) => file.match(pattern)?.[1]).filter(Boolean))),
].sort()

const hasDocs = (slug) => existsSync(`apps/www/content/components/ds/${slug}/index.mdx`)
const hasStory = (framework, slug) =>
  existsSync(`apps/storybook-${framework}/src/ds`) &&
  readdirSync(`apps/storybook-${framework}/src/ds`).some((file) => file.startsWith(`${slug}.stories.`))

const rows = slugs
  .filter((slug) => hasDocs(slug) || frameworks.some((framework) => hasStory(framework, slug)))
  .map((slug) => {
    const docs = frameworks
      .map((framework) => `[${framework}](${WEBSITE_URL}/ds/components/${framework}/${slug})`)
      .join(" · ")
    const stories = frameworks
      .filter((framework) => hasStory(framework, slug))
      .map((framework) => `[${framework}](${STORYBOOK_URL}/?path=/story/${framework}_ds-${slug}--usage)`)
      .join(" · ")
    return `| \`${slug}\` | ${hasDocs(slug) ? docs : "–"} | ${stories || "–"} |`
  })

const body = [
  marker,
  "### Preview",
  "",
  `[Website](${WEBSITE_URL}) · [Storybook](${STORYBOOK_URL})`,
  "",
  ...(rows.length
    ? ["#### Changed components", "", "| Component | Docs | Storybook |", "| --- | --- | --- |", ...rows]
    : ["No design-system components changed."]),
  "",
].join("\n")

const gh = (args, input) => execFileSync("gh", args, { encoding: "utf8", input })

const existing = JSON.parse(
  gh(["api", "--paginate", "--slurp", `repos/${GITHUB_REPOSITORY}/issues/${PR_NUMBER}/comments`]),
)
  .flat()
  .find((comment) => comment.body?.startsWith(marker))

if (existing) {
  gh(
    ["api", "--method", "PATCH", `repos/${GITHUB_REPOSITORY}/issues/comments/${existing.id}`, "--input", "-"],
    JSON.stringify({ body }),
  )
} else {
  gh(
    ["api", "--method", "POST", `repos/${GITHUB_REPOSITORY}/issues/${PR_NUMBER}/comments`, "--input", "-"],
    JSON.stringify({ body }),
  )
}
