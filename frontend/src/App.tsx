import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import { GameCreatePage } from "./pages/GameCreatePage";
import { GameJoinPage } from "./pages/GameJoinPage";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/game/create",
      element: <GameCreatePage />,
    },
    {
      path: "/game/join",
      element: <GameJoinPage />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
