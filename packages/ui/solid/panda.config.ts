import { defineConfig } from "@pandacss/dev"

const solidJsxTypeFixes: [RegExp, string][] = [
  [/\bComponentProps\b(?=[^;\n]*from '\.\.\/types\/jsx\.js')/, "ComponentPropsOf as ComponentProps"],
  [
    /PropsProvider: Component<Partial<RecipePropsOf<R>> & DataAttrs>/,
    "PropsProvider: (props: { value: Partial<RecipePropsOf<R>> & DataAttrs; children?: JSX.Element }) => JSX.Element",
  ],
]

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  jsxFramework: "solid",
  include: ["./src/**/*.{ts,tsx}"],
  outdir: "styled-system",
  plugins: [
    {
      name: "fix-solid-jsx-types",
      hooks: {
        "codegen:prepare": ({ artifacts }) =>
          artifacts.map((artifact) => ({
            ...artifact,
            files: artifact.files.map((file) => ({
              ...file,
              code: solidJsxTypeFixes.reduce(
                (code, [pattern, replacement]) => code.replace(pattern, replacement),
                file.code,
              ),
            })),
          })),
      },
    },
  ],
})
