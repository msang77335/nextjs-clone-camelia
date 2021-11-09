import { Product } from "../../interface/CartInterface";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface CartState {
   amount?: number;
   products?: Product[];
   totalPrice?: number;
}

const initialState = {
   amount: 0,
   products: [] as Product[],
   totalPrice: 0,
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
                          totalPrice:
                             action.payload.productInfo.price *
                             (product.quantity + action.payload.quantity),
                       }
                     : product
               ),
               totalPrice:
                  state.totalPrice +
                  action.payload.productInfo.price * action.payload.quantity,
            };
         } else {
            return {
               ...state,
               amount: state.amount + action.payload.quantity,
               products: [
                  ...state.products,
                  {
                     ...action.payload,
                     totalPrice:
                        action.payload.productInfo.price *
                        action.payload.quantity,
                  },
               ],
               totalPrice:
                  state.totalPrice +
                  action.payload.productInfo.price * action.payload.quantity,
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
            totalPrice:
               state.totalPrice -
               action.payload.productInfo.price * action.payload.quantity,
         };
      case ActionType.UPDATE_CART:
         const amount = action.payload
            .map((product) => product.quantity * 1)
            .reduce((a, b) => a + b, 0);
         const totalPrice = action.payload
            .map((product) => product.quantity * product.productInfo.price)
            .reduce((a, b) => a + b, 0);
         return {
            ...state,
            amount: amount,
            products: action.payload,
            totalPrice: totalPrice,
         };
      case ActionType.RESET_CART:
         return {
            ...state,
            amount: 0,
            products: [] as Product[],
            totalPrice: 0,
         };
      default:
         return state;
   }
};
