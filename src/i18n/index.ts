import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./locales/ru";
import kk from "./locales/kk";

export const defaultNS = "translation";

export const resources = {
  ru: { translation: ru },
  kk: { translation: kk },
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: "ru",
  fallbackLng: "ru",
  supportedLngs: ["kk", "ru"],
  interpolation: { escapeValue: false },
});

export default i18n;
