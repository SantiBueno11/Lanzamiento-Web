const steps = [
  { t: 'T-3', title: 'Descubrimiento', desc: 'Hablamos de qué necesitás resolver y definimos alcance y prioridades juntos.' },
  { t: 'T-2', title: 'Desarrollo', desc: 'Construyo en etapas cortas y te muestro avances reales mientras se construye.' },
  { t: 'T-1', title: 'Entrega', desc: 'Publico el proyecto en un entorno real y verificamos juntos que todo funcione.' },
  { t: 'T+', title: 'Soporte', desc: 'Sigo disponible después de la entrega para ajustes o lo que necesites.' },
]

export default function Process() {
  return (
    <section id="proceso" className="py-20 md:py-24 bg-panel border-y border-line">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-mono text-xs text-signal uppercase tracking-wider mb-3">Cómo trabajamos</div>
        <h2 className="font-display font-semibold text-[clamp(1.6rem,2.6vw,2.1rem)] mb-12">
          Una cuenta regresiva, no una promesa vaga.
        </h2>

        <div className="grid md:grid-cols-4 gap-px bg-line rounded-xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.t} className="bg-panel p-6 flex flex-col">
              <div className="font-mono text-signal text-sm mb-4">{s.t}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-text-dim text-[13.5px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}