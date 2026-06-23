import { useState, useEffect } from 'react'
import {
  Building2, Database, Code2, Terminal,
  Boxes, Grid3x3, ShieldCheck, LifeBuoy,
  Bot, ShieldAlert, PawPrint, Menu, ChevronLeft, ChevronRight,
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

// Clases completas por color para que Tailwind las detecte en build
const C = {
  teal:    { dot: 'bg-teal-400',    iconBg: 'bg-teal-100',    iconTxt: 'text-teal-700',    bar: 'bg-teal-500',    tag: 'bg-teal-100 text-teal-700'     },
  rose:    { dot: 'bg-rose-400',    iconBg: 'bg-rose-100',    iconTxt: 'text-rose-700',    bar: 'bg-rose-500',    tag: 'bg-rose-100 text-rose-700'     },
  amber:   { dot: 'bg-amber-400',   iconBg: 'bg-amber-100',   iconTxt: 'text-amber-700',   bar: 'bg-amber-500',   tag: 'bg-amber-100 text-amber-700'   },
  emerald: { dot: 'bg-emerald-400', iconBg: 'bg-emerald-100', iconTxt: 'text-emerald-700', bar: 'bg-emerald-500', tag: 'bg-emerald-100 text-emerald-700' },
  violet:  { dot: 'bg-violet-400',  iconBg: 'bg-violet-100',  iconTxt: 'text-violet-700',  bar: 'bg-violet-500',  tag: 'bg-violet-100 text-violet-700'  },
}

const SECCIONES = [
  { id: '01', titulo: 'Resumen',               grupo: 'La empresa',          categoria: 'La empresa',          icono: Building2,   Componente: Resumen,      color: 'teal'    },
  { id: '02', titulo: 'Inyección SQL',          grupo: 'Ataques encontrados', categoria: 'Ataque',              icono: Database,    Componente: InyeccionSQL, color: 'rose'    },
  { id: '03', titulo: 'XSS',                    grupo: null,                  categoria: 'Ataque',              icono: Code2,       Componente: XSS,          color: 'rose'    },
  { id: '04', titulo: 'Inyección de comandos',  grupo: null,                  categoria: 'Ataque',              icono: Terminal,    Componente: Comandos,     color: 'rose'    },
  { id: '05', titulo: 'Activos',                grupo: 'Análisis de riesgo',  categoria: 'Análisis de riesgo',  icono: Boxes,       Componente: Activos,      color: 'amber'   },
  { id: '06', titulo: 'Matriz de riesgo',       grupo: null,                  categoria: 'Análisis de riesgo',  icono: Grid3x3,     Componente: Matriz,       color: 'amber'   },
  { id: '07', titulo: 'Controles',              grupo: 'Defensa',             categoria: 'Defensa',             icono: ShieldCheck, Componente: Controles,    color: 'emerald' },
  { id: '08', titulo: 'Recuperación',           grupo: null,                  categoria: 'Defensa',             icono: LifeBuoy,    Componente: Recuperacion, color: 'emerald' },
  { id: '09', titulo: 'Bitácora de IA',         grupo: 'Proceso',             categoria: 'Proceso',             icono: Bot,         Componente: Prompts,      color: 'violet'  },
]

export default function App() {
  const [activa, setActiva] = useState('01')
  const [menuAbierto, setMenuAbierto] = useState(false)

  const idx     = SECCIONES.findIndex((s) => s.id === activa)
  const seccion = SECCIONES[idx]
  const c       = C[seccion.color]
  const Comp    = seccion.Componente
  const Icono   = seccion.icono

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setMenuAbierto(false)
  }, [activa])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-700 md:flex">

      {/* Overlay móvil */}
      {menuAbierto && (
        <div
          className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMenuAbierto(false)}
        />
      )}

      {/* ─── Sidebar ──────────────────────────────────────────────── */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 flex w-72 flex-col bg-teal-950 transition-transform duration-300
          md:sticky md:top-0 md:h-screen md:translate-x-0 md:overflow-y-auto
          ${menuAbierto ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Logo */}
        <div className="px-5 pt-6 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-lg shadow-teal-900/50">
              <PawPrint className="h-6 w-6 text-white" />
              <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-teal-950" />
            </div>
            <div>
              <p className="text-[15px] font-bold tracking-tight text-white">VetAmigos</p>
              <p className="text-xs text-teal-400">Auditoría de seguridad</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
            <p className="text-xs font-semibold text-teal-300">INACAP · TI3034</p>
            <p className="mt-0.5 text-[11px] text-teal-500">Unidad 3 — Informe web interactivo</p>
          </div>
        </div>

        <div className="mx-5 border-t border-white/8" />

        {/* Nav agrupada */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 pb-6 space-y-0.5">
          {SECCIONES.map((s) => {
            const SIcon   = s.icono
            const esActiva = s.id === activa
            const col      = C[s.color]

            return (
              <div key={s.id}>
                {s.grupo && (
                  <p className="px-3 pt-4 pb-1 text-[10px] font-semibold uppercase tracking-widest text-teal-600 first:pt-2">
                    {s.grupo}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setActiva(s.id)}
                  className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] transition-all duration-150 ${
                    esActiva
                      ? 'bg-white shadow-sm'
                      : 'text-teal-200 hover:bg-white/8 hover:text-white'
                  }`}
                >
                  {/* Dot de color */}
                  <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${col.dot} ${esActiva ? '' : 'opacity-40'}`} />

                  {/* Icono */}
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                    esActiva ? `${col.iconBg} ${col.iconTxt}` : 'text-teal-500'
                  }`}>
                    <SIcon className="h-3.5 w-3.5" />
                  </span>

                  {/* Título */}
                  <span className={`flex-1 leading-snug ${esActiva ? 'font-semibold text-slate-800' : ''}`}>
                    <span className={`mr-1 font-normal tabular-nums text-[10px] ${esActiva ? 'text-slate-400' : 'opacity-30'}`}>
                      {s.id}
                    </span>
                    {s.titulo}
                  </span>
                </button>
              </div>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-white/8 px-5 py-4 space-y-2">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-3.5 w-3.5 flex-shrink-0 text-teal-600" />
            <p className="text-[11px] text-teal-600">Empresa ficticia · Entorno controlado</p>
          </div>
          <div>
            <p className="text-[10px] text-teal-700">Desarrollado por</p>
            <a
              href="https://github.com/Luccianopaez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-medium text-teal-300 hover:text-white transition-colors"
            >
              github.com/Luccianopaez
            </a>
          </div>
        </div>
      </aside>

      {/* ─── Contenido ────────────────────────────────────────────── */}
      <main className="min-w-0 flex-1">

        {/* Barra sticky de sección */}
        <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
          <div className="mx-auto flex max-w-3xl items-center gap-3 px-6 py-3">

            {/* Botón menú móvil */}
            <button
              type="button"
              onClick={() => setMenuAbierto(true)}
              className="mr-1 flex h-8 w-8 items-center justify-center rounded-lg text-teal-700 hover:bg-teal-50 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Icono sección */}
            <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${c.iconBg}`}>
              <Icono className={`h-4 w-4 ${c.iconTxt}`} />
            </span>

            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              <span className={`flex-shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold ${c.tag}`}>
                {seccion.categoria}
              </span>
              <p className="truncate text-sm font-semibold text-slate-800">{seccion.titulo}</p>
            </div>

            <span className="flex-shrink-0 text-xs tabular-nums text-slate-400">
              {idx + 1} / {SECCIONES.length}
            </span>
          </div>
        </header>

        {/* Zona de contenido */}
        <div className="mx-auto max-w-3xl px-6 py-8">

          {/* Tarjeta de contenido */}
          <article className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200/80">
            {/* Barra de acento superior */}
            <div className={`h-1 w-full ${c.bar}`} />
            <div className="px-8 py-8">
              {Comp
                ? <Comp />
                : (
                  <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center text-slate-400">
                    <p className="text-lg font-medium">Sección {seccion.id} en construcción</p>
                  </div>
                )
              }
            </div>
          </article>

          {/* Navegación prev / next + dots */}
          <div className="mt-5 flex items-center justify-between gap-4">

            {/* Anterior */}
            {idx > 0 ? (
              <button
                type="button"
                onClick={() => setActiva(SECCIONES[idx - 1].id)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline max-w-[120px] truncate">{SECCIONES[idx - 1].titulo}</span>
                <span className="sm:hidden">Anterior</span>
              </button>
            ) : <span />}

            {/* Dots de progreso */}
            <div className="flex items-center gap-1.5">
              {SECCIONES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiva(s.id)}
                  title={s.titulo}
                  className={`rounded-full transition-all duration-200 ${
                    i === idx
                      ? `h-2 w-5 ${C[s.color].dot}`
                      : 'h-2 w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Siguiente */}
            {idx < SECCIONES.length - 1 ? (
              <button
                type="button"
                onClick={() => setActiva(SECCIONES[idx + 1].id)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-teal-300 hover:text-teal-700"
              >
                <span className="hidden sm:inline max-w-[120px] truncate">{SECCIONES[idx + 1].titulo}</span>
                <span className="sm:hidden">Siguiente</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : <span />}
          </div>
        </div>
      </main>
    </div>
  )
}
