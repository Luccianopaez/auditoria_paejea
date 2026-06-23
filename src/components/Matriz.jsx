import Markdown from './Markdown.jsx'
// El contenido sale tal cual del Markdown del informe (regla de oro).
import contenido from '../../docs_paejea/06_matriz_paejea.md?raw'

function Matriz() {
  return <Markdown text={contenido} />
}

export default Matriz
