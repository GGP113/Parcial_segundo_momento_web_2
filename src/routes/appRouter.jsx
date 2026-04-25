import Filosofia from "../pages/Filosofia";
import PaginaPrincipal from "../pages/PaginaPrincipal";
import Galeria from "../pages/Galeria";
import Reservas from "../pages/Reservas";

let router = [
  { path: "/philosophy", element: <Filosofia /> },

  { path: "/gallery", element: <Galeria/> },

  { path: "/booking", element: <Reservas/> },

  { path: "/", element: <PaginaPrincipal /> },
];

export default router;
