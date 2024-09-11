import { Description, Navbar } from "../index";
import { Filters } from "../Filters/Filters";
import "./Header.scss";
export const Header = () => {
  return (
    <div className="header">
        <Navbar />
        <Description />
    </div>
  );
};
