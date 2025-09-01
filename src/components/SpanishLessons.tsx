import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const SpanishLessons = () => {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const { t } = useLanguage()

  const lessons = [
    {
      category: t('spanish.category.affection'),
      spanish: 'Me gustas',
      pronunciation: 'Me gus-tas',
      english: 'I like you',
      russian: 'Ты мне нравишься',
      context: 'Una forma bonita de expresar afecto 💕'
    },
    {
      category: t('spanish.category.affection'),
      spanish: 'Eres especial',
      pronunciation: 'E-res es-pe-sial',
      english: 'You are special',
      russian: 'Ты особенная',
      context: 'Lo que realmente pienso de ti'
    },
    {
      category: t('spanish.category.affection'),
      spanish: 'Me haces sonreír',
      pronunciation: 'Me a-ses son-re-ír',
      english: 'You make me smile',
      russian: 'Ты заставляешь меня улыбаться',
      context: 'Cuando pienso en nuestra conversación'
    },
    {
      category: t('spanish.category.travel'),
      spanish: 'Me gustaría conocerte',
      pronunciation: 'Me gus-ta-rí-a co-no-ser-te',
      english: 'I would like to meet you',
      russian: 'Я хотел бы познакомиться с тобой',
      context: 'Mi mayor deseo ahora mismo'
    },
    {
      category: t('spanish.category.food'),
      spanish: 'La comida está deliciosa',
      pronunciation: 'La co-mi-da es-tá de-li-ció-sa',
      english: 'The food is delicious',
      russian: 'Еда очень вкусная',
      context: 'Para cuando probemos comida mexicana juntos'
    },
    {
      category: t('spanish.category.daily'),
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
        <h2>🇪🇸 {t('spanish.title')}</h2>
        <p>{t('spanish.subtitle')}</p>
      </div>

      <div className="lesson-counter">
        <span>{t('spanish.lesson')} {currentLesson + 1} de {lessons.length}</span>
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
            <p className="pronunciation">{t('spanish.pronunciation')}: {currentLessonData.pronunciation}</p>
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
          <h4>{t('spanish.practice')}: ¿Cómo se dice en español?</h4>
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
              {t('spanish.check')}
            </button>
          </div>

          {showAnswer && (
            <div className="answer-feedback">
              <p className="correct-answer">
                ✅ Respuesta correcta: <strong>{currentLessonData.spanish}</strong>
              </p>
              {userAnswer.toLowerCase().trim() === currentLessonData.spanish.toLowerCase() ? (
                <p className="feedback success">{t('spanish.correct')}</p>
              ) : (
                <p className="feedback encourage">{t('spanish.tryAgain')}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="lesson-navigation">
        <button onClick={prevLesson} className="nav-btn prev">
          ← {t('spanish.prevLesson')}
        </button>
        <button onClick={nextLesson} className="nav-btn next">
          {t('spanish.nextLesson')} →
        </button>
      </div>

      <div className="motivation-message">
        <div className="motivation-card">
          <h4>💕 Special message</h4>
          <p>
            {t('spanish.motivation')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpanishLessons
