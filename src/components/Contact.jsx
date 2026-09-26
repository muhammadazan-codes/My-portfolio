const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen bg-transparent px-5 py-20 text-white
        sm:px-8 sm:py-24
        md:px-10 md:py-28
        lg:px-24 lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <p
          className="mb-3 text-xs tracking-[4px] text-[#66c61c]
            sm:mb-4 sm:text-sm sm:tracking-[5px]
          "
        >
          CONTACT
        </p>

        <h2
          className="max-w-4xl text-3xl font-bold leading-tight
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          Let's build something
          <span className="text-gray-500"> great together.</span>
        </h2>


        <div
          className="mt-12 grid gap-12
            sm:mt-14 sm:gap-14
            md:mt-20 md:grid-cols-2 md:gap-12
            lg:gap-20
          "
        >

          {/* Left Side */}
          <div>

            <p
              className="max-w-lg text-sm leading-7 text-gray-500
                sm:text-base sm:leading-8
              "
            >
              Have a project in mind or want to work together?
              Feel free to reach out. I would love to hear about
              your idea.
            </p>


            <div
              className="mt-8 space-y-5
                sm:mt-10 sm:space-y-6
              "
            >

              <div>

                <p className="text-xs text-gray-500 sm:text-sm">
                  EMAIL
                </p>

                <p
                  className="mt-2 text-base
                    sm:text-lg
                  "
                >
                  your@email.com
                </p>

              </div>


              <div>

                <p className="text-xs text-gray-500 sm:text-sm">
                  LOCATION
                </p>

                <p
                  className="mt-2 text-base
                    sm:text-lg
                  "
                >
                  Pakistan
                </p>

              </div>

            </div>

          </div>


          {/* Right Side */}
          <form className="space-y-5 sm:space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b border-zinc-700 bg-transparent px-2 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-[#66c61c]
                sm:py-4 sm:text-base
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-b border-zinc-700 bg-transparent px-2 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-[#66c61c]
                sm:py-4 sm:text-base
              "
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full resize-none border-b border-zinc-700 bg-transparent px-2 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-[#66c61c]
                sm:py-4 sm:text-base
              "
            />

            <button
              type="submit"
              className="rounded-full bg-[#66c61c] px-6 py-3 text-sm font-medium text-black transition active:scale-95
                sm:px-7 sm:text-base
              "
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;