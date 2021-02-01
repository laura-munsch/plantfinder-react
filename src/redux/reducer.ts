import { combineReducers } from "redux";
import plantesReducer from "./plantes/reducer";

const rootReducer = combineReducers({
  plantes: plantesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
