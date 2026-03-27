import Link from "next/link";
import ServiceMainSection from "@/app/component/services-main-section";
import Image from "next/image";
import service1 from "../../public/images/service-1.png";
import service2 from "../../public/images/service-2.png";
import service3 from "../../public/images/service-3.png";

const serviceItems = [
  {
    label: "Custom Software Development",
    href: "/services/custom-software-development",
  },
  { label: "AI & Machine Learning", href: "/services/ai-machine-learning" },
  { label: "Digital Transformation", href: "/services/digital-transformation" },
  { label: "Staff Augmentation", href: "/services/staff-augmentation" },
  { label: "IT Consulting", href: "/services/it-consulting" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];

export default function ServicesPage() {
  return (
    <main className="w-full bg-black text-white">
      <div className="z-10 absolute top-0 right-0 pt-0 md:pt-20 w-full h-[800px] min-h-[700px] new-combine bg-bottom bg-[url('/images/service-bg-inner.webp')] bg-size-full bg-no-repeat md:bg-right"></div>

      <section className="service-main relative z-20">
        <div>
          <ServiceMainSection activeHref="/services/ai-machine-learning" />
        </div>
      </section>

      {/* Three Feature Sections */}
      <section className="relative bg-black px-6 py-48 md:px-10 lg:px-14 overflow-hidden">
        <div className="container mx-auto">
          <div className="mx-auto max-w-350 flex flex-col space-y-96">
            {/* Section 1: Digital Strategies */}
            <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-4 uppercase tracking-wider">
                    ► Software Development
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Custom Software Development
                  </h2>
                </div>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Our practitioners deliver tailored, industry-specific digital
                  solutions, products, and platforms, with deep technical and
                  domain expertise.
                </p>
                <div className="flex gap-4 flex-wrap pt-4">
                  <Link
                    href="/services/custom-software-development"
                    className="px-6 py-2.5 border border-zinc-600 rounded-full text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/blog"
                    className="px-6 py-2.5 border border-zinc-600 rounded-full text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    READ CASE STUDIES
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-124 h-auto">
                  <Image
                    src={service1}
                    alt="Custom Software Development"
                    className="h-auto w-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Platform Modernization */}

            <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="flex justify-flex-start">
                <div className="relative w-124 h-auto">
                  <div className="relative w-auto h-auto">
                    <Image
                      src={service2}
                      alt="Custom Software Development"
                      className="h-auto w-full rounded-3xl object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-4 uppercase tracking-wider">
                    ► PLATFORM MODERNIZATION
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Digital Transformation
                  </h2>
                </div>
                <p className="text-base text-zinc-400 leading-relaxed max-w-xl">
                  We transform legacy systems into agile, scalable, and secure
                  platforms that support innovation, improve performance, and
                  meet evolving business demands.
                </p>
                <div className="flex gap-4 flex-wrap pt-4">
                  <Link
                    href="/services/digital-transformation"
                    className="px-6 py-2.5 border border-zinc-600 rounded-full text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/blog"
                    className="px-6 py-2.5 border border-zinc-600 rounded-full text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    READ CASE STUDIES
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 3: AI/Gen AI */}
            <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-4 uppercase tracking-wider">
                    ► AI/ML
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    AI & Machine Learning
                  </h2>
                </div>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Harness the power of AI and generative intelligence to
                  automate workflows, unlock predictive insights, and deliver
                  intelligent applications.
                </p>
                <div className="flex gap-4 flex-wrap pt-4">
                  <Link
                    href="/services/ai-machine-learning"
                    className="px-6 py-2.5 border border-zinc-600 rounded-full text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/blog"
                    className="px-6 py-2.5 border border-zinc-600 rounded-full text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    READ CASE STUDIES
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-124 h-auto">
                  <div className="relative w-auto h-auto">
                    <Image
                      src={service2}
                      alt="Custom Software Development"
                      className="h-auto w-full rounded-3xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
