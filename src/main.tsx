import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToastInit from "./Components/Toastify/ToastInit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToastInit message="Test" toastType="info" />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
