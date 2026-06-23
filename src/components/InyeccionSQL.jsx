import Markdown from './Markdown.jsx'
import SeveridadBanner from './SeveridadBanner.jsx'
import contenido from '../../docs_paejea/02_sqli_paejea.md?raw'
import sqliImg from '../../docs_paejea/img_paejea/sqli_paejea.png'

function InyeccionSQL() {
  return (
    <>
      <SeveridadBanner
        cvss={9.8}
        descripcion="Expone toda la base de datos de VetAmigos de un solo golpe. Corrección inmediata."
      />
      <Markdown text={contenido} images={{ 'sqli_paejea.png': sqliImg }} />
    </>
  )
}

export default InyeccionSQL
