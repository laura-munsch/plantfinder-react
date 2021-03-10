import { Reducer } from "redux";
import { Plante } from "../../models/plante.models";
import { LoadPlantesAction } from "./actions";
import { LOAD_PLANTES } from "./constants";

export type PlanteState = Plante[];
export type PlanteActions = LoadPlantesAction;

const initialState: PlanteState = [];

const plantesReducer: Reducer<PlanteState, PlanteActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOAD_PLANTES: {
      const { payload: plantes } = action as LoadPlantesAction;
      return {
        ...state,
        plantes,
      };
    }

    default:
      return state;
  }
};

export default plantesReducer;
