interface Props {
  titulo: string
  descHtml: string
}

export default function About({ titulo, descHtml }: Props) {
  return (
    <section id="sobre-mi" className="py-20 md:py-24 border-t border-line">
      <div className="max-w-[1080px] mx-auto px-6 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/Yo.png"
            alt="Foto de Santiago Bueno"
            className="w-[220px] h-[220px] object-cover rounded-xl border border-line"
          />
        </div>
        <div>
          <div className="font-mono text-xs text-signal uppercase tracking-wider mb-3">Quién está del otro lado</div>
          <h2 className="font-display font-semibold text-[clamp(1.6rem,2.6vw,2.1rem)] mb-4">{titulo}</h2>
          <p
            className="text-text-dim text-[15.5px] leading-relaxed max-w-[60ch]"
            dangerouslySetInnerHTML={{ __html: descHtml }}
          />
        </div>
      </div>
    </section>
  )
}