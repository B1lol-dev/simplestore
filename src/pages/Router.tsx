import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "@/utils/Suspense";
import { Toaster } from "react-hot-toast";
import Product from "./Products/Product";
import Products from "./Products/Products";
import { Users } from "lucide-react";
import User from "./Users/User";

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
            path="/products"
            element={
              <Suspense>
                <Products />
              </Suspense>
            }
          />

          <Route
            path="/products/:id"
            element={
              <Suspense>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="/users"
            element={
              <Suspense>
                <Users />
              </Suspense>
            }
          />

          <Route
            path="/users/:id"
            element={
              <Suspense>
                <User />
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
