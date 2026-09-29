import { type CSSProperties, useMemo } from "react"
import { Box, HStack, Stack, styled } from "@isbatak/panda-ds/jsx"

import { FileIcon, VscodeIcon } from "../site/icons"
import { tokenize } from "../lib/source"
import { vscode } from "../theme"
import { TrafficLights } from "./browser"

export const EDITOR = { width: 1100, height: 760, line: 28, font: 17, gutter: 64, sidebar: 250 } as const

const CHAR = EDITOR.font * 0.6

export interface EditorProps {
  file: string
  source: string
  line: number
  column: number
  caret?: number
  mark: number
  accent: string
  scroll: number
  highlight: number
  frame: number
  siblings: string[]
  tabs: string[]
  style?: CSSProperties
}

function Tree({ file, siblings, accent }: { file: string; siblings: string[]; accent: string }) {
  const folders = file.split("/").slice(0, -1)
  const name = file.split("/").at(-1)
  const depth = folders.length

  return (
    <Stack gap="0" fontSize="13px" color={vscode.text}>
      {folders.map((folder, index) => (
        <HStack key={folder + index} height="24px" gap="1.5" style={{ paddingLeft: 12 + index * 12 }}>
          <styled.span color={vscode.muted} fontSize="10px">
            ▼
          </styled.span>
          {folder}
        </HStack>
      ))}
      {siblings.map((sibling) => {
        const active = sibling === name
        return (
          <HStack
            key={sibling}
            height="24px"
            gap="1.5"
            style={{
              paddingLeft: 26 + depth * 12,
              background: active ? `${accent}1f` : undefined,
              boxShadow: active ? `inset 0 0 0 1px ${accent}` : undefined,
            }}
          >
            <styled.span color={sibling.endsWith("x") ? "#1e88e5" : "#c09c00"} fontSize="14px">
              <FileIcon />
            </styled.span>
            {sibling}
          </HStack>
        )
      })}
    </Stack>
  )
}

export function Editor({
  file,
  source,
  line,
  column,
  caret = column,
  mark,
  accent,
  scroll,
  highlight,
  frame,
  siblings,
  tabs,
  style,
}: EditorProps) {
  const lines = useMemo(() => tokenize(source), [source])
  const name = file.split("/").at(-1) ?? file
  const caretVisible = Math.floor(frame / 16) % 2 === 0
  const codeTop = -(scroll - 1) * EDITOR.line + 12

  return (
    <Box
      position="absolute"
      overflow="hidden"
      bg={vscode.editor}
      borderWidth="1px"
      borderColor="#d4d4d8"
      boxShadow="0 50px 120px -24px rgba(15, 15, 30, 0.3), 0 16px 40px -12px rgba(15, 15, 30, 0.16)"
      fontFamily="body"
      style={{ width: EDITOR.width, height: EDITOR.height, ...style }}
    >
      <HStack
        height="36px"
        px="4"
        bg={vscode.chrome}
        borderBottomWidth="1px"
        borderColor={vscode.border}
        position="relative"
      >
        <TrafficLights />
        <styled.span position="absolute" left="0" right="0" textAlign="center" fontSize="13px" color={vscode.muted}>
          {name} — sourcery
        </styled.span>
      </HStack>
      <HStack gap="0" alignItems="stretch" style={{ height: EDITOR.height - 36 - 24 }}>
        <Stack
          width="48px"
          alignItems="center"
          gap="5"
          pt="3"
          bg={vscode.chrome}
          borderEndWidth="1px"
          borderColor={vscode.border}
          color={vscode.muted}
        >
          <Box style={{ color: accent }} fontSize="24px">
            <FileIcon />
          </Box>
          <Box fontSize="24px">
            <VscodeIcon />
          </Box>
        </Stack>
        <Stack
          gap="0"
          bg={vscode.chrome}
          borderEndWidth="1px"
          borderColor={vscode.border}
          style={{ width: EDITOR.sidebar }}
        >
          <styled.span
            height="34px"
            px="5"
            display="flex"
            alignItems="center"
            fontSize="11px"
            letterSpacing="wide"
            color={vscode.muted}
          >
            EXPLORER
          </styled.span>
          <Tree file={file} siblings={siblings} accent={vscode.accent} />
        </Stack>
        <Stack gap="0" flex="1" minW="0">
          <HStack gap="0" height="36px" bg={vscode.chrome} borderBottomWidth="1px" borderColor={vscode.border}>
            {tabs.map((tab) => {
              const active = tab === name
              return (
                <HStack
                  key={tab}
                  height="full"
                  px="4"
                  gap="2"
                  fontSize="13px"
                  borderEndWidth="1px"
                  borderColor={vscode.border}
                  style={{
                    background: active ? vscode.editor : undefined,
                    color: active ? vscode.text : vscode.muted,
                    boxShadow: active ? `inset 0 2px 0 ${vscode.accent}` : undefined,
                    marginBottom: active ? -1 : 0,
                  }}
                >
                  <styled.span color="#1e88e5" fontSize="14px">
                    <FileIcon />
                  </styled.span>
                  {tab}
                </HStack>
              )
            })}
          </HStack>
          <HStack height="24px" px="4" gap="1.5" fontSize="12px" color={vscode.muted} whiteSpace="nowrap">
            {file.split("/").join("  ›  ")}
          </HStack>
          <Box position="relative" flex="1" overflow="hidden" fontFamily="mono" style={{ fontSize: EDITOR.font }}>
            <div style={{ position: "absolute", left: 0, right: 0, top: codeTop }}>
              {lines.map((tokens, index) => {
                const number = index + 1
                const active = number === line
                return (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      height: EDITOR.line,
                      display: "flex",
                      alignItems: "center",
                      whiteSpace: "pre",
                    }}
                  >
                    {active && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `${accent}1a`,
                          boxShadow: `inset 3px 0 0 ${accent}`,
                          transformOrigin: "left",
                          transform: `scaleX(${highlight})`,
                        }}
                      />
                    )}
                    <span
                      style={{
                        position: "relative",
                        width: EDITOR.gutter,
                        paddingRight: 20,
                        textAlign: "right",
                        flexShrink: 0,
                        color: active ? vscode.lineNumberActive : vscode.lineNumber,
                      }}
                    >
                      {number}
                    </span>
                    <span style={{ position: "relative" }}>
                      {active && highlight > 0 && (
                        <span
                          style={{
                            position: "absolute",
                            left: (column - 1) * CHAR - 3,
                            top: -3,
                            height: EDITOR.line - 2,
                            width: mark * CHAR * highlight + 6,
                            background: `${accent}2e`,
                            borderRadius: 3,
                          }}
                        />
                      )}
                      {tokens.map((token, tokenIndex) => (
                        <span key={tokenIndex} style={{ position: "relative", color: vscode.token[token.type] }}>
                          {token.value}
                        </span>
                      ))}
                      {active && caretVisible && highlight >= 1 && (
                        <span
                          style={{
                            position: "absolute",
                            left: (caret - 1) * CHAR - 1,
                            top: 2,
                            width: 2,
                            height: EDITOR.line - 6,
                            background: "#000",
                          }}
                        />
                      )}
                    </span>
                  </div>
                )
              })}
            </div>
          </Box>
        </Stack>
      </HStack>
      <HStack
        height="24px"
        px="3"
        gap="4"
        fontSize="12px"
        color={vscode.muted}
        bg={vscode.chrome}
        borderTopWidth="1px"
        borderColor={vscode.border}
      >
        <styled.span>⎇ feat/sourcery</styled.span>
        <Box flex="1" />
        <styled.span style={{ color: highlight > 0 ? accent : undefined }} fontWeight="medium">
          Ln {line}, Col {column}
        </styled.span>
        <styled.span>Spaces: 2</styled.span>
        <styled.span>UTF-8</styled.span>
        <styled.span>TypeScript JSX</styled.span>
      </HStack>
    </Box>
  )
}
