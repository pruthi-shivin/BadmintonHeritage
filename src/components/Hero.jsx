import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-[#F3F5F8] pt-5 pb-0">

      <div
        style={{
          width: "1240px",
          margin: "0 auto",
        }}
      >
        <div
          className="
            relative
            rounded-[16px]
            overflow-hidden
            bg-cover
            bg-center
          "
          style={{
            width: "1240px",
            height: "650px",
            backgroundImage: `url(${hero})`,
          }}
        >
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute left-[50px] top-[90px] z-20">

            <div className="flex -space-x-3">
              <div className="w-11 h-11 rounded-full bg-white/50 border border-white" />
              <div className="w-11 h-11 rounded-full bg-white/50 border border-white" />
              <div className="w-11 h-11 rounded-full bg-white/50 border border-white" />
              <div className="w-11 h-11 rounded-full bg-white/50 border border-white" />
            </div>

            <p className="mt-3 text-white text-[16px] font-light">
              Trusted By 100K+ Players
            </p>

          </div>

          <div className="absolute left-[50px] bottom-[220px] z-20">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                border
                border-white/30
                bg-white/10
                backdrop-blur-sm
                text-white
                text-sm
              "
            >
              ● Where passion meets Precision
            </div>

          </div>

          <div className="absolute left-[50px] bottom-[55px] z-20">

            <h1
              className="
                text-white
                font-light
                text-[52px]
                leading-[100%]
                max-w-[760px]
              "
            >
              Play. Grow. Win.
              <br />
              Experience Smashville like
              <br />
              never before with Heritage
            </h1>

          </div>

          <div className="hero-cutout">

            <div className="absolute right-6 bottom-4 flex gap-2">

              <button className="arrow-btn">
                ←
              </button>

              <button className="arrow-btn">
                →
              </button>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;