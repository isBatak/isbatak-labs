import type { InputProps, Machine, MachineSchema, Service } from "@zag-js/core"
import type { PartPropsOf } from "./types"

interface Named {
  name?: string | undefined
  anatomy?: { build: () => Record<string, { attr: string }> } | undefined
}

export interface MachinePrimitive<S extends MachineSchema = any> extends Named {
  machine: Machine<S>
  connect: (service: Service<S>, normalize: any) => unknown
  props?: readonly PropertyKey[] | undefined
  standalone?: boolean | undefined
}

export interface StaticPrimitive extends Named {
  connect: (normalize: any) => unknown
  props?: readonly PropertyKey[] | undefined
}

export interface Controller<P = any> {
  mount?: ((getProps: () => P) => (() => void) | void) | undefined
  sync?: ((props: P) => void) | undefined
  connect: (props: P, normalize: any) => unknown
}

export interface ControllerPrimitive<P = any> extends Named {
  create: () => Controller<P>
  props?: readonly PropertyKey[] | undefined
}

export type Primitive = MachinePrimitive | ControllerPrimitive | StaticPrimitive

type WithOptionalId<P> = Omit<P, "id"> & { id?: string | undefined }

type KeysOf<M> = M extends { props: readonly (infer K)[] } ? K : never

export type ApiOf<M> = M extends { machine: unknown; connect: (...args: any[]) => infer A }
  ? A
  : M extends { create: () => { connect: (...args: any[]) => infer A } }
    ? A
    : M extends { connect: (...args: any[]) => infer A }
      ? A
      : never

export type OwnOf<M> =
  M extends MachinePrimitive<infer S>
    ? WithOptionalId<InputProps<S>>
    : M extends { create: () => { connect: (props: infer P, ...args: any[]) => unknown } }
      ? WithOptionalId<P>
      : Pick<PartPropsOf<ApiOf<M>, "root">, KeysOf<M> & keyof PartPropsOf<ApiOf<M>, "root">>

/**
 * A framework-agnostic primitive for `createParts`, in one of three kinds:
 *
 * - a Zag machine: `machine`, `connect(service, normalize)` and the machine's `props`. A Zag module such as
 *   `@zag-js/checkbox` is one already. With `standalone`, `connect` also takes no service, so parts render outside
 *   `Root`.
 * - a controller: `create()` returns an object with `connect(props, normalize)`, and `mount` and `sync` when it
 *   needs the DOM.
 * - static: `connect(normalize)`, for an api with no state. Its parts render anywhere.
 *
 * `name`, or the anatomy's root part, names the components.
 */
export function definePrimitive<P extends Primitive>(primitive: P): P {
  return primitive
}

export function nameOf(primitive: Primitive) {
  const attr = primitive.anatomy?.build().root?.attr ?? ""
  return primitive.name ?? attr.replace(/^data-/, "").replace(/-root$/, "")
}
