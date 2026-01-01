import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
          <p className={styles.description}>{t.contact.description}</p>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <div>
              <h4>Email</h4>
              <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <div>
              <h4>Phone</h4>
              <a href={`tel:${t.contact.phone}`}>{t.contact.phone}</a>
            </div>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <a href={`mailto:${t.contact.email}`} className="btn btn-primary btn-lg">
            {t.contact.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

