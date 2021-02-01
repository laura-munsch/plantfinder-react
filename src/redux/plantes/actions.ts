import { ActionCreator } from "redux";
import { Plante } from "../../models/plante.models";
import { ADD_PLANTE, REMOVE_PLANTE } from "./constants";
import { Action } from "../types";

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

export default {
  add: addPlante,
  remove: removePlante,
};
