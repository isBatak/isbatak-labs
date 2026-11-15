"use client"

import { SearchInput } from "@isbatak/react-ui/search-input"
import { TreeView, createTreeCollection } from "@isbatak/react-ui/tree-view"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import { styled } from "styled-system/jsx"

import { Icon } from "../ui/icon"
import type { DsNavNode } from "./ds-nav-data"
import { dsPermalink } from "./ds-framework"

const Count = styled("span", {
  base: {
    ms: "auto",
    textStyle: "xs",
    color: "fg.subtle",
    fontVariantNumeric: "tabular-nums",
  },
})

const Empty = styled("p", {
  base: {
    px: "3",
    py: "2",
    textStyle: "sm",
    color: "fg.subtle",
  },
})

const matchNodes = (nodes: DsNavNode[], term: string): DsNavNode[] =>
  nodes.flatMap((node) => {
    if (node.title.toLowerCase().includes(term)) return [node]
    const children = node.children ? matchNodes(node.children, term) : []
    return children.length > 0 ? [{ ...node, children }] : []
  })

const branchIds = (nodes: DsNavNode[]): string[] =>
  nodes.flatMap((node) => (node.children ? [node.id, ...branchIds(node.children)] : []))

const branchesOf = (nodes: DsNavNode[], permalink: string): string[] =>
  nodes.flatMap((node) => {
    if (!node.children) return []
    const inner = branchesOf(node.children, permalink)
    const contains = inner.length > 0 || node.children.some((child) => child.permalink === permalink)
    return contains ? [node.id, ...inner] : []
  })

interface DsNavTreeProps {
  nodes: DsNavNode[]
  label: string
}

export function DsNavTree({ nodes, label }: DsNavTreeProps) {
  const pathname = dsPermalink(usePathname())
  const [query, setQuery] = useState("")
  const [expanded, setExpanded] = useState(() => branchesOf(nodes, pathname))
  const [expandedFor, setExpandedFor] = useState(pathname)

  if (expandedFor !== pathname) {
    setExpandedFor(pathname)
    setExpanded((current) => [...new Set([...current, ...branchesOf(nodes, pathname)])])
  }

  const term = query.trim().toLowerCase()
  const visible = useMemo(() => (term ? matchNodes(nodes, term) : nodes), [nodes, term])
  const collection = useMemo(
    () =>
      createTreeCollection<DsNavNode>({
        nodeToValue: (node) => node.id,
        nodeToString: (node) => node.title,
        rootNode: {
          id: "ROOT",
          title: "",
          icon: "components",
          children: visible,
        },
      }),
    [visible],
  )

  return (
    <styled.div display="flex" flexDirection="column" gap="3" minH="0" h="full">
      <SearchInput.Root size="sm" value={query} onValueChange={(details) => setQuery(details.value)}>
        <SearchInput.Control>
          <SearchInput.Icon>
            <Icon name="search" />
          </SearchInput.Icon>
          <SearchInput.Input
            placeholder={`Filter ${label.toLowerCase()}`}
            aria-label={`Filter ${label.toLowerCase()}`}
          />
          <SearchInput.ClearTrigger>
            <Icon name="close" />
          </SearchInput.ClearTrigger>
        </SearchInput.Control>
      </SearchInput.Root>

      <styled.div minH="0" flex="1" overflowY="auto" pb="16">
        {visible.length === 0 ? (
          <Empty>No matches</Empty>
        ) : (
          <TreeView.Root
            collection={collection}
            selectedValue={[pathname]}
            expandedValue={term ? branchIds(visible) : expanded}
            onExpandedChange={(details) => {
              if (!term) setExpanded(details.expandedValue)
            }}
            aria-label={label}
          >
            <TreeView.Tree>
              <TreeView.Nodes<DsNavNode>
                indentGuide={<TreeView.IndentGuide />}
                render={({ node, nodeState }) =>
                  nodeState.isBranch ? (
                    <TreeView.Node>
                      <TreeView.NodeIndicator />
                      <Icon name={node.icon} />
                      <TreeView.NodeText>{node.title}</TreeView.NodeText>
                      <Count>{node.children?.length}</Count>
                    </TreeView.Node>
                  ) : (
                    <TreeView.Node asChild>
                      <Link
                        href={node.permalink ?? "#"}
                        prefetch
                        aria-current={node.permalink === pathname ? "page" : undefined}
                      >
                        <Icon name={node.icon} color="fg.muted" />
                        <TreeView.NodeText>{node.title}</TreeView.NodeText>
                      </Link>
                    </TreeView.Node>
                  )
                }
              />
            </TreeView.Tree>
          </TreeView.Root>
        )}
      </styled.div>
    </styled.div>
  )
}
