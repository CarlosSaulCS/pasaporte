import { useState } from 'react'

const DigitalFlowers = () => {
  const [flowerCount, setFlowerCount] = useState(1)
  const [showMessage, setShowMessage] = useState(false)

  const messages = [
    "Me encantan las flores que le gustan a Evita...",
    "Rosas y flores rojas, como su personalidad vibrante",
    "Desde México, con admiración y cariño",
    "Cada flor representa lo especial que eres",
    "Espero algún día poder regalarte flores reales"
  ]

  const createFlower = () => {
    if (flowerCount < 10) {
      setFlowerCount(prev => prev + 1)
      if (flowerCount === 5) {
        setShowMessage(true)
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
        <h2>🌹 Jardín Digital Para Evita 🌹</h2>
        <p>Haz clic en el jardín para hacer crecer más flores</p>
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
            {messages.map((message, index) => (
              <div
                key={index}
                className="love-message"
                style={{ animationDelay: `${index * 1.5}s` }}
              >
                {message}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flower-controls">
        <button onClick={createFlower} className="grow-btn" disabled={flowerCount >= 10}>
          Hacer Crecer Flores 🌸
        </button>
        <button onClick={resetFlowers} className="reset-btn">
          Nuevo Jardín 🌱
        </button>
      </div>

      <div className="romantic-quote">
        <p>"Como dijo Pablo Neruda: 'Es tan corto el amor, y es tan largo el olvido'"</p>
        <p>Me encantaría conocerte en persona y regalarte flores reales algún día 💕</p>
      </div>
    </div>
  )
}

export default DigitalFlowers
