import Link from "next/link";
import Image from "next/image";
import ProductsMainSection from "@/app/component/products-main-section";
import product1 from "../../public/images/product-1.png";
import product2 from "../../public/images/product-2.png";
import product3 from "../../public/images/product-3.png";

const productItems = [
  {
    label: "VanSales - AI Mobile Sales",
    href: "/products/vansales-ai-mobile-sales",
  },
  {
    label: "Merchandising Platform",
    href: "/products/merchandising-platform",
  },
  { label: "HRMS Solution", href: "/products/hrms-solution" },
  {
    label: "Admission & Fees Management",
    href: "/products/admission-fees-management",
  },
  { label: "CRM Platform", href: "/products/crm-platform" },
  { label: "Billing Software", href: "/products/billing-software" },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto w-full px-0 md:pt-0 md:pb-20 bg-black text-white">
      <div className="pt-0 md:pt-10 new-combine lg:h-200 lg:min-h-175 bg-black bg-[url('/images/service-bg-inner.webp')] bg-no-repeat bg-cover bg-bottom md:bg-right">
        <section className="product-main">
          <ProductsMainSection activeHref="/products/hrms-solution" />
        </section>
      </div>

      {/* Three Feature Sections */}
      <section className="relative bg-black px-6 py-0 md:px-10 lg:px-14 overflow-hidden">
        <div className="container mx-auto">
          <div className="mx-auto max-w-350 flex flex-col space-y-48 md:space-y-96">
            {/* Section 1: VanSales - AI Mobile Sales */}
            <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-3 md:space-y-6 order-2 md:order-1">
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-4 uppercase tracking-wider">
                    ► Mobile Sales
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    VanSales - AI Mobile Sales
                  </h2>
                </div>
                <p className="text-base text-zinc-400 leading-relaxed">
                  A smart mobile-first sales platform that empowers field teams
                  with AI-driven recommendations, route intelligence, and
                  real-time order visibility.
                </p>
                <div className="flex gap-2 md:gap-4  pt-4">
                  <Link
                    href="/products/vansales-ai-mobile-sales"
                    className="px-6 py-2.5 text-xs md:px-6 border border-zinc-600 rounded-full md:text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/blog"
                    className="px-6 py-2.5 text-xs md:px-6  border border-zinc-600 rounded-full  font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    READ CASE STUDIES
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-124 h-auto">
                  <Image
                    src={product1}
                    alt="VanSales - AI Mobile Sales"
                    className="h-auto w-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Merchandising Platform */}
            <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="flex justify-flex-start">
                <div className="relative w-124 h-auto">
                  <div className="relative w-auto h-auto">
                    <Image
                      src={product2}
                      alt="Merchandising Platform"
                      className="h-auto w-full rounded-3xl object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-4 uppercase tracking-wider">
                    ► Merchandising
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Merchandising Platform
                  </h2>
                </div>
                <p className="text-base text-zinc-400 leading-relaxed max-w-xl">
                  A centralized merchandising solution for category planning,
                  shelf compliance, promotions, and store execution tracking.
                </p>
                <div className="flex gap-2 md:gap-4  pt-4">
                  <Link
                    href="/products/merchandising-platform"
                    className="px-6 py-2.5 text-xs md:px-6 border border-zinc-600 rounded-full md:text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/blog"
                    className="px-6 py-2.5 text-xs md:px-6 border border-zinc-600 rounded-full md:text-sm font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    READ CASE STUDIES
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 3: HRMS Solution */}
            <div className="mb-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div>
                  <p className="text-sm font-semibold text-orange-400 mb-4 uppercase tracking-wider">
                    ► HRMS
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    HRMS Solution
                  </h2>
                </div>
                <p className="text-base text-zinc-400 leading-relaxed">
                  A unified HRMS platform to manage employee onboarding,
                  attendance, payroll, appraisals, and performance workflows.
                </p>
                <div className="flex gap-4 flex-wrap pt-4">
                  <Link
                    href="/products/hrms-solution"
                    className="px-6 py-2.5 text-xs md:px-6 md:text-sm border border-zinc-600 rounded-full  font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    LEARN MORE
                  </Link>
                  <Link
                    href="/blog"
                    className="px-6 py-2.5 text-xs md:px-6 md:text-sm border border-zinc-600 rounded-full  font-semibold text-white hover:bg-zinc-900 transition-colors"
                  >
                    READ CASE STUDIES
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-124 h-auto">
                  <div className="relative w-auto h-auto">
                    <Image
                      src={product3}
                      alt="HRMS Solution"
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
