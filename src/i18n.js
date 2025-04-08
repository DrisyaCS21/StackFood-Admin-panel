import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome, Jhon Doe",
        messages: "Messages",
        cart: "Cart",
      },
    },
    np: {
      translation: {
        welcome: "स्वागत छ, झोन दो",
        messages: "सन्देशहरू",
        cart: "कार्ट",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
