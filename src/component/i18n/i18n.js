import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import mr from './mr.json';

const resources = {
  en: {
    translation: en,
  },
  mr: {
    translation: mr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
