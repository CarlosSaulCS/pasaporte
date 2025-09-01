import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const TravelGallery = () => {
  const [selectedDestination, setSelectedDestination] = useState('crete')
  const { t } = useLanguage()

  const destinations = {
    crete: {
      name: t('dest.crete.name'),
      description: t('dest.crete.desc'),
      image: '/grece.png',
      memories: [
        t('dest.crete.memory1'),
        t('dest.crete.memory2'),
        t('dest.crete.memory3'),
        t('dest.crete.memory4')
      ],
      colors: ['#4A90E2', '#7BB3F0', '#A8D0F0'],
      emoji: '🏖️'
    },
    copenhagen: {
      name: t('dest.copenhagen.name'),
      description: t('dest.copenhagen.desc'),
      image: '/copenhage.png',
      memories: [
        t('dest.copenhagen.memory1'),
        t('dest.copenhagen.memory2'),
        t('dest.copenhagen.memory3'),
        t('dest.copenhagen.memory4')
      ],
      colors: ['#E74C3C', '#F39C12', '#2ECC71'],
      emoji: '🏰'
    },
    rome: {
      name: t('dest.rome.name'),
      description: t('dest.rome.desc'),
      image: '/fontana.webp',
      memories: [
        t('dest.rome.memory1'),
        t('dest.rome.memory2'),
        t('dest.rome.memory3'),
        t('dest.rome.memory4')
      ],
      colors: ['#8E44AD', '#E67E22', '#F1C40F'],
      emoji: '🏛️'
    },
    naples: {
      name: t('dest.naples.name'),
      description: t('dest.naples.desc'),
      image: null, // No tenemos imagen para Nápoles aún
      memories: [
        t('dest.naples.memory1'),
        t('dest.naples.memory2'),
        t('dest.naples.memory3'),
        t('dest.naples.memory4')
      ],
      colors: ['#27AE60', '#F39C12', '#E74C3C'],
      emoji: '🍕'
    }
  }

  const currentDestination = destinations[selectedDestination as keyof typeof destinations]

  return (
    <div className="travel-gallery">
      <div className="gallery-header">
        <h2>✈️ {t('travel.title')}</h2>
        <p>{t('travel.subtitle')}</p>
      </div>

      <div className="destination-selector">
        {Object.entries(destinations).map(([key, dest]) => (
          <button
            key={key}
            className={`destination-btn ${selectedDestination === key ? 'active' : ''}`}
            onClick={() => setSelectedDestination(key)}
          >
            <span className="dest-emoji">{dest.emoji}</span>
            <span className="dest-name">{dest.name.split(',')[0]}</span>
          </button>
        ))}
      </div>

      <div className="destination-showcase">
        <div className="destination-card">
          <div 
            className="destination-image"
            style={{
              backgroundImage: currentDestination.image 
                ? `url(${currentDestination.image})` 
                : `linear-gradient(135deg, ${currentDestination.colors.join(', ')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="destination-overlay">
              <h3>{currentDestination.name}</h3>
              <p>{currentDestination.description}</p>
            </div>
          </div>

          <div className="destination-memories">
            <h4>{t('travel.memories')} {currentDestination.name.split(',')[0]}:</h4>
            <ul>
              {currentDestination.memories.map((memory, index) => (
                <li key={index} className="memory-item">
                  <span className="memory-icon">💫</span>
                  {memory}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="travel-dreams">
        <div className="dream-card">
          <h4>🌍 {t('travel.dream.title')}</h4>
          <p>
            {t('travel.dream.text1')}
          </p>
          <p>
            {t('travel.dream.text2')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TravelGallery
