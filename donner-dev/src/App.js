import React from 'react';

import './global.css';
import { LanguageProvider } from './components/LanguageContext.js';
import Home from './Home.js'
/* import './lang.js';
import './typing.js';
import './oldapp.js'; */


import Navbar from './components/Navbar/Navbar.js';


function App() {
  return (
    <LanguageProvider>
      <Navbar /> 
        <Home />
    </LanguageProvider>
  );
}

export default App;
