import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import { WhishlistContextProvider } from "./context/WhishlistContext";

function App() {
  return (
    <WhishlistContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </WhishlistContextProvider>
  );
}

export default App;
