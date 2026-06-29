import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pricingAnimation = () => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pricing-section",
      start: "top 70%",
      once: true,
    },
  });

  tl

    .from(".pricing-header", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    })

    .from(".pricing-card", {
      y: 80,
      opacity: 0,
      stagger: 0.18,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.3")

    .from(".pricing-right", {
      x: 120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5")

    .from(".pricing-line", {
      opacity: 0,
      duration: 1.2,
    }, "-=1");

};

export default pricingAnimation;