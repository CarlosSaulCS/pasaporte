import { useState } from 'react'

const SpanishLessons = () => {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)

  const lessons = [
    {
      category: 'Palabras de Afecto',
      spanish: 'Me gustas',
      pronunciation: 'Me gus-tas',
      english: 'I like you',
      russian: 'Ты мне нравишься',
      context: 'Una forma bonita de expresar afecto 💕'
    },
    {
      category: 'Palabras de Afecto',
      spanish: 'Eres especial',
      pronunciation: 'E-res es-pe-sial',
      english: 'You are special',
      russian: 'Ты особенная',
      context: 'Lo que realmente pienso de ti'
    },
    {
      category: 'Palabras de Afecto',
      spanish: 'Me haces sonreír',
      pronunciation: 'Me a-ses son-re-ír',
      english: 'You make me smile',
      russian: 'Ты заставляешь меня улыбаться',
      context: 'Cuando pienso en nuestra conversación'
    },
    {
      category: 'Viajes',
      spanish: 'Me gustaría conocerte',
      pronunciation: 'Me gus-ta-rí-a co-no-ser-te',
      english: 'I would like to meet you',
      russian: 'Я хотел бы познакомиться с тобой',
      context: 'Mi mayor deseo ahora mismo'
    },
    {
      category: 'Comida',
      spanish: 'La comida está deliciosa',
      pronunciation: 'La co-mi-da es-tá de-li-ció-sa',
      english: 'The food is delicious',
      russian: 'Еда очень вкусная',
      context: 'Para cuando probemos comida mexicana juntos'
    },
    {
      category: 'Día a día',
      spanish: 'Hola, ¿cómo estás?',
      pronunciation: 'O-la, ¿có-mo es-tás?',
      english: 'Hello, how are you?',
      russian: 'Привет, как дела?',
      context: 'Como me gustaría saludarte cada día'
    }
  ]

  const currentLessonData = lessons[currentLesson]

  const nextLesson = () => {
    setCurrentLesson((prev) => (prev + 1) % lessons.length)
    setUserAnswer('')
    setShowAnswer(false)
  }

  const prevLesson = () => {
    setCurrentLesson((prev) => (prev - 1 + lessons.length) % lessons.length)
    setUserAnswer('')
    setShowAnswer(false)
  }

  const checkAnswer = () => {
    setShowAnswer(true)
  }

  return (
    <div className="spanish-lessons">
      <div className="lessons-header">
        <h2>🇪🇸 Aprende Español Conmigo</h2>
        <p>Te enseño mi idioma con todo el amor del mundo</p>
      </div>

      <div className="lesson-counter">
        <span>Lección {currentLesson + 1} de {lessons.length}</span>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentLesson + 1) / lessons.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="lesson-card">
        <div className="lesson-category">
          <span className="category-tag">{currentLessonData.category}</span>
        </div>

        <div className="lesson-content">
          <div className="spanish-phrase">
            <h3>{currentLessonData.spanish}</h3>
            <p className="pronunciation">Pronunciación: {currentLessonData.pronunciation}</p>
          </div>

          <div className="translations">
            <div className="translation">
              <span className="flag">🇬🇧</span>
              <span>{currentLessonData.english}</span>
            </div>
            <div className="translation">
              <span className="flag">🇷🇺</span>
              <span>{currentLessonData.russian}</span>
            </div>
          </div>

          <div className="context">
            <p>💭 {currentLessonData.context}</p>
          </div>
        </div>

        <div className="practice-section">
          <h4>Práctica: ¿Cómo se dice en español?</h4>
          <p>Traduce: "{currentLessonData.english}"</p>
          
          <div className="practice-input">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Escribe tu respuesta aquí..."
              className="answer-input"
            />
            <button onClick={checkAnswer} className="check-btn">
              Verificar
            </button>
          </div>

          {showAnswer && (
            <div className="answer-feedback">
              <p className="correct-answer">
                ✅ Respuesta correcta: <strong>{currentLessonData.spanish}</strong>
              </p>
              {userAnswer.toLowerCase().trim() === currentLessonData.spanish.toLowerCase() ? (
                <p className="feedback success">¡Perfecto! ¡Eres increíble! 🎉</p>
              ) : (
                <p className="feedback encourage">¡Sigue intentando! Cada error es un paso hacia el éxito 💪</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="lesson-navigation">
        <button onClick={prevLesson} className="nav-btn prev">
          ← Anterior
        </button>
        <button onClick={nextLesson} className="nav-btn next">
          Siguiente →
        </button>
      </div>

      <div className="motivation-message">
        <div className="motivation-card">
          <h4>💕 Mensaje especial</h4>
          <p>
            Cada palabra que aprendas en español será un puente entre nosotros. 
            Me emociona mucho la idea de poder conocerte algún día y escucharte 
            hablar mi idioma, aunque sea solo unas pocas palabras.
          </p>
          <p>
            Desde México, con mucha paciencia y cariño, 
            estaré aquí para enseñarte lo que quieras aprender. 
            Tal vez algún día podamos practicar en persona. 🇲🇽❤️🇪🇪
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpanishLessons
