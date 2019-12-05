import todo from "./todo.slice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ todo });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
