    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    const pricingAnimation = (section) => {
        // console.log("Pricing animation called", section);
        const q = gsap.utils.selector(section);

        const tl = gsap.timeline({

            scrollTrigger:{
                trigger:section,
                start:"top 70%",
                once:true,

                // onEnter: () => console.log("Pricing entered"),
            }

        });

        tl
        .from(q(".pricing-header"),{

            y:40,
            opacity:0,
            duration:.7,
            ease:"power3.out"

        })

        .from(q(".pricing-card"),{

            x:5,
            opacity:1,
            stagger:.18,
            duration:.3,
            ease:"power1.out"

        },"-=.3")

        .from(q(".pricing-left"),{

            x:120,
            opacity:0,
            duration:1,
            ease:"power3.out"

        },"-=.5")

        .from(q(".pricing-right"),{

            x:120,
            opacity:0,
            duration:1,
            ease:"power3.out"

        },"-=.5")
        

        .from(q(".pricing-line"),{

            opacity:0,
            duration:1

        },"-=1");

    };

    export default pricingAnimation;