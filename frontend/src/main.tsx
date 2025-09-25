import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import RoomDetails from "./pages/RoomDetails.tsx";
import AppLayout from "./App.tsx";

const router = createBrowserRouter([
   {
      element: <AppLayout />,
      children: [
         {
            path: "/",
            Component: Home,
         },
         {
            path: "/rooms/:roomId",
            Component: RoomDetails,
         },
      ],
   },
]);

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
