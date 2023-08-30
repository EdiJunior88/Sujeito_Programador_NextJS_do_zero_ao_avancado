import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Main/Home";
import Repositorio from "./Pages/Repositorio/Repositorio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/repositorio",
    element: <Repositorio />,
  },
  {
    path: "/repositorio/:repositorio",
    element: <Repositorio />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
