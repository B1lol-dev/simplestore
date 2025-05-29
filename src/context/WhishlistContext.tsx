import { createContext, useContext, useReducer, type ReactNode } from "react";

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const WhishlistContext = createContext<any>(null);

const initialState = {
  whishlist: [],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: any, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_WHISHLIST":
      return { ...state, whishlist: [...state.whishlist, payload] };
    case "DELETE_FROM_WHISHLIST":
      return {
        ...state,
        whishlist: Array(state.whishlist).filter((item) => item.id !== payload),
      };
    case "TOGGLE_WHISHLIST":
      return state.whishlist.find(
        (item: { id: number }) => item.id === payload.id
      )
        ? {
            ...state,
            whishlist: state.whishlist.filter(
              (item: { id: number }) => item.id !== payload.id
            ),
          }
        : {
            ...state,
            whishlist: [...state.whishlist, payload],
          };
    default:
      return state;
  }
};

export const WhishlistContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const store = useReducer(reducer, initialState);

  return (
    <WhishlistContext.Provider value={store}>
      {children}
    </WhishlistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWhishlist = () => useContext(WhishlistContext);
