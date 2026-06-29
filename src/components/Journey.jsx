import journey from "../assets/journey.svg";
import signal_icon from "../assets/android_cell_dual_4_bar.svg";

import { useGSAP } from "@gsap/react";

import journeyAnimation from "../animations/journey";
import counter from "../animations/counter";

const Journey = () => {
  useGSAP(() => {

    journeyAnimation();

    counter(".counter");

});
  return (
    <section className="journey-section">

      <div className="container">

        <div className="journey-wrapper">


          <div className="journey-image-wrapper">

            <img
              src={journey}
              alt="Journey"
              className="journey-image"
            />

            <div className="journey-card">

              <div className="journey-card-header">

                <span>
                  Coaching Network
                </span>

                <div className="journey-card-icon">
                  <img
                    src={signal_icon}
                  />
                  
                </div>

              </div>

              <div className="journey-card-content">

                <h3 className="journey-stat">
                  <span className="journey-number"
                    className="counter"
                      data-value="300"
                    >
                      0
                  </span>

                  <span className="journey-k">
                    k
                    <span className="journey-plus">+</span>
                  </span>
                </h3>

                <p>
                  Certified Trainers &
                  Mentors
                </p>

              </div>

            </div>

          </div>


          <div className="journey-content">

            <h2 className="journey-title">
              Unleash Your
              Badminton
              Journey Today
            </h2>

            <p className="journey-description">
              Train hard, grow fast, and feel the thrill
              of progress. Your badminton journey
              starts here!
            </p>

            <button className="journey-btn">
              Become A Member
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Journey;