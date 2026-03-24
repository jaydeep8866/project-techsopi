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
    <main className="mx-auto w-full max-w-350 px-6 py-10">
      <div className="pt-0 md:pt-20 new-combine bg-black bg-[url('/images/service-bg-inner.webp')] bg-no-repeat bg-cover bg-bottom md:bg-right">
        <section className="product-main">
          <ProductsMainSection activeHref="/products/crm-platform" />
        </section>
      </div>
    </main>
  );
}
