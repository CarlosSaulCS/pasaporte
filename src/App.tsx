import { useState } from 'react'
import './App.css'
import DigitalFlowers from './components/DigitalFlowers'
import TravelGallery from './components/TravelGallery'
import SpanishLessons from './components/SpanishLessons'
import FormulaOneGuide from './components/FormulaOneGuide'
import Navigation from './components/Navigation'

type Section = 'flowers' | 'travel' | 'spanish' | 'f1'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('flowers')

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
        <div className="romantic-backdrop">
          <h1 className="main-title">Para Evita Romanovna 💕</h1>
          <p className="subtitle">Una sorpresa digital desde México</p>
        </div>
      </header>
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="app-content">
        {renderSection()}
      </main>
      
      <footer className="app-footer">
        <p>Hecho con cariño ❤️ para una persona muy especial</p>
      </footer>
    </div>
  )
}

export default App
