import { useState, useEffect } from 'react'
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
  PawPrint,
  Menu,
} from 'lucide-react'
import Resumen from './components/Resumen.jsx'
import InyeccionSQL from './components/InyeccionSQL.jsx'
import XSS from './components/XSS.jsx'
import Comandos from './components/Comandos.jsx'
import Activos from './components/Activos.jsx'
import Matriz from './components/Matriz.jsx'
import Controles from './components/Controles.jsx'
import Recuperacion from './components/Recuperacion.jsx'
import Prompts from './components/Prompts.jsx'

const SECCIONES = [
  { id: '01', titulo: 'Resumen', icono: Building2, Componente: Resumen },
  { id: '02', titulo: 'Inyección SQL', icono: Database, Componente: InyeccionSQL },
  { id: '03', titulo: 'XSS', icono: Code2, Componente: XSS },
  { id: '04', titulo: 'Inyección de comandos', icono: Terminal, Componente: Comandos },
  { id: '05', titulo: 'Activos', icono: Boxes, Componente: Activos },
  { id: '06', titulo: 'Matriz de riesgo', icono: Grid3x3, Componente: Matriz },
  { id: '07', titulo: 'Controles', icono: ShieldCheck, Componente: Controles },
  { id: '08', titulo: 'Recuperación', icono: LifeBuoy, Componente: Recuperacion },
  { id: '09', titulo: 'Bitácora de IA', icono: Bot, Componente: Prompts },
]

function App() {
  const [activa, setActiva] = useState('01')
  const [menuAbierto, setMenuAbierto] = useState(false)
  const seccion = SECCIONES.find((s) => s.id === activa)
  const Componente = seccion.Componente
  const IconoActivo = seccion.icono

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setMenuAbierto(false)
  }, [activa])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-700 md:flex">
      {/* Overlay móvil */}
      {menuAbierto && (
        <div
          className="fixed inset-0 z-10 bg-black/40 md:hidden"
          onClick={() => setMenuAbierto(false)}
        />
      )}

      {/* ── Sidebar ─────────────────────────────────────────────────── */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 flex w-72 flex-col bg-teal-900 transition-transform duration-300 md:sticky md:top-0 md:h-screen md:flex-shrink-0 md:translate-x-0 md:overflow-y-auto ${
          menuAbierto ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Cabecera del sidebar */}
        <div className="px-5 pb-5 pt-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 shadow-inner">
              <PawPrint className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-base font-bold leading-tight text-white">VetAmigos</p>
              <p className="text-xs text-teal-400">Auditoría de seguridad</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-teal-700/60 bg-teal-800/50 px-4 py-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-teal-400" />
              <p className="text-xs font-semibold text-teal-300">INACAP · TI3034</p>
            </div>
            <p className="mt-0.5 text-xs text-teal-500">Unidad 3 — Informe web</p>
          </div>
        </div>

        {/* Separador */}
        <div className="mx-5 border-t border-teal-700/50" />

        {/* Navegación */}
        <nav className="flex-1 px-3 py-4">
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-teal-600">
            Secciones
          </p>
          {SECCIONES.map((s) => {
            const Icono = s.icono
            const esActiva = s.id === activa
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiva(s.id)}
                className={`mb-0.5 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-150 ${
                  esActiva
                    ? 'bg-white font-semibold text-teal-900 shadow-sm'
                    : 'text-teal-200 hover:bg-teal-800 hover:text-white'
                }`}
              >
                <Icono
                  className={`h-4 w-4 flex-shrink-0 ${
                    esActiva ? 'text-teal-600' : 'opacity-70'
                  }`}
                />
                <span>
                  <span
                    className={`mr-1.5 text-xs tabular-nums ${
                      esActiva ? 'text-teal-400' : 'opacity-40'
                    }`}
                  >
                    {s.id}
                  </span>
                  {s.titulo}
                </span>
              </button>
            )
          })}
        </nav>

        {/* Footer del sidebar */}
        <div className="border-t border-teal-700/50 px-5 py-4">
          <p className="text-xs text-teal-600">Empresa ficticia · Entorno controlado</p>
        </div>
      </aside>

      {/* ── Contenido principal ──────────────────────────────────────── */}
      <main className="min-w-0 flex-1">
        {/* Barra de sección (sticky) */}
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-3xl items-center gap-3 px-6 py-3">
            {/* Botón menú móvil */}
            <button
              type="button"
              onClick={() => setMenuAbierto(true)}
              className="mr-1 flex h-8 w-8 items-center justify-center rounded-lg text-teal-700 hover:bg-teal-50 md:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-100">
              <IconoActivo className="h-4 w-4 text-teal-700" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-wide text-teal-500">
                Sección {seccion.id}
              </p>
              <p className="truncate text-sm font-semibold leading-tight text-teal-900">
                {seccion.titulo}
              </p>
            </div>
          </div>
        </header>

        {/* Área del contenido */}
        <div className="mx-auto max-w-3xl px-6 py-8">
          <div className="overflow-hidden rounded-2xl bg-white px-8 py-8 shadow-sm ring-1 ring-slate-200">
            {Componente ? (
              <Componente />
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center text-slate-400">
                <p className="text-lg font-medium">Sección {seccion.id} en construcción</p>
                <p className="mt-1 text-sm">
                  Este componente se conectará en el siguiente paso.
                </p>
              </div>
            )}
          </div>

          {/* Navegación inferior */}
          <div className="mt-6 flex items-center justify-between text-sm">
            {SECCIONES.findIndex((s) => s.id === activa) > 0 ? (
              <button
                type="button"
                onClick={() => {
                  const idx = SECCIONES.findIndex((s) => s.id === activa)
                  setActiva(SECCIONES[idx - 1].id)
                }}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-teal-700 hover:bg-teal-100 transition-colors"
              >
                ← Anterior
              </button>
            ) : (
              <span />
            )}
            {SECCIONES.findIndex((s) => s.id === activa) < SECCIONES.length - 1 ? (
              <button
                type="button"
                onClick={() => {
                  const idx = SECCIONES.findIndex((s) => s.id === activa)
                  setActiva(SECCIONES[idx + 1].id)
                }}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-teal-700 hover:bg-teal-100 transition-colors"
              >
                Siguiente →
              </button>
            ) : (
              <span />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
