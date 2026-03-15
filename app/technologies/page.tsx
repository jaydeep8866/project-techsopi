import Image from "next/image";
import techImage from "../../public/images/ai.webp";

const techCategories = [
  {
    title: "Programming Languages",
    subtitle: "Modern languages for scalable applications",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 18l6-6-6-6M8 6L2 12l6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      {
        name: "JavaScript/TypeScript",
        pct: 95,
        desc: "Full-stack development with modern frameworks",
      },
      {
        name: "Python",
        pct: 90,
        desc: "AI/ML, data science, and backend development",
      },
      {
        name: "Java",
        pct: 80,
        desc: "Enterprise applications and microservices",
      },
      {
        name: "C#/.NET",
        pct: 85,
        desc: "Microsoft ecosystem and enterprise solutions",
      },
      { name: "Go", pct: 75, desc: "High-performance backend services" },
      {
        name: "Rust",
        pct: 70,
        desc: "Systems programming and performance-critical applications",
      },
    ],
  },
  {
    title: "Frontend Technologies",
    subtitle: "Modern UI/UX frameworks and libraries",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
    items: [
      {
        name: "React/Next.js",
        pct: 95,
        desc: "Component-based UI development",
      },
      { name: "Vue.js/Nuxt.js", pct: 85, desc: "Progressive web applications" },
      { name: "Angular", pct: 80, desc: "Enterprise-grade applications" },
      {
        name: "HTML5/CSS3",
        pct: 99,
        desc: "Modern web standards and responsive design",
      },
      { name: "Tailwind CSS", pct: 90, desc: "Utility-first CSS framework" },
    ],
  },
  {
    title: "Backend & Databases",
    subtitle: "Robust server-side technologies",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="12"
          cy="5"
          rx="9"
          ry="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
    items: [
      {
        name: "Node.js/Express",
        pct: 90,
        desc: "JavaScript runtime for server-side development",
      },
      { name: "PostgreSQL", pct: 85, desc: "Advanced relational database" },
      { name: "MongoDB", pct: 85, desc: "NoSQL document database" },
      { name: "Redis", pct: 80, desc: "In-memory data structure store" },
      { name: "GraphQL", pct: 80, desc: "Query language for APIs" },
      { name: "REST APIs", pct: 95, desc: "RESTful web services" },
    ],
  },
  {
    title: "Cloud Platforms",
    subtitle: "Scalable cloud infrastructure",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M18 10a6 6 0 00-11.9-1A5 5 0 005 19h13a4 4 0 000-8z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      { name: "Docker", pct: 90, desc: "Containerization platform" },
      { name: "Kubernetes", pct: 85, desc: "Container orchestration" },
      { name: "Terraform", pct: 80, desc: "Infrastructure as code" },
      { name: "CI/CD Pipelines", pct: 87, desc: "Automated deployment" },
    ],
  },
  {
    title: "Mobile Development",
    subtitle: "Cross-platform mobile solutions",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="7"
          y="2"
          width="10"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M11 18h2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      { name: "React Native", pct: 90, desc: "Cross-platform mobile apps" },
      { name: "Flutter", pct: 85, desc: "Google's UI toolkit" },
      { name: "Swift/iOS", pct: 80, desc: "Native iOS development" },
      { name: "Kotlin/Android", pct: 80, desc: "Native Android development" },
      { name: "Ionic", pct: 75, desc: "Hybrid mobile applications" },
      { name: "PWA", pct: 85, desc: "Progressive Web Applications" },
    ],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Intelligent automation solutions",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v1a3 3 0 01-3 3h-1v1a4 4 0 01-8 0v-1H7a3 3 0 01-3-3v-1a3 3 0 013-3h1V6a4 4 0 014-4z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      { name: "TensorFlow", pct: 85, desc: "Machine learning framework" },
      { name: "PyTorch", pct: 80, desc: "Deep learning platform" },
      { name: "OpenAI APIs", pct: 90, desc: "GPT and AI integration" },
      { name: "Scikit-learn", pct: 80, desc: "Machine learning library" },
      { name: "Pandas/NumPy", pct: 85, desc: "Data manipulation and analysis" },
      { name: "Computer Vision", pct: 75, desc: "Image and video processing" },
    ],
  },
  {
    title: "Security & DevOps",
    subtitle: "Secure development practices",
    icon: (
      <svg
        width="24"
        height="24"
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
    items: [
      { name: "OAuth/JWT", pct: 90, desc: "Authentication and authorization" },
      { name: "SSL/TLS", pct: 95, desc: "Secure communication protocols" },
      { name: "GitHub Actions", pct: 85, desc: "Workflow automation" },
      {
        name: "Monitoring Tools",
        pct: 80,
        desc: "Application performance monitoring",
      },
      { name: "Security Auditing", pct: 80, desc: "Vulnerability assessment" },
    ],
  },
  {
    title: "Emerging Technologies",
    subtitle: "Cutting-edge innovations",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      { name: "Blockchain", pct: 75, desc: "Distributed ledger technology" },
      {
        name: "IoT Integration",
        pct: 80,
        desc: "Internet of Things solutions",
      },
      {
        name: "WebAssembly",
        pct: 70,
        desc: "High-performance web applications",
      },
      {
        name: "Edge Computing",
        pct: 70,
        desc: "Distributed computing paradigm",
      },
      { name: "AR/VR", pct: 70, desc: "Immersive experiences" },
      { name: "Quantum Computing", pct: 60, desc: "Next-generation computing" },
    ],
  },
];

const approachPoints = [
  {
    title: "Future-Proof Solutions",
    desc: "We select technologies that ensure long-term scalability and maintainability.",
  },
  {
    title: "Best Practices",
    desc: "We follow industry standards and best practices for security, performance and maintainability.",
  },
  {
    title: "Continuous Learning",
    desc: "Our team stays updated with the latest technological advancements and trends.",
  },
  {
    title: "Right Tool for the Job",
    desc: "We carefully evaluate and select the most appropriate technologies for each project.",
  },
];

export default function TechnologiesPage() {
  return (
    <main className="w-full bg-black">
      {/* ── Section 1: Hero ── */}
      <section className="py-20 relative overflow-hidden bg-black bg-[url('/images/service-bg-inner.webp')] bg-cover bg-bottom  sm:py-20 xl:pb-48 xl:pt-80">
        <div className="relative mx-auto w-full max-w-350 px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v1a3 3 0 01-3 3h-1v1a4 4 0 01-8 0v-1H7a3 3 0 01-3-3v-1a3 3 0 013-3h1V6a4 4 0 014-4z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
            Technology Stack
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Our Technology <span className="text-orange-500">Stack</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Cutting-edge technologies and proven frameworks to build scalable,
            secure, and innovative solutions for modern businesses.
          </p>
        </div>
      </section>

      {/* ── Section 2: Technology Categories ── */}
      <section className="relative overflow-hidden bg-[url('/images/service-sec-2-bg.png')] bg-cover bg-center py-16 sm:py-24">
        <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center rounded-full border border-[#4a6cb2]/50 bg-[#214485]/20 px-4 py-1.5 text-xs font-medium text-[#8db5ff]">
              Technologies We Master
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Comprehensive Technology Expertise
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
              Our expertise spans across the entire technology spectrum, from
              frontend frameworks to cloud infrastructure and emerging
              technologies.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {techCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-3xl border border-white/10 bg-[rgba(14,18,30,0.70)] p-6 shadow-[0_8px_28px_rgba(0,0,0,0.30)] backdrop-blur md:p-8"
              >
                {/* Category header */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#46a3db]/35 bg-[#46a3db]/12 text-[#46a3db]">
                    {cat.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-white/50">{cat.subtitle}</p>
                  </div>
                </div>

                {/* Tech items grid */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
                  {cat.items.map((item) => (
                    <div key={item.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">
                          {item.name}
                        </span>
                        <span className="text-xs font-medium text-[#46a3db]">
                          {item.pct}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-linear-to-r from-[#2f63da] to-[#46a3db]"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                      <p className="mt-1 text-xs text-white/45">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Our Technology Approach ── */}
      <section className="relative overflow-hidden bg-black py-16 sm:py-24">
        <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-xs font-medium text-orange-300">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <path
                    d="M12 5v2M12 17v2M5 12H3M21 12h-2M7.05 7.05L5.64 5.64M18.36 18.36l-1.41-1.41M7.05 16.95l-1.41 1.41M18.36 5.64l-1.41 1.41"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                Our Approach
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Our Technology Approach
              </h2>

              <ul className="mt-8 flex flex-col gap-6">
                {approachPoints.map((point, i) => (
                  <li key={point.title} className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#46a3db]/40 bg-[#46a3db]/15 text-sm font-semibold text-[#46a3db]">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-white">
                        {point.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">
                        {point.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right image */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={techImage}
                alt="Our Technology Approach"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
