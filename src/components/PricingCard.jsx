import { useRef, useState } from "react";
import gsap from "gsap";

import pricingBg from "../assets/advanced-pricing-bg.svg";
import arrowRight from "../assets/arrow-right.svg";
import arrowDiagonal from "../assets/arrow-diagonal.svg";

const PricingCard = ({
  title,
  description,
  price,
  duration,
}) => {

  const [hovered, setHovered] = useState(false);

  const cardRef = useRef(null);
  const bgRef = useRef(null);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const priceRef = useRef(null);

  const handleEnter = () => {

    setHovered(true);

    gsap.to(cardRef.current, {
      backgroundColor: "#000B84",
      y: -10,
      duration: 0.35,
      ease: "power2.out",
      boxShadow: "0 20px 50px rgba(0,0,0,.18)",
    });

    gsap.to(bgRef.current, {
      opacity: 0.12,
      duration: 0.35,
    });

    gsap.to(
      [titleRef.current, descRef.current, priceRef.current],
      {
        color: "#FFFFFF",
        duration: 0.35,
      }
    );

  };

  const handleLeave = () => {

    setHovered(false);

    gsap.to(cardRef.current, {
      backgroundColor: "#FFFFFF",
      y: 0,
      duration: 0.35,
      ease: "power2.out",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    });

    gsap.to(bgRef.current, {
      opacity: 0,
      duration: 0.35,
    });

    gsap.to(titleRef.current, {
      color: "#010426",
      duration: 0.35,
    });

    gsap.to(descRef.current, {
      color: "#ABABAB",
      duration: 0.35,
    });

    gsap.to(priceRef.current, {
      color: "#010426",
      duration: 0.35,
    });

  };

  return (

    <div
      ref={cardRef}
      className="pricing-card"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >

      <img
        ref={bgRef}
        src={pricingBg}
        alt=""
        className="pricing-card-bg"
      />

      <button className="pricing-card__icon pricing-card__icon--blue">

        <img
          src={hovered ? arrowDiagonal : arrowRight}
          alt=""
          className="pricing-arrow"
        />

      </button>

      <h3 ref={titleRef}>
        {title}
      </h3>

      <p ref={descRef}>
        {description}
      </p>

      <div
        ref={priceRef}
        className="pricing-card__price"
      >
        {price}
        <span>{duration}</span>
      </div>

    </div>

  );
};

export default PricingCard;