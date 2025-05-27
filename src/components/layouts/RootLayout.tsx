import React from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";

// hooks
import { useNetworkState } from "react-use";

const RootLayout = () => {
  const networkState = useNetworkState();

  if (!networkState.online) {
    toast.error("You are offline", {
      removeDelay: Number.MAX_VALUE,
    });
  }

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default React.memo(RootLayout);
