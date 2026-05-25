const HEALTHIE_URL =
  'https://secure.gethealthie.com/appointments/embed_appt?dietitian_id=15755985&provider_ids=%5B15755985%5D&appt_type_ids=%5B528128,528129,528130%5D&primary_color=4A9625'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-[2rem] text-green-dark mb-8">Services</h2>

        <div className="-mx-6 md:mx-0 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-8">

          {/* Nutrition Counseling */}
          <div className="bg-white rounded-none md:rounded-xl px-6 py-7 md:p-8 shadow-none md:shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-t-4 border-yellow flex flex-col gap-4">
            <p className="text-[0.88rem] text-green font-sans font-semibold -mt-2">
              📍 Available virtually — anywhere
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[2.5rem] leading-none">🥗</span>
              <h3 className="text-[1.4rem] text-green-dark">Nutrition Counseling</h3>
            </div>
            <p className="text-[#666] text-[0.98rem]">
              Personalized, evidence-based nutrition counseling to help you reach your health goals — whether you're managing a chronic condition, navigating a diagnosis, or simply ready to feel your best.
            </p>
            <ul className="pl-5 list-disc space-y-1.5 text-[0.95rem] marker:text-yellow-dark">
              <li>One-on-one sessions with a Registered Dietitian</li>
              <li>Individualized meal and nutrition planning</li>
              <li>Ongoing support and accountability</li>
              <li>Insurance reimbursable — <em>coming soon</em></li>
            </ul>
            <a
              href={HEALTHIE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start mt-1 inline-block px-7 py-3 rounded-full font-semibold bg-yellow text-green-dark border-2 border-yellow hover:bg-yellow-dark hover:border-yellow-dark transition-all"
            >
              Book a Session
            </a>
            <p className="text-[0.82rem] text-[#666] italic">
              Insurance reimbursement is not yet available but coming soon. In the meantime, private pay is accepted through the portal above.
            </p>
          </div>

          {/* Private Chef */}
          <div className="bg-white rounded-none md:rounded-xl px-6 py-7 md:p-8 shadow-none md:shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-t-4 border-yellow flex flex-col gap-4">
            <p className="text-[0.88rem] text-green font-sans font-semibold -mt-2">
              📍 Serving Pinellas County
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[2.5rem] leading-none">👩🏽‍🍳</span>
              <h3 className="text-[1.4rem] text-green-dark">Private Chef &amp; Meal Prep</h3>
            </div>
            <p className="text-[#666] text-[0.98rem]">
              Enjoy chef-prepared meals made specifically for you — in your own home. I handle the grocery shopping, prep, cooking, and cleanup, all tailored to your dietary needs and fitness goals.
            </p>
            <ul className="pl-5 list-disc space-y-1.5 text-[0.95rem] marker:text-yellow-dark">
              <li>In-home meal preparation</li>
              <li>Grocery shopping included</li>
              <li>Honors all dietary restrictions</li>
              <li>Customizable meal plans</li>
              <li>Designed around your fitness and health goals</li>
            </ul>
            <a
              href="#contact"
              className="self-start mt-1 inline-block px-7 py-3 rounded-full font-semibold bg-green-light text-green-dark border-2 border-green hover:bg-green hover:text-white transition-all"
            >
              Inquire About Availability
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
