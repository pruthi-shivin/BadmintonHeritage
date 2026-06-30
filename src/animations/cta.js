import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ctaAnimation = () => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 75%",
      once: true,
    },
  });

  tl
    .from(".cta-subtitle", {
      opacity: 0,
      y: 20,
      duration: 0.5,
    }, "-=0.6")

    .from(".cta-title", {
      opacity: 0,
      y: 30,
      duration: 0.7,
    }, "-=0.3")

    .from(".cta-description", {
      opacity: 0,
      y: 20,
      duration: 0.5,
    }, "-=0.4")

    .from(".cta-button", {
      opacity: 0,
      y: 20,
      duration: 0.5,
    }, "-=0.2");

  gsap.to(".cta-leaf-left", {
    y: -10,
    rotation: -3,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut",
  });

  gsap.to(".cta-leaf-right", {
    y: 10,
    rotation: 3,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut",
  });

};

export default ctaAnimation;