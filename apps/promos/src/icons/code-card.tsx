import { css } from "@isbatak/panda-ds/css"
import { styled } from "@isbatak/panda-ds/jsx"
import { card } from "@isbatak/panda-ds/recipes"

import { type TokenType, tokenize } from "../sourcery/lib/source"

const TOKEN_COLORS: Record<TokenType, string> = {
  keyword: css({ color: "red.fg" }),
  string: css({ color: "green.fg" }),
  class: css({ color: "teal.fg" }),
  identifier: css({ color: "fg" }),
  property: css({ color: "orange.fg" }),
  entity: css({ color: "teal.fg" }),
  jsxliterals: css({ color: "fg" }),
  sign: css({ color: "fg.muted" }),
  comment: css({ color: "fg.subtle" }),
  break: css({ color: "fg" }),
  space: css({ color: "fg" }),
}

export function CodeCard({ file, code }: { file: string; code: string }) {
  const lines = tokenize(code)
  const classes = card({ variant: "elevated", size: "sm" })

  return (
    <div className={classes.root}>
      <styled.div className={classes.header} pb="3" borderBottomWidth="1px">
        <styled.p className={classes.description} fontFamily="mono">
          {file}
        </styled.p>
      </styled.div>
      <styled.pre className={classes.body} fontFamily="mono" textStyle="md" lineHeight="1.7">
        {lines.map((tokens, line) => (
          <styled.div key={line} minH="1lh">
            {tokens.map((token, index) => (
              <span key={index} className={TOKEN_COLORS[token.type]}>
                {token.value}
              </span>
            ))}
          </styled.div>
        ))}
      </styled.pre>
    </div>
  )
}
