import { useState } from 'react'
import {
  Building2,
  Database,
  Code2,
  Terminal,
  Boxes,
  Grid3x3,
  ShieldCheck,
  LifeBuoy,
  Bot,
  ShieldAlert,
} from 'lucide-react'
import Resumen from './components/Resumen.jsx'
import InyeccionSQL from './components/InyeccionSQL.jsx'
import XSS from './components/XSS.jsx'
import Comandos from './components/Comandos.jsx'
import Activos from './components/Activos.jsx'
import Matriz from './components/Matriz.jsx'
import Controles from './components/Controles.jsx'
import Recuperacion from './components/Recuperacion.jsx'

// Cada sección apunta a su componente. Las que aún no se construyen quedan
// con componente `null` y muestran un aviso temporal.
const SECCIONES = [
  { id: '01', titulo: 'Resumen', icono: Building2, Componente: Resumen },
  { id: '02', titulo: 'Inyección SQL', icono: Database, Componente: InyeccionSQL },
  { id: '03', titulo: 'XSS', icono: Code2, Componente: XSS },
  { id: '04', titulo: 'Inyección de comandos', icono: Terminal, Componente: Comandos },
  { id: '05', titulo: 'Activos', icono: Boxes, Componente: Activos },
  { id: '06', titulo: 'Matriz de riesgo', icono: Grid3x3, Componente: Matriz },
  { id: '07', titulo: 'Controles', icono: ShieldCheck, Componente: Controles },
  { id: '08', titulo: 'Recuperación', icono: LifeBuoy, Componente: Recuperacion },
  { id: '09', titulo: 'Bitácora de IA', icono: Bot, Componente: null },
]

function App() {
  const [activa, setActiva] = useState('01')
  const seccion = SECCIONES.find((s) => s.id === activa)
  const Componente = seccion.Componente

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 md:flex">
      {/* Menú lateral */}
      <aside className="bg-violet-900 text-violet-100 md:sticky md:top-0 md:h-screen md:w-72 md:flex-shrink-0 md:overflow-y-auto">
        <div className="flex items-center gap-2 px-6 py-6">
          <ShieldAlert className="h-7 w-7 text-violet-300" />
          <div>
            <p className="text-lg font-bold leading-tight text-white">VetAmigos</p>
            <p className="text-xs text-violet-300">Auditoría de seguridad</p>
          </div>
        </div>
        <nav className="px-3 pb-6">
          {SECCIONES.map((s) => {
            const Icono = s.icono
            const esActiva = s.id === activa
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiva(s.id)}
                className={`mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                  esActiva
                    ? 'bg-white font-semibold text-violet-900'
                    : 'text-violet-100 hover:bg-violet-800'
                }`}
              >
                <Icono className="h-4 w-4 flex-shrink-0" />
                <span>
                  <span className="mr-1 opacity-60">{s.id}</span>
                  {s.titulo}
                </span>
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Contenido */}
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-10">
          {Componente ? (
            <Componente />
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-400">
              <p className="text-lg font-medium">Sección {seccion.id} en construcción</p>
              <p className="mt-1 text-sm">Este componente se conectará en el siguiente paso.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
