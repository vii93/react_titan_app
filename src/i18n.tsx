import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import langEN from './locales/en/translation.json';
import langVI from './locales/vi/translation.json';

const resources = {
    en: {
      translation: langEN,
    },
    vi: {
      translation: langVI,
    },
  };

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:"en", //default language
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;