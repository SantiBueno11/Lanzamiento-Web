import type { ServiceId } from './ServicesSelector'
import { webPlans, videoPlans, flyerPlans } from '../data/plans'
import PlanCard from './PlanCard'

interface Props {
  active: ServiceId
  paquetesTitulo: string
  videoTitulo: string
  videoDesc: string
  flyerTitulo: string
  flyerDesc: string
}

export default function ServiceContent({
  active,
  paquetesTitulo,
  videoTitulo,
  videoDesc,
  flyerTitulo,
  flyerDesc,
}: Props) {
  return (
    <div className="animate-[fadeIn_0.5s_ease]">
      {active === 'web' && (
        <section className="px-5 py-20 text-center">
          <h2 className="text-[2.5rem] font-bold mb-10 text-cyan [text-shadow:0_0_5px_rgba(0,255,255,0.5)]">
            {paquetesTitulo}
          </h2>
          <div className="flex flex-wrap justify-center items-stretch gap-6">
            {webPlans.map((p) => (
              <PlanCard key={p.title} plan={p} />
            ))}
          </div>
        </section>
      )}

      {active === 'video' && (
        <section className="px-5 py-20 text-center">
          <h2 className="text-[2.5rem] font-bold mb-10 text-cyan [text-shadow:0_0_5px_rgba(0,255,255,0.5)]">
            {videoTitulo}
          </h2>
          <p className="text-[1.1rem] text-[#f7f7f7] max-w-[800px] mx-auto -mt-5 mb-10 leading-relaxed">
            {videoDesc}
          </p>
          <div className="flex flex-wrap justify-center items-stretch gap-6">
            {videoPlans.map((p) => (
              <PlanCard key={p.title} plan={p} />
            ))}
          </div>
        </section>
      )}

      {active === 'flyer' && (
        <section className="px-5 py-20 text-center">
          <h2 className="text-[2.5rem] font-bold mb-10 text-cyan [text-shadow:0_0_5px_rgba(0,255,255,0.5)]">
            {flyerTitulo}
          </h2>
          <p className="text-[1.1rem] text-[#f7f7f7] max-w-[800px] mx-auto -mt-5 mb-10 leading-relaxed">
            {flyerDesc}
          </p>
          <div className="flex flex-wrap justify-center items-stretch gap-6">
            {flyerPlans.map((p) => (
              <PlanCard key={p.title} plan={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
