import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-5 bottom-5 z-[998] w-[45px] h-[45px] bg-cyan text-black rounded-full flex justify-center items-center cursor-pointer text-[1.2rem] shadow-[0_0_15px_rgba(0,255,255,0.67)] transition-all hover:bg-white hover:scale-110 no-underline"
    >
      <i className="fas fa-chevron-up" />
    </a>
  )
}
