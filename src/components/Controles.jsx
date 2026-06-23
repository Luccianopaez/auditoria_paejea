import Markdown from './Markdown.jsx'
// El contenido sale tal cual del Markdown del informe (regla de oro).
import contenido from '../../docs_paejea/07_controles_paejea.md?raw'

function Controles() {
  return <Markdown text={contenido} />
}

export default Controles
