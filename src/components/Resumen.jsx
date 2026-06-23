import Markdown from './Markdown.jsx'
// El contenido sale tal cual del Markdown del informe (regla de oro).
import contenido from '../../docs_paejea/01_resumen_paejea.md?raw'

function Resumen() {
  return <Markdown text={contenido} />
}

export default Resumen
