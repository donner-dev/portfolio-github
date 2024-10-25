// Section.js
import styles from './Section.module.css';
import React from 'react';


function Section({ title, className, children}) {
  return (
    <section className={`${styles.section} ${className}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

export default Section;
