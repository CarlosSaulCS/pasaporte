import { useState } from 'react'
import './App.css'
import DigitalFlowers from './components/DigitalFlowers'
import TravelGallery from './components/TravelGallery'
import SpanishLessons from './components/SpanishLessons'
import FormulaOneGuide from './components/FormulaOneGuide'
import Navigation from './components/Navigation'
import LanguageToggle from './components/LanguageToggle'
import { useLanguage } from './contexts/LanguageContext'

type Section = 'flowers' | 'travel' | 'spanish' | 'f1'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('flowers')
  const { t } = useLanguage()

  const renderSection = () => {
    switch (activeSection) {
      case 'flowers':
        return <DigitalFlowers />
      case 'travel':
        return <TravelGallery />
      case 'spanish':
        return <SpanishLessons />
      case 'f1':
        return <FormulaOneGuide />
      default:
        return <DigitalFlowers />
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="language-controls">
            <LanguageToggle />
          </div>
          <div className="romantic-backdrop">
            <h1 className="main-title">{t('header.title')} 💕</h1>
            <p className="subtitle">{t('header.subtitle')}</p>
          </div>
        </div>
      </header>
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="app-content">
        {renderSection()}
      </main>
      
      <footer className="app-footer">
        <p>Made with love ❤️ for a very special person</p>
      </footer>
    </div>
  )
}

export default App
