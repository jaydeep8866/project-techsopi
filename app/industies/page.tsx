import Link from "next/link";

const industryItems = [
  {
    label: "VanSales - AI Mobile Sales",
    href: "/industies/vansales-ai-mobile-sales",
  },
  {
    label: "Merchandising Platform",
    href: "/industies/merchandising-platform",
  },
  { label: "HRMS Solution", href: "/industies/hrms-solution" },
  {
    label: "Admission & Fees Management",
    href: "/industies/admission-fees-management",
  },
  { label: "CRM Platform", href: "/industies/crm-platform" },
  { label: "Billing Software", href: "/industies/billing-software" },
];

export default function IndustiesPage() {
  return (
    <main className="mx-auto w-full max-w-350 px-6 py-10">
      <h1 className="text-3xl font-semibold">Industries</h1>
      <ul className="mt-6 grid gap-3 text-lg sm:grid-cols-2">
        {industryItems.map((industry) => (
          <li key={industry.href}>
            <Link
              href={industry.href}
              className="block rounded-xl border border-zinc-200 px-4 py-3 text-zinc-700 transition-colors hover:border-zinc-950 hover:text-zinc-950"
            >
              {industry.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
