import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonialsAnimation = () => {

    const tl = gsap.timeline({

        scrollTrigger:{
            trigger:".testimonials-section",
            start:"top 70%",
            once:true
        }

    });

    tl

    .from(".testimonials-title",{
        y:40,
        opacity:0,
        duration:.8,
        ease:"power3.out"

    })

    .from(".testimonial-column:nth-child(1)",{

        x:-120,
        opacity:0,
        duration:1,

        ease:"power3.out"

    },"-=.3")

    .from(".testimonial-column:nth-child(2)",{

        y:80,
        opacity:0,
        duration:1,

        ease:"power3.out"

    },"-=.7")

    .from(".testimonial-column:nth-child(3)",{

        x:120,
        opacity:0,
        duration:1,

        ease:"power3.out"

    },"-=.7");

};

export default testimonialsAnimation;