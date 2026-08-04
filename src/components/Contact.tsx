export default function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="font-mono text-xs text-signal uppercase tracking-wider mb-3">Contacto</div>
        <h2 className="font-display font-semibold text-[clamp(1.6rem,2.6vw,2.1rem)] mb-4">
          Contame en qué estás pensando.
        </h2>
        <p className="text-text-dim max-w-[56ch] text-[15px] mb-10">
          Elegí el canal que más te acomode — respondo en menos de 24 horas.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          
          <a
            href="https://wa.me/2645875143"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel border border-line rounded-xl p-6 hover:border-signal hover:-translate-y-1 transition-all"
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 bg-signal/10 text-signal">
              <i className="fab fa-whatsapp" />
            </div>
            <h3 className="text-[15px] font-semibold mb-1.5">WhatsApp</h3>
            <p className="text-[13px] text-text-dim">Respuesta rápida para una primera consulta.</p>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lanzamientoweb25@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel border border-line rounded-xl p-6 hover:border-amber hover:-translate-y-1 transition-all"
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 bg-amber/10 text-amber">
              <i className="fas fa-envelope" />
            </div>
            <h3 className="text-[15px] font-semibold mb-1.5">Email</h3>
            <p className="text-[13px] text-text-dim">Para contarme el proyecto con más detalle.</p>
          </a>

          <a
            href="https://www.instagram.com/Lanzamiento.Web"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel border border-line rounded-xl p-6 hover:border-text-dim hover:-translate-y-1 transition-all"
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 bg-text-dim/10 text-text-dim">
              <i className="fab fa-instagram" />
            </div>
            <h3 className="text-[15px] font-semibold mb-1.5">Instagram</h3>
            <p className="text-[13px] text-text-dim">Mirá trabajos anteriores y novedades.</p>
          </a>
          
        </div>
      </div>
    </section>
  )
}