import { type CollectionOptions, type ListCollection, createListCollection } from "@ark-ui/solid/collection"

import { type PreparedCommand, createCommandMatcher, getCommandMatchRanges, prepareCommand } from "./command-score"

export interface CommandModifierKeys {
  metaKey: boolean
  ctrlKey: boolean
  shiftKey: boolean
  altKey: boolean
}

export interface CommandSelectionDetails {
  /**
   * The value of the selected item.
   */
  itemValue: string
  /**
   * Always empty: a command keeps no selected value.
   */
  value: string[]
  /**
   * The modifier keys held when the item was picked.
   */
  modifiers: CommandModifierKeys
}

export interface CommandItem {
  /**
   * The item's value. Use `itemToValue` on the collection to derive it from another field.
   */
  value?: string | undefined
  /**
   * The item's text. Use `itemToString` on the collection to derive it from another field.
   */
  label?: string | undefined
  /**
   * Whether the item is disabled. Use `isItemDisabled` on the collection to derive it from another field.
   */
  disabled?: boolean | undefined
  /**
   * Extra words that match the item when searching.
   */
  keywords?: string[] | undefined
  /**
   * The value of the item whose page lists this item. An item with children opens its page when selected instead of
   * running.
   */
  parent?: string | undefined
  /**
   * Whether selecting the item opens its page even without children, such as a page that loads its items or renders
   * custom content.
   */
  page?: boolean | undefined
  /**
   * Runs when the item is selected, before the Root `onSelect`.
   */
  onSelect?: ((details: CommandSelectionDetails) => void) | undefined
  /**
   * Overrides the Root `closeOnSelect` for this item.
   */
  closeOnSelect?: boolean | undefined
}

export const NO_MODIFIERS: CommandModifierKeys = { metaKey: false, ctrlKey: false, shiftKey: false, altKey: false }

export const hasModifierKey = (modifiers: CommandModifierKeys) =>
  modifiers.metaKey || modifiers.ctrlKey || modifiers.shiftKey || modifiers.altKey

export const pickModifiers = ({ metaKey, ctrlKey, shiftKey, altKey }: CommandModifierKeys): CommandModifierKeys => ({
  metaKey,
  ctrlKey,
  shiftKey,
  altKey,
})

export interface CommandLoadDetails<T extends CommandItem = CommandItem> {
  /**
   * The query to load items for.
   */
  query: string
  /**
   * The open page, or `null` at the top level.
   */
  page: T | null
  /**
   * Aborted when a newer load starts or the component unmounts.
   */
  signal: AbortSignal
  /**
   * Where the page to load starts. `undefined` for the first page.
   */
  cursor?: string | undefined
}

export interface CommandLoadPage<T> {
  /**
   * The loaded items.
   */
  items: T[]
  /**
   * Where the next page starts. Leave it out when there are no more pages.
   */
  cursor?: string | undefined
}

export type CommandLoadResult<T> = T[] | CommandLoadPage<T>

export interface UseCommandCollectionProps<T extends CommandItem> extends Omit<CollectionOptions<T>, "items"> {
  /**
   * The items to search locally. An item with a `parent` lives on that item's page.
   */
  initialItems?: T[] | readonly T[] | undefined
  /**
   * Scores an item from 0 (hidden) to 1. Defaults to a fuzzy match on the label and `keywords`. Pass `null` to show the
   * items as given, such as when a server already filtered them.
   */
  filter?: ((item: T, query: string) => number) | null | undefined
  /**
   * The maximum number of items to show.
   */
  limit?: number | undefined
  /**
   * Loads items for the query. They show after the local items, and load again when the page changes. Return
   * `{ items, cursor }` to load more pages with `loadMore`.
   */
  load?: ((details: CommandLoadDetails<T>) => Promise<CommandLoadResult<T>>) | undefined
  /**
   * The controlled query.
   */
  query?: string | undefined
  /**
   * Called when the query changes.
   */
  onQueryChange?: ((query: string) => void) | undefined
  /**
   * The query to rank with. Defaults to `query`. Pass a debounced copy to keep typing responsive on large lists.
   */
  filterQuery?: string | undefined
  /**
   * Whether a query also matches items in nested pages.
   * @default false
   */
  deepSearch?: boolean | undefined
  /**
   * Called when the open page changes.
   */
  onPageChange?: ((page: T | null) => void) | undefined
}

export interface CommandCollectionState<T extends CommandItem> {
  /**
   * The ranked items to show.
   */
  collection: ListCollection<T>
  /**
   * The current query, as shown in the input.
   */
  query: string
  /**
   * The query the collection is ranked with.
   */
  filterQuery: string
  /**
   * Whether `load` is waiting for results.
   */
  loading: boolean
  /**
   * The error from the last `load`, if any.
   */
  error: Error | undefined
  /**
   * Whether `load` has more pages.
   */
  hasMore: boolean
  /**
   * The open page, or `null` at the top level.
   */
  page: T | null
  /**
   * The pages from the top level to the open page.
   */
  pages: T[]
  /**
   * The item to highlight after going back: the one the user came from.
   */
  highlightedValue: string | null
}

export interface CommandCollectionActions<T extends CommandItem> {
  /**
   * Ranks the items on the open page for a query right away and returns the top one.
   */
  getFirstMatch: (query: string) => T | undefined
  /**
   * Updates the query.
   */
  search: (query: string) => void
  /**
   * Runs `load` again for the current query.
   */
  reload: VoidFunction
  /**
   * Loads the next page and appends its items.
   */
  loadMore: VoidFunction
  /**
   * Opens a page by item value, or the top level for `null`.
   */
  setPage: (value: string | null) => void
  /**
   * Goes back to the previous page. Returns `false` when there's none.
   */
  popPage: () => boolean
  /**
   * Whether the item has children or sets `page: true`.
   */
  isPage: (item: T) => boolean
  /**
   * The item's ancestors below the open page.
   */
  getPath: (item: T) => T[]
  /**
   * Clears the query and starts over at the top level, or at the given page.
   */
  reset: (page?: string | null) => void
  /**
   * Opens the page of a selected item that is a page. Returns `true` when it did, so the command stays open.
   */
  onSelect: (details: CommandSelectionDetails) => boolean
  /**
   * Handles Backspace (up a page) and Escape (back). `Command.Input` calls it.
   */
  onInputKeyDown: (event: KeyboardEvent) => void
}

export interface UseCommandCollectionReturn<T extends CommandItem>
  extends CommandCollectionState<T>, CommandCollectionActions<T> {}

export interface CommandStore<T extends CommandItem> {
  actions: CommandCollectionActions<T>
  getState: () => CommandCollectionState<T>
  setProps: (props: UseCommandCollectionProps<T>) => void
  subscribe: (listener: VoidFunction) => VoidFunction
  destroy: VoidFunction
}

const EMPTY: never[] = []
const ROOT = "\0root"

interface Tree<T> {
  items: Map<string, T>
  children: Map<string, T[]>
  toValue: (item: T) => string
}

interface LoadedItems<T> {
  pageKey: string
  items: T[]
  cursor: string | undefined
}

export function createCommandStore<T extends CommandItem>(initialProps: UseCommandCollectionProps<T>): CommandStore<T> {
  let props = initialProps
  let ownQuery = ""
  let pageValue: string | null = null
  let highlightedValue: string | null = null
  let history: (string | null)[] = []
  const queries = new Map<string, string>()
  const prepared = new WeakMap<T, PreparedCommand>()
  let lastSearch: { source: readonly T[]; query: string; matches: T[] } | null = null

  let tree: Tree<T> | null = null
  let treeSource: readonly T[] | null = null

  let loaded: LoadedItems<T> = { pageKey: ROOT, items: EMPTY, cursor: undefined }
  let pending = false
  let error: Error | undefined
  let controller: AbortController | null = null
  let loadKey: string | null = null
  let attempt = 0

  let state: CommandCollectionState<T>
  const listeners = new Set<VoidFunction>()

  const toValue = (item: T) => String(props.itemToValue?.(item) ?? item.value ?? "")

  const getTree = () => {
    const source = props.initialItems ?? EMPTY
    if (!tree || treeSource !== source) {
      tree = buildTree(source, toValue)
      treeSource = source
      lastSearch = null
    }
    return tree
  }

  const getQuery = () => props.query ?? ownQuery
  const getPage = () => (pageValue != null ? (getTree().items.get(pageValue) ?? null) : null)
  const getPageKey = () => {
    const page = getPage()
    return page ? toValue(page) : ROOT
  }
  const getPages = () => {
    const page = getPage()
    return page ? [...getAncestors(getTree(), page), page] : EMPTY
  }
  const getScope = (deep: boolean) => {
    const current = getTree()
    const key = getPageKey()
    return deep ? getDescendants(current, key) : (current.children.get(key) ?? EMPTY)
  }
  const getLoadedItems = () => (loaded.pageKey === getPageKey() ? loaded.items : EMPTY)

  const prepare = (item: T) => {
    let entry = prepared.get(item)
    if (!entry) {
      const label = props.itemToString?.(item) ?? item.label ?? ""
      entry = prepareCommand(String(label), item.keywords)
      prepared.set(item, entry)
    }
    return entry
  }

  const searchLocal = (items: readonly T[], query: string, narrow: boolean) => {
    const last = narrow ? lastSearch : null
    const pool = last && last.source === items && query.startsWith(last.query) ? last.matches : items
    const match = createCommandMatcher(query)
    const matches = rankItems(pool, query, (item) => match(prepare(item)))
    if (narrow) lastSearch = { source: items, query, matches }
    return matches
  }

  const rank = (items: readonly T[], query: string, narrow: boolean) => {
    const { filter, groupBy, limit } = props
    const remoteItems = getLoadedItems()
    const score = filter && ((item: T) => filter(item, query))

    const local =
      filter === null ? [...items] : score ? rankItems(items, query, score) : searchLocal(items, query, narrow)
    const remote = score ? rankItems(remoteItems, query, score) : remoteItems

    const merged = keepGroupOrder([...local, ...remote], [...items, ...remoteItems], groupBy)
    return limit == null ? merged : merged.slice(0, limit)
  }

  const computeState = (): CommandCollectionState<T> => {
    const {
      initialItems: _initialItems,
      filter: _filter,
      limit: _limit,
      load,
      query: _query,
      onQueryChange: _onQueryChange,
      filterQuery: filterQueryProp,
      deepSearch,
      onPageChange: _onPageChange,
      ...options
    } = props
    const query = getQuery()
    const filterQuery = filterQueryProp ?? query
    const scope = getScope(!!deepSearch && !!filterQuery)
    const stale = loaded.pageKey !== getPageKey()
    return {
      collection: createListCollection<T>({ ...options, items: rank(scope, filterQuery, true) }),
      query,
      filterQuery,
      loading: pending || (!!load && stale),
      error,
      hasMore: !stale && loaded.cursor != null,
      page: getPage(),
      pages: getPages(),
      highlightedValue,
    }
  }

  const emit = () => {
    state = computeState()
    for (const listener of listeners) listener()
  }

  const startLoad = (options: { cursor: string | undefined; append: boolean }) => {
    const load = props.load
    if (!load) return
    controller?.abort()
    const current = new AbortController()
    controller = current
    pending = true
    const pageKey = getPageKey()

    load({ query: getQuery(), page: getPage(), signal: current.signal, cursor: options.cursor }).then(
      (data) => {
        if (current.signal.aborted) return
        const page = Array.isArray(data) ? { items: data, cursor: undefined } : data
        const items = options.append && loaded.pageKey === pageKey ? [...loaded.items, ...page.items] : page.items
        loaded = { pageKey, items, cursor: page.cursor }
        error = undefined
        pending = false
        lastSearch = null
        emit()
      },
      (reason: unknown) => {
        if (current.signal.aborted) return
        if (!options.append) loaded = { pageKey, items: EMPTY, cursor: undefined }
        error = reason instanceof Error ? reason : new Error(String(reason))
        pending = false
        emit()
      },
    )
  }

  const syncLoad = () => {
    if (!props.load) {
      controller?.abort()
      controller = null
      loadKey = null
      pending = false
      return
    }
    const key = JSON.stringify([getQuery(), getPageKey(), attempt])
    if (key === loadKey) return
    loadKey = key
    startLoad({ cursor: undefined, append: false })
  }

  const commit = () => {
    syncLoad()
    emit()
  }

  const setQuery = (next: string) => {
    if (Object.is(getQuery(), next)) return
    if (props.query === undefined) ownQuery = next
    props.onQueryChange?.(next)
  }

  const navigate = (value: string | null, push: boolean) => {
    const current = getTree()
    const pages = getPages()
    const page = pages.at(-1)
    const currentValue = page ? toValue(page) : null

    if (value === currentValue) return
    if (value != null && !current.items.has(value)) return

    history = updateHistory(history, { from: currentValue, to: value, push })

    const depth = value == null ? 0 : pages.findIndex((item) => toValue(item) === value) + 1
    const from = value == null || depth > 0 ? pages[depth] : undefined

    queries.set(currentValue ?? ROOT, getQuery())
    setQuery(from ? (queries.get(value ?? ROOT) ?? "") : "")
    highlightedValue = from ? toValue(from) : null
    pageValue = value
    commit()

    props.onPageChange?.(value != null ? (current.items.get(value) ?? null) : null)
  }

  const isPage = (item: T) => item.page === true || getTree().children.has(toValue(item))

  const popPage = () => {
    const previous = history.at(-1)
    if (previous === undefined) return false
    navigate(previous, false)
    return true
  }

  const goUp = () => {
    const pages = getPages()
    if (!pages.length) return false
    const parent = pages.at(-2)
    navigate(parent ? toValue(parent) : null, false)
    return true
  }

  const actions: CommandCollectionActions<T> = {
    getFirstMatch: (query) => rank(getScope(!!props.deepSearch && !!query), query, false)[0],
    search(query) {
      setQuery(query)
      commit()
    },
    reload() {
      attempt += 1
      commit()
    },
    loadMore() {
      if (pending || loaded.pageKey !== getPageKey() || loaded.cursor == null) return
      startLoad({ cursor: loaded.cursor, append: true })
      emit()
    },
    setPage: (value) => navigate(value, true),
    popPage,
    isPage,
    getPath: (item) => getAncestors(getTree(), item, getPageKey()),
    reset(value = null) {
      queries.clear()
      history = []
      setQuery("")
      highlightedValue = null
      pageValue = value
      commit()
    },
    onSelect(details) {
      const item = getTree().items.get(details.itemValue)
      if (!item || !isPage(item)) return false
      navigate(details.itemValue, true)
      return true
    },
    onInputKeyDown(event) {
      if (event.defaultPrevented) return
      const input = event.currentTarget as HTMLInputElement | null
      const handled = event.key === "Escape" ? popPage() : event.key === "Backspace" && !input?.value && goUp()
      if (handled) event.preventDefault()
    },
  }

  syncLoad()
  state = computeState()

  return {
    actions,
    getState: () => state,
    setProps(next) {
      if (shallowEqual(props, next)) return
      props = next
      lastSearch = null
      commit()
    },
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    destroy() {
      controller?.abort()
      controller = null
      loadKey = null
      listeners.clear()
    },
  }
}

export function createCommandView<T extends CommandItem>(
  store: CommandStore<T>,
  read: () => CommandCollectionState<T>,
): UseCommandCollectionReturn<T> {
  return {
    get collection() {
      return read().collection
    },
    get query() {
      return read().query
    },
    get filterQuery() {
      return read().filterQuery
    },
    get loading() {
      return read().loading
    },
    get error() {
      return read().error
    },
    get hasMore() {
      return read().hasMore
    },
    get page() {
      return read().page
    },
    get pages() {
      return read().pages
    },
    get highlightedValue() {
      return read().highlightedValue
    },
    ...store.actions,
    getFirstMatch(query) {
      read()
      return store.actions.getFirstMatch(query)
    },
    isPage(item) {
      read()
      return store.actions.isPage(item)
    },
    getPath(item) {
      read()
      return store.actions.getPath(item)
    },
  }
}

export interface RunCommandSelectOptions<T extends CommandItem> {
  details: CommandSelectionDetails
  item: T | null | undefined
  command: UseCommandCollectionReturn<T> | undefined
  closeOnSelect: boolean | undefined
  onSelect: ((details: CommandSelectionDetails) => void) | undefined
  onClose: VoidFunction | undefined
}

export function runCommandSelect<T extends CommandItem>(options: RunCommandSelectOptions<T>) {
  const { details, item, command, closeOnSelect = true, onSelect, onClose } = options
  item?.onSelect?.(details)
  onSelect?.(details)
  if (command?.onSelect(details)) return
  const shouldClose = closeOnSelect && !hasModifierKey(details.modifiers)
  if (item?.closeOnSelect ?? shouldClose) onClose?.()
}

export interface CommandInputKeyDownOptions<T extends CommandItem> {
  command: UseCommandCollectionReturn<T> | undefined
  highlightedValue: string | null
  firstValue: string | null
  selectItem: (item: T, modifiers: CommandModifierKeys) => void
}

export function handleCommandInputKeyDown<T extends CommandItem>(
  event: KeyboardEvent,
  options: CommandInputKeyDownOptions<T>,
) {
  if (event.isComposing || event.keyCode === 229) return
  const { command, highlightedValue, firstValue, selectItem } = options
  command?.onInputKeyDown(event)
  if (event.defaultPrevented || event.key !== "Enter") return
  if (!command || command.filterQuery === command.query) return
  if (highlightedValue && highlightedValue !== firstValue) return
  const item = command.getFirstMatch(command.query)
  if (!item) return
  event.preventDefault()
  selectItem(item, pickModifiers(event))
}

export interface HighlightRestoreOptions {
  collection: ListCollection<any>
  preferred: string | null
  highlighted: string | null
  setHighlight: (value: string) => void
}

export function createHighlightRestorer(initial: string | null) {
  let seen = initial
  let pending: string | null = null
  return (options: HighlightRestoreOptions): VoidFunction | undefined => {
    const { collection, preferred, highlighted, setHighlight } = options
    if (preferred !== seen) {
      seen = preferred
      pending = preferred
    }
    const value = pending
    if (value && value !== highlighted && collection.has(value)) {
      const frame = requestAnimationFrame(() => setHighlight(value))
      return () => cancelAnimationFrame(frame)
    }
    pending = null
    return undefined
  }
}

export interface HighlightChunk {
  text: string
  match: boolean
}

export function getHighlightChunks(text: string, query: string): HighlightChunk[] {
  const chunks: HighlightChunk[] = []
  let cursor = 0
  for (const [start, end] of getCommandMatchRanges(text, query)) {
    if (start > cursor) chunks.push({ text: text.slice(cursor, start), match: false })
    chunks.push({ text: text.slice(start, end), match: true })
    cursor = end
  }
  if (cursor < text.length) chunks.push({ text: text.slice(cursor), match: false })
  return chunks
}

function shallowEqual(a: object, b: object) {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)
  if (aKeys.length !== bKeys.length) return false
  return aKeys.every((key) => Object.is(a[key as keyof typeof a], b[key as keyof typeof b]))
}

function rankItems<T>(items: readonly T[], query: string, score: (item: T) => number): T[] {
  if (!query) return [...items]
  return items
    .map((item, index) => ({ item, index, score: score(item) }))
    .filter((entry) => entry.score > 0)
    .toSorted((a, b) => b.score - a.score || a.index - b.index)
    .map((entry) => entry.item)
}

function keepGroupOrder<T>(ranked: T[], source: T[], groupBy: ((item: T, index: number) => string) | undefined): T[] {
  if (!groupBy) return ranked
  const order = new Map<string, number>()
  source.forEach((item, index) => {
    const group = groupBy(item, index)
    if (!order.has(group)) order.set(group, order.size)
  })
  return ranked
    .map((item, index) => ({ item, index, group: groupBy(item, index) }))
    .toSorted((a, b) => (order.get(a.group) ?? 0) - (order.get(b.group) ?? 0) || a.index - b.index)
    .map((entry) => entry.item)
}

function buildTree<T extends CommandItem>(items: readonly T[], toValue: (item: T) => string): Tree<T> {
  const byValue = new Map<string, T>()
  for (const item of items) byValue.set(toValue(item), item)

  const children = new Map<string, T[]>()
  for (const item of items) {
    const parent = item.parent != null && byValue.has(item.parent) ? item.parent : ROOT
    const list = children.get(parent)
    if (list) list.push(item)
    else children.set(parent, [item])
  }

  return { items: byValue, children, toValue }
}

function updateHistory(history: (string | null)[], options: { from: string | null; to: string | null; push: boolean }) {
  const visited = history.lastIndexOf(options.to)
  if (visited >= 0) return history.slice(0, visited)
  return options.push ? [...history, options.from] : history
}

function getAncestors<T extends CommandItem>(tree: Tree<T>, item: T, stop = ROOT): T[] {
  const path: T[] = []
  let parent = tree.items.get(item.parent ?? "")

  while (parent && tree.toValue(parent) !== stop && !path.includes(parent)) {
    path.unshift(parent)
    parent = tree.items.get(parent.parent ?? "")
  }

  return path
}

function getDescendants<T>(tree: Tree<T>, key: string): T[] {
  const seen = new Set<T>()

  const visit = (items: T[] | undefined) => {
    for (const item of items ?? EMPTY) {
      if (seen.has(item)) continue
      seen.add(item)
      visit(tree.children.get(tree.toValue(item)))
    }
  }

  visit(tree.children.get(key))
  return [...seen]
}
