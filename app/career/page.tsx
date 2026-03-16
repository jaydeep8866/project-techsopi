"use client";

import { useEffect, useMemo, useState } from "react";

type Job = {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  summary: string;
  description: string;
  requirements: string[];
  email: string;
};

const jobs: Job[] = [
  {
    id: "hr-executive-fresher",
    title: "HR Executive (Fresher)",
    category: "HR & Administration",
    location: "Mahalaxmi Nagar, Indore",
    type: "Full-time",
    summary:
      "We are looking for a proactive and enthusiastic HR Executive (Fresher) to join our team. The candidate will assist in recruitment, employee coordination, maintaining HR records, and supporting day-to-day HR operations.",
    description:
      "We are looking for a proactive and enthusiastic HR Executive (Fresher) to join our team. The candidate will assist in recruitment, employee coordination, maintaining HR records, and supporting day-to-day HR operations. This role is ideal for candidates who want to start their career in Human Resources and gain practical experience in hiring and employee management.",
    requirements: [
      "Strong communication and interpersonal skills",
      "Basic knowledge of HR processes and recruitment",
      "Good coordination and organizational skills",
      "Ability to handle confidential information",
      "Basic knowledge of MS Office (Excel, Word)",
      "Positive attitude and willingness to learn",
      "MBA / BBA in HR (preferred but not mandatory)",
    ],
    email: "careers@prifab.com",
  },
  {
    id: "sales-intern-fresher",
    title: "Sales Intern (Fresher)",
    category: "Sales & Marketing",
    location: "Mahalaxmi Nagar, Indore",
    type: "Full-time",
    summary:
      "We are looking for a motivated and enthusiastic Sales Intern to join our team. This role is ideal for freshers who want to build a career in sales and business development.",
    description:
      "We are looking for a motivated and enthusiastic Sales Intern to join our team. This role is ideal for freshers who want to build a career in sales and business development. The candidate will assist in identifying leads, coordinating with the sales team, and supporting client communication.",
    requirements: [
      "Strong verbal and written communication skills",
      "Interest in sales and business development",
      "Basic understanding of customer interaction",
      "Ability to learn quickly and adapt",
      "Team player with a positive attitude",
      "Graduate / pursuing graduation in any field",
    ],
    email: "careers@prifab.com",
  },
  {
    id: "bde-executive",
    title: "Business Development Executive (BDE)",
    category: "Sales & Marketing",
    location: "Mahalaxmi Nagar, Indore",
    type: "Full-time",
    summary:
      "Business Development Executive responsible for identifying new business opportunities, generating leads, and driving revenue growth. The candidate should possess strong communication skills and a goal-oriented mindset.",
    description:
      "Business Development Executive responsible for identifying new business opportunities, generating leads, and driving revenue growth. The candidate should possess strong communication skills and a goal-oriented mindset. This role requires outreach, follow-ups, and collaboration with internal teams to close opportunities.",
    requirements: [
      "Strong communication and negotiation skills",
      "Experience or strong interest in B2B sales",
      "Ability to generate and qualify leads",
      "Comfort with calls, follow-ups, and presentations",
      "Target-oriented and self-motivated",
      "Any graduate (MBA preferred)",
    ],
    email: "careers@prifab.com",
  },
];

const userAgentCanShare =
  typeof window !== "undefined" && typeof navigator.share === "function";

export default function CareerPage() {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const selectedJob = useMemo(
    () => jobs.find((job) => job.id === selectedJobId) ?? null,
    [selectedJobId],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedJobId(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleShare = async (job: Job) => {
    if (userAgentCanShare) {
      await navigator.share({
        title: `${job.title} | PriFab IT Solutions`,
        text: `Check this opening: ${job.title}`,
        url: window.location.href,
      });
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <main className="min-h-screen bg-[#080b14] text-white">
      <section className="relative overflow-hidden bg-black bg-[url('/images/service-bg-inner.webp')] bg-cover bg-bottom px-6 pb-20 pt-20 md:pb-48 md:pt-48 sm:px-10 lg:px-14">
        <div className="absolute -left-16 top-12 h-44 w-44 rounded-full " />
        <div className="absolute -right-10 bottom-4 h-52 w-52 rounded-full " />

        <div className="relative mx-auto max-w-5xl text-center px-4">
          <p className="text-xs  inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-inter font-medium text-white/80">
            CAREERS
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Join Our <span className="text-orange-500">Team</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl my-5 text-white/50  mx-auto font-inter font-normal sm:text-lg">
            Build the future of technology with us. We are looking for
            passionate individuals to join our growing team.
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl md:max-w-3xl gap-3 text-sm text-blue-50/95 sm:grid-cols-3">
            <div className="rounded-full border border-white/15 bg-[rgba(18,17,17,0.5)] px-4 py-3">
              Remote-First
            </div>
            <div className="rounded-full border border-white/15 bg-[rgba(18,17,17,0.5)] px-4 py-3">
              Growth Opportunities
            </div>
            <div className="rounded-full border border-white/15 bg-[rgba(18,17,17,0.5)] px-4 py-3">
              Competitive Benefits
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#000] px-6 py-14 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-blue-50">
              Open Positions
            </h2>
            <p className="mt-2 text-sm text-blue-100/70">
              We have {jobs.length} open positions available
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job) => (
              <article
                key={job.id}
                className="group flex h-full flex-col rounded-2xl border border-white/15 bg-[rgba(18,17,17,0.5)]  hover:border-[#5f86d8]/50 p-5"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-blue-50">
                    {job.title}
                  </h3>
                  <span className="max-w-[175px]  shrink-0 rounded-full border border-white/10 bg-[#46A4DB]/27 px-3 py-1 text-xs font-medium text-white/80">
                    {job.category}
                  </span>
                </div>

                <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-blue-100/70">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>

                <p className="line-clamp-4 text-sm md:text-base leading-7 text-white/80">
                  {job.summary}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedJobId(job.id)}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-md bg-transparent text-sm font-semibold text-orange-300 transition-colors hover:text-orange-200"
                >
                  View Details
                  <span aria-hidden="true">-&gt;</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="career-modal-title"
          onClick={() => setSelectedJobId(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-blue-600/35 bg-[linear-gradient(160deg,#0f162d_0%,#0a1022_100%)] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3
                  id="career-modal-title"
                  className="text-3xl font-semibold text-blue-50"
                >
                  {selectedJob.title}
                </h3>
                <p className="mt-2 text-sm text-blue-100/75">
                  {selectedJob.location} | {selectedJob.type} |{" "}
                  {selectedJob.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedJobId(null)}
                className="rounded-md border border-blue-500/35 px-3 py-1 text-sm text-blue-200 transition-colors hover:border-orange-400/60 hover:text-orange-200"
                aria-label="Close job details popup"
              >
                X
              </button>
            </div>

            <div className="mt-7 space-y-7 text-blue-100/90">
              <div>
                <h4 className="text-xl font-semibold text-blue-50">
                  Job Description
                </h4>
                <p className="mt-3 text-sm leading-7">
                  {selectedJob.description}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-50">
                  Requirements
                </h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 marker:text-orange-300">
                  {selectedJob.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-blue-700/30 pt-5">
              <a
                href={`mailto:${selectedJob.email}?subject=Application for ${selectedJob.title}`}
                className="inline-flex min-w-40 items-center justify-center rounded-lg border border-orange-400/50 bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
              >
                Apply via Email
              </a>
              <button
                type="button"
                onClick={() => {
                  void handleShare(selectedJob);
                }}
                className="inline-flex min-w-36 items-center justify-center rounded-lg border border-blue-400/40 bg-[#1a3a90] px-5 py-2.5 text-sm font-semibold text-blue-50 transition-colors hover:bg-[#2450c3]"
              >
                Share Post
              </button>
              <button
                type="button"
                onClick={() => setSelectedJobId(null)}
                className="inline-flex min-w-28 items-center justify-center rounded-lg border border-blue-600/35 bg-transparent px-5 py-2.5 text-sm font-semibold text-blue-100 transition-colors hover:border-orange-400/60 hover:text-orange-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
