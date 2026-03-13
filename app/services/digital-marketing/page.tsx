// export default function DigitalMarketingPage() {
//   return (
//     <main className="mx-auto w-full max-w-350 px-6 py-10">
//       <h1 className="text-3xl font-semibold">Digital Marketing</h1>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import aiImage from "../../../public/images/ai.webp";

const specializedSolutions = [
  {
    code: "MB",
    title: "Mobile Development",
    description: "Native and cross-platform apps for iOS and Android.",
  },
  {
    code: "DS",
    title: "Data Solutions",
    description:
      "Analytics, data pipelines, and BI dashboards for smarter decisions.",
  },
  {
    code: "PO",
    title: "Performance Optimization",
    description:
      "Application and infrastructure tuning for speed and reliability.",
  },
  {
    code: "MS",
    title: "Maintenance & Support",
    description: "24/7 monitoring, issue resolution, and release support.",
  },
  {
    code: "CL",
    title: "Cloud Solutions",
    description: "Cloud migration, modernization, and scalable architecture.",
  },
  {
    code: "QA",
    title: "Quality Assurance",
    description: "Manual and automated testing to ensure stable delivery.",
  },
];

const processSteps = [
  {
    id: "01",
    icon: "DA",
    title: "Discovery & Analysis",
    description:
      "Deep understanding of your requirements, business goals, and technical challenges.",
  },
  {
    id: "02",
    icon: "SP",
    title: "Strategic Planning",
    description:
      "Creating a detailed project roadmap, timeline, and resource allocation strategy.",
  },
  {
    id: "03",
    icon: "AG",
    title: "Agile Development",
    description:
      "Iterative development with regular updates, feedback loops, and quality assurance.",
  },
  {
    id: "04",
    icon: "DS",
    title: "Delivery & Support",
    description:
      "Comprehensive testing, seamless deployment, and ongoing maintenance support.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <main className="mx-auto w-full  px-0 py-10">
      <div className="pt-20 new-combine bg-black bg-[url('/images/service-bg-inner.webp')]  bg-no-repeat bg-cover">
        <section className="relative overflow-hidden  py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[260px] " />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] " />

          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex flex-col items-start gap-0">
                <h2 className="max-w-3xl text-4xl font-inter font-semibold leading-tight text-white sm:text-6xl">
                  Our
                  <span className="text-orange-500"> Services</span>
                </h2>
                <p className="text-left text-xl my-5 text-white/50 max-w-3xl mx-auto font-inter font-normal">
                  Comprehensive IT solutions designed to accelerate your
                  business growth and digital transformation journey with
                  cutting-edge technology
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden  py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[260px] " />

          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="flex w-full items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex w-full flex-col items-start gap-0">
                <p className="w-full text-center text-white/70 font-inter font-medium text-sm uppercase tracking-wide">
                  Core Services
                </p>
                <h2 className="mx-auto max-w-3xl text-4xl font-inter font-semibold leading-tight text-white sm:text-6xl">
                  Flagship Solutions
                </h2>
                <p className="text-center text-xl my-5 text-white max-w-3xl mx-auto font-inter font-normal">
                  Our flagship services that form the foundation of our IT
                  solutions portfolio, designed to drive innovation and business
                  success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="service-sec-2 bg-[url('/images/service-sec-2-bg.png')] bg-cover bg-center">
        <section className="software-development relative overflow-hidden py-16 sm:py-20">
          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-8 ">
              <div className="max-w-2xl border border-white/15 bg-[rgba(18,17,17,0.5)] p-8 rounded-3xl">
                <h3 className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-5xl">
                  Digital Marketing
                </h3>

                <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 sm:text-2xl">
                  Comprehensive digital marketing strategies to enhance your
                  online presence and drive business growth.
                </p>

                <h3 className="mt-5 text-2xl mb-3 text-[#46a3db] font-inter font-medium">
                  Key Features:
                </h3>
                <ul className="font-inter font-normal flex flex-col gap-3 list-disc list-inside text-lg leading-relaxed text-white/70 sm:text-lg mb-3">
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Social Media Marketing</li>
                  <li>Content Marketing</li>
                  <li>Pay-Per-Click (PPC) Advertising</li>
                  <li>Email Marketing</li>
                  <li>Analytics & Reporting</li>
                </ul>
                <h3 className="mt-5 text-2xl mb-3 text-[#46a3db] font-inter font-medium">
                  Technologies:
                </h3>
                <ul className="flex flex-wrap gap-3 mt-2">
                  <li className="py-2 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] px-6 text-white hover:bg-[#46A4DB]/27 transition-colors flex items-center justify-center cursor-pointer">
                    Google Analytics
                  </li>
                  <li className="py-2 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] px-6 text-white hover:bg-[#46A4DB]/27 transition-colors flex items-center justify-center cursor-pointer">
                    SEO Tools
                  </li>
                  <li className="py-2 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] px-6 text-white hover:bg-[#46A4DB]/27 transition-colors flex items-center justify-center cursor-pointer">
                    Social Media Platforms
                  </li>
                  <li className="py-2 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] px-6 text-white hover:bg-[#46A4DB]/27 transition-colors flex items-center justify-center cursor-pointer">
                    Marketing Automation
                  </li>
                </ul>
              </div>

              <div className="relative mx-auto h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] lg:h-[430px] lg:w-auto ">
                <div className="">
                  <Image
                    src={aiImage}
                    alt="Custom Software Development"
                    className="h-auto w-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="specialize-solution relative overflow-hidden py-16 sm:py-20">
          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="inline-flex items-center rounded-full border border-[#46a3db]/35 bg-[#46a3db]/15 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#7ac8f3]">
                Additional Services
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Specialized <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg font-inter font-normal">
                Focused service modules that complement our core engineering
                offerings and solve high-impact business needs.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {specializedSolutions.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[rgba(15,15,17,0.65)] p-7 shadow-[0_8px_28px_rgba(0,0,0,0.22)] backdrop-blur transition-all  hover:border-[#46a3db]/45 hover:bg-[#46A4DB]/27 transition-colors"
                >
                  {/* <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2b8bff] to-[#7c3dff] text-sm font-semibold tracking-wide text-white">
                    {item.code}
                  </div> */}
                  <h3 className="text-3xl font-semibold leading-snug text-[#46a3db] sm:text-2xl font-inter">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/70 font-inter font-normal">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="our-process relative overflow-hidden py-16 sm:py-20">
          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-orange-400">
                Our Process
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Development <span className="text-orange-500">Methodology</span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg font-inter font-normal">
                We follow a proven methodology to ensure successful project
                delivery and client satisfaction with transparent communication
                throughout.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.id}
                  className="rounded-3xl border border-white/10 bg-[rgba(15,15,17,0.65)] p-7 shadow-[0_8px_28px_rgba(0,0,0,0.22)] backdrop-blur transition-all  hover:border-[#46a3db]/45 hover:bg-[#46A4DB]/20"
                >
                  {/* <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/12 text-xs font-semibold tracking-wide text-orange-300">
                    {step.icon}
                  </div> */}

                  <div className="mt-5 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white text-2xl font-semibold text-[#1f4ab8]">
                    {step.id}
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold leading-snug text-white sm:text-2xl font-inter">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/70 font-inter font-normal">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
