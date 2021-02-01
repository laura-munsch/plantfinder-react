import { Plante } from "./plante.models";

export interface Categorie {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  nom: string;
  plantes: Array<Plante>;
}
