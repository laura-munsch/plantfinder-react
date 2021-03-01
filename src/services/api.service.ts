import { AxiosInstance } from "axios";
import axiosHttpClient from "../axios";
import { Plante } from "../models/plante.models";

class ApiService {
  private http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  async fecthPlantes() {
    const { data: plantes } = await this.http.get<Plante>("/plante");

    return plantes;
  }

}

export const apiService = new ApiService(axiosHttpClient);
export default ApiService;
