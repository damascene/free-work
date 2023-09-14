import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
  });

export default i18n;
