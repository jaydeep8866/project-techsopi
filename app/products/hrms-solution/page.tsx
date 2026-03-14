import ProductsMainSection from "@/app/component/products-main-section";
import PoweredByAiSection from "@/app/component/powered-by-ai-section";
import Link from "next/link";
import Image from "next/image";
import hrmsImage from "../../../public/images/4.webp";

const keyFeatures = [
  "Employee onboarding automation",
  "Payroll management system",
  "Attendance tracking with biometrics",
  "Performance evaluation tools",
];

export default function HrmsSolutionPage() {
  return (
    <main className="mx-auto w-full px-0 py-10">
      <div className="pt-0 md:pt-20 new-combine bg-black bg-[url('/images/service-bg-inner.webp')] bg-no-repeat bg-cover bg-bottom md:bg-right">
        <section className="product-main">
          <ProductsMainSection activeHref="/products/hrms-solution" />
        </section>
        <section className="relative overflow-hidden pt-16 sm:py-20">
          <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
            <div className="flex w-full flex-col items-center gap-0">
              <p className="w-full text-center text-white/70 font-inter font-medium text-sm uppercase tracking-wide">
                Complete Suite
              </p>
              <h2 className="mx-auto max-w-3xl text-center text-2xl md:text-4xl font-inter font-semibold leading-tight text-white sm:text-6xl">
                Business Solutions
              </h2>
              <p className="text-center text-base my-5 text-white/70 max-w-3xl mx-auto font-inter font-normal">
                Comprehensive software solutions designed to address specific
                business needs and industry requirements with modern technology.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[url('/images/service-sec-2-bg.png')] bg-cover bg-center">
        <section className="hrms relative overflow-hidden py-16 sm:py-20">
          <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-8">
              <div className="rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] p-6 md:p-10 shadow-[0_8px_28px_rgba(0,0,0,0.22)]">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/35 bg-emerald-400/15 text-emerald-300">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="8.5"
                      cy="7"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M20 8v6M23 11h-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h3 className="text-3xl font-inter font-semibold leading-tight text-white sm:text-5xl">
                  HRMS
                </h3>
                <p className="mt-2 text-base font-inter font-medium text-[#46a3db]">
                  Human Resource Management
                </p>

                <p className="mt-4 max-w-4xl text-base font-inter font-normal leading-relaxed text-white/70">
                  Complete HR solution for employee lifecycle management,
                  payroll, and organizational efficiency.
                </p>

                <h4 className="mt-7 mb-4 text-2xl font-inter font-semibold text-white sm:text-3xl">
                  Key Features:
                </h4>
                <ul className="grid grid-cols-1 gap-y-3">
                  {keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-base font-inter font-normal text-white/70"
                    >
                      <svg
                        className="mt-0.5 shrink-0 text-emerald-400"
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          stroke="currentColor"
                          strokeWidth="1.3"
                        />
                        <path
                          d="M4.8 8l2.1 2.1L11.2 5.8"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex min-w-55 items-center justify-center rounded-xl bg-linear-to-r from-[#2f63da] to-[#8b2cd8] px-6 py-3 text-sm font-inter font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex min-w-55 items-center justify-center rounded-xl border border-[#3f79ff] px-6 py-3 text-sm font-inter font-semibold text-[#77a5ff] transition-colors hover:border-[#6a98ff] hover:text-[#a8c4ff]"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={hrmsImage}
                    alt="HRMS Solution"
                    className="h-auto w-full object-cover"
                  />
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-orange-400 px-3 py-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-xs font-inter font-semibold text-black">
                      AI-Powered
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PoweredByAiSection />
      </div>
    </main>
  );
}
