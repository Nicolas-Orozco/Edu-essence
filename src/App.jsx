import Home from "./routes/Home";
import {
  Conquista_espacio,
  Fuentes_energia,
  Magnitudes_fisicas,
  Materia_energia,
  Metodologia,
  Tierra_universo,
  Periodos_litico,
  Rutas_migratorias,
  Tahuantinsuyo,
  Periodo_formativo,
  Estados_regionales,
  Estados_panandinos,
  Desarrollo_regional,
} from "./routes/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/conquista_espacio",
    element: <Conquista_espacio />,
  },
  {
    path: "/fuentes_energia",
    element: <Fuentes_energia />,
  },
  {
    path: "/magnitudes_fisicas",
    element: <Magnitudes_fisicas />,
  },
  {
    path: "/materia_energia",
    element: <Materia_energia />,
  },
  {
    path: "/metodologia",
    element: <Metodologia />,
  },
  {
    path: "/tierra_universo",
    element: <Tierra_universo />,
  },
  {
    path: "/periodos_litico",
    element: <Periodos_litico />,
  },
  {
    path: "/rutas_migratorias",
    element: <Rutas_migratorias />,
  },
  {
    path: "/desarrollo_regional",
    element: <Desarrollo_regional />,
  },
  {
    path: "/estados_panandinos",
    element: <Estados_panandinos />,
  },
  {
    path: "/estados_regionales",
    element: <Estados_regionales />,
  },
  {
    path: "/periodo_formativo",
    element: <Periodo_formativo />,
  },
  {
    path: "/tahuantinsuyo",
    element: <Tahuantinsuyo />,
  },
]);
function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
