"use client";

import Image from "next/image";
import serviceImage from "../../../public/images/software.webp";
import SpecializedSolutionsSection from "@/app/component/specialized-solutions-section";
import OurProcessSection from "@/app/component/our-process-section";
import ServiceMainSection from "@/app/component/services-main-section";

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

export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="mx-auto w-full  px-0 py-10">
      {/* <div className="pt-0 md:pt-20 new-combine bg-black bg-[url('/images/service-bg-inner.webp')]  bg-no-repeat bg-cover bg-bottom md:bg-right">
        <section className="service-main">
          <ServiceMainSection activeHref="/services/custom-software-development" />
        </section>
      </div> */}
      <div className="service-sec-2 bg-[url('/images/service-sec-2-bg.png')]  bg-top pt-0 md:pt-24">
        <section className="software-development relative overflow-hidden py-10 sm:py-10">
          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-8 ">
              <div className="max-w-2xl py-4 px-0 md:py-8 md:px-0 ">
                <h3 className="text-3xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-5xl">
                  Custom Software Development
                </h3>

                <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70 sm:text-xl">
                  End-to-end software development services tailored to your
                  specific business requirements.
                </p>

                <h3 className="mt-5 text-xl mb-3 text-orange-500 font-inter font-medium">
                  Key Features:
                </h3>
                <ul className="font-inter font-normal flex flex-col gap-3 list-disc list-inside text-base leading-relaxed text-white/70 sm:text-lg mb-3">
                  <li>Web Application Development</li>
                  <li>Mobile App Development</li>
                  <li>Desktop Applications</li>
                  <li>API Development & Integration</li>
                  <li>Legacy System Modernization</li>
                  <li>Ecommerce Development</li>
                </ul>
                <h3 className="mt-5 text-xl mb-3 text-orange-500 font-inter font-medium">
                  Technologies:
                </h3>
                <ul className="flex flex-wrap gap-3 mt-2 text-base">
                  <li className="py-2 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] px-6 text-white hover:bg-[#46A4DB]/27 transition-colors flex items-center justify-center cursor-pointer">
                    React
                  </li>
                  <li className="py-2 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] px-6 text-white hover:bg-[#46A4DB]/27 transition-colors flex items-center justify-center cursor-pointer">
                    Node.js
                  </li>
                  <li className="py-2 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] px-6 text-white hover:bg-[#46A4DB]/27 transition-colors flex items-center justify-center cursor-pointer">
                    Python
                  </li>
                  <li className="py-2 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] px-6 text-white hover:bg-[#46A4DB]/27 transition-colors flex items-center justify-center cursor-pointer">
                    Java
                  </li>
                  <li className="py-2 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] px-6 text-white hover:bg-[#46A4DB]/27 transition-colors flex items-center justify-center cursor-pointer">
                    .NET
                  </li>
                  <li className="py-2 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] px-6 text-white hover:bg-[#46A4DB]/27 transition-colors flex items-center justify-center cursor-pointer">
                    Flutter
                  </li>
                </ul>
              </div>

              <div className="relative mx-auto h-[280px] w-full sm:h-[360px] sm:w-[360px] lg:h-[430px] lg:w-auto ">
                <div className="">
                  <Image
                    src={serviceImage}
                    alt="Custom Software Development"
                    className="h-auto w-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SpecializedSolutionsSection
          items={specializedSolutions}
          sectionClassName="specialize-solution relative overflow-hidden pb-16 sm:py-20"
          cardClassName="p-3 rounded-md md:rounded-3xl border border-white/10 bg-[rgba(15,15,17,0.65)] md:p-7 shadow-[0_8px_28px_rgba(0,0,0,0.22)] backdrop-blur transition-all hover:border-[#46a3db]/45 hover:bg-[#46A4DB]/27"
          titleClassName="text-xl font-semibold leading-snug text-[#46a3db] sm:text-2xl font-inter"
          descriptionClassName="mt-2 md:mt-4 text-sm leading-relaxed text-white/70 font-inter font-normal"
        />
      </div>
      <OurProcessSection
        items={processSteps}
        sectionClassName="our-process relative overflow-hidden py-0 md:py-16 sm:py-20"
        cardClassName="rounded-3xl border border-white/10 bg-[rgba(15,15,17,0.65)] p-4 md:p-7 shadow-[0_8px_28px_rgba(0,0,0,0.22)] backdrop-blur transition-all hover:border-[#46a3db]/45 hover:bg-[#46A4DB]/20"
        stepIdClassName="mt-0 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/50 text-2xl font-semibold text-[#1f4ab8]"
        titleClassName="mt-5 text-xl md:text-3xl font-semibold leading-snug text-white sm:text-2xl font-inter"
        descriptionClassName="mt-0 md:mt-4 text-sm md:text-lg leading-relaxed text-white/70 font-inter font-normal"
      />
    </main>
  );
}
