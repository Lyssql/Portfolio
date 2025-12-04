import Link from 'next/link';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <img src={project.image} alt={project.titre} />
      <div className={styles.content}>
        <h3 className={styles.title}>{project.titre}</h3>
        <p className={styles.resume}>{project.resume}</p>
      </div>
    </Link>
  );
}
