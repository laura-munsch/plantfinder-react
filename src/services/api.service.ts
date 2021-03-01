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

}

export const apiService = new ApiService(axiosHttpClient);
export default ApiService;
