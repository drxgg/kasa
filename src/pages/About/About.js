import "./about.scss";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Accordion from "../../components/accordion/Accordion";
import Footer from "../../components/footer/Footer";

export default function About() {
  const aboutDatas = [
    {
      id: "1",
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: "2",
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme..",
    },
    {
      id: "3",
      title: "Service",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: "4",
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      <Header />
      <Banner />
      <main className="about_container">
        {aboutDatas.map((data) => {
          return (
            <div key={data.id} className="about_container_collapse">
              <Accordion
                style={{ margin: "30px 0" }}
                title={data.title}
                content={data.content}
              />
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
