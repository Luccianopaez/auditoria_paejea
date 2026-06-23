import Markdown from './Markdown.jsx'
// El contenido sale tal cual del Markdown del informe (regla de oro).
import contenido from '../../docs_paejea/05_activos_paejea.md?raw'

function Activos() {
  return <Markdown text={contenido} />
}

export default Activos
