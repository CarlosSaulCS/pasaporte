import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Header
    'header.title': 'Para Evita Romanovna',
    'header.subtitle': 'Una sorpresa digital desde México',
    
    // Navigation
    'nav.flowers': 'Flores Digitales',
    'nav.flowers.desc': 'Para alguien muy especial',
    'nav.travel': 'Destinos Increíbles',
    'nav.travel.desc': 'Lugares que me fascina que conozcas',
    'nav.spanish': 'Aprende Español',
    'nav.spanish.desc': 'Te enseño mi idioma',
    'nav.f1': 'Fórmula 1',
    'nav.f1.desc': 'Mi pasión por la velocidad',
    
    // Flowers
    'flowers.title': 'Jardín Digital Para Evita',
    'flowers.subtitle': 'Haz clic en el jardín para hacer crecer más flores',
    'flowers.message1': '🌸 Una flor especial para alguien especial 🌸',
    'flowers.message2': '🌺 Desde México, con cariño para Estonia 🌺',
    'flowers.message3': '🌷 Espero que estas flores digitales te hagan sonreír 🌷',
    'flowers.message4': '🌹 Me gustaría conocerte algún día 🌹',
    'flowers.message5': '🌻 Eres increíble, Evita 🌻',
    
    // Travel
    'travel.title': 'Destinos que me Emocionan',
    'travel.subtitle': 'Lugares que me gustaría conocer contigo algún día',
    'travel.memories': 'Lo que me gustaría hacer si visito',
    'travel.dream.title': 'Mi Sueño de Viajero',
    'travel.dream.text1': 'Me emociona saber que has visitado lugares tan hermosos como Creta. Me gustaría mucho escuchar tus historias de viaje y tal vez, si el destino lo permite, algún día poder conocer estos lugares que tanto significan para ti.',
    'travel.dream.text2': 'Desde México, admiro tu espíritu aventurero. Me encantaría conocerte en persona y escuchar todas tus aventuras por el mundo. 💕',
    
    // Spanish Lessons
    'spanish.title': 'Aprende Español Conmigo',
    'spanish.subtitle': 'Te enseño mi idioma natal desde México',
    'spanish.lesson': 'Lección',
    'spanish.practice': 'Practica diciendo',
    'spanish.pronunciation': 'Pronunciación',
    'spanish.meaning': 'Significado',
    'spanish.yourTurn': '¡Tu turno! Escribe la traducción:',
    'spanish.correct': '¡Correcto! 🎉',
    'spanish.tryAgain': 'Inténtalo de nuevo 😊',
    'spanish.check': 'Verificar',
    'spanish.nextLesson': 'Siguiente Lección',
    'spanish.motivation': 'Me emocionaría mucho enseñarte español y aprender más sobre tu cultura estonia. Sería increíble si pudiéramos practicar juntos algún día.',
    
    // F1
    'f1.title': 'Mi Pasión por la Fórmula 1',
    'f1.subtitle': 'Me encantaría compartir esta emoción contigo',
    'f1.sharing': 'Me emocionaría mucho compartir contigo la emoción de la F1. Desde México, sigo cada carrera con pasión, y sería increíble si pudiéramos ver una carrera juntos algún día y explicarte todos los detalles técnicos que hacen este deporte tan fascinante.',
    
    // Language Toggle
    'lang.spanish': 'Español',
    'lang.english': 'English'
  },
  en: {
    // Header
    'header.title': 'For Evita Romanovna',
    'header.subtitle': 'A digital surprise from Mexico',
    
    // Navigation
    'nav.flowers': 'Digital Flowers',
    'nav.flowers.desc': 'For someone very special',
    'nav.travel': 'Amazing Destinations',
    'nav.travel.desc': 'Places I find fascinating that you know',
    'nav.spanish': 'Learn Spanish',
    'nav.spanish.desc': 'I teach you my language',
    'nav.f1': 'Formula 1',
    'nav.f1.desc': 'My passion for speed',
    
    // Flowers
    'flowers.title': 'Digital Garden For Evita',
    'flowers.subtitle': 'Click on the garden to grow more flowers',
    'flowers.message1': '🌸 A special flower for someone special 🌸',
    'flowers.message2': '🌺 From Mexico, with love to Estonia 🌺',
    'flowers.message3': '🌷 I hope these digital flowers make you smile 🌷',
    'flowers.message4': '🌹 I would like to meet you someday 🌹',
    'flowers.message5': '🌻 You are incredible, Evita 🌻',
    
    // Travel
    'travel.title': 'Destinations that Excite Me',
    'travel.subtitle': 'Places I would like to discover with you someday',
    'travel.memories': 'What I would like to do if I visit',
    'travel.dream.title': 'My Traveler\'s Dream',
    'travel.dream.text1': 'I\'m excited to know that you\'ve visited such beautiful places like Crete. I would love to hear your travel stories and maybe, if destiny allows it, someday be able to discover these places that mean so much to you.',
    'travel.dream.text2': 'From Mexico, I admire your adventurous spirit. I would love to meet you in person and hear all your adventures around the world. 💕',
    
    // Spanish Lessons
    'spanish.title': 'Learn Spanish With Me',
    'spanish.subtitle': 'I teach you my native language from Mexico',
    'spanish.lesson': 'Lesson',
    'spanish.practice': 'Practice saying',
    'spanish.pronunciation': 'Pronunciation',
    'spanish.meaning': 'Meaning',
    'spanish.yourTurn': 'Your turn! Write the translation:',
    'spanish.correct': 'Correct! 🎉',
    'spanish.tryAgain': 'Try again 😊',
    'spanish.check': 'Check',
    'spanish.nextLesson': 'Next Lesson',
    'spanish.motivation': 'I would be so excited to teach you Spanish and learn more about your Estonian culture. It would be amazing if we could practice together someday.',
    
    // F1
    'f1.title': 'My Passion for Formula 1',
    'f1.subtitle': 'I would love to share this excitement with you',
    'f1.sharing': 'I would be so excited to share with you the thrill of F1. From Mexico, I follow every race with passion, and it would be incredible if we could watch a race together someday and I could explain all the technical details that make this sport so fascinating.',
    
    // Language Toggle
    'lang.spanish': 'Español',
    'lang.english': 'English'
  }
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en') // Default to English for Evita

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
