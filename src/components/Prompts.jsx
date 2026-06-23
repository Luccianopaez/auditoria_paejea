import Markdown from './Markdown.jsx'
// El contenido sale tal cual del Markdown del informe (regla de oro).
import contenido from '../../docs_paejea/09_prompts_paejea.md?raw'

function Prompts() {
  return <Markdown text={contenido} />
}

export default Prompts
