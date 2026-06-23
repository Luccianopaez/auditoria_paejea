import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Lector de Markdown compartido por todas las secciones.
// Muestra el contenido de los .md de docs_paejea/ tal cual, sin inventar nada.
// `images` es un mapa { 'nombre_archivo.png': urlImportada } para resolver las
// capturas referenciadas como ![alt](img_paejea/archivo.png) dentro del .md.
function Markdown({ text, images = {} }) {
  return (
    <article
      className="prose prose-slate max-w-none
        prose-headings:text-slate-800
        prose-h1:text-3xl prose-h1:font-bold prose-h1:text-violet-900
        prose-a:text-violet-700
        prose-blockquote:border-l-violet-300 prose-blockquote:bg-violet-50
        prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-slate-600
        prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5
        prose-code:before:content-[''] prose-code:after:content-['']
        prose-table:block prose-table:overflow-x-auto
        prose-th:bg-slate-100 prose-img:rounded-lg prose-img:shadow-md"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img({ src = '', alt }) {
            const name = src.split('/').pop()
            const resolved = images[name] || src
            return (
              <img
                src={resolved}
                alt={alt}
                className="mx-auto rounded-lg border border-slate-200 shadow-md"
              />
            )
          },
        }}
      >
        {text}
      </ReactMarkdown>
    </article>
  )
}

export default Markdown
