import PricingCard from "./PricingCard";
import { pricingPlans } from "../data/pricingData";

import coachingImage from "../assets/private-coaching.svg";
import pricingBg from "../assets/pricing-bg.svg";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container pricing-container">

        <div className="pricing-header">

          <div>
            <div className="section-tag">
              • Our Price
            </div>

            <h2 className="pricing-title">
              Choose Your Path to Progress
            </h2>
          </div>

          <p className="pricing-description">
            Flexible training programs designed
            to boost skill, confidence, and
            performance — pick the plan that
            matches your ambition and start
            leveling up today.
          </p>

        </div>

        <div className="pricing-content">

          <div className="pricing-left">

            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.title}
                {...plan}
              />
            ))}

          </div>

          <div className="pricing-right">

            <img
              src={coachingImage}
              alt="Private Coaching"
              className="pricing-image"
            />

            <div className="pricing-overlay">

              <button className="pricing-card__icon pricing-card__icon--blue">
                →
              </button>

              <h3>
                Private Coaching
              </h3>

              <p>
                Personalized 1-on-1 sessions
                tailored to your goals and
                rapid improvement.
              </p>

              <div className="pricing-overlay-price">
                1,000<span>/hr</span>
              </div>

            </div>

          </div>

        </div>

        <img
          src={pricingBg}
          alt=""
          className="pricing-shape"
        />

      </div>
    </section>
  );
};

export default Pricing;