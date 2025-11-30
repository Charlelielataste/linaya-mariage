export interface Robe {
  id: number;
  name: string;
  collection: string;
  illustration: string;
  description: string;
  price?: string;
  details?: string[];
  images?: string[];
}

export const robes: Robe[] = [
  {
    id: 1,
    name: "Élégance Classique",
    collection: "Princesse",
    illustration: "dress-princess",
    description: "Robe de mariée princesse en satin avec broderies délicates",
    price: "À partir de 800€",
    details: [
      "Robe princesse en satin de qualité",
      "Broderies délicates et raffinées",
      "Traîne ajustable",
      "Taille disponible : 36 à 44",
    ],
    images: [
      "https://etoile-nuptiale.com/cdn/shop/files/RobeBohemeBlancheMariage_4.jpg?v=1713872938&width=1080",
      "https://etoile-nuptiale.com/cdn/shop/files/RobeBohemeBlancheMariage_4.jpg?v=1713872938&width=1080",
      "https://etoile-nuptiale.com/cdn/shop/files/RobeBohemeBlancheMariage_4.jpg?v=1713872938&width=1080",
    ],
  },
  {
    id: 2,
    name: "Sophistication Moderne",
    collection: "Sirène",
    illustration: "dress-sirene",
    description: "Silhouette sirène en dentelle avec dos nu élégant",
    price: "À partir de 950€",
    details: [
      "Silhouette sirène moulante",
      "Dentelle de qualité supérieure",
      "Dos nu avec fermeture invisible",
      "Taille disponible : 34 à 42",
    ],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
    ],
  },
  {
    id: 3,
    name: "Romance Bohème",
    collection: "Oriental",
    illustration: "dress-trapeze",
    description: "Robe orientale fluide en mousseline pour un style bohème",
    price: "À partir de 750€",
    details: [
      "Style oriental moderne et fluide",
      "Mousseline légère et aérienne",
      "Parfait pour un mariage en extérieur",
      "Taille disponible : 36 à 44",
    ],
    images: [
      "https://tendance-champetre.com/cdn/shop/files/hippie-robe-de-mariee-boheme-champetre-blanc-sur-mesure-33630973034630.jpg?v=1721979191&width=600",
      "https://tendance-champetre.com/cdn/shop/files/hippie-robe-de-mariee-boheme-champetre-blanc-sur-mesure-33630973034630.jpg?v=1721979191&width=600",
      "https://tendance-champetre.com/cdn/shop/files/hippie-robe-de-mariee-boheme-champetre-blanc-sur-mesure-33630973034630.jpg?v=1721979191&width=600",
    ],
  },
  {
    id: 4,
    name: "Rêve de Princesse",
    collection: "Princesse",
    illustration: "dress-princess",
    description: "Robe ample avec volants et détails perlés",
    price: "À partir de 900€",
    details: [
      "Robe princesse avec volants élégants",
      "Détails perlés et brodés",
      "Traîne royale",
      "Taille disponible : 36 à 46",
    ],
    images: [
      "https://mariage-eternel.com/cdn/shop/files/robe-de-mariee-de-luxe-princesse-1_turbo-687561_1200x.webp?v=1718700846",
      "https://mariage-eternel.com/cdn/shop/files/robe-de-mariee-de-luxe-princesse-1_turbo-687561_1200x.webp?v=1718700846",
      "https://mariage-eternel.com/cdn/shop/files/robe-de-mariee-de-luxe-princesse-1_turbo-687561_1200x.webp?v=1718700846",
    ],
  },
  {
    id: 5,
    name: "Glamour Intemporel",
    collection: "Sirène",
    illustration: "dress-sirene",
    description: "Silhouette moulante avec traîne royale",
    price: "À partir de 1100€",
    details: [
      "Silhouette sirène glamour",
      "Tissu premium",
      "Traîne royale spectaculaire",
      "Taille disponible : 34 à 42",
    ],
    images: [
      "https://www.boutiquesolution.fr/public/img/big/1dc40bbba32799c9a787265f3acd5a7c.jpg",
      "https://www.boutiquesolution.fr/public/img/big/1dc40bbba32799c9a787265f3acd5a7c.jpg",
      "https://www.boutiquesolution.fr/public/img/big/1dc40bbba32799c9a787265f3acd5a7c.jpg",
    ],
  },
  {
    id: 6,
    name: "Élégance Contemporaine",
    collection: "Oriental",
    illustration: "dress-trapeze",
    description: "Style moderne et épuré pour la mariée d'aujourd'hui",
    price: "À partir de 850€",
    details: [
      "Design contemporain et épuré",
      "Lignes modernes",
      "Parfait pour un mariage chic",
      "Taille disponible : 36 à 44",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0090/8643/5394/files/robe-mariee_c1c7b518-df02-475a-b731-cfe2b2e9f060_640x.png?v=1694100711",
      "https://cdn.shopify.com/s/files/1/0090/8643/5394/files/robe-mariee_c1c7b518-df02-475a-b731-cfe2b2e9f060_640x.png?v=1694100711",
      "https://cdn.shopify.com/s/files/1/0090/8643/5394/files/robe-mariee_c1c7b518-df02-475a-b731-cfe2b2e9f060_640x.png?v=1694100711",
    ],
  },
];

export const collections = ["Toutes", "Princesse", "Sirène", "Oriental"];
