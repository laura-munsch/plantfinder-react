export interface Caracteristique {
  id: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  nom: string;
  valeur: string;
  plante_id: number;
}
