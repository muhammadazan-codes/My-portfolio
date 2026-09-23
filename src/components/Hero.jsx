import Navbar from "./Navbar";
import StarBg from "./Starbg";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";


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
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      {/* Star Background */}
      <StarBg />
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-evenly px-8 mt-[-65px]">

        {/* Left Side */}
        <div className="">

          <p className="mb-6 text-sm tracking-widest text-gray-400">
            FORNTEND DEVELOPER
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-5xl">
            Hello, I'm 
            <span className="text-[#66c61c] ml-4">
              M.Azan
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I build modern, responsive and interactive
            websites using React <br/> and modern web technologies.
          </p>

          <div className="mt-8 flex items-center gap-4">

  {/* Hire Me */}
  <button className="rounded-full border-2 border-[#66c61c] px-7 py-3 text-lg text-[#66c61c] transition hover:bg-[#66c61c] hover:text-black">
    Hire Me
  </button>

  {/* Social Icons */}
  <div className="flex gap-3">

    <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#66c61c] text-[#66c61c]">
      <FaGithub size={22} />
    </button>

    <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#66c61c] text-[#66c61c]">
      <FaFacebook size={22} />
    </button>

    <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#66c61c] text-[#66c61c]">
      <FaInstagram size={22} />
    </button>

  </div>

</div>

        </div>


        {/* Right Side */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Green Glow */}
            <div className="absolute inset-0 rounded-full bg-[#66c61c] blur-3xl opacity-60">
            </div>

            {/* Image Circle */}
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-[#66c61c] bg-zinc-900">

              {/* Temporary */}
              <div className="flex h-full items-center justify-center text-gray-500">
                Your Image
              </div>

            </div>

          </div>

        </div>

      </div>
     <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-8 px-8 pb-10 md:grid-cols-4 -mt-7">
      {stats.map((stat, index) => (
      <div className="text-center" key={index}>
        <h1 className="text-3xl font-bold test-[#66c61c]">
          {stat.number}
        </h1>
        <p className="mt-4 text-gray-400 text-sm">
          {stat.title}
        </p>
      </div>
      ))}
     </div>
    </div>
  );
};

export default Hero;