import { DELETE_DATA, FETCH_DATA, UPDATE_DATA } from "../Actions/types";

const initialState = {
  data: "",
};

const RootReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      console.log("data processing");
      return {
        ...state,
        data: action.data,
      };

    case UPDATE_DATA:
      return {
        ...state,
        data: action.data,
      };
    case DELETE_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default RootReducers;
