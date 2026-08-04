import type { Plan } from '../data/plans'

const colorStyles: Record<Plan['color'], { bg: string; buttonBg: string }> = {
  basico: {
    bg: 'bg-[linear-gradient(135deg,#FFD700,#C5B000)] shadow-[0_0_15px_rgba(255,215,0,0.5)]',
    buttonBg: 'bg-[#ffc107]',
  },
  intermedio: {
    bg: 'bg-[linear-gradient(135deg,#1E90FF,#0056b3)] shadow-[0_0_15px_rgba(30,144,255,0.5)]',
    buttonBg: 'bg-[#007bff]',
  },
  avanzado: {
    bg: 'bg-[linear-gradient(135deg,#FF0000,#8B0000)] shadow-[0_0_15px_rgba(255,0,0,0.5)]',
    buttonBg: 'bg-[#dc3545]',
  },
}

export default function PlanCard({ plan }: { plan: Plan }) {
  const styles = colorStyles[plan.color]

  return (
    <div
      className={`flex flex-col items-center text-center w-[320px] min-h-[500px] px-5 pt-[30px] pb-5 rounded-[15px] text-black shadow-[0_8px_15px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-2 hover:scale-[1.02] ${styles.bg}`}
    >
      <h3 className="text-[1.8rem] font-bold mb-5">{plan.title}</h3>
      <ul className="text-left inline-block mb-[30px]">
        {plan.features.map((f) => (
          <li key={f} className="relative pl-5 mb-3 [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)] before:content-['✓'] before:absolute before:left-0 before:text-cyan before:font-black">
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col items-center gap-4">
        <div className="text-[2rem] font-bold [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">{plan.price}</div>
        <p className="w-[90%] text-[0.95rem] font-bold leading-relaxed text-black text-center m-0">
          {plan.desc}
        </p>
        {plan.formUrl && (
          <button
            onClick={() => window.open(plan.formUrl, '_blank')}
            className={`text-black border-none px-6 py-3 rounded-lg cursor-pointer text-[1.1rem] font-semibold shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-0.5 hover:brightness-110 ${styles.buttonBg}`}
          >
            Contactar
          </button>
        )}
      </div>
    </div>
  )
}
