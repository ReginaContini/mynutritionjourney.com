export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-dark to-green text-white px-6 py-16 md:py-20">
      <div className="max-w-[1000px] mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-[60px] items-center">

        {/* Text */}
        <div>
          <h1 className="text-[2rem] md:text-[2.8rem] leading-[1.2] mb-5 text-yellow-light font-serif">
            Eat with Love.<br />Live with Vitality.
          </h1>
          <p className="text-[1.05rem] md:text-[1.15rem] opacity-90 mb-8 leading-[1.6]">
            Registered Dietitian &amp; Private Chef serving you with expertise, warmth, and a little old-world heart.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#services"
              className="inline-block px-7 py-3 rounded-full font-semibold bg-yellow text-green-dark border-2 border-yellow hover:bg-yellow-dark hover:border-yellow-dark transition-all"
            >
              See My Services
            </a>
            <a
              href="#contact"
              className="inline-block px-7 py-3 rounded-full font-semibold bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-dark transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Headshot */}
        <div className="flex justify-center">
          <img
            src="/regina.png"
            alt="Regina Contini, Registered Dietitian & Private Chef"
            className="w-[240px] h-[280px] md:w-[280px] md:h-[320px] object-cover object-top rounded-xl border-4 border-yellow"
          />
        </div>

      </div>
    </section>
  )
}
