import { Reducer } from "redux";
import { LoadPlantesAction } from "./actions";
import { LOAD_PLANTES } from "./constants";

// TODO : essayer de remplacer le any ci-dessous
export type PlanteState = any;
export type PlanteActions = LoadPlantesAction;

const initialState: PlanteState = [];

const plantesReducer: Reducer<PlanteState, PlanteActions> = (
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
