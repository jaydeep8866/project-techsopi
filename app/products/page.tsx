import Link from "next/link";

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
      {/* <h1 className="text-3xl font-semibold">Products</h1>
      <ul className="mt-6 grid gap-3 text-lg sm:grid-cols-2">
        {productItems.map((product) => (
          <li key={product.href}>
            <Link
              href={product.href}
              className="block rounded-xl border border-zinc-200 px-4 py-3 text-zinc-700 transition-colors hover:border-zinc-950 hover:text-zinc-950"
            >
              {product.label}
            </Link>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
