// Importation des styles spécifiques à la page d'accueil.
import "./home.scss";

import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Header /> {/* Composant pour l'en-tête du site */}
      <Banner /> {/* Composant pour afficher la bannière principale */}
      <Gallery /> {/* Composant pour afficher une galerie d'images */}
      <Footer /> {/* Composant pour le pied de page du site */}
    </div>
  );
}
