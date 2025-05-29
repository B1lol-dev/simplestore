import type { IProduct } from "@/types/api";
import { createContext, useContext, useReducer, type ReactNode } from "react";

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const CartContext = createContext<any>(null);

const initialState = {
  cart: [],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: any, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, payload] };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item: IProduct) => item.id !== payload),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "UPDATE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.map((item: IProduct) =>
          item.id === payload.id ? { ...item, ...payload } : item
        ),
      };
    case "TOGGLE_CART":
      return state.cart.find((item: { id: number }) => item.id === payload.id)
        ? {
            ...state,
            cart: state.cart.filter(
              (item: { id: number }) => item.id !== payload.id
            ),
          }
        : {
            ...state,
            cart: [...state.cart, payload],
          };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const store = useReducer(reducer, initialState);

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
