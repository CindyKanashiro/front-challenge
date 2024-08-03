import React from 'react';
import styles from './text.module.css';

const Text: React.FC = () => {
  return (
    <div className={styles.textArea}>
      <p>
        Você acessou o dashboard <a href="#">buscas</a> do assunto <a href="#">canais</a>
      </p>
    </div>
  );
};

export default Text;
