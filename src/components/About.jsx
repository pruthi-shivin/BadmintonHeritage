import about from "../assets/about.svg";

import { useGSAP } from "@gsap/react";

import aboutAnimation from "../animations/about";
import counter from "../animations/counter";

const About = () => {

  useGSAP(() => {
    aboutAnimation();
    counter(".counter");
  });

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
                  <span
                    className="counter"
                    data-value="1000"
                  >
                    0
                  </span>
                  +
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
                  <span
                    className="counter"
                    data-value="10"
                  >
                    0
                  </span>
                  +
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
                  <span
                    className="counter"
                    data-value="95"
                  >
                    0
                  </span>
                  %
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