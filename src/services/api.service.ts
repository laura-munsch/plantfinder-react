import { AxiosInstance } from "axios";
import axiosHttpClient from "../axios";
import { Categorie } from "../models/categorie.model";
import { Plante } from "../models/plante.models";

class ApiService {
  // utilisation d'axios pour communiquer avec l'api
  private http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  // fonctions pour la ressource plante
  async fecthPlantes() {
    const { data: plantes } = await this.http.get<Array<Plante>>("/plante");

    return plantes;
  }

  async fecthPlante(id: number) {
    const { data: plante } = await this.http.get<Plante>("/plante/" + id);

    return plante;
  }

  async addPlante(
    nom: string,
    description: string,
    image: string,
    categorie?: number
  ) {
    try {
      const plante = this.http.post<Plante>("/plante", {
        nom: nom,
        description: description,
        image: image,
        categories: [categorie],
        created_at: Date.now(),
      });

      return plante;
    } catch (error) {
      throw new Error("problème");
    }
  }

  async updatePlante(
    id: number,
    nom: string,
    description: string,
    image: string,
    categorie?: number
  ) {
    try {
      const plante = this.http.patch<Plante>("/plante/" + id, {
        nom: nom,
        description: description,
        image: image,
        categories: [categorie],
        updated_at: Date.now(),
      });

      return plante;
    } catch (error) {
      throw new Error("problème");
    }
  }

  async deletePlante(id: number) {
    try {
      const res = this.http.delete<Plante>("/plante/" + id);
      return await res;
    } catch (error) {
      throw new Error("problème lors de la suppression");
    }
  }

  // fonction pour la ressource catégorie
  async fecthCategories() {
    const { data: categories } = await this.http.get<Array<Categorie>>(
      "/categorie"
    );

    return categories;
  }
}

export const apiService = new ApiService(axiosHttpClient);
export default ApiService;
