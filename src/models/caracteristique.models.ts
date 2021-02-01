import { Plante } from "./plante.models";

export interface Caracteristique {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  nom: string;
  valeur: string;
  plante: Plante;
}
