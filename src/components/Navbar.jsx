const Navbar = () => {
  return (
    <nav className="fixed z-20 flex items-center justify-between px-8 py-5 -mt-12">

      {/* Logo */}
      <img
        src="/logo.png"
        alt="M. Azan Logo"
        className="h-32 w-32 object-contain -ml-10"
      />

      {/* Menu Button */}
      <button className="flex h-13 w-13 items-center justify-center rounded-full bg-zinc-700 text-2xl text-[#66c61c] ml-265">
        ☰
      </button>

    </nav>
  );
};

export default Navbar;