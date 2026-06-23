import beginner from "../assets/beginner.jpg";
import advanced from "../assets/advanced.jpg";
import pro from "../assets/pro.jpg";

const Classes = () => {
  const programs = [
    {
      image: beginner,
      title: "Beginner Program",
      description:
        "Teaches core skills, footwork, and rules for a solid start.",
    },
    {
      image: advanced,
      title: "Advanced Program",
      description:
        "Builds skill, strategy, and match confidence for competitive play.",
    },
    {
      image: pro,
      title: "PRO Advanced Program",
      description:
        "High-performance coaching with match-focused development.",
    },
  ];

  return (
    <section className="bg-[#F3F5F8] py-[120px]"
    style={{ marginTop: "60px" }}
    >


      <div
        style={{
          width: "1240px",
          margin: "0 auto",
        }}
      >

        <div className="flex justify-between items-start">

          <div>

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
              "
            >
              • Our class
            </div>

            <h2
              className="
                mt-5
                text-[#010426]
                text-[30px]
                leading-[120%]
                font-light
                max-w-[460px]
              "
            >
              Where every match,
              moment, and memory is
              shaped by excellence.
            </h2>

          </div>

          <p
            className="
              text-[#010426]
              text-[18px]
              leading-[140%]
              font-light
              max-w-[500px]
              mt-[70px]
            "
          >
            Because greatness starts with the space you
            play in — every serve, every swing, and every
            victory begins in an environment built for
            champions.
          </p>

        </div>

        <div className="flex justify-between mt-16"
        style={{ marginTop: "25px" }}
        >

          {programs.map((program, index) => (
            <div
              key={index}
              className="
                relative
                w-[360px]
                h-[480px]
                rounded-[8px]
                overflow-hidden
              "
            >
              <img
                src={program.image}
                alt={program.title}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  left-6
                  right-6
                  bottom-4
                  p-6
                  rounded-[10px]
                  border
                  border-white/20
                  backdrop-blur-md
                  bg-white/20
                "
              >

                <div className="flex justify-between items-start">

                  <p
                    className="
                      text-white
                      text-[18px]
                      font-light
                      leading-[150%]
                    "
                  >
                    {program.title}
                  </p>

                  <span
                    className="
                      text-white
                      text-[18px]
                    "
                  >
                    ↗
                  </span>

                </div>

                <p
                  className="
                    mt-4
                    text-white
                    text-[13px]
                    leading-[150%]
                    font-light
                  "
                >
                  {program.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Classes;