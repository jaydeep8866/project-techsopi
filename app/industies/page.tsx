export default function IndustiesPage() {
  const industries = [
    {
      title: "Healthcare",
      description:
        "Digital health solutions, EHR systems, telemedicine platforms, and healthcare analytics.",
      points: [
        "Electronic Health Records",
        "Telemedicine Solutions",
        "Healthcare Analytics",
        "HIPAA Compliance",
      ],
      image: "/images/1.webp",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M19.5 14.5c1.5-1.24 2.5-3.11 2.5-5.2A6.3 6.3 0 0015.7 3a6.2 6.2 0 00-3.7 1.2A6.2 6.2 0 008.3 3 6.3 6.3 0 002 9.3c0 2.1 1 3.96 2.5 5.2L12 21l7.5-6.5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Financial Services",
      description:
        "Fintech solutions, digital banking, payment systems, and compliance management.",
      points: [
        "Digital Banking",
        "Payment Processing",
        "Risk Management",
        "Regulatory Compliance",
      ],
      image: "/images/2.webp",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M3 10h18M8 14h3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "E-commerce & Retail",
      description:
        "Online marketplaces, inventory management, customer analytics, and omnichannel solutions.",
      points: [
        "E-commerce Platforms",
        "Inventory Management",
        "Customer Analytics",
        "Mobile Commerce",
      ],
      image: "/images/3.webp",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="9" cy="20" r="1.5" fill="currentColor" />
          <circle cx="18" cy="20" r="1.5" fill="currentColor" />
          <path
            d="M2 3h3l2.4 10.4A2 2 0 009.35 15H18a2 2 0 001.94-1.5L22 7H6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Education",
      description:
        "Learning management systems, educational apps, virtual classrooms, and student analytics.",
      points: [
        "Learning Management Systems",
        "Virtual Classrooms",
        "Student Information Systems",
        "Educational Apps",
      ],
      image: "/images/4.webp",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 9l10-5 10 5-10 5-10-5z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M6 11v4.5c0 1.2 2.7 2.5 6 2.5s6-1.3 6-2.5V11"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "Manufacturing",
      description:
        "Industry 4.0 solutions, IoT integration, supply chain optimization, and quality management.",
      points: [
        "IoT Integration",
        "Supply Chain Management",
        "Quality Control Systems",
        "Predictive Maintenance",
      ],
      image: "/images/5.webp",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 21h18M5 21V8l7-5 7 5v13"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      title: "Real Estate",
      description:
        "Property management systems, virtual tours, CRM solutions, and market analytics.",
      points: [
        "Property Management",
        "Virtual Tours",
        "CRM Systems",
        "Market Analytics",
      ],
      image: "/images/1.webp",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 10l8-6 8 6v9a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1v-9z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Transportation & Logistics",
      description:
        "Fleet management, route optimization, tracking systems, and warehouse automation.",
      points: [
        "Fleet Management",
        "Route Optimization",
        "Tracking Systems",
        "Warehouse Automation",
      ],
      image: "/images/2.webp",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 13h12v6H3zM15 15h3l3 3v1h-6v-4z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="7" cy="20" r="1.5" fill="currentColor" />
          <circle cx="18" cy="20" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Government & Public Sector",
      description:
        "Digital governance, citizen services, data security, and compliance solutions.",
      points: [
        "Digital Governance",
        "Citizen Portals",
        "Data Security",
        "Compliance Management",
      ],
      image: "/images/3.webp",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3l7 3v5c0 4.1-2.8 7.8-7 9-4.2-1.2-7-4.9-7-9V6l7-3z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="w-full bg-[#03050b]">
      <section className="py-20 relative overflow-hidden bg-black bg-[url('/images/service-bg-inner.webp')] bg-cover bg-bottom  sm:py-20 xl:pb-48 xl:pt-80">
        <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-inter font-medium text-white/80">
            Industries We Serve
          </span>
          <h1 className="mt-4 text-4xl font-inter font-semibold leading-tight text-white sm:text-6xl">
            Industries We <span className="text-orange-500">Serve</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base font-inter font-normal leading-relaxed text-white/80 sm:text-lg">
            Specialized IT solutions across diverse industries with deep
            understanding of unique challenges and regulatory requirements for
            digital transformation.
          </p>
        </div>
      </section>

      <section className="bg-black relative overflow-hidden bg-[url('/images/service-sec-2-bg.png')] bg-cover bg-top py-14 sm:py-20">
        <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-[#4a6cb2]/45 bg-[#214485]/18 px-4 py-1.5 text-xs font-inter font-medium text-[#8db5ff]">
              Our Industry Expertise
            </span>
            <h2 className="mt-4 text-3xl font-inter font-semibold leading-tight text-white sm:text-5xl">
              Deep Domain Knowledge
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base font-inter font-normal leading-relaxed text-white/65 sm:text-lg">
              Proven experience across multiple industries with specialized
              solutions tailored to meet unique business requirements and
              regulatory standards.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="overflow-hidden rounded-2xl border border-white/15 bg-[rgba(18,17,17,0.5)]  hover:border-[#5f86d8]/50 hover:bg-[rgba(20,26,42,0.92)]"
              >
                <div
                  className="relative h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${industry.image})` }}
                >
                  <div className="absolute inset-0 bg-[#2e4e96]/62" />
                  <div className="absolute inset-0 flex items-center justify-center text-[#d9e7ff]">
                    {industry.icon}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-inter font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm font-inter font-normal leading-relaxed text-white/65">
                    {industry.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {industry.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm font-inter font-medium text-[#fff]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
