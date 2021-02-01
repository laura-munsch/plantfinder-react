import { Plante } from "./plante.models";

export interface Caracteristique {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deleteddAt: Date;
  nom: string;
  valeur: string;
  plante: Plante;
}
