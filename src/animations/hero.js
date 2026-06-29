import gsap from "gsap";

const heroAnimation = () => {
  const tl = gsap.timeline();

  tl.from(".navbar", {
    y: -60,
    opacity: 0,
    duration: .8,
  })

  .from(".hero-trusted", {
    y: 40,
    opacity: 0,
    duration: .6,
  }, "-=.3")

  .from(".hero-badge", {
    y: 30,
    opacity: 0,
    duration: .5,
  })

  .from(".hero-title", {
    y: 60,
    opacity: 0,
    duration: .8,
  })

  .from(".hero-cutout", {
    x: 120,
    opacity: 0,
    duration: .8,
  });

  gsap.to(".hero-slide", {
    scale: 1.08,
    duration: 15,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });
};

export default heroAnimation;