"use client";

import Link from "next/link";
import { useState } from "react";

const serviceData = [
  {
    label: "Custom Software Development",
    href: "/services/custom-software-development",
    description:
      "Our practitioners deliver tailored, industry-specific digital solutions, products, and platforms, with deep technical and domain expertise.",
  },
  {
    label: "Digital Transformation",
    href: "/services/digital-transformation",
    description:
      "We transform legacy systems into agile, scalable, and secure platforms that support innovation, improve performance, and meet evolving business demands.",
  },
  {
    label: "AI & Machine Learning",
    href: "/services/ai-machine-learning",
    description:
      "Harness the power of AI and generative intelligence to automate workflows, unlock predictive insights, and deliver intelligent applications.",
  },
  {
    label: "Staff Augmentation",
    href: "/services/staff-augmentation",
    description:
      "Scale your engineering team on demand with vetted professionals who integrate seamlessly into your existing workflows and culture.",
  },
  {
    label: "IT Consulting",
    href: "/services/it-consulting",
    description:
      "Strategic technology advisory to align your IT investments with business goals, optimize architecture, and accelerate delivery outcomes.",
  },
  {
    label: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "Accelerate reach and engagement with data-driven campaigns, SEO expertise, and performance marketing that deliver measurable growth.",
  },
];

type ServiceMainSectionProps = {
  activeHref?: string;
};

export default function ServiceMainSection({
  activeHref,
}: ServiceMainSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    const initial = new Set<string>([serviceData[0].href, serviceData[1].href]);
    if (activeHref) {
      initial.add(activeHref);
    }
    return initial;
  });

  const toggle = (href: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(href)) {
        next.delete(href);
      } else {
        next.add(href);
      }
      return next;
    });
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-5xl font-inter font-semibold leading-none text-white sm:text-7xl lg:text-6xl">
            Services
          </h1>
          <p className="mt-4 max-w-3xl text-sm font-inter font-normal text-white/60 sm:text-base">
            Comprehensive IT solutions designed to accelerate your business
            growth and digital transformation journey with cutting-edge
            technology
          </p>
        </div>

        {/* Collapsible service grid */}
        <div className="grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service) => {
            const isOpen = openItems.has(service.href);
            const isActive = service.href === activeHref;
            return (
              <div
                key={service.href}
                className="border-b border-r border-white/15 p-6 md:p-8"
              >
                {/* Card toggle button */}
                <button
                  onClick={() => toggle(service.href)}
                  className="group flex w-full items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-inter font-semibold leading-snug transition-colors sm:text-xl ${
                      isActive
                        ? "text-orange-400"
                        : "text-white group-hover:text-white/80"
                    }`}
                  >
                    {service.label}
                  </span>
                  <span className="ml-4 shrink-0 text-white/50">
                    {isOpen ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7.5 5L12.5 10L7.5 15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Collapsible content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "mt-4 max-h-72 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-sm font-inter font-normal leading-relaxed text-white/60 sm:text-base">
                      {service.description}
                    </p>

                    <Link
                      href={service.href}
                      className="mt-5 gap-2 font-inter text-sm font-medium uppercase tracking-wide text-white underline underline-offset-4 transition-colors hover:text-orange-400 flex justify-between items-center"
                    >
                      Read More
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
