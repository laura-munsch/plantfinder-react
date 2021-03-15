import { combineReducers } from "redux";
import categoriesReducer from "./categories/reducer";
import plantesReducer from "./plantes/reducer";

const rootReducer = combineReducers({
  plantes: plantesReducer,
  categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
