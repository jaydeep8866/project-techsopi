"use client";

import Link from "next/link";
import { useState } from "react";

const productData = [
  {
    label: "VanSales - AI Mobile Sales",
    href: "/products/vansales-ai-mobile-sales",
    description:
      "A smart mobile-first sales platform that empowers field teams with AI-driven recommendations, route intelligence, and real-time order visibility.",
  },
  {
    label: "Merchandising Platform",
    href: "/products/merchandising-platform",
    description:
      "A centralized merchandising solution for category planning, shelf compliance, promotions, and store execution tracking.",
  },
  {
    label: "HRMS Solution",
    href: "/products/hrms-solution",
    description:
      "A unified HRMS platform to manage employee onboarding, attendance, payroll, appraisals, and performance workflows.",
  },
  {
    label: "Admission & Fees Management",
    href: "/products/admission-fees-management",
    description:
      "A complete admission and fee management system for streamlined student enrollment, fee tracking, and payment reconciliation.",
  },
  {
    label: "CRM Platform",
    href: "/products/crm-platform",
    description:
      "A robust CRM platform for lead capture, pipeline tracking, customer communication, and long-term relationship growth.",
  },
  {
    label: "Billing Software",
    href: "/products/billing-software",
    description:
      "Smart billing software for invoicing, payment collection, tax handling, and account statement automation.",
  },
];

type ProductsMainSectionProps = {
  activeHref?: string;
};

export default function ProductsMainSection({
  activeHref,
}: ProductsMainSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    const initial = new Set<string>([productData[0].href, productData[1].href]);
    if (activeHref) initial.add(activeHref);
    return initial;
  });

  const toggle = (href: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(href)) next.delete(href);
      else next.add(href);
      return next;
    });
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-inter font-semibold leading-none text-white sm:text-4xl lg:text-6xl">
            Our Products
          </h1>
          <p className="mt-4 max-w-3xl text-sm font-inter font-normal text-white/60 sm:text-base">
            Discover our comprehensive suite of AI-powered software products
            designed to streamline business operations, enhance productivity,
            and drive digital transformation with intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {productData.map((product) => {
            const isOpen = openItems.has(product.href);
            const isActive = product.href === activeHref;
            return (
              <div
                key={product.href}
                className="border-b border-r border-white/15 p-6 md:p-8"
              >
                <button
                  onClick={() => toggle(product.href)}
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
                    {product.label}
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

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "mt-4 max-h-72 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-sm font-inter font-normal leading-relaxed text-white/60 sm:text-base">
                      {product.description}
                    </p>

                    <Link
                      href={product.href}
                      className="mt-5 flex items-center justify-between gap-2 font-inter text-sm font-medium uppercase tracking-wide text-white underline underline-offset-4 transition-colors hover:text-orange-400"
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
