import type { Lang } from '../data/translations'

interface Props {
  lang: Lang
  onChangeLang: (lang: Lang) => void
}

export default function Header({ lang, onChangeLang }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line">
      <nav className="max-w-[1080px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img src="/images/logo_LW.png" alt="Lanzamiento Web" className="h-7 w-auto" />
          <span className="font-mono text-[13px] text-text-dim tracking-tight">
            lanzamiento<span className="text-signal">_</span>web
          </span>
        </div>

        <div className="hidden md:flex items-center gap-7 text-sm text-text-dim">
          <a href="#servicios" className="hover:text-text transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-text transition-colors">Proceso</a>
          <a href="#sobre-mi" className="hover:text-text transition-colors">Sobre mí</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex border border-line rounded-full overflow-hidden font-mono text-[11px]">
            <button
              onClick={() => onChangeLang('es')}
              className={`px-3 py-1.5 transition-colors ${lang === 'es' ? 'bg-signal text-bg font-semibold' : 'text-text-dim hover:text-text'}`}
            >
              ES
            </button>
            <button
              onClick={() => onChangeLang('en')}
              className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-signal text-bg font-semibold' : 'text-text-dim hover:text-text'}`}
            >
              EN
            </button>
          </div>
          
          <a
            href="#contacto"
            className="font-mono text-[13px] bg-amber text-bg font-semibold px-4 py-2 rounded-md hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,166,35,0.25)] transition-all"
          >
            Contactar
          </a>
        </div>
      </nav>
    </header>
  )
}