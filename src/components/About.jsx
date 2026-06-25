import about from "../assets/about.svg";

const About = () => {
  return (
    <section className="about-section">

      <div className="container">

        <div className="section-tag">
          • About Heritage
        </div>

        <div className="about-layout">

          <img
            src={about}
            alt="About Heritage"
            className="about-image"
          />

          <div className="about-content">

            <h2 className="about-heading">
              For those who live and breathe badminton —
              <span className="about-accent">
                {" "}Heritage Academy
              </span>
              {" "}delivers elite coaching,
              refined training, and a world-class
              player experience.
            </h2>

            <div className="about-stats">

              <div className="about-stat">
                <h3 className="about-stat-number">
                  1000+
                </h3>

                <p className="about-stat-title">
                  Players Trained
                </p>

                <p className="about-stat-desc">
                  Nurturing talent with structured development.
                </p>
              </div>

              <div className="about-stat">
                <h3 className="about-stat-number">
                  10+
                </h3>

                <p className="about-stat-title">
                  Certified Coaches
                </p>

                <p className="about-stat-desc">
                  Delivering elite, technique-driven coaching.
                </p>
              </div>

              <div className="about-stat">
                <h3 className="about-stat-number">
                  95%
                </h3>

                <p className="about-stat-title">
                  Satisfaction Score
                </p>

                <p className="about-stat-desc">
                  Parents and players trust our results.
                </p>
              </div>

            </div>

            <button className="about-button">
              Discover Our Story
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;