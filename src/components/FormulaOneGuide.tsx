import { useState } from 'react'

const FormulaOneGuide = () => {
  const [selectedTopic, setSelectedTopic] = useState('basics')

  const topics = {
    basics: {
      title: '🏎️ ¿Qué es la Fórmula 1?',
      content: [
        {
          subtitle: 'Lo básico',
          text: 'La Fórmula 1 es la categoría más prestigiosa del automovilismo mundial. Es como ballet, pero a 300 km/h.'
        },
        {
          subtitle: '¿Por qué me fascina?',
          text: 'Porque combina velocidad, estrategia, tecnología y drama humano. Me emociona tanto que me gustaría compartir esta pasión contigo 💕'
        },
        {
          subtitle: 'Los autos',
          text: 'Son máquinas de precisión que pueden pasar de 0 a 100 km/h en menos de 3 segundos. ¡Increíble ingeniería!'
        }
      ]
    },
    drivers: {
      title: '🏆 Pilotos Legendarios',
      content: [
        {
          subtitle: 'Max Verstappen (Red Bull)',
          text: 'El actual campeón mundial. Holandés, joven, y increíblemente talentoso. Un piloto excepcional.'
        },
        {
          subtitle: 'Lewis Hamilton (Mercedes)',
          text: '7 veces campeón del mundo. Una leyenda viviente del deporte. Su determinación es inspiradora.'
        },
        {
          subtitle: 'Ayrton Senna (Leyenda)',
          text: 'Brasileño, considerado por muchos el mejor piloto de todos los tiempos. Su legado es eterno en este deporte.'
        }
      ]
    },
    strategy: {
      title: '🧠 Estrategia y Táctica',
      content: [
        {
          subtitle: 'Pit Stops',
          text: 'Paradas en boxes para cambiar neumáticos y repostar. Deben ser perfectas, como cada detalle en este deporte.'
        },
        {
          subtitle: 'Neumáticos',
          text: 'Hay diferentes compuestos: blandos (rápidos pero se desgastan), duros (lentos pero duran más). La estrategia es clave.'
        },
        {
          subtitle: 'DRS (Sistema de Reducción de Resistencia)',
          text: 'Permite abrir una aleta trasera para ganar velocidad al adelantar. Una tecnología fascinante.'
        }
      ]
    },
    romance: {
      title: '💕 F1 y Nuestro Amor',
      content: [
        {
          subtitle: 'Las carreras duran 2 horas...',
          text: 'Y cada momento es emocionante. Me encantaría poder compartir esta emoción contigo algún día.'
        },
        {
          subtitle: 'Los circuitos del mundo',
          text: 'Mónaco, Silverstone, Monza, Spa... lugares mágicos donde me encantaría ver una carrera. Tal vez algún día podamos ir juntos.'
        },
        {
          subtitle: 'La bandera a cuadros',
          text: 'Marca el final de la carrera y el inicio de la celebración. Cada carrera es una nueva aventura.'
        }
      ]
    }
  }

  const currentTopic = topics[selectedTopic as keyof typeof topics]

  return (
    <div className="formula-one-guide">
      <div className="f1-header">
        <h2>🏎️ Fórmula 1 para Evita</h2>
        <p>Te explico mi pasión para que sea también la tuya</p>
      </div>

      <div className="topic-selector">
        {Object.entries(topics).map(([key, topic]) => (
          <button
            key={key}
            className={`topic-btn ${selectedTopic === key ? 'active' : ''}`}
            onClick={() => setSelectedTopic(key)}
          >
            {topic.title}
          </button>
        ))}
      </div>

      <div className="topic-content">
        <h3>{currentTopic.title}</h3>
        
        <div className="content-sections">
          {currentTopic.content.map((section, index) => (
            <div key={index} className="content-section">
              <h4>{section.subtitle}</h4>
              <p>{section.text}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedTopic === 'romance' && (
        <div className="special-invitation">
          <div className="invitation-card">
            <h4>🎭 Una Invitación Especial</h4>
            <p>
              Mi sueño sería llevarte a ver una carrera de F1 en vivo algún día. 
              Imagina: el rugido de los motores, la emoción de la multitud, 
              el olor a gasolina y neumáticos quemados...
            </p>
            <p>
              Pero sobre todo, me encantaría poder explicarte cada vuelta, 
              cada adelantamiento, cada estrategia. Ver tu curiosidad y tal vez 
              tu emoción al entender por qué me fascina tanto este deporte 
              sería realmente especial.
            </p>
            <div className="heart-racing">
              <span className="heart">❤️</span>
              <span className="text">Mi corazón se acelera cuando imagino conocerte en persona</span>
              <span className="heart">❤️</span>
            </div>
          </div>
        </div>
      )}

      <div className="fun-facts">
        <h4>🎯 Datos Curiosos F1</h4>
        <div className="facts-grid">
          <div className="fact-item">
            <span className="fact-icon">⚡</span>
            <span className="fact-text">Los autos alcanzan 370 km/h</span>
          </div>
          <div className="fact-item">
            <span className="fact-icon">🔥</span>
            <span className="fact-text">Los frenos llegan a 1000°C</span>
          </div>
          <div className="fact-item">
            <span className="fact-icon">💪</span>
            <span className="fact-text">Los pilotos pierden hasta 3kg por carrera</span>
          </div>
          <div className="fact-item">
            <span className="fact-icon">🌪️</span>
            <span className="fact-text">Fuerzas G de hasta 6G en las curvas</span>
          </div>
        </div>
      </div>

      <div className="f1-promise">
        <div className="promise-card">
          <h4>🏁 Mi Promesa F1</h4>
          <p>
            Si algún día tengo la oportunidad de conocerte, prometo ser tu guía 
            en este mundo de velocidad y emoción. Cada carrera que veamos juntos 
            será una nueva aventura, cada explicación será dada con la paciencia 
            de alguien que realmente quiere compartir su pasión.
          </p>
          <p>
            Y cuando veas tu primera carrera conmigo, entenderás por qué 
            digo que mi emoción por conocerte va más rápida que cualquier F1. 🏎️💕
          </p>
        </div>
      </div>
    </div>
  )
}

export default FormulaOneGuide
