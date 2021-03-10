import { ActionCreator } from "redux";
import { Plante } from "../../models/plante.models";
import { LOAD_PLANTES } from "./constants";
import { Action } from "../types";
import { apiService } from "../../services/api.service";
import store from "../store";

export type LoadPlantesAction = Action<Array<Plante>>;

const loadPlantes: ActionCreator<LoadPlantesAction> = (
  plantes: Array<Plante>
) => ({
  type: LOAD_PLANTES,
  payload: plantes,
});

export const fetchPlantes = async () => {
  const plantes = await apiService.fecthPlantes();
  store.dispatch(loadPlantes(plantes));

  return plantes;
};

export const fetchPlante = async (id: number) => {
  const plante = await apiService.fecthPlante(id);

  return plante;
};

export const addPlante = async (
  nom: string,
  description: string,
  image: string
) => {
  const plante = await apiService.addPlante(nom, description, image);

  return plante;
};

export const removePlante = async (id: number) => {
  const plante = await apiService.deletePlante(id);

  return plante;
};

const PlantesActions = {
  load: loadPlantes,
};

export default PlantesActions;
