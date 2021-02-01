import { Plante } from "./plante.models";

export interface Categorie {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deleteddAt: Date;
  nom: string;
  plantes: Array<Plante>;
}
