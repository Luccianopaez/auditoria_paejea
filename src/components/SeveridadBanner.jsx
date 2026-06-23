import { ShieldAlert, AlertTriangle } from 'lucide-react'

const CONFIG = {
  critica: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    iconBg: 'bg-red-100',
    Icon: ShieldAlert,
    iconColor: 'text-red-600',
    labelColor: 'text-red-400',
    scoreColor: 'text-red-700',
    textColor: 'text-red-600',
    barColor: 'bg-red-500',
    etiqueta: 'CRÍTICA',
    mensaje: 'Esta falla debe corregirse de inmediato.',
  },
  media: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    Icon: AlertTriangle,
    iconColor: 'text-amber-600',
    labelColor: 'text-amber-400',
    scoreColor: 'text-amber-700',
    textColor: 'text-amber-700',
    barColor: 'bg-amber-400',
    etiqueta: 'MEDIA',
    mensaje: 'Debe atenderse después de cerrar las fallas críticas.',
  },
}

export default function SeveridadBanner({ cvss, descripcion }) {
  const nivel = cvss >= 9.0 ? 'critica' : 'media'
  const c     = CONFIG[nivel]
  const pct   = Math.round((cvss / 10) * 100)

  return (
    <div className={`mb-8 overflow-hidden rounded-2xl border-2 ${c.border} ${c.bg}`}>
      <div className="flex items-center gap-5 px-6 py-5">

        {/* Icono */}
        <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl ${c.iconBg}`}>
          <c.Icon className={`h-8 w-8 ${c.iconColor}`} />
        </div>

        {/* Texto */}
        <div className="flex-1 min-w-0">
          <p className={`text-[11px] font-bold uppercase tracking-widest ${c.labelColor}`}>
            Severidad {c.etiqueta}
          </p>
          <div className="mt-0.5 flex items-baseline gap-1.5">
            <span className={`text-5xl font-black tabular-nums leading-none ${c.scoreColor}`}>
              {cvss}
            </span>
            <span className={`text-xl font-semibold ${c.textColor} opacity-60`}>/10</span>
          </div>
          <p className={`mt-1.5 text-sm font-medium ${c.textColor}`}>
            {descripcion ?? c.mensaje}
          </p>
        </div>

        {/* Barra vertical de gravedad */}
        <div className="hidden flex-shrink-0 flex-col items-center gap-1.5 sm:flex">
          <p className={`text-[10px] font-semibold uppercase tracking-wide ${c.labelColor}`}>
            Gravedad
          </p>
          <div className="relative h-20 w-5 overflow-hidden rounded-full bg-black/10">
            <div
              className={`absolute bottom-0 w-full rounded-full ${c.barColor}`}
              style={{ height: `${pct}%` }}
            />
          </div>
          <p className={`text-[11px] font-bold ${c.scoreColor}`}>{pct}%</p>
        </div>

      </div>
    </div>
  )
}
