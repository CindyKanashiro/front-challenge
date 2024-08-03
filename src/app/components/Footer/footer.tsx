import React from 'react';
import styles from './Footer.module.css';


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSpace}></div>
        <p>© 2024 XPTO S.A, CNPJ: xx.xxx.xxx/xxxx-xx</p>
        <a href="#" className={styles.footerLink}>termos de uso</a>
      </div>
    </footer>
  );
};

export default Footer;
