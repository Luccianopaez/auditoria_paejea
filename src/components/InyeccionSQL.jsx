import Markdown from './Markdown.jsx'
// El contenido sale tal cual del Markdown del informe (regla de oro).
import contenido from '../../docs_paejea/02_sqli_paejea.md?raw'
import sqliImg from '../../docs_paejea/img_paejea/sqli_paejea.png'

function InyeccionSQL() {
  return <Markdown text={contenido} images={{ 'sqli_paejea.png': sqliImg }} />
}

export default InyeccionSQL
