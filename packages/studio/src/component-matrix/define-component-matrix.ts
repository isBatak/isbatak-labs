import type { ReactNode } from "react"

export const STATE = "state"

export type PropType = "variant" | "boolean" | "state"

export type PropTypesConfig = {
  type: PropType
  options?: ReadonlyArray<any> | undefined
  defaultValue?: any | undefined
  showPropName?: boolean | undefined
  labelFormatter?: ((value: string | object, propName: string) => string) | undefined
  /** Leave the prop out of the axes; every cell still gets its `defaultValue` */
  ignore?: boolean | undefined
}

/** A generated `@isbatak/panda-ds` recipe (config or slot recipe) */
export interface AnyRecipe {
  variantKeys: ReadonlyArray<PropertyKey>
  raw: (props?: any) => unknown
}

export type VariantProps<R extends AnyRecipe> = NonNullable<Parameters<R["raw"]>[0]>

type VariantName<R extends AnyRecipe> = Extract<keyof VariantProps<R>, string>

type StateProps = Partial<Record<`data-${string}` | `aria-${string}`, string>>

type PropsConfig = Record<string, Partial<PropTypesConfig>>

/** Props declared in `props` that aren't recipe variants or `state` */
type ExtraName<R extends AnyRecipe, P> = Exclude<Extract<keyof P, string>, VariantName<R> | typeof STATE>

type AxisName<R extends AnyRecipe, P> = VariantName<R> | typeof STATE | ExtraName<R, P>

export type MatrixProps<R extends AnyRecipe, P> = VariantProps<R> & Partial<Record<ExtraName<R, P>, any>> & StateProps

export interface MatrixConfig<R extends AnyRecipe = AnyRecipe, P = PropsConfig> {
  recipe: R
  /** Heading above the grid, for pages with more than one matrix */
  title?: string
  /** Props laid out along the columns, outermost group first */
  x?: Array<AxisName<R, NoInfer<P>>>
  /** Props laid out along the rows, outermost group first */
  y?: Array<AxisName<R, NoInfer<P>>>
  /** Overrides for recipe variants and `state`, plus extra props that aren't recipe variants (those need `options`) */
  props?: P & {
    [K in keyof P]: K extends VariantName<R> | typeof STATE
      ? Partial<PropTypesConfig>
      : Partial<PropTypesConfig> & { options: ReadonlyArray<any> }
  }
  /** Class name for each cell, for one-off sizing or layout */
  container?: string
  render: (props: MatrixProps<R, NoInfer<P>>) => ReactNode
}

export type ComponentMatrix = MatrixConfig<AnyRecipe, PropsConfig>

/** Types a matrix config against its recipe; the config is used as is */
export function defineComponentMatrix<R extends AnyRecipe, const P extends PropsConfig = {}>(
  config: MatrixConfig<R, P>,
) {
  return config as unknown as ComponentMatrix
}
