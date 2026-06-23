import Markdown from './Markdown.jsx'
import SeveridadBanner from './SeveridadBanner.jsx'
import contenido from '../../docs_paejea/03_xss_paejea.md?raw'
import xssImg from '../../docs_paejea/img_paejea/xss_paejea.png'

function XSS() {
  return (
    <>
      <SeveridadBanner
        cvss={6.1}
        descripcion="Permite robar la sesión de un cliente. Atender después de los críticos."
      />
      <Markdown text={contenido} images={{ 'xss_paejea.png': xssImg }} />
    </>
  )
}

export default XSS
