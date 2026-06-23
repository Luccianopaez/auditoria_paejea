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
        prose-headings:text-teal-900
        prose-h1:text-3xl prose-h1:font-bold prose-h1:text-teal-800
        prose-h2:text-teal-800 prose-h2:border-b prose-h2:border-teal-100 prose-h2:pb-2
        prose-h3:text-teal-700
        prose-a:text-teal-700 prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-l-teal-400 prose-blockquote:bg-teal-50/60
        prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-slate-600
        prose-blockquote:rounded-r-lg
        prose-code:rounded prose-code:bg-stone-100 prose-code:px-1.5 prose-code:py-0.5
        prose-code:text-teal-800 prose-code:font-medium
        prose-code:before:content-[''] prose-code:after:content-['']
        prose-pre:bg-stone-900 prose-pre:rounded-xl
        prose-table:block prose-table:overflow-x-auto
        prose-th:bg-teal-50 prose-th:text-teal-800
        prose-tr:border-slate-200
        prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto"
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
