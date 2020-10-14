import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from '@locales/en/translation.json';
import translationRu from '@locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEn,
  },
  ru: {
    translation: translationRu,
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  detection: {
    order: ['navigator', 'htmlTag', 'cookie'],
  },
  // lng: 'en',
  // fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
