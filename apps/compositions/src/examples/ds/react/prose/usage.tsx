import { Prose } from "@isbatak/react-ui/prose"

export function ProseDemo() {
  return (
    <Prose maxW="xl">
      <h2>Getting started</h2>
      <p>
        Prose styles rich text you don't control, such as rendered <strong>Markdown</strong> or content from a CMS. It
        spaces paragraphs, headings and lists, and styles <a href="#prose">links</a> and <code>inline code</code>.
      </p>
      <ul>
        <li>Paragraphs and headings get vertical rhythm</li>
        <li>Lists keep their markers</li>
      </ul>
      <blockquote>Simplicity is prerequisite for reliability.</blockquote>
    </Prose>
  )
}
