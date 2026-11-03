import { defineConfig } from "@pandacss/dev"

const componentProps = `  : T extends Component<infer Props>
    ? Props
    : never`

const constructorProps = `  : T extends new (...args: any) => { $props: infer Props }
    ? Props
    : T extends Component<infer Props>
      ? Props
      : never`

export default defineConfig({
  designSystem: "@isbatak/panda-ds",
  jsxFramework: "vue",
  include: ["./src/**/*.{ts,vue}"],
  outdir: "styled-system",
  plugins: [
    {
      name: "vue-component-props",
      hooks: {
        "codegen:prepare": ({ artifacts }) =>
          artifacts.map((artifact) => ({
            ...artifact,
            files: artifact.files.map((file) =>
              file.path.endsWith("types/jsx.d.ts")
                ? { ...file, code: file.code.replace(componentProps, constructorProps) }
                : file,
            ),
          })),
      },
    },
  ],
})
