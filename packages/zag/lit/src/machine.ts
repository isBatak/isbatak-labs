import type {
  ActionsOrFn,
  Bindable,
  BindableContext,
  BindableRefs,
  ChooseFn,
  ComputedFn,
  EffectsOrFn,
  GuardFn,
  Machine,
  MachineSchema,
  Params,
  PropFn,
  Scope,
  Service,
  Transition,
  WatchEffect,
  WatchEffectSetup,
} from "@zag-js/core"
import {
  createReplaceTracker,
  createScope,
  findTransition,
  getExitEnterStates,
  hasTag,
  INIT_STATE,
  isWatchEffect,
  MachineStatus,
  matchesState,
  resolveStateValue,
  watchEffect,
} from "@zag-js/core"
import type { Teardown } from "@zag-js/utils"
import { compact, identity, isEqual, toArray, warn } from "@zag-js/utils"
import { createBindable } from "./bindable"
import { createRefs } from "./refs"

type EffectRecord = {
  cleanup: Teardown | undefined
  deps?: WatchEffect["deps"]
  path: string
  setup?: WatchEffectSetup
  values?: unknown[]
}

type Watcher = {
  deps: Parameters<Params<MachineSchema>["track"]>[0]
  previous: unknown[]
  run: VoidFunction
}

export class LitMachine<T extends MachineSchema> {
  readonly #cleanups: VoidFunction[] = []
  readonly #computed: ComputedFn<T>
  readonly #context: BindableContext<T>
  readonly #definition: Machine<T>
  readonly #effects = new Set<EffectRecord>()
  #event = { type: "" } as Parameters<Service<T>["send"]>[0]
  #previousEvent = { type: "" } as Parameters<Service<T>["send"]>[0]
  readonly #prop: PropFn<T>
  readonly #refs: BindableRefs<T>
  readonly #replaceTracker = createReplaceTracker()
  readonly #scope: Scope
  readonly #state: Bindable<T["state"]>
  #status = MachineStatus.NotStarted
  readonly #subscriptions = new Set<(service: Service<T>) => void>()
  #transition: Transition<T> | undefined
  readonly #watchers: Watcher[] = []

  constructor(definition: Machine<T>, getProps: () => Partial<T["props"]>) {
    this.#definition = definition
    const { getRootNode, id, ids } = getProps() as Partial<Pick<Scope, "getRootNode" | "id" | "ids">>
    this.#scope = createScope({ getRootNode: getRootNode ?? (() => document), id, ids })
    this.#prop = (key) => {
      const supplied = getProps()
      const props = definition.props?.({ props: compact(supplied), scope: this.#scope }) ?? supplied
      return props[key] as never
    }

    const bindable = createBindable(this.#publish, (cleanup) => this.#cleanups.push(cleanup))
    const context =
      definition.context?.({
        bindable,
        flush: queueMicrotask,
        getComputed: () => this.#computed,
        getContext: () => this.#context,
        getEvent: this.#getEvent,
        getRefs: () => this.#refs,
        prop: this.#prop,
        scope: this.#scope,
      }) ?? ({} as { [K in keyof T["context"]]: Bindable<T["context"][K]> })

    this.#context = {
      get: (key) => context[key].get(),
      hash: (key) => context[key].hash(context[key].get()),
      initial: (key) => context[key].initial!,
      set: (key, value) => context[key].set(value),
    }
    this.#computed = (key) => {
      const compute = definition.computed?.[key]
      if (!compute) throw new Error(`Missing Zag computed implementation: ${String(key)}`)
      return compute({
        computed: this.#computed,
        context: this.#context,
        event: this.#getEvent(),
        prop: this.#prop,
        refs: this.#refs,
        scope: this.#scope,
      })
    }
    this.#refs = createRefs<T>(
      (definition.refs?.({ context: this.#context, prop: this.#prop }) ?? {}) as {
        [K in keyof T["refs"]]: T["refs"][K]
      },
    )
    this.#state = bindable(() => ({
      defaultValue: resolveStateValue(definition, definition.initialState({ prop: this.#prop })),
      onChange: (next, previous) => {
        const { entering, exiting } = getExitEnterStates(definition, previous, next, this.#transition?.reenter)
        for (const item of exiting) this.#stopEffects(item.path)
        for (const item of exiting) this.#action(item.state?.exit)
        this.#action(this.#transition?.actions)
        for (const item of entering) this.#startEffects(item.path, item.state?.effects)
        if (previous === INIT_STATE) {
          this.#action(definition.entry)
          this.#startEffects(INIT_STATE, definition.effects)
        }
        for (const item of entering) this.#action(item.state?.entry)
      },
    }))
  }

  get service(): Service<T> {
    return {
      computed: this.#computed,
      context: this.#context,
      event: this.#getEvent(),
      getStatus: () => this.#status,
      prop: this.#prop,
      refs: this.#refs,
      scope: this.#scope,
      send: this.#send,
      state: this.#getState(),
    }
  }

  refreshProps(): void {
    if (this.#status === MachineStatus.Started) this.#sync()
  }

  start(): void {
    if (this.#status === MachineStatus.Started) return
    if (this.#status === MachineStatus.Stopped) throw new Error("Create a new LitMachine after stopping it.")
    this.#status = MachineStatus.Started
    this.#state.invoke(this.#state.initial, INIT_STATE)
    this.#definition.watch?.(this.#params())
  }

  stop(): void {
    if (this.#status === MachineStatus.Stopped) return
    const started = this.#status === MachineStatus.Started
    this.#status = MachineStatus.Stopped
    for (const record of this.#effects) record.cleanup?.("exit")
    this.#effects.clear()
    this.#transition = undefined
    if (started) this.#action(this.#definition.exit)
    for (const cleanup of this.#cleanups) cleanup()
    this.#cleanups.length = 0
    this.#subscriptions.clear()
    this.#watchers.length = 0
  }

  subscribe(callback: (service: Service<T>) => void): VoidFunction {
    this.#subscriptions.add(callback)
    return () => this.#subscriptions.delete(callback)
  }

  readonly #action = (actions: ActionsOrFn<T> | undefined): void => {
    const keys = typeof actions === "function" ? actions(this.#params()) : actions
    for (const key of keys ?? []) {
      const action = this.#definition.implementations?.actions?.[key]
      if (!action) warn(`Missing Zag action implementation: ${String(key)}`)
      action?.(this.#params())
    }
  }

  readonly #choose: ChooseFn<T> = (transitions) =>
    toArray(transitions).find((transition) => !transition.guard || this.#guard(transition.guard))

  readonly #getEvent = (): Service<T>["event"] => ({
    ...this.#event,
    current: () => this.#event,
    previous: () => this.#previousEvent,
  })

  #getState(): Service<T>["state"] {
    return {
      ...this.#state,
      hasTag: (tag) => hasTag(this.#definition, this.#state.get(), tag),
      matches: (...values) => values.some((value) => value !== undefined && matchesState(this.#state.get(), value)),
    }
  }

  readonly #guard = (key: GuardFn<T> | T["guard"]): boolean | undefined => {
    if (typeof key === "function") return key(this.#params())
    const guard = this.#definition.implementations?.guards?.[key]
    if (!guard) warn(`Missing Zag guard implementation: ${String(key)}`)
    return guard?.(this.#params())
  }

  #params(): Params<T> {
    return {
      action: this.#action,
      choose: this.#choose,
      computed: this.#computed,
      context: this.#context,
      event: this.#getEvent(),
      flush: identity,
      guard: this.#guard,
      prop: this.#prop,
      refs: this.#refs,
      scope: this.#scope,
      send: this.#send,
      state: this.#getState(),
      track: (deps, run) => {
        this.#watchers.push({ deps, previous: deps.map((get) => get()), run })
      },
    }
  }

  readonly #publish = (): void => {
    if (this.#status !== MachineStatus.Started) return
    this.#sync()
    for (const callback of this.#subscriptions) callback(this.service)
  }

  #sync(): void {
    for (const watcher of this.#watchers) {
      const next = watcher.deps.map((get) => get())
      if (!isEqual(next, watcher.previous)) {
        watcher.previous = next
        watcher.run()
      }
    }
    for (const record of this.#effects) {
      if (!record.deps || !record.setup) continue
      const next = record.deps.map((get) => get())
      if (isEqual(next, record.values)) continue
      record.values = next
      record.cleanup?.("restart")
      const cleanup = record.setup()
      record.cleanup = typeof cleanup === "function" ? cleanup : undefined
    }
  }

  readonly #send: Service<T>["send"] = (event) => {
    if (this.#status !== MachineStatus.Started) return
    const key = event.replaces
    const token = key ? this.#replaceTracker.claim(key) : undefined
    queueMicrotask(() => {
      if (this.#status !== MachineStatus.Started) return
      if (key && token && this.#replaceTracker.isReplaced(key, token)) return
      this.#previousEvent = this.#event
      this.#event = event
      const current = this.#state.get()
      const { source, transitions } = findTransition(this.#definition, current, event.type)
      const transition = this.#choose(transitions)
      if (!transition) return
      this.#transition = transition
      const target = resolveStateValue(this.#definition, transition.target ?? current, source)
      if (target !== current) this.#state.set(target)
      else if (transition.reenter) this.#state.invoke(current, current)
      else this.#action(transition.actions)
    })
  }

  #startEffects(path: string, effects: EffectsOrFn<T> | undefined): void {
    const keys = typeof effects === "function" ? effects(this.#params()) : effects
    for (const key of keys ?? []) {
      const effect = this.#definition.implementations?.effects?.[key]
      if (!effect) {
        warn(`Missing Zag effect implementation: ${String(key)}`)
        continue
      }
      const result = effect({ ...this.#params(), watchEffect })
      const record: EffectRecord = { cleanup: undefined, path }
      if (isWatchEffect(result)) {
        record.deps = result.deps
        record.setup = result.setup
        const cleanup = result.setup()
        record.cleanup = typeof cleanup === "function" ? cleanup : undefined
        record.values = result.deps.map((get) => get())
      } else if (typeof result === "function") {
        record.cleanup = result
      }
      this.#effects.add(record)
    }
  }

  #stopEffects(path: string): void {
    for (const record of this.#effects) {
      if (record.path !== path) continue
      record.cleanup?.("exit")
      this.#effects.delete(record)
    }
  }
}
