import { AxiosInstance } from "axios";
import axiosHttpClient from "../axios";
import { Plante } from "../models/plante.models";

class ApiService {
  private http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  async fecthPlantes() {
    const { data: plantes } = await this.http.get<Array<Plante>>("/plante");

    return plantes;
  }

  async fecthPlante(id: number) {
    const { data: plante } = await this.http.get<Plante>("/plante/" + id);

    return plante;
  }

  async addPlante(nom: string, description: string, image: string) {
    try {
      const plante = this.http.post<Plante>("/plante", {
        nom: nom,
        description: nom,
        image: image,
        created_at: Date.now(),
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
}

export const apiService = new ApiService(axiosHttpClient);
export default ApiService;
