import React, {useEffect, useRef} from 'react';
import TextScramble from './TextScramble.js';


const TextScrambleEffect = () => {

    const subtitleRef = useRef(null);
    
    useEffect(()=>{
        const el = subtitleRef.current;
        if (el) {
            const fx = new TextScramble(el);
            const phrases = [
                'Centering divs',
                'Software Design',
                'UX/UI Designer',
                'Front End Wizard',
                'Logic, Creativity and Magic',
                'Always Learning',
                'Refilling coffee cup',
              ];
              const frases = [
                'Centrando divs',
                'Diseño de Software',
                'Diseñadora UX/UI',
                'Maga del Front End',
                'Logica, Creatividad y Magia',
                'Aprendiendo siempre',
                'Cebando otro Mate'
              ];

              let counter = 0;
              const next = () => {
                fx.setText(phrases[counter]).then(() => {
                  setTimeout(next, 3000);
                });
                counter = (counter + 1) % phrases.length;
              };

              next();
              
        }
        return () => {
            // Optional cleanup logic if needed
          };
    }, []);
    return <div className="subtitle-text" ref={subtitleRef}></div>;
};

export default TextScrambleEffect;