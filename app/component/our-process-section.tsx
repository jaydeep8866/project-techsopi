type ProcessStepItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

type OurProcessSectionProps = {
  items: ProcessStepItem[];
  sectionClassName?: string;
  cardClassName?: string;
  stepIdClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function OurProcessSection({
  items,
  sectionClassName = "our-process relative overflow-hidden py-16 sm:py-20",
  cardClassName = "rounded-3xl border border-white/10 bg-[rgba(15,15,17,0.65)] p-7 shadow-[0_8px_28px_rgba(0,0,0,0.22)] backdrop-blur transition-all hover:border-[#46a3db]/45 hover:bg-[#46A4DB]/20",
  stepIdClassName = "mt-5 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white text-2xl font-semibold text-[#1f4ab8]",
  titleClassName = "mt-5 text-3xl font-semibold leading-snug text-white sm:text-2xl font-inter",
  descriptionClassName = "mt-4 text-lg leading-relaxed text-white/70 font-inter font-normal",
}: OurProcessSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-orange-400">
            Our Process
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Development <span className="text-orange-500">Methodology</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg font-inter font-normal">
            We follow a proven methodology to ensure successful project delivery
            and client satisfaction with transparent communication throughout.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((step) => (
            <article key={step.id} className={cardClassName}>
              <div className={stepIdClassName}>{step.id}</div>
              <h3 className={titleClassName}>{step.title}</h3>
              <p className={descriptionClassName}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
