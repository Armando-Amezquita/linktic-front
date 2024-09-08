import "./SignUp.scss";
import { Link } from "react-router-dom";
import Icono from "../../plugins/icon";
import { ContainerPrimary } from "../utils/ContainerPrimary/ContainerPrimary";
import { InputComponent } from "../utils/InputComponent/InputComponent";
import { Button } from "../utils/Button/Button";

function SignUp() {
  const handleSubmit = () => {};

  return (
    <div className="signup">
 
      <div className="signup__form-title">
        <h2 className="signup__title">Create an Account</h2>
        <p className="signup__form-switchForm">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <form className="signup__form" onSubmit={handleSubmit}>
        <InputComponent 
          label="Full name"
          placeholder="Example: Evans Wall"
          type="text"
        />
        <InputComponent 
          label="Email"
          placeholder="Example: EvansWall@gmail.com"
          type="text"
        />
        <InputComponent 
          label="Password"
          placeholder="Paswword"
          type="password"
        />
        <Button 
          label="Sign Up"
        />
      </form>
    </div>
  );
}
export { SignUp };
