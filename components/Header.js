import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/">
            <span>Ulysse Garnier</span> · Creative Technologist
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Accueil</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/expeditions">Expéditions</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
