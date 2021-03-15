import { combineReducers } from "redux";
import categoriesReducer from "./categories/reducer";
import plantesReducer from "./plantes/reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  plantes: plantesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
