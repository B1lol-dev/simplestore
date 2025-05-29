import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "@/utils/Suspense";
import { Toaster } from "react-hot-toast";

// pages
const Layout = lazy(() => import("@/components/layouts/RootLayout"));
const Home = lazy(() => import("./Home/Home"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const Products = lazy(() => import("./Products/Products"));
const Product = lazy(() => import("./Products/Product"));
const Users = lazy(() => import("./Users/Users"));
const User = lazy(() => import("./Users/User"));
const Whishlist = lazy(() => import("./Whishlist/Whishlist"));

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

          <Route path="/home" element={<Navigate to="/" />} />

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
            path="/whishlist"
            element={
              <Suspense>
                <Whishlist />
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

export default Router;
