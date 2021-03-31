import { ActionCreator } from "redux";
import store from "../store";
import { Action } from "../types";
import { LOG_IN, LOG_OUT } from "./constants";

export type LogInAction = Action<Boolean>;
export type LogOutAction = Action<Boolean>;

export type ConnexionAction = LogInAction | LogOutAction;

const logInAction: ActionCreator<LogInAction> = () => ({
  type: LOG_IN,
  payload: true,
});

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
