import { Product } from "../../interface/CartInterface";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface CartState {
   amount: number;
   products: Product[];
}

const initialState = {
   amount: 0,
   products: [],
};

export const cartReducer = (
   state: CartState = initialState,
   action: Action
) => {
   switch (action.type) {
      case ActionType.ADD_TO_CART:
         const check = state.products.find(
            (product) =>
               product.productInfo.slug === action.payload.productInfo.slug &&
               product.colorInfo.slug === action.payload.colorInfo.slug
         );
         if (check) {
            return {
               ...state,
               amount: state.amount + action.payload.quantity,
               products: state.products.map((product) =>
                  product.productInfo.slug ===
                     action.payload.productInfo.slug &&
                  product.colorInfo.slug === action.payload.colorInfo.slug
                     ? {
                          ...product,
                          quantity: product.quantity + action.payload.quantity,
                       }
                     : product
               ),
            };
         } else {
            return {
               ...state,
               amount: state.amount + action.payload.quantity,
               products: [...state.products, { ...action.payload }],
            };
         }
      case ActionType.REMOVE_FROM_CART:
         return {
            ...state,
            amount: state.amount - action.payload.quantity,
            products: state.products.filter(
               (product) =>
                  JSON.stringify(product) !== JSON.stringify(action.payload)
            ),
         };
      default:
         return state;
   }
};
