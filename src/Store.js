import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import RootReducers from "./Reducers/Reducers";

const initialState = {};
const middleware = [thunk];

//Store

const store = createStore(
  RootReducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
