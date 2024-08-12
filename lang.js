function i18n(key) {
    language = language ?? "en";  
     /*that ?? this  -lil buddy is, return this if that is not found */
    return translation[language][key];
  }


  function i18n(key, interpolations) {
    language = language ?? "en";
    const value = objNavigate(translations[language], key);
    return strObjInterpolation(value, interpolations);
  }