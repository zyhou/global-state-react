import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext({
  changeLanguage: () => {},
  language: "fr"
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  const changeLanguage = languageToChange => {
    window.localStorage.setItem("language", languageToChange);

    setLanguage(languageToChange);
  };

  useEffect(() => {
    const storageLanguage = window.localStorage.getItem("language");

    if (storageLanguage) {
      setLanguage(storageLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ changeLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };
