import { combineReducers } from "redux";
import Reducer from "./Redux/Reducer";

const RootReducer = combineReducers({
  Reducer: Reducer,
});

export default RootReducer;
