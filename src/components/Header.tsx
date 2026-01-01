import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'he' ? 'en' : 'he');
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <h2>AI Law Infrastructure</h2>
          </div>
          <ul className={styles.navList}>
            <li><a href="#services">{t.header.nav.services}</a></li>
            <li><a href="#security">{t.header.nav.security}</a></li>
            <li><a href="#features">{t.header.nav.features}</a></li>
            <li><a href="#contact">{t.header.nav.contact}</a></li>
          </ul>
          <button className={styles.languageButton} onClick={toggleLanguage}>
            {t.header.language}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

