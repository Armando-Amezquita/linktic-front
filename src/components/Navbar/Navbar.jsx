import "./Navbar.scss";
import Icono from "../../plugins/icon.jsx";
import { Link } from "react-router-dom";
import { scrollToSection } from "../../utils/utils.js";
export const Navbar = () => {

  const waitBeforeGoToSection = () => {
    setTimeout(() => {
      scrollToSection();
    }, 10);
  };

  return (
    <nav className="navbar ">
      <div className="website-section">
        <h2>Logo</h2>
        <Icono name="buegerMenu" tamaño="30px" />

        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <Link to="#services" onClick={waitBeforeGoToSection}>Servicios</Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="#contact" onClick={waitBeforeGoToSection}>
              Contact
            </Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/login">
              <button className="btn__primary">Ingresar</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
