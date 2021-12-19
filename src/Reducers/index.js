import { combineReducers } from "redux";
import RootReducers from "../Reducers/Reducers";
export default combineReducers({
  fetched_data: RootReducers,
});
