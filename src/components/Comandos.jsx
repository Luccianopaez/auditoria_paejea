import Markdown from './Markdown.jsx'
import SeveridadBanner from './SeveridadBanner.jsx'
import contenido from '../../docs_paejea/04_comandos_paejea.md?raw'
import comandosImg from '../../docs_paejea/img_paejea/comandos_paejea.png'

function Comandos() {
  return (
    <>
      <SeveridadBanner
        cvss={10.0}
        descripcion="Máxima gravedad posible. Da control total del servidor de VetAmigos."
      />
      <Markdown text={contenido} images={{ 'comandos_paejea.png': comandosImg }} />
    </>
  )
}

export default Comandos
