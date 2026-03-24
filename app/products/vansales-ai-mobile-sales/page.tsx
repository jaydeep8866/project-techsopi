import Image from "next/image";
import PoweredByAiSection from "@/app/component/powered-by-ai-section";
import vansalesImage from "../../../public/images/2.webp";
import Link from "next/link";

const aiFeatures = [
  "Instant inventory queries via messaging bots",
  "AI-powered sales team communication",
  "AI-powered stock level predictions",
  "Intelligent customer behavior analysis",
  "Automated sales report generation",
];

const keyFeatures = [
  "AI Bots for instant inventory queries",
  "Real-time inventory tracking with AI alerts",
  "Intelligent route optimization",
  "Smart customer relationship management",
  "AI-powered sales analytics and reporting",
  "Offline capability with cloud sync",
  "GPS tracking and geofencing",
  "Automated payment processing",
];

const benefits = [
  "Increase sales efficiency by 40% with AI automation",
  "Reduce order processing time with bot assistance",
  "Improve customer satisfaction with instant AI support",
  "Real-time business insights with AI analytics",
];

export default function VanSalesAiMobileSalesPage() {
  return (
    <main className="mx-auto w-full px-0 py-0">
      <div className="bg-[url('/images/service-sec-2-bg.png')]  bg-top pt-0 md:pt-32">
        <section className="vansales relative overflow-hidden py-16 sm:py-20">
          <div className="relative mx-auto w-full max-w-350 px-0 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-8">
              <div className=" p-6 md:p-0 ">
                <h3 className="text-3xl font-inter font-semibold leading-tight text-white sm:text-5xl">
                  VanSales AI
                </h3>
                <p className="mt-2 text-base font-inter font-medium text-orange-400">
                  AI-Powered Mobile Sales Management
                </p>

                <p className="mt-4 text-base font-inter font-normal leading-relaxed text-white/70 md:text-xl">
                  Revolutionary mobile sales solution with integrated AI bots
                  for instant inventory queries, real-time tracking, and
                  intelligent sales analytics.
                </p>

                <div className="mt-6 ">
                  <h4 className="flex items-center gap-2 text-xl font-inter font-medium text-orange-400 mb-3">
                    AI Features:
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {aiFeatures.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-base font-inter font-normal text-white/70"
                      >
                        <svg
                          className="mt-0.5 shrink-0"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            cx="8"
                            cy="8"
                            r="7"
                            stroke="#fb923c"
                            strokeWidth="1.2"
                          />
                          <path
                            d="M5 8l2 2 4-4"
                            stroke="#fb923c"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <h4 className="mt-6 mb-3 text-xl font-inter font-medium text-orange-500">
                  Key Features:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {keyFeatures.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-base font-inter font-normal text-white/70"
                    >
                      <svg
                        className="mt-0.5 shrink-0"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          stroke="#fb923c"
                          strokeWidth="1.2"
                        />
                        <path
                          d="M5 8l2 2 4-4"
                          stroke="#fb923c"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Benefits */}
                <h4 className="mt-6 mb-3 text-xl font-inter font-medium text-orange-500">
                  Benefits:
                </h4>
                <ul className="flex flex-col gap-2">
                  {benefits.map((ben) => (
                    <li
                      key={ben}
                      className="flex items-start gap-2 text-base font-inter font-normal text-white/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                      {ben}
                    </li>
                  ))}
                </ul>

                {/* CTA buttons */}
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

              {/* Right — image with badge */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={vansalesImage}
                    alt="VanSales AI Mobile Sales"
                    className="h-auto w-full object-cover"
                  />
                  {/* AI-Powered badge */}
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
