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
      const { payload: logIn } = action as LogInAction;
      return {
        ...state,
        logIn,
      };
    }

    case LOG_OUT: {
      const { payload: logOut } = action as LogOutAction;
      return {
        ...state,
        logOut,
      };
    }

    default:
      return state;
  }
};

export default connexionReducer;
