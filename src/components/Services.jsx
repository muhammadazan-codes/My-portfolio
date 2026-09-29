
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    text: "Modern, scalable and high-quality websites built with React and modern web technologies.",
    more:
      "I build fast, clean and user-focused websites using React, JavaScript and modern development practices. My focus is on creating maintainable interfaces with smooth performance, clear structure and a professional visual experience.",
  },
  {
    number: "02",
    title: "Responsive Design",
    text: "Fully responsive websites designed to provide a seamless experience across every screen size.",
    more:
      "I make sure websites adapt smoothly to mobile, tablet, laptop and desktop screens. Every layout is carefully structured so that content remains accessible, readable and visually consistent across different devices.",
  },
  {
    number: "03",
    title: "Interactive UI",
    text: "Engaging user interfaces with smooth animations and interactions for a modern digital experience.",
    more:
      "I create interactive interfaces using modern animation techniques to make websites feel more dynamic and engaging. From subtle hover effects to smooth page transitions, every interaction is designed to improve the overall user experience.",
  },
];

const Services = () => {
  const [openService, setOpenService] = useState(null);

  return (
    <section
      id="services"
      className="relative z-10 min-h-screen bg-transparent px-5 py-20 text-white  
        sm:px-8 sm:py-24  
        md:px-10 md:py-28  
        lg:px-24 lg:py-24  
      "
    >

      {/* Heading */}
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >

        <p
          className="mb-3 text-xs tracking-[4px] text-[#66c61c]  
            sm:mb-4 sm:text-sm sm:tracking-[5px]  
          "
        >
          SERVICES
        </p>

        <h2
          className="max-w-3xl text-3xl font-bold leading-tight  
            sm:text-4xl  
            md:text-5xl  
            lg:text-6xl  
          "
        >
          What I can
          <span className="text-gray-500"> do for you.</span>
        </h2>

      </motion.div>


      {/* Service Cards */}
      <div
        className="mx-auto mt-12 grid max-w-7xl gap-5  
          sm:mt-14 sm:gap-6  
          md:mt-16 md:grid-cols-2  
          lg:grid-cols-3  
        "
      >

        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className="group relative min-h-64 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 transition duration-300 hover:-translate-y-2 hover:border-[#66c61c]  
              sm:min-h-72 sm:p-7  
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              ease: "easeOut",
            }}
          >

            <span className="text-sm text-[#66c61c]">
              {service.number}
            </span>

            <h3
              className="mt-12 text-xl font-semibold  
                sm:mt-16 sm:text-2xl  
              "
            >
              {service.title}
            </h3>

            <p
              className="mt-3 text-sm leading-7 text-gray-500  
                sm:mt-4 sm:text-base  
              "
            >
              {openService === service.number ? service.more : service.text}
            </p>

            {/* Read More Button */}
           <button
  onClick={() =>
    setOpenService(
      openService === service.number ? null : service.number
    )
  }
  className="mt-4 text-sm font-medium text-[#66c61c] transition hover:text-white"
>
  {openService === service.number ? "Read Less ←" : "Read More →"}
</button>
<AnimatePresence initial={false}>
  {openService === service.number && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <p className="pt-4 text-sm leading-6 text-gray-400">
        {/* yahan aapka existing extra content */}
      </p>
    </motion.div>
  )}
</AnimatePresence>

            <span
              className="absolute bottom-5 right-5 text-xl text-[#66c61c]  
                sm:bottom-7 sm:right-7 sm:text-2xl  
              "
            >
              ↗
            </span>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Services;

