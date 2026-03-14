type SpecializedSolutionItem = {
  title: string;
  description: string;
};

type SpecializedSolutionsSectionProps = {
  items: SpecializedSolutionItem[];
  sectionClassName?: string;
  cardClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const specializedSolutions = [
  {
    code: "MB",
    title: "Mobile Development",
    description: "Native and cross-platform apps for iOS and Android.",
  },
  {
    code: "DS",
    title: "Data Solutions",
    description:
      "Analytics, data pipelines, and BI dashboards for smarter decisions.",
  },
  {
    code: "PO",
    title: "Performance Optimization",
    description:
      "Application and infrastructure tuning for speed and reliability.",
  },
  {
    code: "MS",
    title: "Maintenance & Support",
    description: "24/7 monitoring, issue resolution, and release support.",
  },
  {
    code: "CL",
    title: "Cloud Solutions",
    description: "Cloud migration, modernization, and scalable architecture.",
  },
  {
    code: "QA",
    title: "Quality Assurance",
    description: "Manual and automated testing to ensure stable delivery.",
  },
];

export default function SpecializedSolutionsSection({
  items,
  sectionClassName = "specialize-solution relative overflow-hidden py-16 sm:py-20",
  cardClassName = "rounded-3xl border border-white/10 bg-[rgba(15,15,17,0.65)] p-7 shadow-[0_8px_28px_rgba(0,0,0,0.22)] backdrop-blur transition-all hover:border-[#46a3db]/45 hover:bg-[#46A4DB]/27",
  titleClassName = "text-3xl font-semibold leading-snug text-[#46a3db] sm:text-2xl font-inter",
  descriptionClassName = "mt-4 text-lg leading-relaxed text-white/70 font-inter font-normal",
}: SpecializedSolutionsSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center rounded-full border border-[#46a3db]/35 bg-[#46a3db]/15 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#7ac8f3]">
            Additional Services
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Specialized <span className="text-orange-500">Solutions</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg font-inter font-normal">
            Focused service modules that complement our core engineering
            offerings and solve high-impact business needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className={cardClassName}>
              <h3 className={titleClassName}>{item.title}</h3>
              <p className={descriptionClassName}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
