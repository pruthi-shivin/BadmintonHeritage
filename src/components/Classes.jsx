import { PROGRAMS } from "../constants/content";

const Classes = () => {
  return (
    <section className="section">

      <div className="container">

        <div className="classes-header">

          <div className="classes-left">

            <div className="section-tag">
              • Our class
            </div>

            <h2 className="section-heading mt-5">
              Where every match,
              moment, and memory is
              shaped by excellence.
            </h2>

          </div>

          <div className="classes-right">

            <p className="body-text">
              Because greatness starts with the space you
              play in — every serve, every swing, and every
              victory begins in an environment built for
              champions.
            </p>

          </div>

        </div>

        <div className="programs-grid">

          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="program-card"
            >
              <img
                src={program.image}
                alt={program.title}
                className="program-image"
              />

              <div className="program-overlay">

                <div className="program-top">

                  <h3 className="program-title">
                    {program.title}
                  </h3>

                  <span className="program-arrow">
                    ↗
                  </span>

                </div>

                <p className="program-description">
                  {program.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Classes;