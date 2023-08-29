import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";
import Header from "./Components/Header";
import Erro from "./Pages/Erro";
import Produto from "./Pages/Produto";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
    errorElement: <Erro />,
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
  {
    path: "/produto/:id",
    element: (
      <>
        <Header />
        <Produto />
      </>
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
