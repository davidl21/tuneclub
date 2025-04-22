import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Room from "./pages/room.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/room",
    element: <Room />,
  },
  {
    path: "/features",
    element: (
      <div className="min-h-screen flex items-center justify-center text-white">
        Features page coming soon
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div className="min-h-screen flex items-center justify-center text-white">
        Contact page coming soon
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
