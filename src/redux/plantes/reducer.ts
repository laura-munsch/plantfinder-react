import { Reducer } from "redux";
import { Plante } from "../../models/plante.models";
import { LoadPlantesAction, PlantesActions } from "./actions";
import { LOAD_PLANTES } from "./constants";

export type PlanteState = {
  toutesLesPlantes: Plante[];
};

const initialState: PlanteState = {
  toutesLesPlantes: [],
};

const plantesReducer: Reducer<PlanteState, PlantesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOAD_PLANTES: {
      const { payload: toutesLesPlantes } = action as LoadPlantesAction;
      return {
        ...state,
        toutesLesPlantes,
      };
    }

    default:
      return state;
  }
};

export default plantesReducer;
