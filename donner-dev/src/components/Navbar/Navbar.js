// src/components/Navbar.js
import React from 'react';
import { PuzzlePiece, HouseSimple, Briefcase, ChatCenteredDots} from "@phosphor-icons/react";
import styles from './Navbar.module.css';
import LanguageSwitch from '../LanguageSwitch';
import Lightbulb from '../Lightbulb';


const Navbar = () => (
  <nav className={styles.nav}>
    <LanguageSwitch/>
    <Lightbulb/>
    <ul className={styles.ul}>
        <li><a href="#home" aria-label="Go to Home">  
          <HouseSimple size={32} />
          Home
        </a></li>qh

        <li><a href="#about" aria-label="Go to About"> 
          <PuzzlePiece size={32} />
          About
        </a></li>

        <li><a href="#projects" aria-label="Go to Projects">  
          <Briefcase size={32} />
          Projects
        </a></li>

        <li><a href="#contact" aria-label="Go to Contact"> 
          <ChatCenteredDots size={32} />
          Contact
        </a></li>
      </ul>
  </nav>
);

export default Navbar;
