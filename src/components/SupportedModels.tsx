import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaShieldAlt } from 'react-icons/fa';
import styles from './SupportedModels.module.css';

const SupportedModels: React.FC = () => {
  const { t } = useLanguage();

  const models = [
    { 
      name: 'ChatGPT', 
      logoText: 'ChatGPT',
      color: '#10a37f',
      bgColor: 'rgba(16, 163, 127, 0.1)'
    },
    { 
      name: 'Gemini', 
      logoText: 'Gemini',
      color: '#4285f4',
      bgColor: 'rgba(66, 133, 244, 0.1)'
    },
    { 
      name: 'Claude', 
      logoText: 'Claude',
      color: '#d97757',
      bgColor: 'rgba(217, 119, 87, 0.1)'
    },
    { 
      name: 'Perplexity', 
      logoText: 'Perplexity',
      color: '#6366f1',
      bgColor: 'rgba(99, 102, 241, 0.1)'
    },
  ];

  return (
    <section id="models" className={`section ${styles.supportedModels}`}>
      <div className="container">
        <div className="section-title">
          <h2>{t.supportedModels.title}</h2>
          <p className="section-subtitle">{t.supportedModels.subtitle}</p>
          <p className={styles.description}>{t.supportedModels.description}</p>
        </div>
        <div className={styles.modelsGrid}>
          {models.map((model, index) => (
            <div key={index} className={styles.modelCard}>
              <div 
                className={styles.modelLogo} 
                style={{ 
                  backgroundColor: model.bgColor,
                  borderColor: `${model.color}30`
                }}
              >
                <span 
                  className={styles.logoText}
                  style={{ color: model.color }}
                >
                  {model.logoText}
                </span>
                <div className={styles.secureBadge}>
                  <FaShieldAlt className={styles.shieldIcon} />
                </div>
              </div>
              <h3 className={styles.modelName}>{model.name}</h3>
              <p className={styles.secureText}>{t.supportedModels.securedConnection}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedModels;

