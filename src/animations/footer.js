import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerAnimation = () => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top 75%",
      once: true,
    },
  });

  tl

    .from(".footer-contact", {
      x: -120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })

    .from(".footer-links", {
      x: 120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8")

    .from(".footer-column", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.5,
    }, "-=0.5")

    .from(".footer-logo", {
      scale: .8,
      rotation: -10,
      opacity: 0,
      duration: .6,
      ease: "back.out(2)",
    }, "-=0.4")

    .from(".footer-bottom", {
      y: 25,
      opacity: 0,
      duration: .6,
    }, "-=0.3");

  // Floating logo
  gsap.to(".footer-logo-right", {
    y: -8,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "sine.inOut",
  });

};

export default footerAnimation;