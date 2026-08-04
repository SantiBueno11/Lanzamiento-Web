interface Props {
  titulo: string
  subtitulo: string
}

const systems = [
  { label: 'Páginas Web', status: 'Operativo' },
  { label: 'Edición de Video', status: 'Operativo' },
  { label: 'Flyers y Logos', status: 'Operativo' },
]

export default function Hero({ titulo, subtitulo }: Props) {
  return (
    <section className="pt-36 md:pt-44 pb-20 md:pb-24">
      <div className="max-w-[1080px] mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <div className="flex items-center gap-2.5 font-mono text-[12px] text-signal tracking-wide mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-[pulse-dot_2s_ease-in-out_infinite]" />
            TODOS LOS SISTEMAS OPERATIVOS
          </div>
          <h1 className="font-display font-semibold text-[clamp(2.1rem,4.2vw,3.2rem)] leading-[1.12] mb-5">
            {titulo}
          </h1>
          <p className="text-text-dim text-[17px] max-w-[46ch] mb-8 leading-relaxed">
            {subtitulo}
          </p>
          <div className="flex flex-wrap gap-3.5">
            
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-amber text-bg font-semibold text-[14.5px] px-6 py-3.5 rounded-md hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(245,166,35,0.28)] transition-all"
            >
              Iniciar mi proyecto →
            </a>
            
            <a
              href="#servicios"
              className="border border-line font-medium text-[14.5px] px-6 py-3.5 rounded-md hover:border-text-dim hover:bg-panel transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="bg-panel border border-line rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-line">
            <span className="font-mono text-[11px] text-text-dim uppercase tracking-wider">Panel de estado</span>
            <span className="font-mono text-[11px] text-signal">● en línea</span>
          </div>
          <div className="divide-y divide-line">
            {systems.map((s) => (
              <div key={s.label} className="flex items-center justify-between px-5 py-4">
                <span className="text-sm text-text">{s.label}</span>
                <span className="font-mono text-[11px] text-signal flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                  {s.status}
                </span>
              </div>
            ))}
          </div>
          <div className="px-5 py-4 bg-panel-2 border-t border-line">
            <p className="font-mono text-[11px] text-text-dim">
              Próxima disponibilidad: <span className="text-text">esta semana</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}