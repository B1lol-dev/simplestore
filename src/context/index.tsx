import type { ReactNode } from "react";
import { WhishlistContextProvider } from "./WhishlistContext";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <WhishlistContextProvider>{children}</WhishlistContextProvider>;
};
