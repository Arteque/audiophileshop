import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Templates/Root";
import Error from "./Pages/Error";
import Start from "./Pages/Dashboard/Start";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Start />
      }
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
