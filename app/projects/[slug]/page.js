import Link from 'next/link';
import styles from './page.module.css';
import { getProjectBySlug } from '@/data/projects';

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className={styles.wrapper}>
        <Link href="/projects" className={styles.back}>
          ← Retour aux projets
        </Link>
        <p>Projet introuvable.</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Link href="/projects" className={styles.back}>
        ← Retour aux projets
      </Link>

      <h1 className={styles.title}>{project.titre}</h1>

      <p className={styles.subtitle}>
        {project.annee} · {project.type} · Rôle : {project.role}
      </p>

      <div className={styles.heroImg}>
        <img src={project.image} alt={project.titre} />
      </div>

      <section className={styles.section}>
        <h2>Contexte</h2>
        <p>{project.contexte}</p>
      </section>

      <section className={styles.section}>
        <h2>Approche</h2>
        <p>{project.approche}</p>
      </section>

      <section className={styles.section}>
        <h2>Résultats</h2>
        <p>{project.resultats}</p>
      </section>

      <div className={styles.gallery}>
        {project.images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${project.titre} – visuel ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
