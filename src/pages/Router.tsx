import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "@/utils/Suspense";
import { Toaster } from "react-hot-toast";

// pages
const Layout = lazy(() => import("@/components/layouts/RootLayout"));
const Home = lazy(() => import("./Home/Home"));
const NotFound = lazy(() => import("./NotFound/NotFound"));

const Router = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default React.memo(Router);
