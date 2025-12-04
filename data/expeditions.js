import { voileCoords } from "./coords/voile";
import { tmbCoords } from "./coords/tmbCoords";
import { atlasCoords } from "./coords/atlasCoords";

export const expeditions = [
  {
    slug: "voile",
    titre: "Voile",
    resume: "3 semaines de navigation en mer…",
    photos: [
      "/images/expeditions/voile.jpg",
      "/images/expeditions/voile-2.jpg"
    ],
    coordinates: voileCoords,
  },
  {
    slug: "tmb",
    titre: "Tour du Mont Blanc",
    resume: "Trail en 4j autour du Mont Blanc…",
    photos: [
      "/images/expeditions/tmb.jpg",
      "/images/expeditions/tmb-2.jpg"
    ],
    coordinates: tmbCoords,
  },
  {
    slug: "atlas",
    titre: "Traversée de l’Anti-tlas",
    resume: "Trek en autonomie complète dans l'Anti-Atlas…",
    photos: [
      "/images/expeditions/atlas.jpg",
      "/images/expeditions/atlas-2.jpg"
    ],
    coordinates: atlasCoords,
  }
];

// Fonction pour la route dynamique
export function getExpeditionBySlug(slug) {
  return expeditions.find((e) => e.slug === slug);
}
