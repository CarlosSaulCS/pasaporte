# 💕 Para Evita Romanovna - Una Aplicación del Corazón

Una aplicación web interactiva creada con amor desde México para la mujer más especial del mundo.

## 🌹 ¿Qué es esto?

Esta es una aplicación personalizada que combina todos los gustos e intereses de Evita:
- Sus viajes favoritos (Creta, Copenhague, Roma, Nápoles)
- Su amor por las flores rosas y rojas
- Su deseo de aprender español
- Su curiosidad por la Fórmula 1

## ✨ Características

### 🌸 Jardín Digital de Flores
- Flores interactivas que crecen con cada clic
- Animaciones hermosas con pétalos rosas y rojos
- Mensajes románticos que aparecen conforme crecen las flores
- Citas de Pablo Neruda y dedicatorias personales

### ✈️ Galería de Viajes Soñados
- Destinos favoritos de Evita con descripciones románticas
- Recuerdos imaginarios de viajes juntos
- Colores y gradientes inspirados en cada lugar
- Sección especial sobre Creta, su lugar favorito

### 🇪🇸 Lecciones de Español
- Curso interactivo personalizado
- Frases de amor y palabras cotidianas
- Pronunciación en inglés y traducción al ruso
- Sistema de práctica con retroalimentación motivadora
- Mensajes especiales de motivación

### 🏎️ Guía de Fórmula 1
- Explicación básica del deporte
- Información sobre pilotos legendarios
- Estrategias y datos curiosos
- Conexiones románticas con la velocidad del amor

## 🛠️ Tecnologías Utilizadas

- **Vite** - Build tool rápido y moderno
- **React 18** - Framework de JavaScript
- **TypeScript** - Tipado estático para mejor desarrollo
- **CSS3** - Animaciones y estilos hermosos
- **Google Fonts** - Dancing Script y Poppins

## 🚀 Cómo Ejecutar

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador: http://localhost:5173

4. Para compilar para producción:
```bash
npm run build
```

## 💝 Características Especiales

- **Diseño Responsivo**: Se ve hermoso en cualquier dispositivo
- **Animaciones Suaves**: Transiciones y efectos visuales románticos
- **Colores Temáticos**: Paleta de rosas, rojos y azules inspirada en sus gustos
- **Interactividad**: Cada sección tiene elementos interactivos únicos
- **Personalización Total**: Cada palabra está pensada específicamente para Evita

## 🎨 Paleta de Colores

- **Rosa Principal**: #FF6B9D (para las flores y el amor)
- **Rosa Secundario**: #FFB5D6 (suavidad y ternura)
- **Rojo Pasión**: #E74C3C (para el español y la pasión)
- **Azul Viajes**: #AED6F1 (para los cielos de sus destinos)
- **Dorado**: #F39C12 (para los detalles especiales)

## 📱 Secciones de la Aplicación

1. **🌹 Flores Digitales** - Jardín interactivo con mensajes de amor
2. **✈️ Nuestros Viajes** - Galería de destinos soñados
3. **🇪🇸 Aprende Español** - Lecciones personalizadas de español
4. **🏎️ Fórmula 1** - Guía romántica del automovilismo

## 💌 Mensaje Personal

> "Cada línea de código de esta aplicación fue escrita pensando en ti. Desde México, con todo mi amor, espero que cada click, cada animación, cada palabra te haga sonreír como tú me haces sonreír a mí cada día."

---

**Creado con ❤️ en México para Evita Romanovna Mištšenko en Estonia** 🇲🇽💕🇪🇪

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
