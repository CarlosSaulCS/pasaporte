import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const DigitalFlowers = () => {
  const [flowerCount, setFlowerCount] = useState(1)
  const [showMessage, setShowMessage] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const { t } = useLanguage()

  const createFlower = () => {
    if (flowerCount < 10) {
      setFlowerCount(prev => prev + 1)
      if (flowerCount >= 3) {
        setShowMessage(true)
        setMessageIndex(Math.floor(Math.random() * 5) + 1)
      }
    }
  }

  const resetFlowers = () => {
    setFlowerCount(1)
    setShowMessage(false)
  }

  return (
    <div className="digital-flowers">
      <div className="flowers-header">
        <h2>{t('flowers.title')}</h2>
        <p>{t('flowers.subtitle')}</p>
      </div>

      <div className="flower-garden" onClick={createFlower}>
        {Array.from({ length: flowerCount }, (_, index) => (
          <div
            key={index}
            className={`flower flower-${(index % 3) + 1}`}
            style={{
              animationDelay: `${index * 0.5}s`,
              left: `${Math.max(5, Math.min(90, 10 + (index * 12) + (index % 2 === 0 ? 5 : -5)))}%`,
              bottom: `${Math.max(10, 15 + (index * 8) % 30)}px`
            }}
          >
            <div className="stem"></div>
            <div className="flower-head">
              <div className="petal petal-1"></div>
              <div className="petal petal-2"></div>
              <div className="petal petal-3"></div>
              <div className="petal petal-4"></div>
              <div className="petal petal-5"></div>
              <div className="center"></div>
            </div>
          </div>
        ))}
      </div>

      {showMessage && (
        <div className="love-messages">
          <div className="message-container">
            <div
              className="love-message"
              style={{ animationDelay: '0.5s' }}
            >
              {t(`flowers.message${messageIndex}`)}
            </div>
          </div>
        </div>
      )}

      <div className="flower-controls">
        <button onClick={createFlower} className="grow-btn" disabled={flowerCount >= 10}>
          Grow Flowers 🌸
        </button>
        <button onClick={resetFlowers} className="reset-btn">
          New Garden 🌱
        </button>
      </div>

      <div className="romantic-quote">
        <p>"As Pablo Neruda said: 'Love is so short, forgetting is so long'"</p>
        <p>I would love to meet you in person and give you real flowers someday 💕</p>
      </div>
    </div>
  )
}

export default DigitalFlowers
