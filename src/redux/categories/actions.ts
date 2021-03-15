import { ActionCreator } from "redux";
import { Categorie } from "../../models/categorie.model";
import { LOAD_CATEGORIES } from "./constants";
import { Action } from "../types";
import { apiService } from "../../services/api.service";
import store from "../store";

export type LoadCategoriesAction = Action<Array<Categorie>>;

const loadCategories: ActionCreator<LoadCategoriesAction> = (
  categories: Array<Categorie>
) => ({
  type: LOAD_CATEGORIES,
  payload: categories,
});

export const fecthCategories = async () => {
  const categories = await apiService.fecthCategories();
  store.dispatch(loadCategories(categories));

  return categories;
};

const CategoriesActions = {
  load: loadCategories,
};

export default CategoriesActions;
