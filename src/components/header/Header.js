import "./header.scss";
import Logo from "../../assets/logo.png";
import Navbar from "../navbar/Navbar";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <img src={Logo} alt="Logo de Kasa, site de location d'appartements" />
      </h1>
      <Navbar />
    </header>
  );
}
