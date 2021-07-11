import { combineReducers } from "redux";
import { cartReducer } from "./CartReducers";
import { cartModalReducer } from "./CartModalReducers";

const rootReducer = combineReducers({
   cart: cartReducer,
   cartModal: cartModalReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
