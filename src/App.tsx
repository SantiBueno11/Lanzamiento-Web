import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ServicesSelector, { type ServiceId } from './components/ServicesSelector'
import ServiceContent from './components/ServiceContent'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { translations, type Lang } from './data/translations'

function App() {
  const [lang, setLang] = useState<Lang>('es')
  const [activeService, setActiveService] = useState<ServiceId>('web')
  const t = translations[lang]

  return (
    <>
      <Header lang={lang} onChangeLang={setLang} />
      <Hero titulo={t.titulo} subtitulo={t.subtitulo} />
      <About titulo={t.sobre} descHtml={t.desc} />
      <ServicesSelector active={activeService} onChange={setActiveService} titulo={t.servicios} />
      <ServiceContent
        active={activeService}
        videoTitulo={t.videoTitulo}
        videoDesc={t.videoDesc}
        flyerTitulo={t.flyerTitulo}
        flyerDesc={t.flyerDesc}
      />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}

export default App