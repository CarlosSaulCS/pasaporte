import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="language-toggle">
      <button
        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
        onClick={() => setLanguage('es')}
      >
        🇲🇽 {t('lang.spanish')}
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        🇺🇸 {t('lang.english')}
      </button>
    </div>
  )
}

export default LanguageToggle
