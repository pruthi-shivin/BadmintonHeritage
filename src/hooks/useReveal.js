import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useReveal = (selector) => {
  useGSAP(() => {
    gsap.from(selector, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",

      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
};

export default useReveal;