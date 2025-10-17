import Home from "../pages/Home";

import { createBrowserRouter } from "react-router-dom";
import Perfil from "../pages/Perfil";
import Carrinho from "../pages/Carrinho";
import AdminLayout from "../pages/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "perfil",
        element: <Perfil />,
      },
      {
        path: "carrinho",
        element: <Carrinho />,
      },
    ],
  },
]);
