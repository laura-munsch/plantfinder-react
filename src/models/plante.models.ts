import { Caracteristique } from "./caracteristique.models";
import { Categorie } from "./categorie.model";

export interface Plante {
  id: number;
  created_at: Date | string;
  updated_at?: Date | string;
  deleted_at?: Date | string;
  nom: string;
  description?: string;
  image: string;
  caracteristiques?: Array<Caracteristique>
  categories?: Array<Categorie>
}
