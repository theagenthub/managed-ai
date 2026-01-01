import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Metrics.module.css';

const Metrics: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={`section ${styles.metrics}`}>
      <div className="container">
        <div className="section-title">
          <h2>{t.metrics.title}</h2>
        </div>
        <div className={styles.metricsGrid}>
          {t.metrics.items.map((metric, index) => (
            <div key={index} className={styles.metricCard}>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;

