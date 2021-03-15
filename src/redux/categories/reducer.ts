import { Reducer } from "redux";
import { LoadCategoriesAction } from "./actions";
import { LOAD_CATEGORIES } from "./constants";

// TODO : essayer de remplacer le any ci-dessous
export type CategorieState = any;
export type CategorieActions = LoadCategoriesAction;

const initialState: CategorieState = [];

const categoriesReducer: Reducer<CategorieState, CategorieActions> = (
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
