import hero from "../assets/hero.jpg";
import avatar1 from "../assets/trusted-1.jpg";
import avatar2 from "../assets/trusted-2.jpg";
import avatar3 from "../assets/trusted-3.jpg";
import avatar4 from "../assets/trusted-4.jpg";

const Hero = () => {
  return (
    <section className="hero-section">

      <div
        className="hero-wrapper"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >

        <div className="hero-overlay" />

        <div className="hero-trusted">
          <div className="hero-avatars">

            <img src={avatar1} alt="" />
            <img src={avatar2} alt="" />
            <img src={avatar3} alt="" />
            <img src={avatar4} alt="" />

          </div>

          <p>
            Trusted By <span>100K+</span> Players
          </p>

        </div>

        <div className="hero-content">

          <div className="hero-badge">
            • Where passion meets Precision
          </div>

          <h1 className="hero-title">
            Play. Grow. Win.
            <br />
            Experience Smashville like
            <br />
            never before with Heritage
          </h1>

        </div>

        <div className="hero-cutout">

          <div className="hero-arrows">

            <button className="arrow-btn">
              ←
            </button>

            <button className="arrow-btn">
              →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;