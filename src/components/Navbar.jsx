import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        <img
          src={logo}
          alt="Heritage Logo"
          className="navbar-logo"
        />

        <ul className="navbar-menu">

          <li className="navbar-link">Home</li>
          <li className="navbar-link">About</li>
          <li className="navbar-link">Pricing</li>
          <li className="navbar-link">Coaches</li>
          <li className="navbar-link">Gallery</li>
          <li className="navbar-link">Blogs</li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;