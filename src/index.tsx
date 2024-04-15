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
import { id } from "./id.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "water-accounts",
    element: <AppartmentDetailsPage />,
  },
  {
    path: "billPage",
    element: <PrintBill />,
  }
]);

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
