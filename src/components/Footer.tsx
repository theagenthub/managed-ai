import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'he' ? 'en' : 'he');
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>AI Law Infrastructure</h3>
            <p>{t.footer.description}</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Links</h4>
            <ul>
              <li><a href="#services">{t.footer.links.services}</a></li>
              <li><a href="#security">{t.footer.links.security}</a></li>
              <li><a href="#features">{t.footer.links.features}</a></li>
              <li><a href="#contact">{t.footer.links.contact}</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">{t.footer.links.privacy}</a></li>
              <li><a href="#terms">{t.footer.links.terms}</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <button className={styles.languageButton} onClick={toggleLanguage}>
              {t.header.language}
            </button>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

