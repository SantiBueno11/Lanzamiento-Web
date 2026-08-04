import { useEffect, useState } from 'react'

export default function Intro() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2000)
    const hideTimer = setTimeout(() => setVisible(false), 2800)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[3000] flex items-center justify-center bg-black transition-opacity duration-800 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src="/images/logo_LW.png"
        alt="Logo LW"
        className="w-[250px] drop-shadow-[0_0_25px_rgba(0,255,255,0.7)] animate-[brillo_2s_ease-in-out_infinite_alternate]"
      />
    </div>
  )
}
