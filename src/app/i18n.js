import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from '../../public/locales/en/translation.json';

const resources = {
  en: {
    translation: translationEn,
  },
};

i18n.use(initReactI18next).init({
  resources,

  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
