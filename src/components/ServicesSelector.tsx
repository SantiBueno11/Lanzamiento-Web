export type ServiceId = 'web' | 'video' | 'flyer'

interface Props {
  active: ServiceId
  onChange: (id: ServiceId) => void
  titulo: string
}

const config: Record<
  ServiceId,
  { base: string; hover: string; activeStyle: string; icon: string; label: string }
> = {
  web: {
    base: 'border-cyan text-cyan',
    hover: 'hover:bg-cyan hover:text-black hover:shadow-[0_0_15px_rgba(0,255,255,0.67)]',
    activeStyle: 'bg-cyan text-black shadow-[0_0_15px_rgba(0,255,255,0.67)]',
    icon: 'fa-code',
    label: 'Páginas Web',
  },
  video: {
    base: 'border-[#BF40BF] text-[#BF40BF]',
    hover: 'hover:bg-[#BF40BF] hover:text-white hover:shadow-[0_0_15px_rgba(191,64,191,0.6)]',
    activeStyle: 'bg-[#BF40BF] text-white shadow-[0_0_15px_rgba(191,64,191,0.6)]',
    icon: 'fa-video',
    label: 'Edición de Video',
  },
  flyer: {
    base: 'border-[#FFA500] text-[#FFA500]',
    hover: 'hover:bg-[#FFA500] hover:text-black hover:shadow-[0_0_15px_rgba(255,165,0,0.6)]',
    activeStyle: 'bg-[#FFA500] text-black shadow-[0_0_15px_rgba(255,165,0,0.6)]',
    icon: 'fa-palette',
    label: 'Flyers y Logos',
  },
}

export default function ServicesSelector({ active, onChange, titulo }: Props) {
  return (
    <section className="bg-black/50 rounded-[10px] px-5 py-[60px] max-w-[1000px] mx-auto my-10 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
      <h2 className="text-[2.5rem] font-bold mb-10 text-cyan [text-shadow:0_0_5px_rgba(0,255,255,0.5)]">
        {titulo}
      </h2>
      <div className="flex justify-center gap-5 flex-wrap">
        {(Object.keys(config) as ServiceId[]).map((id) => {
          const c = config[id]
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={`min-w-[220px] max-md:w-full px-7.5 py-4 text-[1.1rem] max-md:text-base font-semibold border-2 bg-transparent rounded-[10px] cursor-pointer transition-all font-[Poppins] ${c.base} ${c.hover} ${
                isActive ? c.activeStyle : ''
              }`}
            >
              <i className={`fas ${c.icon} mr-2.5`} /> {c.label}
            </button>
          )
        })}
      </div>
    </section>
  )
}
