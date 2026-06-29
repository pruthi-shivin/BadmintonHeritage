import { useState, useEffect } from "react";

import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/samuel.jpg";
import hero3 from "../assets/hannah.jpg";

import avatar1 from "../assets/trusted-1.jpg";
import avatar2 from "../assets/trusted-2.jpg";
import avatar3 from "../assets/trusted-3.jpg";
import avatar4 from "../assets/trusted-4.jpg";

import { useGSAP } from "@gsap/react";
import heroAnimation from "../animations/hero";

const Hero = () => {
  const heroImages = [hero1, hero2, hero3];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 200000000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    heroAnimation();
  });

  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <img src={heroImages[currentSlide]} alt="" className="hero-bg-image" />

        <div className="hero-overlay" />

        <div className="absolute mx-auto top-[120px] h-[calc(100vh-80px)] w-full">
        <div className="container h-[calc(100vh-180px)] w-full flex flex-col justify-between">
          <div className="">
            <div className="hero-avatars">
              <img src={avatar1} alt="" />
              <img src={avatar2} alt="" />
              <img src={avatar3} alt="" />
              <img src={avatar4} alt="" />
            </div>

            <p class="font-medium text-[#FFFFFF]">
              Trusted By <span>100K+</span> Players
            </p>
          </div>

          <div className="">
            <div className="hero-badge">• Where passion meets Precision</div>

            <h1 className="hero-title">
              Play. Grow. Win.
              <br />
              Experience Smashville like
              <br />
              never before with Heritage
            </h1>
          </div>
        </div>
        </div>


        <div className="hero-cutout">
          <div className="hero-arrows">
            <button className="arrow-btn" onClick={prevSlide}>
              ←
            </button>

            <button className="arrow-btn" onClick={nextSlide}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;