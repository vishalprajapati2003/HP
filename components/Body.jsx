import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Packages from "./Packages";
import ContactPage from "./Contact";
import OrderPage from "./Order";
import PackageDetail from "./PackageDetail";
import Payment from "./Payment";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/packages",
    element: <Packages />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/packageDetail/:id", // ✅ Accepts dynamic ID
    element: <PackageDetail />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
