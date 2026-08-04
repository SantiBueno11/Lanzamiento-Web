import { useState } from 'react'
import Intro from './components/Intro'
import VideoBackground from './components/VideoBackground'
import Header from './components/Header'
import About from './components/About'
import ServicesSelector, { type ServiceId } from './components/ServicesSelector'
import ServiceContent from './components/ServiceContent'
import Footer from './components/Footer'
import SocialIcons from './components/SocialIcons'
import BackToTop from './components/BackToTop'
import { translations, type Lang } from './data/translations'

function App() {
  const [lang, setLang] = useState<Lang>('es')
  const [activeService, setActiveService] = useState<ServiceId>('web')
  const t = translations[lang]

  return (
    <>
      <Intro />
      <VideoBackground />

      <Header lang={lang} onChangeLang={setLang} titulo={t.titulo} subtitulo={t.subtitulo} />

      <About titulo={t.sobre} descHtml={t.desc} />

      <ServicesSelector active={activeService} onChange={setActiveService} titulo={t.servicios} />

      <ServiceContent
        active={activeService}
        paquetesTitulo={t.paquetes}
        videoTitulo={t.videoTitulo}
        videoDesc={t.videoDesc}
        flyerTitulo={t.flyerTitulo}
        flyerDesc={t.flyerDesc}
      />

      <Footer />
      <SocialIcons />
      <BackToTop />
    </>
  )
}

export default App
