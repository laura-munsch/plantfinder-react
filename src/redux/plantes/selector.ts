import { Plante } from "../../models/plante.models";
import store from "../store";

export const plantesSelector: Plante[] = store.getState().plantes
  .toutesLesPlantes;
