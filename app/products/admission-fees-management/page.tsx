import ProductsMainSection from "@/app/component/products-main-section";
import PoweredByAiSection from "@/app/component/powered-by-ai-section";
import Link from "next/link";
import Image from "next/image";
import hrmsImage from "../../../public/images/software.webp";

const aiBotFeatures = [
  "Instant admission inquiry responses",
  "Automated fee notification system",
  "AI-powered student query resolution",
];

const keyFeatures = [
  "AI Bots for student support",
  "Online admission portal with AI assistance",
  "Automated fee collection and tracking",
  "Student information system",
];

export default function CrmPlatformPage() {
  return (
    <main className="mx-auto w-full px-0 py-10">
      {/* <div className="pt-0 md:pt-20 new-combine bg-black bg-[url('/images/service-bg-inner.webp')] bg-no-repeat bg-cover bg-bottom md:bg-right">
        <section className="product-main">
          <ProductsMainSection activeHref="/products/crm-platform" />
        </section>
      </div> */}
      <div className="bg-[url('/images/service-sec-2-bg.png')]  bg-top pt-0 md:pt-32">
        <section className="admin relative overflow-hidden py-12 sm:py-10">
          <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
              <div className="p-0  md:p-0 ">
                <h3 className="text-3xl font-inter font-semibold leading-tight text-white sm:text-5xl">
                  Smart Admission &amp; Fees Management
                </h3>
                <p className="mt-2 text-base font-inter font-medium text-[#46a3db]">
                  AI-Enhanced Educational Institution Management
                </p>

                <p className="mt-4 max-w-4xl text-base md:text-xl font-inter font-normal leading-relaxed text-white/70">
                  Comprehensive solution for educational institutions with AI
                  bots for student support, automated fee management, and
                  intelligent query handling.
                </p>

                <div className="mt-6 ">
                  <h4 className="mt-6 mb-3 text-xl font-inter font-medium text-orange-500">
                    AI Bot Features:
                  </h4>
                  <ul className="grid grid-cols-1 gap-y-3">
                    {aiBotFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-base font-inter font-normal text-white/70"
                      >
                        <svg
                          className="mt-0.5 shrink-0 text-orange-500"
                          width="18"
                          height="18"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 6h8M4 9h8M4 12h5"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                          />
                          <rect
                            x="2"
                            y="3"
                            width="12"
                            height="10"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <h4 className="mt-6 mb-3 text-xl font-inter font-medium text-orange-500">
                  Key Features:
                </h4>
                <ul className="grid grid-cols-1 gap-y-3">
                  {keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-base font-inter font-normal text-white/70"
                    >
                      <svg
                        className="mt-0.5 shrink-0 text-orange-500"
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
                    className="inline-flex min-w-55 items-center justify-center rounded-3xl bg-white px-6 py-3 text-sm font-inter font-semibold text-black transition-opacity hover:opacity-90"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex min-w-55 items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm text-black transition hover:cursor-pointer hover:bg-orange-400 font-inter font-normal"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={hrmsImage}
                    alt="Smart Admission and Fees Management"
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
