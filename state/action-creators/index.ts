import { Product } from "../../interface/CartInterface";
import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const addToCart = (product: Product) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({ type: ActionType.ADD_TO_CART, payload: product });
   };
};

export const removeFromCart = (product: Product) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({ type: ActionType.REMOVE_FROM_CART, payload: product });
   };
};
