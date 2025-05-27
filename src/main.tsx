import { lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Suspense } from "./utils/Suspense.tsx";

const App = lazy(() => import("./App.tsx"));

createRoot(document.getElementById("root")!).render(
  <Suspense>
    <App />
  </Suspense>
);
