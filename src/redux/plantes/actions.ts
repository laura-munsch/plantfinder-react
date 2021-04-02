import { ActionCreator } from "redux";
import { Plante } from "../../models/plante.models";
import { LOAD_PLANTES } from "./constants";
import { Action } from "../types";
import { apiService } from "../../services/api.service";
import store from "../store";

export type LoadPlantesAction = Action<Array<Plante>>;

export type PlantesActions = LoadPlantesAction;

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
  image: string,
  categorie?: number
) => {
  const plante = await apiService.addPlante(nom, description, image, categorie);

  return plante;
};

export const updatePlante = async (
  id: number,
  nom: string,
  description: string,
  image: string,
  categorie?: number
) => {
  const plante = await apiService.updatePlante(
    id,
    nom,
    description,
    image,
    categorie
  );

  return plante;
};

export const removePlante = async (id: number) => {
  const plante = await apiService.deletePlante(id);

  return plante;
};

export default PlantesActions;
