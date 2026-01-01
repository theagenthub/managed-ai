import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            {t.hero.title}
          </h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>
          <p className={styles.description}>{t.hero.description}</p>
          <div className={styles.ctaGroup}>
            <a href="#contact" className="btn btn-primary">
              {t.hero.cta}
            </a>
            <a href="#security" className="btn btn-secondary">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

