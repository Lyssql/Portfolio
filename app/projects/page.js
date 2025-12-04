import styles from './page.module.css';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';


export default function ProjectsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <h1>Projets</h1>
        <Link href="/" className={styles.backLink}>
          ← Retour à l’accueil
        </Link>
      </div>
      <p>
        Une vue d’ensemble des projets menés autour du mycélium, des bioplastiques et de l’innovation.
      </p>
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
