import { Reducer } from "redux";
import { Plante } from "../../models/plante.models";
import { AddPlanteAction, RemovePlanteAction } from "./actions";
import { ADD_PLANTE, REMOVE_PLANTE } from "./constants";

export type PlanteState = Plante[];
export type PlanteActions = AddPlanteAction | RemovePlanteAction;

const initialState: PlanteState = [];

const plantesReducer: Reducer<PlanteState, PlanteActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_PLANTE: {
      // action à réaliser pour ajouter une plante -> appel api
      return state;
    }

    case REMOVE_PLANTE: {
      // action à réaliser pour enlever une plante -> appel api
      return state;
    }

    default:
      return state;
  }
};

export default plantesReducer;
