import { createContext, use } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"

import {
  type RuleTarget,
  clearRules,
  formatScope,
  isCompoundScope,
  listRules,
  parseScope,
  ruleKey,
  setRule,
} from "../lib/doc"
import type { Cell } from "../lib/messages"
import { primaryVariant, stateLabel } from "../lib/states"
import {
  type RecipeMeta,
  compoundScopes,
  partLabel,
  readStyleValue,
  recipeStyles,
  recipes,
  utilityCategory,
} from "../lib/theme-meta"
import { Field } from "./fields"
import { IconButton, LayersIcon, Muted, PanelSection, ResetIcon, SelectInput } from "./ui"
import type { Studio } from "./use-studio"

/**
 * Edits one recipe part (e.g. the accordion's `itemTrigger`) for a scope — all variants or a single
 * variant value — and a state (hover, open, ...), like DS Manager's Style panel.
 */
interface PartContextValue {
  studio: Studio
  target: RuleTarget
  scopeStyles: Record<string, unknown> | undefined
  baseStyles: Record<string, unknown> | undefined
}

const PartContext = createContext<PartContextValue | null>(null)

function PropertyField(props: { property: string; label: string; color?: boolean }) {
  const { studio, target, scopeStyles, baseStyles } = use(PartContext)!
  const { property } = props
  const value = studio.state.doc.rules[ruleKey(target, property)]
  const own = readStyleValue(scopeStyles, property, target.state)
  const fromBase = target.scope !== "base" ? readStyleValue(baseStyles, property, target.state) : undefined
  return (
    <Field
      label={props.label}
      value={value}
      inherited={own ?? fromBase}
      hint={own === undefined && fromBase !== undefined ? "from all variants" : undefined}
      category={utilityCategory(property)}
      color={props.color}
      onChange={(next) => studio.edit((doc) => setRule(doc, target, property, next), ruleKey(target, property))}
    />
  )
}

const chip = css({
  h: "6",
  px: "2",
  borderRadius: "md",
  borderWidth: "1px",
  borderColor: "border.muted",
  textStyle: "xs",
  fontFamily: "mono",
  cursor: "button",
  _hover: { bg: "bg.muted" },
  _pressed: { bg: "bg.emphasized", borderColor: "border", fontWeight: "medium" },
})

export const scopeTitle = (scope: string) => Object.values(parseScope(scope)).join(" + ")

function cellScopes(recipe: RecipeMeta, cell: Cell) {
  const primary = primaryVariant(recipe)
  const names = Object.keys(cell.variants).sort((a, b) => Number(b === primary) - Number(a === primary))
  const single = names.map((name) => `${name}:${cell.variants[name]}`)
  const changed = Object.fromEntries(
    names
      .filter((name) => cell.variants[name] !== recipe.defaultVariants[name])
      .map((name) => [name, cell.variants[name]!]),
  )
  return Object.keys(changed).length > 1 ? [...single, formatScope(changed)] : single
}

export function recipeCompounds(recipe: RecipeMeta, rules: Array<{ scope: string }>, current?: string) {
  const scopes = new Set(compoundScopes(recipe))
  for (const rule of rules) if (isCompoundScope(rule.scope)) scopes.add(rule.scope)
  if (current && isCompoundScope(current)) scopes.add(current)
  return [...scopes]
}

export function PartStylePanel(props: { studio: Studio }) {
  const { state, dispatch, edit } = props.studio
  const part = state.selectedPart
  const recipe = part && recipes[part.recipe]

  if (!part || !recipe) {
    return (
      <styled.div display="flex" flexDirection="column" alignItems="center" gap="1.5" textAlign="center" px="8" py="16">
        <styled.span color="fg.muted" css={{ "& svg": { w: "5", h: "5" } }}>
          <LayersIcon />
        </styled.span>
        <styled.span textStyle="sm" fontWeight="medium">
          Nothing selected
        </styled.span>
        <Muted>Pick a part in Component Layers, or ⌘-click one on the canvas.</Muted>
      </styled.div>
    )
  }

  const target: RuleTarget = { recipe: recipe.key, slot: part.slot, scope: state.scope, state: state.condition }
  const scopeStyles = recipeStyles(recipe, state.scope, part.slot)
  const baseStyles = recipeStyles(recipe, "base", part.slot)
  const partRules = listRules(state.doc, { recipe: recipe.key, slot: part.slot })
  const compounds = recipeCompounds(recipe, listRules(state.doc, { recipe: recipe.key }), state.scope)
  const cell = state.selectedCell

  return (
    <PartContext value={{ studio: props.studio, target, scopeStyles, baseStyles }}>
      <styled.div display="flex" alignItems="center" justifyContent="space-between" px="4" pt="4" pb="3">
        <styled.div display="flex" flexDirection="column">
          <styled.span textStyle="sm" fontWeight="semibold">
            {partLabel(part)}
          </styled.span>
          <Muted>
            {part.slot ? `${recipe.className}__${part.slot}` : recipe.className} · {partRules.length} edits
          </Muted>
        </styled.div>
        {partRules.length > 0 && (
          <IconButton
            label="Reset all edits on this part"
            onClick={() => edit((doc) => clearRules(doc, { recipe: recipe.key, slot: part.slot }))}
          >
            <ResetIcon />
          </IconButton>
        )}
      </styled.div>

      <PanelSection title="Target">
        <styled.div display="grid" gridTemplateColumns="6.5rem 1fr" alignItems="center" gap="2">
          <Muted>Applies to</Muted>
          <SelectInput
            aria-label="Applies to"
            value={state.scope}
            options={[
              { value: "base", label: "All variants" },
              ...Object.entries(recipe.variantMap).flatMap(([variant, values]) =>
                values.map((value) => ({
                  value: `${variant}:${value}`,
                  label: `${variant}: ${value}${recipe.defaultVariants[variant] === value ? " (default)" : ""}`,
                  group: variant,
                })),
              ),
              ...compounds.map((scope) => ({ value: scope, label: `◇ ${scopeTitle(scope)}`, group: "compound" })),
            ]}
            onValueChange={(scope) => dispatch({ type: "scope", scope })}
          />
          {cell && (
            <>
              <Muted>Cell</Muted>
              <styled.div display="flex" flexWrap="wrap" gap="1">
                {cellScopes(recipe, cell).map((scope) => (
                  <button
                    type="button"
                    key={scope}
                    className={chip}
                    aria-pressed={state.scope === scope}
                    onClick={() => dispatch({ type: "scope", scope })}
                  >
                    {isCompoundScope(scope) ? `◇ ${scopeTitle(scope)}` : scope.replace(":", ": ")}
                  </button>
                ))}
              </styled.div>
            </>
          )}
          <Muted>State</Muted>
          <styled.div display="flex" alignItems="center" justifyContent="space-between" minH="7">
            <styled.span fontFamily="mono" textStyle="xs">
              {stateLabel(state.condition)}
            </styled.span>
            {state.condition && (
              <IconButton
                label="Back to the default state"
                onClick={() => dispatch({ type: "condition", condition: "" })}
              >
                <ResetIcon />
              </IconButton>
            )}
          </styled.div>
        </styled.div>
        {isCompoundScope(state.scope) && (
          <Muted>Edits go to a compoundVariants entry and apply only when all of these variants are set.</Muted>
        )}
      </PanelSection>

      <PanelSection title="Layout">
        <PropertyField property="width" label="Width" />
        <PropertyField property="height" label="Height" />
        <PropertyField property="minWidth" label="Min width" />
        <PropertyField property="paddingInline" label="Padding X" />
        <PropertyField property="paddingBlock" label="Padding Y" />
        <PropertyField property="gap" label="Gap" />
      </PanelSection>

      <PanelSection title="Typography">
        <PropertyField property="color" label="Text color" color />
        <PropertyField property="fontSize" label="Size" />
        <PropertyField property="fontWeight" label="Weight" />
        <PropertyField property="fontFamily" label="Font family" />
        <PropertyField property="lineHeight" label="Line height" />
        <PropertyField property="letterSpacing" label="Tracking" />
        <PropertyField property="textTransform" label="Transform" />
      </PanelSection>

      <PanelSection title="Appearance">
        <PropertyField property="background" label="Background" color />
        <PropertyField property="borderColor" label="Border color" color />
        <PropertyField property="borderWidth" label="Border width" />
        <PropertyField property="borderRadius" label="Radius" />
        <PropertyField property="boxShadow" label="Shadow" />
        <PropertyField property="opacity" label="Opacity" />
      </PanelSection>

      {partRules.length > 0 && (
        <PanelSection title="Edits on this part">
          {partRules.map((rule) => (
            <styled.button
              type="button"
              key={ruleKey(rule, rule.property)}
              display="flex"
              justifyContent="space-between"
              gap="2"
              textStyle="xs"
              textAlign="start"
              cursor="button"
              _hover={{ color: "blue.600" }}
              onClick={() => {
                dispatch({ type: "scope", scope: rule.scope })
                dispatch({ type: "condition", condition: rule.state })
              }}
            >
              <styled.span color="fg.muted" truncate>
                {rule.scope === "base" ? "all" : rule.scope}
                {rule.state ? ` · ${rule.state}` : ""} · {rule.property}
              </styled.span>
              <styled.span fontFamily="mono" truncate>
                {rule.value}
              </styled.span>
            </styled.button>
          ))}
        </PanelSection>
      )}
    </PartContext>
  )
}
