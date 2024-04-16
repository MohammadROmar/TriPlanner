/*import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./en.js";
import ar from "./ar.js";

i18n.use(languageDetector).use(initReactI18next).init({
  debug: true,
  lng: "en",
  fallbackLng: "en",
  returnObjects: true,
  resources: {
    en,
    ar
  }
});

// in the place were we want to change the language : //

/* 
import { useTranslation } from "react-i18next";

function selectedLanguage() {
  const { i18n } = useTranslation();
  return i18n.language;
  // to change the language: //
  /*
  i18n.changeLanguage("en/ar...");
}

useEffect(() => {
  document.body.dir = i18n.dir();
}, [i18n, i18n.language]);
*/
