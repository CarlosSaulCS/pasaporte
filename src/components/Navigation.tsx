interface NavigationProps {
  activeSection: 'flowers' | 'travel' | 'spanish' | 'f1'
  setActiveSection: (section: 'flowers' | 'travel' | 'spanish' | 'f1') => void
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const navItems = [
    { id: 'flowers' as const, label: '🌹 Flores Digitales', description: 'Para alguien muy especial' },
    { id: 'travel' as const, label: '✈️ Destinos Increíbles', description: 'Lugares que me fascina que conozcas' },
    { id: 'spanish' as const, label: '🇪🇸 Aprende Español', description: 'Te enseño mi idioma' },
    { id: 'f1' as const, label: '🏎️ Fórmula 1', description: 'Mi pasión por la velocidad' }
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
