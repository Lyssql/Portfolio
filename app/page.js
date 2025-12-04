import styles from './page.module.css';
import ProjectCard from '@/components/ProjectCard';
import CVViewer from '@/components/CVViewer';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div>
          <h1>
            Ulysse Garnier
          </h1>
          <h2>
            Étudiant en ingénierie à l'ESILV en M2, majeure Creative Technology et Resilient future
          </h2>
          <p>
            Je m’intéresse à l’innovation, aux biomatériaux et à la conception de solutions durables. 
            Mon objectif : relier technologies créatives, R&D et impact environnemental positif au sein 
            de projets concrets.
          </p>
          <div className={styles.buttons}>
            <a href="#projets">Projets</a>
            <a href="#expeditions">Expéditions</a>
            <a href="#cv">CV</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <img
          src="/avatar.jpg"
          alt="Portrait"
          className={styles.avatar}
        />
      </section>
      <section id="projets" className={styles.section}>
        <h2>Projets</h2>
        <p>Sélection de projets autour du mycélium, des biomatériaux et de l’innovation.</p>
        <div className={styles.projectsGrid}>
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section id="expeditions" className={styles.section}>
        <h2>Expéditions & projets sportifs</h2>
        <p>
          Parce que l’exploration du monde extérieur nourrit la créativité : voile, 
          montagne et itinérances en autosuffisance.
        </p>
        <a href="/expeditions" className={styles.mapLink}>
          <img src="/images/expeditions/atlas.jpg" alt="Représentation d’une carte du monde" />
        </a>
      </section>

      {/* CV */}
      <section id="cv" className={styles.section}>
        <h2>CV & Compétences</h2>
        <div className={styles.cvContainer}>
          <div className={styles.highlight}>
            Je suis actuellement à la recherche d’un stage dans les domaines suivants :
            <ul>
              <li>Innovation</li>
              <li>Recherche & Développement (R&D)</li>
              <li>Biomatériaux</li>
              <li>Mission à portée environnementale</li>
            </ul>
          </div>
          <CVViewer />
        </div>
      </section>
    </main>
  );
}
