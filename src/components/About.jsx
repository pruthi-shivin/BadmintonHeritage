import about from "../assets/about.jpg";

const About = () => {
  return (
    <section className="bg-[#F3F5F8] pt-[70px] pb-[120px]"
    style={{ marginTop: "60px" }}
>
      <div
        style={{
          width: "1240px",
          margin: "0 auto",
        }}
      >

        <div
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            border
            border-[#010426]
            text-[#010426]
            text-sm
            mb-5
          "
        >
          • About Heritage
        </div>

        <div className="flex justify-between items-start">

          <img
            src={about}
            alt="About Heritage"
            className="
              w-[360px]
              h-[450px]
              object-cover
              rounded-[8px]
              shrink-0
            "
          />

          <div className="w-[640px]">

            <h2
              className="
                text-[30px]
                leading-[130%]
                font-light
                text-[#010426]
              "
            >
              For those who live and breathe badminton —
              <span className="text-[#4251EE] font-normal">
                {" "}Heritage Academy
              </span>
              {" "}delivers elite coaching, refined training,
              and a world-class player experience.
            </h2>

            <div className="flex justify-between mt-14">

              <div className="w-[170px]">
                <h3 className="text-[52px] text-[#000863]">
                  1000+
                </h3>

                <p className="text-[20px] text-[#010426]">
                  Players Trained
                </p>

                <p className="text-[#ABABAB] text-sm mt-2">
                  Nurturing talent with structured development.
                </p>
              </div>

              <div className="w-[170px]">
                <h3 className="text-[52px] text-[#000863]">
                  10+
                </h3>

                <p className="text-[20px] text-[#010426]">
                  Certified Coaches
                </p>

                <p className="text-[#ABABAB] text-sm mt-2">
                  Delivering elite, technique-driven coaching.
                </p>
              </div>

              <div className="w-[170px]">
                <h3 className="text-[52px] text-[#000863]">
                  95%
                </h3>

                <p className="text-[20px] text-[#010426]">
                  Satisfaction Score
                </p>

                <p className="text-[#ABABAB] text-sm mt-2">
                  Parents and players trust our results.
                </p>
              </div>

            </div>

            <button
              className="
                mt-14
                px-7
                py-3
                rounded-full
                bg-[#000863]
                text-white
                text-sm
              "
            >
              Discover Our Story
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;