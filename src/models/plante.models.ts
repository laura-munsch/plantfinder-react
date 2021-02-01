import { Caracteristique } from "./caracteristique.models";
import { Categorie } from "./categorie.model";

export interface Plante {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  nom: string;
  description: string;
  image: string;
  caracteristiques: Array<Caracteristique>;
  categories: Array<Categorie>;
}
