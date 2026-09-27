import { easeOut, motion } from "framer-motion";


const projects = [
  {
    number: "01",
    title: "Gallery Web App",
    category: "React / API",
    description:
      "A responsive image gallery built with React, Axios and API integration.",
  },
  {
    number: "02",
    title: "Notes App",
    category: "React / Tailwind",
    description:
      "A modern notes application with a clean interface and interactive features.",
  },
  {
    number: "03",
    title: "Portfolio Website",
    category: "React / Tailwind",
    description:
      "A modern personal portfolio built to showcase my skills and projects.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen bg-transparent px-5 py-20 text-white
        sm:px-8 sm:py-24
        md:px-10 md:py-28
        lg:px-24 lg:py-24
      "
    >
      <motion.div 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{duration:0.5, ease:easeOut}}
      className="mx-auto max-w-7xl">

        {/* Heading */}
        <p
          className="mb-3 text-xs tracking-[4px] text-[#66c61c]
            sm:mb-4 sm:text-sm sm:tracking-[5px]
          "
        >
          MY WORK
        </p>

        <div
          className="flex flex-col justify-between gap-5
            sm:gap-6
            md:flex-row md:items-end
          "
        >

          <h2
            className="max-w-3xl text-3xl font-bold leading-tight
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Selected
            <span className="text-gray-500"> projects.</span>
          </h2>

          <p
            className="max-w-md text-sm leading-7 text-gray-500
              sm:text-base
            "
          >
            Some of the projects I have built while learning and working
            with modern web technologies.
          </p>

        </div>


        {/* Projects */}
        <div
          className="mt-12 space-y-5
            sm:mt-14 sm:space-y-6
            md:mt-16
          "
        >

          {projects.map((project,index) => (
            <motion.div
              key={project.number}
              className="group flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 transition duration-300 hover:border-[#66c61c]
                sm:gap-6 sm:p-6
                md:flex-row md:items-center md:p-8
              "
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{
               duration: 0.7,
               delay: index * 0.12,
               ease: [0.22, 1, 0.36, 1],
}}
             
              
              
            >

              {/* Number */}
              <div
                className="text-sm text-[#66c61c]
                  md:w-20 md:shrink-0
                "
              >
                {project.number}
              </div>


              {/* Content */}
              <div className="flex-1">

                <p className="mb-2 text-xs text-gray-500 sm:text-sm">
                  {project.category}
                </p>

                <h3
                  className="text-xl font-semibold transition duration-300 group-hover:text-[#66c61c]
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="mt-2 max-w-2xl text-sm leading-7 text-gray-500
                    sm:mt-3 sm:text-base
                  "
                >
                  {project.description}
                </p>

              </div>


              {/* Arrow */}
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-lg text-[#66c61c] transition duration-300 group-hover:border-[#66c61c] group-hover:rotate-45
                  sm:h-12 sm:w-12 sm:text-xl
                "
              >
                ↗
              </div>

            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
};

export default Projects;