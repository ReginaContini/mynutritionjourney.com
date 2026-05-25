import DandelionSVG from './DandelionSVG'

export default function About() {
  return (
    <section id="about" className="pt-20 pb-0 md:pb-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-[2rem] text-green-dark mb-8">About Regina</h2>

        <div className="flex flex-col gap-4 max-w-[700px] text-[1.05rem]">
          <p>
            I'm Regina Contini, RD, LD — a Registered Dietitian and a Le Cordon Bleu–trained chef. I bring technical skill, knowledge, and a genuine passion for helping people nourish themselves and live with vitality.
          </p>

          <h3 className="text-[1.4rem] text-green-dark mt-3">A Different Approach</h3>
          <p>
            I offer two services — <strong>Nutrition Counseling</strong> and <strong>Private Chef &amp; Meal Prep</strong> — each available on its own, or together for a fully integrated approach to your health and wellbeing.
          </p>

          <h4 className="text-[1.1rem] text-green font-sans font-bold tracking-[0.2px] mt-2">
            Private Chef &amp; Meal Prep
          </h4>
          <p>
            What makes this service unique is the combination of both disciplines. As a dietitian and a chef, I create meals that are medically appropriate <em>and</em> genuinely delicious — regardless of your dietary needs or fitness goals. My approach is rooted in the belief that eating well should feel joyful, not restrictive. That includes working with the foods you love — if there are favorite dishes or comfort foods you love, you shouldn't have to give them up — we can brainstorm together to find healthier alternatives that still fit your medical needs or fitness goals, while keeping the enjoyment and nostalgia that make those foods special.
          </p>

          <h4 className="text-[1.1rem] text-green font-sans font-bold tracking-[0.2px] mt-2">
            Nutrition Counseling
          </h4>
          <p>
            This is your journey — and I'm here to meet you where you are. That means getting to know you — your goals, barriers, hobbies, family, home life, and work schedule — looking at the whole holistic picture so we can set goals that are truly yours. My focus is always on sustainable, long-term lifestyle change rather than quick fixes, which rarely last and often lead right back to the habits that caused the problem in the first place. And beyond the plan itself, my deepest goal for every counseling client is genuine independence — to leave our work together equipped with the critical thinking skills to analyze food and make well-informed choices, grounded in the knowledge and goals we've built together.
          </p>
        </div>

        {/* Nonna note — full-width on mobile, constrained + left-border on md+ */}
        <div className="-mx-6 md:mx-0 mt-9 md:max-w-[720px] bg-yellow-light border-t-4 md:border-t-0 md:border-l-4 border-yellow md:rounded-r-xl px-5 py-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start gap-4">

            {/* Text block — icon only next to the heading, paragraphs flow below */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <DandelionSVG width={28} height={32} />
                <strong className="text-[1.05rem] text-green-dark">Why a dandelion?</strong>
              </div>
              <p className="text-[0.97rem] text-[#2C2C2C] mb-2.5 leading-[1.75]">
                The dandelion is for my Nonna, who came from Sardinia — an island in the Mediterranean Sea, part of Italy. One of my earliest memories is from when I was six years old — watching her walk into our overgrown yard with a bucket, gather what the rest of us called weeds, and turn them into a delicious meal of olive oil, garlic, and dandelion leaves. That's when I realized that real nourishment is rarely complicated — sometimes it's been in your own backyard all along.
              </p>
              <p className="text-[0.97rem] text-[#2C2C2C] leading-[1.75]">
                It was at that same age that she began teaching me how to cook. As she grew older and too weak to cook for herself, I started recreating some of her favorite meals for her. Watching the joy and vitality those meals brought her, well into her late nineties, sparked something in me — a deep belief in the power of food to heal, and in how essential it is not just for enjoyment, but for health, longevity, and quality of life.
              </p>
            </div>

            {/* Nonna photos */}
            <div className="flex md:flex-col gap-4 md:gap-0 md:ml-5 shrink-0 items-center w-full md:w-auto">
              <img
                src="/Nonna1.jpg"
                alt="Regina and her Nonna in the kitchen"
                className="w-[calc(50%-8px)] md:w-[190px] rounded-xl border-[3px] border-yellow-dark"
              />
              <div className="hidden md:block py-2.5" />
              <img
                src="/Nonna2.jpg"
                alt="Regina and her Nonna"
                className="w-[calc(50%-8px)] md:w-[190px] rounded-xl border-[3px] border-yellow-dark"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
