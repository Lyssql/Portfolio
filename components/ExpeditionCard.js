import Link from 'next/link';
import styles from './ExpeditionCard.module.css';

export default function ExpeditionCard({ expedition }) {
  return (
    <Link href={`/expeditions/${expedition.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={expedition.photos[0]} alt={expedition.titre} />
        <span className={styles.badge}>{expedition.type}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{expedition.titre}</h3>
        <p className={styles.meta}>
          {expedition.annee} · {expedition.duree}
        </p>
        <p className={styles.resume}>{expedition.resume}</p>
      </div>
    </Link>
  );
}
