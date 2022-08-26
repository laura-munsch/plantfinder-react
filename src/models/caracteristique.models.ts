export interface Caracteristique {
  id: number;
  createdAt: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
  nom: string;
  valeur: string;
  plante_id: number;
}
