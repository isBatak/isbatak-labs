import { createContext, use } from "react"
import { styled } from "styled-system/jsx"

import { type RuleTarget, clearRules, listRules, ruleKey, setRule } from "../lib/doc"
import { readStyleValue, recipeStyles, recipes, utilityCategory } from "../lib/theme-meta"
import { Field } from "./fields"
import { humanize } from "./sidebar"
import { IconButton, LayersIcon, Muted, NativeSelect, PanelSection, ResetIcon } from "./ui"
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

  return (
    <PartContext value={{ studio: props.studio, target, scopeStyles, baseStyles }}>
      <styled.div display="flex" alignItems="center" justifyContent="space-between" px="4" pt="4" pb="3">
        <styled.div display="flex" flexDirection="column">
          <styled.span textStyle="sm" fontWeight="semibold">
            {humanize(part.slot ?? recipe.className)}
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
          <NativeSelect
            aria-label="Applies to"
            value={state.scope}
            onChange={(event) => dispatch({ type: "scope", scope: event.target.value })}
          >
            <option value="base">All variants</option>
            {Object.entries(recipe.variantMap).map(([variant, values]) => (
              <optgroup key={variant} label={variant}>
                {values.map((value) => (
                  <option key={value} value={`${variant}:${value}`}>
                    {variant}: {value}
                    {recipe.defaultVariants[variant] === value ? " (default)" : ""}
                  </option>
                ))}
              </optgroup>
            ))}
          </NativeSelect>
          <Muted>State</Muted>
          <NativeSelect
            aria-label="State"
            value={state.condition}
            onChange={(event) => dispatch({ type: "condition", condition: event.target.value })}
          >
            <option value="">Default</option>
            <option value="hover">Hover</option>
            <option value="active">Active</option>
            <option value="focusVisible">Focus visible</option>
            <option value="disabled">Disabled</option>
            <option value="open">Open</option>
            <option value="checked">Checked</option>
            <option value="selected">Selected</option>
            <option value="highlighted">Highlighted</option>
            <option value="expanded">Expanded</option>
            <option value="invalid">Invalid</option>
            <option value="placeholder">Placeholder</option>
          </NativeSelect>
        </styled.div>
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
              cursor="pointer"
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
