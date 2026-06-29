import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutAnimation = () => {

  const tl = gsap.timeline({

    scrollTrigger: {
      trigger: ".about-section",
      start: "top 70%",
      once: true,
    }

  });

  tl

    .from(".about-image", {

      x: -120,
      opacity: 0,
      duration: 1,

      ease: "power3.out"

    })

    .from(".section-tag", {

      y: 20,
      opacity: 0,
      duration: .5

    }, "-=.7")

    .from(".about-heading", {

      y: 40,
      opacity: 0,
      duration: .7

    }, "-=.2")

    .from(".about-stat", {

      y: 40,
      opacity: 0,

      stagger: .15,

      duration: .5

    }, "-=.3")

    .from(".about-button", {

      y: 20,
      opacity: 0,
      duration: .4

    });

};

export default aboutAnimation;