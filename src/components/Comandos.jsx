import Markdown from './Markdown.jsx'
// El contenido sale tal cual del Markdown del informe (regla de oro).
import contenido from '../../docs_paejea/04_comandos_paejea.md?raw'
import comandosImg from '../../docs_paejea/img_paejea/comandos_paejea.png'

function Comandos() {
  return <Markdown text={contenido} images={{ 'comandos_paejea.png': comandosImg }} />
}

export default Comandos
