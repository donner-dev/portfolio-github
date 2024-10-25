
import React, { createContext, useState, useContext, useEffect } from 'react';
import en from '../en.json';
import es from '../es.json';

const LanguageContext = createContext();

/* custom hook. Any component can use this hook to access the strings and setLanguage without manually using useContext */
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [strings, setStrings] = useState(es);

  useEffect(() => {
    const selectedStrings = language === 'es' ? es : en;
    setStrings(selectedStrings);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ strings, setLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
