import journey from "../assets/journey.svg";

const Journey = () => {
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
                  ✦
                </div>

              </div>

              <div className="journey-card-content">

                <h3 className="journey-stat">
                  <span className="journey-number">300</span>

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