import "./NotFoundPage.scss";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <Header />
      <div className="not-found-page__info">
        <h1 className="not-found-page__title">404</h1>
        <p className="not-found-page__content">
          La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link to="/" className="not-found-page__return">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
