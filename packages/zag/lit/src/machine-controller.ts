import type { Machine, MachineSchema, Service } from "@zag-js/core"
import type { ReactiveController, ReactiveControllerHost } from "lit"
import { LitMachine } from "./machine"

export type SchemaOf<TMachine> = TMachine extends Machine<infer TSchema> ? TSchema : never

type ScopeProps = { id?: string | undefined; ids?: unknown }

export class MachineController<T extends MachineSchema> implements ReactiveController {
  readonly #definition: Machine<T>
  readonly #getProps: () => Partial<T["props"]>
  readonly #host: ReactiveControllerHost
  #connected = false
  #machine: LitMachine<T>
  #scope: ScopeProps
  #started = false
  #stopped = false
  #unsubscribe?: VoidFunction

  constructor(host: ReactiveControllerHost, definition: Machine<T>, getProps: () => Partial<T["props"]> = () => ({})) {
    this.#host = host
    this.#definition = definition
    this.#getProps = getProps
    const { id, ids } = getProps() as ScopeProps
    this.#scope = { id, ids }
    this.#machine = new LitMachine(definition, getProps)
    host.addController(this)
  }

  get service(): Service<T> {
    return this.#machine.service
  }

  hostConnected(): void {
    this.#connected = true
    if (this.#stopped) this.#replaceMachine()
    else this.#subscribe()
    this.#host.requestUpdate()
  }

  hostDisconnected(): void {
    this.#connected = false
    this.#unsubscribe?.()
    this.#machine.stop()
    this.#started = false
    this.#stopped = true
  }

  hostUpdate(): void {
    if (!this.#connected) return
    const { id, ids } = this.#getProps() as ScopeProps
    if (id !== this.#scope.id || ids !== this.#scope.ids) {
      this.#unsubscribe?.()
      this.#machine.stop()
      this.#replaceMachine()
    } else if (this.#started) {
      this.#machine.refreshProps()
    }
  }

  hostUpdated(): void {
    if (!this.#connected || this.#started) return
    this.#started = true
    this.#machine.start()
  }

  #replaceMachine(): void {
    const { id, ids } = this.#getProps() as ScopeProps
    this.#scope = { id, ids }
    this.#machine = new LitMachine(this.#definition, this.#getProps)
    this.#started = false
    this.#stopped = false
    this.#subscribe()
  }

  #subscribe(): void {
    this.#unsubscribe = this.#machine.subscribe(() => this.#host.requestUpdate())
  }
}
