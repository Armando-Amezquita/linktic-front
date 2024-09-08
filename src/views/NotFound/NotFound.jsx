import "./NotFound.scss"
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Pagina no encontrada</h2>

        <Link to="/">
          <button className="btn__primary">Volver</button>
        </Link>
    </div>
  );
};

