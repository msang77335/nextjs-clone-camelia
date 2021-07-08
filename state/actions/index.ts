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

export type Action = AddCartAction | RemoveCartAction;
