const storyHighlights = [
  "50+ successful projects delivered",
  "25+ satisfied clients worldwide",
  "20+ years of combined experience",
  "100% client satisfaction rate",
];

const coreValues = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every project, delivering high-quality solutions that exceed expectations.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and close collaboration with our clients to achieve success.",
  },
  {
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.",
  },
  {
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 relative overflow-hidden bg-black bg-[url('/images/service-bg-inner.webp')] bg-cover bg-bottom  sm:py-20 xl:pb-48 xl:pt-80">
        <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute -right-4 top-2 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-350 text-center">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/85">
            About PriFab IT Solutions
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Transforming Businesses Through Innovation
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-blue-100/90 sm:text-lg">
            Forward-thinking IT solutions company with 20+ years of experience,
            helping businesses thrive in the digital age through innovative
            technology.
          </p>
        </div>
      </section>

      <div className="bg-[url('/images/service-sec-2-bg.png')] bg-cover bg-top ">
        <section className="  px-6 py-14 sm:px-10 lg:px-14">
          <div className=" mx-auto grid max-w-350 items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <article className="border border-white/15 bg-[rgba(18,17,17,0.5)] p-6 md:p-10 rounded-3xl">
              <p className="inline-flex rounded-full border border-blue-400/35 bg-blue-500/10 px-4 py-1 text-xs font-medium text-blue-200">
                Our Journey
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-blue-50 sm:text-4xl">
                Our Story
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-7 text-white/70 sm:text-base">
                <p>
                  Founded in 2010, PriFab IT Solutions emerged from a vision to
                  bridge the gap between cutting-edge technology and practical
                  business solutions. Our journey began with a small team of
                  passionate developers and has grown into a comprehensive IT
                  services company.
                </p>
                <p>
                  Over the years, we have successfully delivered 50+ projects
                  across various industries, helping businesses of all sizes
                  leverage technology to achieve their goals. Our commitment to
                  excellence and innovation has earned us the trust of clients
                  worldwide.
                </p>
                <p>
                  Today, we continue to evolve and adapt to the ever-changing
                  technology landscape, ensuring our clients stay ahead of the
                  curve with modern, scalable, and secure solutions that drive
                  business growth.
                </p>
              </div>

              <ul className="mt-6 grid gap-2 text-base text-white/70">
                {storyHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#46a3db]/50  text-xs text-white">
                      +
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <div className="overflow-hidden rounded-2xl border border-blue-600/25 bg-[#0a1329] shadow-[0_16px_45px_rgba(0,0,0,0.45)]">
              <img
                src="/images/2.webp"
                alt="Team collaboration meeting"
                className="h-full min-h-72 w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className=" px-6 py-14 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-350">
            <div className="text-center ">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5  text-xs font-medium text-white/85">
                Mission and Vision
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-blue-50 sm:text-4xl">
                Our Purpose and Direction
              </h2>
              <p className="text-center text-xl my-5 text-white/50 max-w-3xl mx-auto font-inter font-normal">
                Guided by our mission and vision, we strive to create meaningful
                impact through technology innovation and exceptional service
                delivery.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-white/15 bg-[rgba(18,17,17,0.5)] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.35)]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/25 text-blue-200">
                  M
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-blue-50">
                  Our Mission
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70 font-inter font-normal">
                  To empower businesses with innovative IT solutions that drive
                  growth, efficiency, and competitive advantage. We are
                  committed to delivering exceptional value through cutting-edge
                  technology, expert consultation, and unwavering dedication to
                  our clients' success.
                </p>
              </article>

              <article className="rounded-2xl border border-white/15 bg-[rgba(18,17,17,0.5)] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.35)]">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20 text-orange-200">
                  V
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-blue-50">
                  Our Vision
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70 font-inter font-normal">
                  To be the leading IT solutions provider, recognized for our
                  innovation, reliability, and transformative impact on
                  businesses worldwide. We envision a future where technology
                  seamlessly integrates with business processes to create
                  unprecedented opportunities for growth and success.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
      <section className=" px-6 py-14 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-350">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/85">
              Core Values
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-blue-50 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="text-center text-xl my-5 text-white/50 max-w-3xl mx-auto font-inter font-normal">
              These values guide everything we do and shape our relationships
              with clients, partners, and team members, ensuring consistent
              excellence.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-white/15 bg-[rgba(18,17,17,0.5)] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.35)] p-5 "
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/25 text-sm font-semibold text-blue-200">
                  {value.title.charAt(0)}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-blue-50">
                  {value.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-white/70 font-inter font-normal">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden  px-6 py-16 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-350 text-center">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium text-white/85">
            Global Presence
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Local Expertise, Global Reach
          </h2>
          <p className="text-center text-xl my-5 text-white/50 max-w-3xl mx-auto font-inter font-normal">
            With offices in Nanded and Indore, we serve clients across India and
            globally, providing comprehensive support and leveraging our
            team&apos;s expertise to deliver solutions that meet local market
            needs and international standards.
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
            <article className="rounded-2xl border border-white/20 bg-white/10 p-10 text-left backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">
                Registered Office
              </h3>
              <p className="max-w-xs mt-2 text-base leading-relaxed text-white/70 font-inter font-normal">
                G-01, Freedom Fighter Nagar, Near Water Tank, Nanded,
                Maharashtra - 431603
              </p>
            </article>

            <article className="rounded-2xl border border-white/20 bg-white/10 p-10 text-left backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">
                Corporate Office
              </h3>
              <p className="mt-2 text-base leading-relaxed text-white/70 font-inter font-normal">
                Office No : 202-B, Radhika Premier, Mahalaxmi Nagar Main Road,
                Indore 452010
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
