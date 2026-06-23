import Markdown from './Markdown.jsx'
// El contenido sale tal cual del Markdown del informe (regla de oro).
import contenido from '../../docs_paejea/03_xss_paejea.md?raw'
import xssImg from '../../docs_paejea/img_paejea/xss_paejea.png'

function XSS() {
  return <Markdown text={contenido} images={{ 'xss_paejea.png': xssImg }} />
}

export default XSS
