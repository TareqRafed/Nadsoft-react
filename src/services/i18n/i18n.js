import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import catalog from './catalog'

i18n.use(initReactI18next).init({
  resources: catalog,
  fallbackLng: ['ar', 'he'],
  interpolation: {
    escapeValue: false, // could be dangerous if other user can contribute to translations
    // use it wisely
  },
})

export default i18n
