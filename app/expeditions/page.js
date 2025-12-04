import Link from 'next/link';
import styles from './page.module.css';
import ExpeditionCard from '@/components/ExpeditionCard';
import EarthCanvas from '@/components/EarthCanvas';
import { expeditions } from '@/data/expeditions';

export function getExpeditionBySlug(slug) {
  return expeditions.find((e) => e.slug === slug);
}

export default function ExpeditionsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <h1>Expéditions & projets sportifs</h1>
        <Link href="/" className={styles.backLink}>
          ← Retour à l’accueil
        </Link>
      </div>
      <p>
        Voile, itinérance, haute montagne… Ces expéditions nourrissent ma façon d’aborder l’innovation : 
        résilience, gestion du risque et adaptation en environnement réel.
      </p>

      <div className={styles.cardsRow}>
        {expeditions.map((e) => (
          <ExpeditionCard key={e.slug} expedition={e} />
        ))}
      </div>

      <div className={styles.canvasBlock}>
        <h2>Carte interactive des expéditions</h2>
        <p>Explorez la Terre en 3D et survolez les tracés pour découvrir chaque projet sportif.</p>
        <EarthCanvas />
      </div>
    </div>
  );
}
