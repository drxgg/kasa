// Importation des composants de pages.
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Accommodation from "./pages/Accommodation/Accommodation";

// Importation des outils de routage de "react-router-dom".
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Configuration des routes pour l'application.
const appRoutes = createBrowserRouter([
  {
    path: "/", // Route pour la page d'accueil.
    element: <Home />,
  },
  {
    path: "/accommodation/:id", // Route pour les détails d'un hébergement spécifique.
    element: <Accommodation />,
  },
  {
    path: "/about", // Route pour la page "À propos".
    element: <About />,
  },
  {
    path: "*", // Route par défaut pour les URL non trouvées.
    element: <NotFound />,
  },
]);

/**
 * Composant principal de l'application.
 * Il encapsule l'application avec les routes définies.
 */
function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
