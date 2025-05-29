import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";

// hooks
import { useNetworkState } from "react-use";
import { Navbar } from "../ui/navbar";

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
        <Navbar />
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
