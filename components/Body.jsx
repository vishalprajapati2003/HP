import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Packages from "./Packages";
import ContactPage from "./Contact";
import OrderPage from "./Order";
import PackageDetail from "./PackageDetail";
import Payment from "./Payment";
import TourPage from "./TourPage";
import BookPage from "./BookPage"; // Add this import
import ConfirmBooking from "./ConfirmBooking";
import FlightPage from "./Flight";
import HistoryPage from "./history";
import HotelPage from "./Hotel";
import CustomizePackage from "./CustomPackage";
import HotelBook from "./HotelBook";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tours",
    element: <TourPage />,
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
    path: "/book/:tourId",
    element: <BookPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/packageDetail/:id",
    element: <PackageDetail />,
  },
  {
    path: "/payment/:id",
    element: <Payment />,
  },
  {
    path: "/confirm/:id",
    element: <ConfirmBooking />,
  },
  {
    path: "/flight",
    element: <FlightPage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "/hotel",
    element: <HotelPage />,
  },
  {
    path: "/customize",
    element: <CustomizePackage />,
  },
  {
    path: "/hotelbooking",
    element: <HotelBook />,
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
