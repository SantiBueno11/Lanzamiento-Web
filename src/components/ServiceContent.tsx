import type { ServiceId } from './ServicesSelector'
import { webPlans, videoPlans, flyerPlans } from '../data/plans'
import PlanCard from './PlanCard'

interface Props {
  active: ServiceId
  videoTitulo: string
  videoDesc: string
  flyerTitulo: string
  flyerDesc: string
}

export default function ServiceContent({ active, videoTitulo, videoDesc, flyerTitulo, flyerDesc }: Props) {
  return (
    <div className="pb-20 md:pb-24 pt-10">
      <div className="max-w-[1080px] mx-auto px-6">
        {active === 'video' && (
          <div className="mb-8">
            <h3 className="font-display text-lg font-semibold mb-2">{videoTitulo}</h3>
            <p className="text-text-dim text-[15px] max-w-[60ch]">{videoDesc}</p>
          </div>
        )}
        {active === 'flyer' && (
          <div className="mb-8">
            <h3 className="font-display text-lg font-semibold mb-2">{flyerTitulo}</h3>
            <p className="text-text-dim text-[15px] max-w-[60ch]">{flyerDesc}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-5">
          {active === 'web' && webPlans.map((p, i) => <PlanCard key={p.title} plan={p} featured={i === 1} />)}
          {active === 'video' && videoPlans.map((p, i) => <PlanCard key={p.title} plan={p} featured={i === 1} />)}
          {active === 'flyer' && flyerPlans.map((p) => <PlanCard key={p.title} plan={p} />)}
        </div>
      </div>
    </div>
  )
}