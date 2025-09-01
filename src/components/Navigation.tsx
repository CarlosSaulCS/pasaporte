import { useLanguage } from '../contexts/LanguageContext'

interface NavigationProps {
  activeSection: 'flowers' | 'travel' | 'spanish' | 'f1'
  setActiveSection: (section: 'flowers' | 'travel' | 'spanish' | 'f1') => void
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const { t } = useLanguage()
  
  const navItems = [
    { id: 'flowers' as const, label: `🌹 ${t('nav.flowers')}`, description: t('nav.flowers.desc') },
    { id: 'travel' as const, label: `✈️ ${t('nav.travel')}`, description: t('nav.travel.desc') },
    { id: 'spanish' as const, label: `🇪🇸 ${t('nav.spanish')}`, description: t('nav.spanish.desc') },
    { id: 'f1' as const, label: `🏎️ ${t('nav.f1')}`, description: t('nav.f1.desc') }
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            <span className="nav-label">{item.label}</span>
            <span className="nav-description">{item.description}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
