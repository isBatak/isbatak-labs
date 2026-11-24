import { createContext, type ReactElement, type ReactNode, useContext } from "react"
import { type ApiOf, nameOf, type OwnOf, type Primitive } from "./define-primitive"
import { capitalize, pascal, renderPart, split } from "./render-part"
import type { AnyRecord, ElementProps, PartElement, PartName, PartPropsOf, PartStateOf } from "./types"
import { apisOf } from "./use-primitive"

export interface PartConfig<Api, P> {
  tag: PartElement
  props?: readonly (keyof P)[]
  resolve?: (own: P, api: Api) => P
  children?: (api: Api, props: P) => ReactNode
}

export type TagsConfig<Api, D> = {
  [K in keyof D]: K extends "root"
    ? PartElement | { tag: PartElement }
    : K extends PartName<Api> & string
      ? PartElement | PartConfig<Api, PartPropsOf<Api, K>>
      : never
}

type KeysOf<Def> = Def extends { props: readonly (infer K extends PropertyKey)[] } ? K : never

type TagOf<Def> = Def extends { tag: infer T extends PartElement } ? T : Def extends PartElement ? Def : never

type PartOwn<Api, K extends string, Def> = Pick<PartPropsOf<Api, K>, KeysOf<Def> & keyof PartPropsOf<Api, K>>

type Component<P> = (props: P) => ReactElement

type RootOf<M, D> = D extends { root: infer R }
  ? Component<ElementProps<TagOf<R>, OwnOf<M>, PartStateOf<ApiOf<M>, "root">>>
  : Component<OwnOf<M> & { children?: ReactNode }>

export type Parts<M, D> = { Root: RootOf<M, D> } & {
  [K in Exclude<keyof D, "root"> & string as Capitalize<K>]: Component<
    ElementProps<TagOf<D[K]>, PartOwn<ApiOf<M>, K, D[K]>, PartStateOf<ApiOf<M>, K>>
  >
}

/**
 * Every part of a primitive as a component. `source` is a Zag machine module, such as `@zag-js/checkbox`, or a
 * primitive from `definePrimitive`. `Root` starts the machine or controller and shares the api with the parts inside
 * it. Each entry in `tags` becomes a component named in Pascal case that renders `ark.<tag>`, or the component given
 * as `tag`, with `api.get<Part>Props(props)` merged into the user's props and `api.get<Part>State` as its render
 * state. Without a `root` tag, `Root` renders only its children.
 *
 * @example
 * const Checkbox = createParts(checkbox, { root: "label", control: "div", label: "span" })
 */
export function createParts<M extends Primitive, D extends TagsConfig<ApiOf<M>, D>>(
  source: M,
  tags: D & TagsConfig<ApiOf<M>, D>,
): Parts<M, D> {
  const name = pascal(nameOf(source))
  const { useApi, standalone } = apisOf(source)
  const ApiContext = createContext<AnyRecord | null>(null)
  const definitions = tags as Record<string, PartElement | PartConfig<AnyRecord, AnyRecord>>
  const rootDef = definitions.root
  const rootTag =
    rootDef === undefined ? undefined : typeof rootDef === "object" && "tag" in rootDef ? rootDef.tag : rootDef

  function useScopeApi(part: string) {
    const api = useContext(ApiContext) ?? standalone
    if (!api) throw new Error(`${name}.${part} must be inside ${name}.Root`)
    return api
  }

  function Root(props: AnyRecord) {
    const [own, local] = split(props, source.props)
    const api = useApi(own)
    return (
      <ApiContext.Provider value={api}>
        {rootTag ? renderPart(api, "root", rootTag, own, local) : local.children}
      </ApiContext.Provider>
    )
  }
  Root.displayName = `${name}Root`

  const parts: AnyRecord = { Root }
  for (const [part, def] of Object.entries(definitions)) {
    if (part === "root") continue
    const { tag, props: keys, resolve, children } = typeof def === "object" && "tag" in def ? def : { tag: def }
    const Part = (props: AnyRecord) => {
      const api = useScopeApi(capitalize(part))
      const [own, local] = split(props, keys)
      const resolved = resolve ? resolve(own, api) : own
      return renderPart(api, part, tag, resolved, local, children?.(api, resolved))
    }
    Part.displayName = name + capitalize(part)
    parts[capitalize(part)] = Part
  }
  return parts as Parts<M, D>
}
