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

export const updateCart = (products: Product[]) => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({ type: ActionType.UPDATE_CART, payload: products });
   };
};

export const openCartModal = () => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({ type: ActionType.OPEN_CART_MODAL, payload: null });
   };
};

export const closeCartModal = () => {
   return (dispatch: Dispatch<Action>) => {
      dispatch({ type: ActionType.CLOSE_CART_MODAL, payload: null });
   };
};
