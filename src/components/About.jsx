import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",
];

const highlights = [
  {
    title: "Clean Code",
    text: "Writing simple, reusable and maintainable code.",
  },
  {
    title: "Responsive",
    text: "Building interfaces that work on every screen.",
  },
  {
    title: "Interactive",
    text: "Creating smooth and engaging user experiences.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen w-full bg-transparent px-5 py-20 text-white 
        sm:px-8 sm:py-24 
        md:px-10 md:py-28 
        lg:px-24 lg:py-24 
      "
    >

      {/* Heading */}
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >

        <p className="mb-3 text-xs tracking-[4px] text-[#66c61c] 
          sm:mb-4 sm:text-sm sm:tracking-[5px] 
        ">
          ABOUT ME
        </p>

        <h2 className="max-w-4xl text-3xl font-bold leading-tight 
          sm:text-4xl 
          md:text-5xl 
          lg:text-6xl 
        ">
          I turn ideas into
          <span className="text-gray-500">
            {" "}modern experiences.
          </span>
        </h2>

      </motion.div>


      {/* Main Content */}
      <div className="mx-auto mt-14 grid max-w-7xl gap-12 
        sm:mt-16 sm:gap-14 
        md:mt-20 md:grid-cols-2 md:gap-12 
        lg:gap-20 
      ">

        {/* Left */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          <p className="mb-3 text-xs uppercase tracking-[2px] text-[#66c61c] 
            sm:mb-4 sm:text-sm sm:tracking-[3px] 
          ">
            Who I am
          </p>

          <h3 className="text-2xl font-semibold 
            sm:text-3xl 
          ">
            I'm M. Azan
          </h3>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-400 
            sm:mt-6 sm:text-lg sm:leading-8 
          ">
            I'm a frontend web developer passionate about 
            creating modern, responsive and interactive 
            digital experiences.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-500 
            sm:mt-5 sm:text-lg sm:leading-8 
          ">
            I enjoy transforming ideas and designs into 
            clean interfaces using React, JavaScript, 
            Tailwind CSS and modern web technologies.
          </p>

        </motion.div>


        {/* Right - Skills */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          <p className="mb-3 text-xs uppercase tracking-[2px] text-[#66c61c] 
            sm:mb-4 sm:text-sm sm:tracking-[3px] 
          ">
            My Skills
          </p>

          <h3 className="text-2xl font-semibold 
            sm:text-3xl 
          ">
            What I work with
          </h3>

          <div className="mt-6 grid grid-cols-2 gap-3 
            sm:mt-8 sm:gap-4 
          ">

            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 transition duration-300 hover:border-[#66c61c] 
                  sm:px-5 sm:py-4 
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <span className="text-sm text-gray-300 
                  sm:text-base 
                ">
                  {skill}
                </span>
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>


      {/* Highlights */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 
        sm:mt-20 sm:gap-6 
        md:mt-24 md:grid-cols-2 
        lg:grid-cols-3 
      ">

        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            className="group rounded-2xl border border-zinc-800 bg-zinc-950/30 p-5 transition duration-300 hover:-translate-y-2 hover:border-[#66c61c] 
              sm:p-6 
            "
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              ease: "easeOut",
            }}
          >

            <div className="mb-4 h-1 w-10 rounded-full bg-[#66c61c] 
              sm:mb-5 
            " />

            <h4 className="text-xl font-semibold 
              sm:text-2xl 
            ">
              {item.title}
            </h4>

            <p className="mt-3 text-sm leading-7 text-gray-500 
              sm:text-base 
            ">
              {item.text}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default About;