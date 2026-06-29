import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const counter = (selector) => {

  gsap.utils.toArray(selector).forEach((item) => {

    const target = Number(item.dataset.value);

    const obj = {
      value: 0,
    };

    gsap.to(obj, {

      value: target,

      duration: 2,

      ease: "power2.out",

      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        once: true,
      },

      onUpdate: () => {

        item.textContent = Math.floor(obj.value);

      },

    });

  });

};

export default counter;