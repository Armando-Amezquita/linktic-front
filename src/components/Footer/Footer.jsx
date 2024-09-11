import "./Footer.scss";
import Icono from "../../plugins/icon.jsx";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">HotelAgency</p>

      <section className="footer__join">
        <p className="footer__join--title">Join Us Today</p>
        <p className="footer__join--description">Explore, relax, and enjoy the world with Global Horizons Hotels. Your perfect escape awaits. Start your journey with us by booking now and discover a world where every stay is a lasting memory.</p>
      </section>

      <div className="footer__content">
        <section className="footer__call">
          <p className="footer__call--title">Call Us</p>
          <span className="footer__call--extension">+1 12334567890</span>
          <span className="footer__call--extension">+57 12334567890</span>
        </section>

        <section className="footer__follow">
          <p className="footer__follow--title">Follow Us</p>
          <span className="footer__follow--i">i</span>
          <span className="footer__follow--i">f</span>
          <span className="footer__follow--i">t</span>
        </section>
      </div>

    </footer>
  );
};
