import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";
import Header from "./Components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/sobre",
    element: (
      <>
        <Header />
        <Sobre />
      </>
    ),
  },
  {
    path: "/contato",
    element: (
      <>
        <Header />
        <Contato />
      </>
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
