import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">

      <div
        style={{
          width: "1240px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "32px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >

        <div className="flex items-center gap-16">

          <img
            src={logo}
            alt="Heritage Logo"
            className="h-10 w-auto"
          />

          <ul className="flex items-center gap-10 text-white text-[15px] font-light">

            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Coaches</li>
            <li>Gallery</li>
            <li>Blogs</li>

          </ul>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;