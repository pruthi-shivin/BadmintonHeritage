import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const classesAnimation = (section) => {

  const q = gsap.utils.selector(section);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,
    },
  });

  tl

    .from(q(".section-tag"), {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })

    .from(q(".section-heading"), {
      y: 35,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    }, "-=0.2")

    .from(q(".body-text"), {
      x: 60,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    }, "-=0.4")

    .from(q(".program-card"), {
      y: 80,
      opacity: 0,
      stagger: 0.18,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.3");

};

export default classesAnimation;