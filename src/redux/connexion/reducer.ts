import { Reducer } from "redux";
import ConnexionAction, { LogInAction, LogOutAction } from "./action";
import { LOG_IN, LOG_OUT } from "./constants";

export type ConnexionState = {
  isLoggedIn: Boolean;
};

const initialState: ConnexionState = {
  isLoggedIn: false,
};

const connexionReducer: Reducer<ConnexionState | undefined, ConnexionAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOG_IN: {
      const { payload: isLoggedIn } = action as LogInAction;
      return {
        ...state,
        isLoggedIn,
      };
    }

    case LOG_OUT: {
      const { payload: isLoggedIn } = action as LogOutAction;
      return {
        ...state,
        isLoggedIn,
      };
    }

    default:
      return state;
  }
};

export default connexionReducer;
