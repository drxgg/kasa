// Import des modules et des styles
import "./accommodation.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/logement";
import NotFound from "../../pages/NotFound/NotFound";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Accordion from "../../components/accordion/Accordion";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";

// Fonction principale pour le composant "Accommodation"
export default function Accommodation() {
  // État pour gérer les images du carrousel
  const [carouselImages, setCarouselImages] = useState([]);
  // Récupération de l'ID de l'hébergement depuis l'URL
  const accommodationId = useParams().id;

  // Filtrer les données pour obtenir l'hébergement correspondant à l'ID
  const currentAccommodation = data.find((data) => data.id === accommodationId);

  console.log(currentAccommodation);

  // Effet pour initialiser les images du carrousel
  useEffect(() => {
    if (currentAccommodation) {
      setCarouselImages(currentAccommodation.pictures);
    }
  }, [accommodationId, currentAccommodation]);

  if (!currentAccommodation) {
    return <NotFound />;
  }

  // Extraire les informations sur l'hébergement
  const hostName = currentAccommodation.host.name.split(" ");
  const rating = currentAccommodation.rating;
  const description = currentAccommodation.description;
  const equipments = currentAccommodation.equipments;

  // JSX à retourner pour le composant "Accommodation"
  return (
    <>
      <Header />
      <Carousel imageSlider={carouselImages} />
      <main className="accommodation">
        <div className="accommodation_content">
          <div className="accommodation_content_infos">
            <h1>{currentAccommodation.title}</h1>
            <p>{currentAccommodation.location}</p>
            <div>
              {currentAccommodation.tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="accommodation_content_host">
            <div>
              <div className="accommodation_content_host_name">
                <span>{hostName[0]}</span>
                <span>{hostName[1]}</span>
              </div>
              <img
                src={currentAccommodation.host.picture}
                alt="host os this accommodation"
              />
            </div>

            <div className="accommodation_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="accommodation_accordion">
          <div className="accommodation_accordion_item">
            <Accordion title={"Description"} content={description} />
          </div>
          <div className="accommodation_accordion_item">
            <Accordion title={"Équipements"} content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
