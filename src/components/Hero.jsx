import Navbar from "./Navbar";

import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

import { motion } from "framer-motion";

const stats = [
  {
    number: "+14",
    title: "Experience",
  },
  {
    number: "+800",
    title: "Clients",
  },
  {
    number: "+700",
    title: "Happy Clients",
  },
  {
    number: "+900",
    title: "Projects",
  },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent text-white">

      <Navbar />

      {/* Hero Content */}
      <div
        className="
          relative z-10 mx-auto flex max-w-7xl flex-col items-center
          gap-7 px-5 pt-8 pb-10

          sm:gap-8 sm:px-8 sm:pt-10 sm:pb-12

          md:gap-10 md:px-10 md:pt-12 md:pb-14

          lg:min-h-screen lg:flex-row lg:justify-evenly
          lg:gap-0 lg:px-8 lg:pt-0 lg:pb-0
          lg:mt-[-65px]
        "
      >

        {/* Right Side / Image */}
        <motion.div
          className="order-1 flex shrink-0 justify-center lg:order-2"
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <div className="relative">

            {/* Green Glow */}
            <div className="absolute inset-0 rounded-full bg-[#66c61c] blur-3xl opacity-40"></div>

            {/* Image Circle */}
            <motion.div
              className="
                relative flex items-center justify-center
                h-60 w-60
                overflow-hidden rounded-full
                border-2 border-[#66c61c]

                sm:h-64 sm:w-64
                md:h-72 md:w-72
                lg:h-80 lg:w-80 lg:mr-3
              "
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
            >

              <img
                src="/image2p.jpeg"
                alt="M. Azan"
                loading="eager"
                fetchPriority="high"
                className="
                  h-full w-full
                  rounded-full
                  object-cover
                  object-[center_top]
                "
              />

            </motion.div>

          </div>

        </motion.div>


        {/* Left Side */}
        <motion.div
          className="order-2 w-full max-w-2xl text-center lg:order-1 lg:text-left"
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <p className="mb-3 text-sm tracking-widest text-gray-400 sm:mb-4 md:mb-5">
            FORNTEND DEVELOPER
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Hello, I'm

            <span className="ml-2 text-[#66c61c] sm:ml-3 md:ml-4">
              M.Azan
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base md:mt-6 md:text-lg md:leading-8 lg:mx-0">
            I build modern, responsive and interactive
            websites using React and modern web technologies.
          </p>


          {/* Buttons */}
          <motion.div
            className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7 sm:gap-4 lg:justify-start"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: "easeOut",
            }}
          >

            {/* Hire Me */}
            <button className="rounded-full border-2 border-[#66c61c] px-6 py-2.5 text-base text-[#66c61c] transition hover:bg-[#66c61c] hover:text-black sm:px-7 sm:py-3 sm:text-lg">
              Hire Me
            </button>


            {/* Social Icons */}
            <div className="flex gap-2.5 sm:gap-3">

              <button className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#66c61c] text-[#66c61c] sm:h-12 sm:w-12">
                <FaGithub size={20} />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#66c61c] text-[#66c61c] sm:h-12 sm:w-12">
                <FaFacebook size={20} />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#66c61c] text-[#66c61c] sm:h-12 sm:w-12">
                <FaInstagram size={20} />
              </button>

            </div>

          </motion.div>

        </motion.div>

      </div>


      {/* Stats */}
      <motion.div
        className="
          relative z-10 mx-auto grid max-w-5xl
          grid-cols-2 gap-5 px-5 pb-8

          sm:gap-6 sm:px-8 sm:pb-10

          md:gap-8 md:px-10 md:pb-10

          lg:mt-[-7px] lg:grid-cols-4 lg:px-8
        "
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 0.7,
          ease: "easeOut",
        }}
      >

        {stats.map((stat, index) => (

          <div className="text-center" key={index}>

            <h1 className="text-2xl font-bold text-[#66c61c] sm:text-3xl">
              {stat.number}
            </h1>

            <p className="mt-2 text-sm text-gray-400 sm:mt-3 md:mt-4">
              {stat.title}
            </p>

          </div>

        ))}

      </motion.div>

    </div>
  );
};

export default Hero;