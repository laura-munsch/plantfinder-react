import { Reducer } from "redux";
import { Categorie } from "../../models/categorie.model";
import { CategoriesActions, LoadCategoriesAction } from "./actions";
import { LOAD_CATEGORIES } from "./constants";

export type CategorieState = {
  toutesLesCategories: Categorie[];
};

const initialState: CategorieState = {
  toutesLesCategories: [],
};

const categoriesReducer: Reducer<CategorieState, CategoriesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOAD_CATEGORIES: {
      const { payload: toutesLesCategories } = action as LoadCategoriesAction;
      return {
        ...state,
        toutesLesCategories,
      };
    }

    default:
      return state;
  }
};

export default categoriesReducer;
