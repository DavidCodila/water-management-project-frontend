import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles.css";
import App from './App.tsx';
import AppartmentDetailsPage from './AppartmentDetailsPage.tsx';
import PrintBill from "./PrintBill.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "water-accounts/2131241",
    element: <AppartmentDetailsPage />,
  },
  {
    path: "billPage/2131241",
    element: <PrintBill />,
  }
]);

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
