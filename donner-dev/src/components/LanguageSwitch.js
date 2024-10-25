import React, { useContext } from 'react';
import {useLanguage, LanguageProvider } from './LanguageContext'; 

const LanguageSwitch = () => {
/*   const { language, setLanguage } = useContext(LanguageProvider); */
const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleToggle} checked={language === 'en'} />
      <span className="slider round"></span>
    </label>
  );
};

export default LanguageSwitch;
