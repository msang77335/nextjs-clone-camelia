import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface CartModalState {
   status?: boolean;
}

const initialState = {
   status: false,
};

export const cartModalReducer = (
   state: CartModalState = initialState,
   action: Action
) => {
   switch (action.type) {
      case ActionType.OPEN_CART_MODAL:
         return { ...state, status: true };
      case ActionType.CLOSE_CART_MODAL:
         return { ...state, status: false };
      default:
         return state;
   }
};
