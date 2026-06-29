import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const classesAnimation = () => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".classes-section",
      start: "top 70%",
      once: true,
    },
  });

  tl

    .from(".classes-left .section-tag", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })

    .from(".classes-left .section-heading", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    }, "-=0.2")

    .from(".classes-right", {
      x: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5")

    .from(".program-card", {
      y: 80,
      opacity: 0,
      stagger: 0.18,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.3");

};

export default classesAnimation;