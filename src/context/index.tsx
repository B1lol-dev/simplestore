import type { ReactNode } from "react";
import { WhishlistContextProvider } from "./WhishlistContext";
import { CartContextProvider } from "./CartContext";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContextProvider>
      <WhishlistContextProvider>{children}</WhishlistContextProvider>
    </CartContextProvider>
  );
};
