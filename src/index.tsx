import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateAccountPage from './CreateAccountPage.tsx';
import AppPeopleToAccountPage from './AppPeopleToAccountPage.tsx';
import PrintAccountBillPage from "./PrintAccountBillPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateAccountPage />,
  },
  {
    path: "water-accounts",
    element: <AppPeopleToAccountPage />,
  },
  {
    path: "billPage",
    element: <PrintAccountBillPage />,
  }
]);

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
