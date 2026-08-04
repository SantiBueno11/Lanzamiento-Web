interface Props {
  titulo: string
  descHtml: string
}

export default function About({ titulo, descHtml }: Props) {
  return (
    <section className="max-w-[900px] mx-auto my-[50px] px-5 py-20 bg-black/50 text-white rounded-[10px] shadow-[0_0_20px_rgba(0,255,255,0.2)]">
      <div className="flex items-center justify-center gap-10 flex-wrap text-left max-w-[1000px] mx-auto max-md:flex-col-reverse max-md:text-center">
        <div className="flex-1 basis-[470px] text-left max-md:text-center">
          <h2 className="text-cyan text-[2.5rem] mb-6 [text-shadow:0_0_15px_rgba(0,255,255,0.6)] text-center md:text-left">
            {titulo}
          </h2>
          <p
            className="text-[1.15rem] leading-[1.65] font-bold text-[#e6e6e6] max-md:text-base"
            dangerouslySetInnerHTML={{ __html: descHtml }}
          />
        </div>
        <div className="flex-1 basis-[300px] flex justify-center">
          <img
            src="/images/Yo.png"
            alt="Foto de Santiago Bueno"
            className="w-[280px] max-md:w-[220px] h-auto rounded-[18px] shadow-[0_0_25px_rgba(0,255,255,0.45)] transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(0,255,255,0.75)]"
          />
        </div>
      </div>
    </section>
  )
}
