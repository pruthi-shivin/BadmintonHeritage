import logo from "../assets/logo2.svg";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-wrapper">

        <div className="footer-contact">

          <h2 className="footer-heading">
            Ready to
            <br />
            get started ?
          </h2>

          <p className="footer-address">
            Kataria Market, Near Taksila height,
            Sector 37 C, Gurugram, Haryana 122001
          </p>

          <p className="footer-info">
            (+91) 999 032 9090
          </p>

          <p className="footer-info">
            info@heritagebadmintonacademy.com
          </p>

          <button className="footer-btn">
            Get Started →
          </button>

        </div>


        <div className="footer-links">

          <div className="footer-top">

            <div className="footer-column">

              <h4>Quick Links</h4>

              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Pricing</li>
                <li>Coaches</li>
              </ul>

            </div>

            <div className="footer-column">

              <h4>Social Medias</h4>

              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Youtube</li>
              </ul>

            </div>

            <div className="footer-logo">
              <img
                src={logo}
                alt="Heritage Academy"
              />
            </div>

          </div>

          <div className="footer-bottom">

            <div className="footer-policies">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Use</span>
            </div>

            <p>
              © 2025 with Heritage Badminton
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;