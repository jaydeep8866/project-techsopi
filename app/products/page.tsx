import Link from "next/link";
import ProductsMainSection from "@/app/component/products-main-section";

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
    <main className="mx-auto w-full  px-0 md:pt-0 md:pb-20">
      <div className="pt-0 md:pt-10 new-combine lg:h-[800px] lg:min-h-[700px] bg-black bg-[url('/images/service-bg-inner.webp')] bg-no-repeat bg-cover bg-bottom md:bg-right">
        <section className="product-main">
          <ProductsMainSection activeHref="/products/crm-platform" />
        </section>
      </div>
    </main>
  );
}
