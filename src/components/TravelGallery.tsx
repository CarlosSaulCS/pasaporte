import { useState } from 'react'

const TravelGallery = () => {
  const [selectedDestination, setSelectedDestination] = useState('crete')

  const destinations = {
    crete: {
      name: 'Creta, Grecia 🇬🇷',
      description: 'Tu lugar favorito en el mundo',
      memories: [
        'Conocer las aguas cristalinas que tanto amas',
        'Visitar los pueblos blancos que has visto',
        'Probar la deliciosa comida griega que disfrutas',
        'Ver los atardeceres que tanto te fascinan'
      ],
      colors: ['#4A90E2', '#7BB3F0', '#A8D0F0'],
      emoji: '🏖️'
    },
    copenhagen: {
      name: 'Copenhague, Dinamarca 🇩🇰',
      description: 'Ciudad que has explorado',
      memories: [
        'Caminar por los canales de Nyhavn que conoces',
        'Visitar el castillo de Rosenborg',
        'Recorrer las calles en bicicleta',
        'Ver la sirenita que has fotografiado'
      ],
      colors: ['#E74C3C', '#F39C12', '#2ECC71'],
      emoji: '🏰'
    },
    rome: {
      name: 'Roma, Italia 🇮🇹',
      description: 'La ciudad eterna que has visitado',
      memories: [
        'Admirar el Coliseo que has visto',
        'Hacer un deseo en la Fontana di Trevi',
        'Pasear por el Trastevere que conoces',
        'Apreciar el arte renacentista'
      ],
      colors: ['#8E44AD', '#E67E22', '#F1C40F'],
      emoji: '🏛️'
    },
    naples: {
      name: 'Nápoles, Italia 🇮🇹',
      description: 'Ciudad que has conocido',
      memories: [
        'Ver el Vesubio desde la bahía',
        'Disfrutar la auténtica pizza napoletana',
        'Explorar las calles vibrantes',
        'Contemplar el golfo de Nápoles'
      ],
      colors: ['#27AE60', '#F39C12', '#E74C3C'],
      emoji: '🍕'
    }
  }

  const currentDestination = destinations[selectedDestination as keyof typeof destinations]

  return (
    <div className="travel-gallery">
      <div className="gallery-header">
        <h2>✈️ Destinos que me Emocionan</h2>
        <p>Lugares que me gustaría conocer contigo algún día</p>
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
              background: `linear-gradient(135deg, ${currentDestination.colors.join(', ')})`
            }}
          >
            <div className="destination-overlay">
              <h3>{currentDestination.name}</h3>
              <p>{currentDestination.description}</p>
            </div>
          </div>

          <div className="destination-memories">
            <h4>Lo que me gustaría hacer si visito {currentDestination.name.split(',')[0]}:</h4>
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
          <h4>🌍 Mi Sueño de Viajero</h4>
          <p>
            Me emociona saber que has visitado lugares tan hermosos como Creta. 
            Me gustaría mucho escuchar tus historias de viaje y tal vez, 
            si el destino lo permite, algún día poder conocer estos lugares 
            que tanto significan para ti.
          </p>
          <p>
            Desde México, admiro tu espíritu aventurero. Me encantaría 
            conocerte en persona y escuchar todas tus aventuras por el mundo. 💕
          </p>
        </div>
      </div>
    </div>
  )
}

export default TravelGallery
