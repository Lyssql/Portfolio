import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.contact}>
          <span className={styles.item}>
            Tél : <a href="tel:+33749393328">+33 7 49 39 33 28         </a>
          </span>
          <span className={styles.item}>
            Email : <a href="mailto:ulysse.garnier@edu.devinci.fr">ulysse.garnier@edu.devinci.fr         </a>
          </span>
          <span className={styles.item}>
            <a href="https://www.linkedin.com/in/ulysse-garnier-710b95230/" target="_blank" rel="noreferrer">
              LinkedIn          
            </a>
          </span>
          <span className={styles.item}>
            <a href="https://github.com/Lyssql" target="_blank" rel="noreferrer">
                   GitHub      
            </a>
          </span>
        </div>

        <div className={styles.copy}>
          © {currentYear} Ulysse Garnier
        </div>
      </div>
    </footer>
  );
}
