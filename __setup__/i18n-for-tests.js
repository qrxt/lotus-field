import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en-EU',
    fallbackLng: 'en',
    debug: false,
  });

export default i18n;
