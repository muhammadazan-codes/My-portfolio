const Navbar = () => {
  return (
    <nav className="relative z-20 flex w-full items-center justify-between px-4 py-4
      sm:px-6 
      md:relative lg:fixed md:left-0 md:top-0 md:px-8
    ">

      {/* Logo */}
      <img
        src="/logo.png"
        alt="M. Azan Logo"
        className="h-20 w-20 object-contain
          sm:h-24 sm:w-24
          md:h-28 md:w-28
          sm:-ml-6 md:-ml-8
          sm:-mt-6 md:-mt-6
        "
      />

      {/* Menu Button */}
      <button
        className="mr-2 flex h-12 w-12 items-center justify-center
          rounded-full
          bg-zinc-700
          text-2xl
          text-[#66c61c]
          transition
          hover:bg-zinc-600
          sm:mr-3
          md:mr-2
        "
      >
        ☰
      </button>

    </nav>
  );
};

export default Navbar;