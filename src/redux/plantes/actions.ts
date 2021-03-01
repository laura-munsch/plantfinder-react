import { ActionCreator } from "redux";
import { Plante } from "../../models/plante.models";
import { ADD_PLANTE, LOAD_PLANTES, REMOVE_PLANTE } from "./constants";
import { Action } from "../types";
import { apiService } from "../../services/api.service";

export type LoadPlantesAction = Action<Array<Plante>>;
export type AddPlanteAction = Action<Plante>;
export type RemovePlanteAction = Action<number>;

const addPlante: ActionCreator<AddPlanteAction> = (
  id: number,
  nom: string,
  image: string,
  description?: string
) => ({
  type: ADD_PLANTE,
  payload: {
    id,
    createdAt: new Date(Date.now()),
    nom,
    image,
    description,
  },
});

const removePlante: ActionCreator<RemovePlanteAction> = (id: number) => ({
  type: REMOVE_PLANTE,
  payload: id,
});

const loadPlantes: ActionCreator<LoadPlantesAction> = (status: any) => ({
  type: LOAD_PLANTES,
  payload: status,
});

export const fetchPlantes = async () => {
  const plantes = await apiService.fecthPlantes();
  return plantes;
};

export const fetchPlante = async (id: number) => {
  const plante = await apiService.fecthPlante(id);
  return plante;
};

const PlantesActions = {
  add: addPlante,
  remove: removePlante,
  load: loadPlantes
}

export default PlantesActions;
