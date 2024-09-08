import "./Login.scss";
import { Link } from "react-router-dom";
import { InputComponent } from "../utils/InputComponent/InputComponent";
import { Button } from "../utils/Button/Button";

export function Login() {

  return (
    <section className="login">
      <div className="login__container">
        <h2 className="login__title">Login</h2>

        <form className="login__form">
          <InputComponent 
            label="Username"
            placeholder="Joe Doe"
          />
          <InputComponent 
            label="Password"
            placeholder="1234567890"
          />

          <Button 
            label="Send"
          />
          
          <div className="login__form-footer">
            <p className="login__form-switchForm">
              ¿No tienes cuenta? <Link to="/signup">Registrarte</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
