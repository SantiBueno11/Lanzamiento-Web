import type { Plan } from '../data/plans'

const tierBars: Record<Plan['color'], number> = {
  basico: 1,
  intermedio: 2,
  avanzado: 3,
}

const tierLabel: Record<Plan['color'], string> = {
  basico: 'Nivel 1',
  intermedio: 'Nivel 2',
  avanzado: 'Nivel 3',
}

export default function PlanCard({ plan, featured = false }: { plan: Plan; featured?: boolean }) {
  const bars = tierBars[plan.color]

  return (
    <div
      className={`flex flex-col w-[300px] rounded-xl border p-6 transition-all hover:-translate-y-1 ${
        featured ? 'border-signal bg-panel-2' : 'border-line bg-panel'
      }`}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-end gap-0.5 h-4">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={`w-1.5 rounded-sm ${i <= bars ? 'bg-signal' : 'bg-line'}`}
              style={{ height: `${i * 5 + 4}px` }}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] text-text-dim uppercase tracking-wider">{tierLabel[plan.color]}</span>
      </div>

      <h3 className="text-lg font-semibold mb-4">{plan.title}</h3>

      <ul className="flex flex-col gap-2.5 mb-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[13.5px] text-text-dim leading-snug">
            <span className="text-signal mt-0.5 shrink-0">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5 border-t border-line">
        <div className="font-display text-2xl font-semibold mb-2">{plan.price}</div>
        <p className="text-[13px] text-text-dim leading-relaxed mb-5">{plan.desc}</p>
        {plan.formUrl && (
          <button
            onClick={() => window.open(plan.formUrl, '_blank')}
            className={`w-full py-2.5 rounded-md text-sm font-semibold transition-all hover:-translate-y-0.5 ${
              featured ? 'bg-signal text-bg' : 'bg-panel-2 border border-line text-text hover:border-signal'
            }`}
          >
            Contactar
          </button>
        )}
      </div>
    </div>
  )
}