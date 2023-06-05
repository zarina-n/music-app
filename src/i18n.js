import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
        loadPath: "./locales/{{ns}}/{{lng}}.json"
    },
    fallbackLng: 'en',
    debug: true,
    ns: ["auth", "home"],

    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },
    rect: {
        wait: true
    }
  });


export default i18n;

