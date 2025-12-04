import Link from "next/link";
import styles from "./page.module.css";
import { getExpeditionBySlug } from "@/data/expeditions";

export default async function ExpeditionDetailPage({ params }) {
  const { slug } = await params;

  const expedition = getExpeditionBySlug(slug);

  if (!expedition) {
    return (
      <div className={styles.wrapper}>
        <Link href="/expeditions" className={styles.back}>
          ← Retour aux expéditions
        </Link>
        <p>Expédition introuvable.</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Link href="/expeditions" className={styles.back}>
        ← Retour aux expéditions
      </Link>

      <h1 className={styles.title}>{expedition.titre}</h1>

      <p className={styles.subtitle}>{expedition.resume}</p>

      <section className={styles.section}>
        <h2>Résumé de l’aventure</h2>
        <p>
          Après avoir fait le tour du Mont-Blanc en 10jours avec des amis en aoüt 2024, j'ai voulu réitérer l'expérience en y ajoutant des contraintes:
          -4 jours seulement pour faire le TMB(format trail et bivouac, 170km, 11000d+)
          -En autonomie sur la nourriture, donc je ne pouvais me ravitailler qu'en eau. Je devais porter tout mon matériel et ma nourriture pour l'aventure.
          Ce défi m'est aussi venu comme un entrainement pour un autre objectif sportfi que j'avais en ligne de mire: un trail de 75km et 3300d+ en Île de France, les 40 bosses!
          L'expérience était génial, ça a conforté mon attrait pour ce sport et j'ai pu faire des super rencontres sur le parcours.
        </p>
      </section>

      {/*<section className={styles.section}>
        <h2>Itinéraire</h2>
        <ul>
          <li>Étape 1 – (à compléter)</li>
          <li>Étape 2 – (à compléter)</li>
          <li>Étape 3 – (à compléter)</li>
        </ul>
      </section>*/}

      <div className={styles.gallery}>
        {expedition.photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${expedition.titre} photo ${i + 1}`}
            className={styles.galleryImg}
          />
        ))}
      </div>
    </div>
  );
}
