import { combineReducers } from "redux";
import { cartReducer } from "./CartReducers";

const allReducers = combineReducers({ cart: cartReducer });

export default allReducers;

export type State = ReturnType<typeof allReducers>;
