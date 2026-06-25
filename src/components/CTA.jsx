import leafLeft from "../assets/leaf-left.svg";
import leafRight from "../assets/leaf-right.svg";

const CTA = () => {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-card">

          <img
            src={leafLeft}
            alt=""
            className="cta-leaf-left"
          />

          <img
            src={leafRight}
            alt=""
            className="cta-leaf-right"
          />

          <p className="cta-subtitle">
            Begin Your Journey
          </p>

          <h2 className="cta-title">
            Claim Your Spot -
            <span> Let's Elevate!</span>
          </h2>

          <p className="cta-description">
            Take a breath. Start with a free class—no credit card,
            no pressure, just peace.
          </p>

          <button className="cta-button">
            Book Your Slot
          </button>

        </div>

      </div>

    </section>
  );
};

export default CTA;