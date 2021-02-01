export interface Plante {
  id: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  nom: string;
  description?: string;
  image: string;
}
