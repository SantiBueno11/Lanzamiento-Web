import type { Lang } from '../data/translations'

interface Props {
  lang: Lang
  onChangeLang: (lang: Lang) => void
  titulo: string
  subtitulo: string
}

export default function Header({ lang, onChangeLang, titulo, subtitulo }: Props) {
  return (
    <header id="inicio" className="relative text-white text-center px-5 pt-[100px] pb-10">
      <div className="header-content">
        <img
          src="/images/logo_LW.png"
          alt="Logo Lanzamiento Web"
          className="block mx-auto -mb-[70px] w-[400px] max-w-[45vw] h-auto drop-shadow-[0_0_15px_rgba(0,255,255,0.67)] transition-all"
        />
        <h1 className="select-none cursor-default text-[3.5rem] font-bold mb-2.5 [text-shadow:0_0_20px_rgba(0,255,255,0.67)]">
          {titulo}
        </h1>
        <p className="select-none cursor-default text-[1.4rem] mt-0">{subtitulo}</p>
      </div>

      <div className="absolute top-[30px] right-[30px] z-[1000]">
        <select
          value={lang}
          onChange={(e) => onChangeLang(e.target.value as Lang)}
          className="bg-black text-cyan border-2 border-cyan rounded-[10px] px-4.5 py-2.5 text-[1.2rem] font-bold font-[Poppins] cursor-pointer transition-all hover:bg-cyan hover:text-black"
        >
          <option value="es">🇪🇸 Español</option>
          <option value="en">🇺🇸 English</option>
        </select>
      </div>
    </header>
  )
}
