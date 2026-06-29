import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journeyAnimation = () => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".journey-section",
      start: "top 70%",
      once: true,
    },
  });

  tl

    .from(".journey-left", {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })

    .from(".journey-image", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5")

    .from(".journey-card", {
      scale: 0.7,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.8)",
    }, "-=0.4");

  // Floating animation
  gsap.to(".journey-card", {
    y: -10,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

};

export default journeyAnimation;