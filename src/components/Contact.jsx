export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-dark text-white text-center">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-[2rem] text-yellow-light mb-4">Get in Touch</h2>
        <p className="max-w-[520px] mx-auto mb-8 opacity-85 text-[1.05rem]">
          Have questions about services or want to talk through what might be right for you? Reach out — I'd love to be a part of your journey.
        </p>
        <a
          href="mailto:regina@mynutritionjourney.com"
          className="inline-block px-7 py-3 rounded-full font-semibold bg-yellow text-green-dark border-2 border-yellow hover:bg-yellow-dark hover:border-yellow-dark transition-all"
        >
          regina@mynutritionjourney.com
        </a>
      </div>
    </section>
  )
}
