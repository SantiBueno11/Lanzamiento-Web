export type ServiceId = 'web' | 'video' | 'flyer'

interface Props {
  active: ServiceId
  onChange: (id: ServiceId) => void
  titulo: string
}

const items: { id: ServiceId; icon: string; label: string }[] = [
  { id: 'web', icon: 'fa-code', label: 'Páginas Web' },
  { id: 'video', icon: 'fa-video', label: 'Edición de Video' },
  { id: 'flyer', icon: 'fa-palette', label: 'Flyers y Logos' },
]

export default function ServicesSelector({ active, onChange, titulo }: Props) {
  return (
    <section id="servicios" className="pt-20 md:pt-24 border-t border-line">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-mono text-xs text-signal uppercase tracking-wider mb-3">Qué hago</div>
        <h2 className="font-display font-semibold text-[clamp(1.6rem,2.6vw,2.1rem)] mb-8">{titulo}</h2>

        <div className="flex gap-1 border-b border-line">
          {items.map((item) => {
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                onClick={() => onChange(item.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  isActive
                    ? 'border-signal text-text'
                    : 'border-transparent text-text-dim hover:text-text'
                }`}
              >
                <i className={`fas ${item.icon} text-xs`} />
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}