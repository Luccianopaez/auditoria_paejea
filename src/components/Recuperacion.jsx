import Markdown from './Markdown.jsx'
// El contenido sale tal cual del Markdown del informe (regla de oro).
import contenido from '../../docs_paejea/08_recuperacion_paejea.md?raw'

function Recuperacion() {
  return <Markdown text={contenido} />
}

export default Recuperacion
