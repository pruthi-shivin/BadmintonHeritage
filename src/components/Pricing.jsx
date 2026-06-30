import PricingCard from "./PricingCard";
import { pricingPlans } from "../data/pricingData";

import coachingImage from "../assets/private-coaching.svg";

import pricingLine from "../assets/pricing-line.svg";
import pricingBg from "../assets/advanced-pricing-bg.svg";

import arrowRight from "../assets/arrow-right.svg"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import pricingAnimation from "../animations/pricing";
import { useRef } from "react";
import { useState } from "react";



const Pricing = () => {
  
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const rightCardRef = useRef(null);
  const arrowRef = useRef(null);
  const overlayRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
      pricingAnimation(sectionRef.current);
  }, { scope: sectionRef });

  const handleEnter = () => {

  setHovered(true);

  gsap.to(rightCardRef.current,{
    y:-10,
    duration:.35,
    ease:"power2.out",
    boxShadow:"0 20px 50px rgba(0,0,0,.18)"
  });

  gsap.to(overlayRef.current,{
    y:-4,
    duration:.35,
    ease:"power2.out"
  });

  gsap.to(arrowRef.current,{
    rotation:-45,
    transformOrigin:"50% 50%",
    duration: 0.3,
  });
}

const handleLeave = () => {

  setHovered(false);

  gsap.to(rightCardRef.current,{
    y:0,
    duration:.35,
    ease:"power2.out",
    boxShadow:"0 0 0 rgba(0,0,0,0)"
  });

  gsap.to(overlayRef.current,{
    y:0,
    duration:.35,
    ease:"power2.out"
  });

  gsap.to(arrowRef.current,{
    rotation:0,
    transformOrigin:"50% 50%",
    duration:0.3,
  });
}
  return (
    <section
    ref={sectionRef} 
    className="pricing-section">

        <img
          src={pricingLine}
          alt=""
          className="pricing-line"
        />

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

          <div 
          ref={rightCardRef}
          className="pricing-right"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}          
          >

            <img
              ref={imageRef}
              src={coachingImage}
              alt="Private Coaching"
              className="pricing-image"
            />

            <div 
            ref={overlayRef}
            className="pricing-overlay">

              <button className="pricing-card__icon pricing-card__icon--blue"
              >
                <img
                    ref={arrowRef}
                    src={arrowRight}
                    alt=""
                    className="pricing-arrow"
                />
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

      </div>
    </section>
  );
};

export default Pricing;