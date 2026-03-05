import Link from "next/link";

const serviceItems = [
  {
    label: "Custom Software Development",
    href: "/services/custom-software-development",
  },
  { label: "AI & Machine Learning", href: "/services/ai-machine-learning" },
  { label: "Digital Transformation", href: "/services/digital-transformation" },
  { label: "Staff Augmentation", href: "/services/staff-augmentation" },
  { label: "IT Consulting", href: "/services/it-consulting" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-350 px-6 py-10">
      {/* <h1 className="text-3xl font-semibold">Services</h1>
      <ul className="mt-6 space-y-3 text-lg">
        {serviceItems.map((service) => (
          <li key={service.href}>
            <Link
              href={service.href}
              className="text-zinc-700 transition-colors hover:text-zinc-950"
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
