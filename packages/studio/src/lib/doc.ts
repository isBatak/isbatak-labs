/**
 * A studio document holds every edit made on top of `@isbatak/panda-ds`. It is plain JSON so it can be saved,
 * shared and diffed, and it is turned into CSS (live preview) or a Panda preset (Get code).
 */

export type ColorMode = "base" | "_dark"

export interface StudioDoc {
  version: 1
  /** Token overrides keyed by `category.name`, e.g. `colors.gray.500` */
  tokens: Record<string, string>
  /** Semantic token overrides keyed by `category.name`, per condition */
  semanticTokens: Record<string, Partial<Record<ColorMode, string>>>
  /** Recipe overrides keyed by {@link ruleKey} */
  rules: Record<string, string>
}

export const emptyDoc = (): StudioDoc => ({ version: 1, tokens: {}, semanticTokens: {}, rules: {} })

export interface RuleTarget {
  recipe: string
  /** Slot for slot recipes */
  slot?: string | undefined
  /** `base` or `variant:value` */
  scope: string
  /** Condition name without underscore (`hover`), or empty for the default state */
  state: string
}

export interface Rule extends RuleTarget {
  property: string
  value: string
}

export function ruleKey(target: RuleTarget, property: string) {
  return [target.recipe, target.slot ?? "", target.scope, target.state, property].join("|")
}

export function parseRuleKey(key: string, value: string): Rule {
  const [recipe, slot, scope, state, property] = key.split("|") as [string, string, string, string, string]
  return { recipe, slot: slot || undefined, scope, state, property, value }
}

export function listRules(doc: StudioDoc, filter?: Partial<RuleTarget>) {
  return Object.entries(doc.rules)
    .map(([key, value]) => parseRuleKey(key, value))
    .filter(
      (rule) =>
        (!filter?.recipe || rule.recipe === filter.recipe) &&
        (filter?.slot === undefined || rule.slot === filter.slot) &&
        (!filter?.scope || rule.scope === filter.scope) &&
        (filter?.state === undefined || rule.state === filter.state),
    )
}

export function countOverrides(doc: StudioDoc) {
  return Object.keys(doc.tokens).length + Object.keys(doc.semanticTokens).length + Object.keys(doc.rules).length
}

export function isStudioDoc(value: unknown): value is StudioDoc {
  const doc = value as StudioDoc
  return (
    !!doc &&
    doc.version === 1 &&
    typeof doc.tokens === "object" &&
    typeof doc.semanticTokens === "object" &&
    typeof doc.rules === "object"
  )
}

/* -------------------------------------------------------------------------------------------------
 * Updates (all immutable)
 * -----------------------------------------------------------------------------------------------*/

const withEntry = <T>(record: Record<string, T>, key: string, value: T | undefined) => {
  const next = { ...record }
  if (value === undefined) delete next[key]
  else next[key] = value
  return next
}

export function setToken(doc: StudioDoc, key: string, value: string | undefined): StudioDoc {
  return { ...doc, tokens: withEntry(doc.tokens, key, value || undefined) }
}

export function setSemanticToken(doc: StudioDoc, key: string, mode: ColorMode, value: string | undefined): StudioDoc {
  const current = { ...doc.semanticTokens[key] }
  if (value) current[mode] = value
  else delete current[mode]
  return {
    ...doc,
    semanticTokens: withEntry(doc.semanticTokens, key, Object.keys(current).length ? current : undefined),
  }
}

export function setRule(doc: StudioDoc, target: RuleTarget, property: string, value: string | undefined): StudioDoc {
  return { ...doc, rules: withEntry(doc.rules, ruleKey(target, property), value?.trim() || undefined) }
}

export function clearRules(doc: StudioDoc, filter: Partial<RuleTarget>): StudioDoc {
  const remove = new Set(listRules(doc, filter).map((rule) => ruleKey(rule, rule.property)))
  return { ...doc, rules: Object.fromEntries(Object.entries(doc.rules).filter(([key]) => !remove.has(key))) }
}
