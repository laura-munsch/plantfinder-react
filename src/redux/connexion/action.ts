import { ActionCreator } from "redux";
import store from "../store";
import { Action } from "../types";
import { LOG_IN, LOG_OUT } from "./constants";

export type LogInAction = Action<Boolean>;
export type LogOutAction = Action<Boolean>;

export type ConnexionAction = LogInAction | LogOutAction;

// les actions génèrent un changement dans l'état global à travers le reducer
// si l'utilisateur-rice se connecte, on passe la valeur à "true"
const logInAction: ActionCreator<LogInAction> = () => ({
  type: LOG_IN,
  payload: true,
});

// si l'utilisateur-rice se déconnecte, on passe la valeur à "false"
const logOutAction: ActionCreator<LogInAction> = () => ({
  type: LOG_OUT,
  payload: false,
});

export const logIn = () => {
  store.dispatch(logInAction());
};

export const logOut = () => {
  store.dispatch(logOutAction());
};

export default ConnexionAction;
