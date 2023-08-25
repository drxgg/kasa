import "./accommodation.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../../data/logement";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Accordion from "../../components/accordion/Accordion";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";

export default function Accommodation() {
  const [imageSlider, setImageSlider] = useState([]);

  const idaccommodation = useParams().id;
  const dataCurrentaccommodation = datas.filter(
    (data) => data.id === idaccommodation
  );

  useEffect(() => {
    setImageSlider(dataCurrentaccommodation[0].pictures);
  }, [idaccommodation, dataCurrentaccommodation]);

  const name = dataCurrentaccommodation[0].host.name.split(" ");
  const rating = dataCurrentaccommodation[0].rating;
  const description = dataCurrentaccommodation[0].description;
  const equipments = dataCurrentaccommodation[0].equipments;

  return (
    <>
      <Header />
      <Carousel imageSlider={imageSlider} />
      <main className="accommodation">
        <div className="accommodation_content">
          <div className="accommodation_content_infos">
            <h1>{dataCurrentaccommodation[0].title}</h1>
            <p>{dataCurrentaccommodation[0].location}</p>
            <div>
              {dataCurrentaccommodation[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="accommodation_content_host">
            <div>
              <div className="accommodation_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataCurrentaccommodation[0].host.picture}
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
