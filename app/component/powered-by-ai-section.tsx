const aiCards = [
  {
    title: "Intelligent Bots",
    description:
      "Advanced messaging bots powered by NLP for instant customer support, query resolution, and automated business processes.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Machine Learning",
    description:
      "Advanced ML algorithms for predictive analytics, pattern recognition, and intelligent decision-making across all business operations.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v1a3 3 0 01-3 3h-1v1a4 4 0 01-8 0v-1H7a3 3 0 01-3-3v-1a3 3 0 013-3h1V6a4 4 0 014-4z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="10" r="1" fill="white" />
        <circle cx="15" cy="10" r="1" fill="white" />
      </svg>
    ),
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    title: "Smart Automation",
    description:
      "Intelligent process automation that learns from user behavior and continuously optimizes workflows for maximum efficiency.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    gradient: "from-emerald-400 to-teal-500",
  },
];

export default function PoweredByAiSection() {
  return (
    <section className="advanced-ai relative overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-center text-center">
          {/* Badge */}
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-inter font-medium uppercase tracking-widest text-white/70">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M12 8v4l3 3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            AI Technology
          </span>

          <h2 className="max-w-3xl text-3xl font-inter font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Powered by Advanced AI
          </h2>
          <p className="mt-5 max-w-2xl text-base font-inter font-normal leading-relaxed text-white/60">
            Our products leverage cutting-edge artificial intelligence, machine
            learning, and natural language processing to deliver intelligent
            automation and insights.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-[rgba(15,15,17,0.65)] p-6 md:p-8 shadow-[0_8px_28px_rgba(0,0,0,0.22)] backdrop-blur transition-all hover:border-orange-400/30 hover:bg-[rgba(20,20,24,0.80)]"
            >
              {/* Icon */}
              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${card.gradient}`}
              >
                {card.icon}
              </div>

              <h3 className="text-xl font-inter font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm font-inter font-normal leading-relaxed text-white/60">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
