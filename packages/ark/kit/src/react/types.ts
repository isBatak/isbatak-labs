import type { Assign } from "@ark-ui/react"
import type { HTMLProps, PolymorphicProps } from "@ark-ui/react/factory"
import type { ComponentProps, JSXElementConstructor, RefAttributes } from "react"

export type Tag = keyof HTMLElementTagNameMap

export type PartElement = Tag | JSXElementConstructor<any>

type EmptyState = Record<never, never>

export type AnyRecord = Record<string, any>

type Getter<Api, K extends string> = Api[`get${Capitalize<K>}Props` & keyof Api]

export type PartName<Api> = {
  [M in keyof Api]: M extends `get${infer N}Props` ? Uncapitalize<N> : never
}[keyof Api]

export type PartPropsOf<Api, K extends string> =
  Getter<Api, K> extends (...args: infer A) => unknown ? (A extends [] ? EmptyState : NonNullable<A[0]>) : EmptyState

export type PartStateOf<Api, K extends string> = `get${Capitalize<K>}State` extends keyof Api
  ? Api[`get${Capitalize<K>}State`] extends (...args: never[]) => infer S
    ? S
    : EmptyState
  : EmptyState

export type ElementProps<T extends PartElement, Own = EmptyState, State = EmptyState> = T extends Tag
  ? Assign<HTMLProps<T>, Own & PolymorphicProps<State>> & RefAttributes<HTMLElementTagNameMap[T]>
  : Assign<ComponentProps<T>, Own & PolymorphicProps<State>>
