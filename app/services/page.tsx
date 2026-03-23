import Link from "next/link";
import ServiceMainSection from "@/app/component/services-main-section";

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
    <main className="mx-auto w-full max-w-full px-0 py-10 relative">
      <div className="absolute top-0 right-0 pt-0 md:pt-20 w-full h-[600px] min-h-[700px] new-combine  bg-[url('/images/service-bg-inner.webp')]  bg-no-repeat   md:bg-right"></div>
      <section className="service-main ">
        <div>
          <ServiceMainSection activeHref="/services/ai-machine-learning" />
        </div>
      </section>
    </main>
  );
}
