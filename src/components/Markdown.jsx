import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Markdown({ text, images = {} }) {
  return (
    <article
      className="
        prose prose-slate prose-lg max-w-none

        prose-headings:font-bold prose-headings:tracking-tight

        prose-h1:text-2xl prose-h1:text-teal-900
        prose-h1:border-b prose-h1:border-teal-100 prose-h1:pb-3 prose-h1:mb-6

        prose-h2:text-xl prose-h2:text-teal-800
        prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-2 prose-h2:mt-10

        prose-h3:text-lg prose-h3:text-teal-700 prose-h3:mt-8

        prose-p:text-slate-600 prose-p:leading-relaxed

        prose-strong:text-slate-800 prose-strong:font-semibold

        prose-a:text-teal-700 prose-a:font-medium prose-a:no-underline hover:prose-a:underline

        prose-blockquote:not-italic
        prose-blockquote:border-l-4 prose-blockquote:border-teal-400
        prose-blockquote:bg-teal-50/70 prose-blockquote:rounded-r-xl
        prose-blockquote:py-3 prose-blockquote:px-5
        prose-blockquote:text-slate-600 prose-blockquote:font-normal

        prose-code:rounded-md prose-code:bg-stone-100
        prose-code:px-1.5 prose-code:py-0.5
        prose-code:text-[0.83em] prose-code:font-mono
        prose-code:text-teal-800 prose-code:font-medium
        prose-code:before:content-[''] prose-code:after:content-['']

        prose-pre:bg-slate-900 prose-pre:text-slate-100
        prose-pre:rounded-2xl prose-pre:shadow-xl
        prose-pre:border prose-pre:border-slate-700/60

        prose-table:text-sm prose-table:block prose-table:overflow-x-auto

        prose-th:bg-teal-800 prose-th:text-white
        prose-th:font-semibold prose-th:px-4 prose-th:py-3

        prose-td:px-4 prose-td:py-2.5 prose-td:text-slate-600

        prose-tr:border-slate-200

        prose-hr:border-teal-100 prose-hr:my-8

        prose-li:text-slate-600 prose-li:marker:text-teal-400

        prose-img:rounded-2xl prose-img:shadow-xl prose-img:mx-auto
        prose-img:border prose-img:border-slate-200
      "
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
                className="mx-auto rounded-2xl border border-slate-200 shadow-xl"
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
