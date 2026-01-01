import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-title">
          <h2>{t.testimonials.title}</h2>
        </div>
        <div className={`grid grid-3 ${styles.testimonialsGrid}`}>
          {t.testimonials.items.map((testimonial: any, index: number) => (
            <div key={index} className={`card ${styles.testimonialCard}`}>
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>
              <blockquote className={styles.quote}>
                {testimonial.quote}
              </blockquote>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                  <div className={styles.authorFirm}>{testimonial.firm}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

