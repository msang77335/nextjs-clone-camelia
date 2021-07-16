import { Product } from "../../interface/CartInterface";
import { ActionType } from "../action-types";

interface AddCartAction {
   type: ActionType.ADD_TO_CART;
   payload: Product;
}

interface RemoveCartAction {
   type: ActionType.REMOVE_FROM_CART;
   payload: Product;
}

interface UpdateCartAction {
   type: ActionType.UPDATE_CART;
   payload: Product[];
}

interface ResetCartAction {
   type: ActionType.RESET_CART;
   payload: null;
}

interface OpenCartModalAction {
   type: ActionType.OPEN_CART_MODAL;
   payload: null;
}

interface CloseCartModalAction {
   type: ActionType.CLOSE_CART_MODAL;
   payload: null;
}

export type Action =
   | AddCartAction
   | RemoveCartAction
   | OpenCartModalAction
   | CloseCartModalAction
   | UpdateCartAction
   | ResetCartAction;
