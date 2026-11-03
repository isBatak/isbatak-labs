import { styled } from "styled-system/jsx"

import dsApi from "../../data/ds-api.json"
import { type ApiMember, MembersTable } from "../docs/api-table"
import type { DsFrameworkId } from "./ds-framework"

interface DsPart {
  name: string
  props: Record<string, ApiMember>
}

interface DsComponentApi {
  parts: DsPart[]
  variants: Record<string, { values: string[]; defaultValue?: string }>
}

const apiOf = (slug: string) => (dsApi as unknown as Record<string, DsComponentApi | undefined>)[slug]

const kebabCase = (name: string) => name.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)

const vueEvents = (props: Record<string, ApiMember>) =>
  Object.fromEntries(
    Object.entries(props).map(([name, member]) =>
      /^on[A-Z]/.test(name) ? [`@${kebabCase(name.slice(2)).slice(1)}`, member] : [name, member],
    ),
  )

const PartName = styled("h3", {
  base: {
    mt: "8",
    fontFamily: "mono",
    textStyle: "md",
    fontWeight: "semibold",
  },
})

const Note = styled("p", {
  base: {
    mt: "4",
    textStyle: "sm",
    color: "fg.muted",
  },
})

const Code = styled("code", {
  base: {
    fontFamily: "mono",
    fontSize: "sm",
  },
})

const Table = styled("table", {
  base: {
    w: "full",
    my: "6",
    borderCollapse: "collapse",
    textStyle: "sm",
    "& th": {
      pb: "3",
      pe: "4",
      textAlign: "start",
      textStyle: "overline",
      fontWeight: "normal",
      color: "fg.subtle",
      borderBottomWidth: "1px",
    },
    "& td": {
      py: "3",
      pe: "4",
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    "& tr:last-child td": {
      borderBottomWidth: "0",
    },
  },
})

interface DsApiProps {
  slug: string
  framework: DsFrameworkId
}

export function DsApi({ slug, framework }: DsApiProps) {
  const api = apiOf(slug)
  if (!api) throw new Error(`No API data for "${slug}". Run \`pnpm api:generate\` in apps/www.`)

  return (
    <div className="not-prose">
      <Note>
        Every part also accepts <Code>asChild</Code> and <Code>render</Code>.
        {framework === "vue" && (
          <>
            {" "}
            In Vue, callbacks are emits (<Code>@value-change</Code>), and controlled values bind with{" "}
            <Code>v-model</Code>.
          </>
        )}
      </Note>
      {api.parts
        .filter((part) => framework === "react" || !part.name.endsWith("Context"))
        .map((part) => (
          <section key={part.name}>
            <PartName>{part.name}</PartName>
            <MembersTable members={framework === "vue" ? vueEvents(part.props) : part.props} label="Prop" />
          </section>
        ))}
    </div>
  )
}

export function RecipeVariants({ slug }: { slug: string }) {
  const variants = Object.entries(apiOf(slug)?.variants ?? {})
  if (!variants.length) throw new Error(`The recipe for "${slug}" has no variants.`)

  return (
    <styled.div className="not-prose" overflowX="auto">
      <Table>
        <thead>
          <tr>
            <th>Variant</th>
            <th>Values</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {variants.map(([name, { values, defaultValue }]) => (
            <tr key={name}>
              <td>
                <Code>{name}</Code>
              </td>
              <td>
                {values.map((value, index) => (
                  <span key={value}>
                    {index > 0 && ", "}
                    <Code>{value}</Code>
                  </span>
                ))}
              </td>
              <td>{defaultValue && <Code>{defaultValue}</Code>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </styled.div>
  )
}
