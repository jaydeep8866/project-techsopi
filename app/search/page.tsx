"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "../component/header";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
}

// Search data - comprehensive index of all website content
const searchableContent: SearchResult[] = [
  // Services
  {
    id: "service-1",
    title: "Custom Software Development",
    description:
      "Build scalable, secure applications tailored to your business goals. We develop robust, cloud-native applications.",
    href: "/services/custom-software-development",
    category: "Services",
  },
  {
    id: "service-2",
    title: "AI & Machine Learning",
    description:
      "Leverage intelligent models to automate and optimize key workflows. Advanced AI solutions for business automation.",
    href: "/services/ai-machine-learning",
    category: "Services",
  },
  {
    id: "service-3",
    title: "Digital Transformation",
    description:
      "Modernize systems and processes for faster digital growth. Transform your business with digital innovation.",
    href: "/services/digital-transformation",
    category: "Services",
  },
  {
    id: "service-4",
    title: "Staff Augmentation",
    description:
      "Extend your team with skilled engineers ready to deliver. Hire experienced developers and technical professionals.",
    href: "/services/staff-augmentation",
    category: "Services",
  },
  {
    id: "service-5",
    title: "IT Consulting",
    description:
      "Get strategic technology guidance for architecture and delivery. Expert consulting for IT infrastructure and strategy.",
    href: "/services/it-consulting",
    category: "Services",
  },
  {
    id: "service-6",
    title: "Digital Marketing",
    description:
      "Accelerate reach and engagement with data-driven campaigns. Marketing services for online visibility and brand growth.",
    href: "/services/digital-marketing",
    category: "Services",
  },

  // Products
  {
    id: "product-1",
    title: "VanSales - AI Mobile Sales",
    description:
      "AI-assisted field sales mobility platform for faster, smarter selling. Mobile sales app for field teams and representatives.",
    href: "/products/vansales-ai-mobile-sales",
    category: "Products",
  },
  {
    id: "product-2",
    title: "Merchandising Platform",
    description:
      "Centralized merchandising workflows for planning, execution, and tracking. Retail and merchandising management software.",
    href: "/products/merchandising-platform",
    category: "Products",
  },
  {
    id: "product-3",
    title: "HRMS Solution",
    description:
      "Integrated HR management for employee lifecycle and payroll operations. Human resources management system for employee data.",
    href: "/products/hrms-solution",
    category: "Products",
  },
  {
    id: "product-4",
    title: "Admission & Fees Management",
    description:
      "End-to-end admissions and fee collection with streamlined operations. School and college management software.",
    href: "/products/admission-fees-management",
    category: "Products",
  },
  {
    id: "product-5",
    title: "CRM Platform",
    description:
      "Customer relationship workflows for lead management and retention. Sales CRM for managing customer interactions.",
    href: "/products/crm-platform",
    category: "Products",
  },
  {
    id: "product-6",
    title: "Billing Software",
    description:
      "Automated invoicing, payments, and billing reconciliation tools. Invoice generation and payment processing system.",
    href: "/products/billing-software",
    category: "Products",
  },

  // Key features and keywords
  {
    id: "feature-1",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and cloud-based applications. Deploy applications on AWS, Azure, or Google Cloud.",
    href: "/services/custom-software-development",
    category: "Features",
  },
  {
    id: "feature-2",
    title: "Enterprise Software",
    description:
      "Enterprise-grade solutions for large organizations. Complex business process automation and integration.",
    href: "/services/custom-software-development",
    category: "Features",
  },
  {
    id: "feature-3",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications. iOS and Android app development services.",
    href: "/services/custom-software-development",
    category: "Features",
  },
  {
    id: "feature-4",
    title: "Web Development",
    description:
      "Modern web applications with latest technologies. React, Next.js, Node.js, and full-stack development.",
    href: "/services/custom-software-development",
    category: "Features",
  },
  {
    id: "feature-5",
    title: "API Development",
    description:
      "RESTful and GraphQL APIs for seamless integration. Custom API design and microservices architecture.",
    href: "/services/custom-software-development",
    category: "Features",
  },
  {
    id: "feature-6",
    title: "DevOps & Infrastructure",
    description:
      "CI/CD pipelines and infrastructure management. Docker, Kubernetes, and cloud deployment automation.",
    href: "/services/custom-software-development",
    category: "Features",
  },
  {
    id: "feature-7",
    title: "Data Analytics",
    description:
      "Business intelligence and data analytics solutions. Extract insights from big data and analytics dashboards.",
    href: "/services/ai-machine-learning",
    category: "Features",
  },
  {
    id: "feature-8",
    title: "Machine Learning Models",
    description:
      "Custom ML models for predictive analytics and classification. Supervised and unsupervised learning solutions.",
    href: "/services/ai-machine-learning",
    category: "Features",
  },
  {
    id: "feature-9",
    title: "Security & Compliance",
    description:
      "Data security, encryption, and compliance solutions. ISO 27001, GDPR, and security best practices.",
    href: "/services/it-consulting",
    category: "Features",
  },
  {
    id: "feature-10",
    title: "System Integration",
    description:
      "Legacy system integration and modernization. Connect disparate systems and databases.",
    href: "/services/digital-transformation",
    category: "Features",
  },

  // Technologies
  {
    id: "tech-1",
    title: "Technologies",
    description:
      "Explore the cutting-edge technologies we work with. React, Vue, Angular, Node.js, Python, Java, AWS, cloud computing.",
    href: "/technologies",
    category: "Technologies",
  },

  // Industries
  {
    id: "industry-1",
    title: "Industries",
    description:
      "Industry-specific solutions for Healthcare, Finance, Retail, Education, Manufacturing. Sector-specific expertise.",
    href: "/industies",
    category: "Industries",
  },

  // Pages
  {
    id: "page-1",
    title: "About Us",
    description:
      "Learn more about our company, mission, and the team behind it. Our vision and values, company information.",
    href: "/about-us",
    category: "Pages",
  },
  {
    id: "page-2",
    title: "Career",
    description:
      "Join our team and explore exciting career opportunities with us. Job openings and career growth.",
    href: "/career",
    category: "Pages",
  },
  {
    id: "page-3",
    title: "Contact Us",
    description:
      "Get in touch with us for a free consultation today. Contact information and support channels.",
    href: "/contact-us",
    category: "Pages",
  },
  {
    id: "page-4",
    title: "Blog",
    description:
      "Read our latest insights and articles. Technology trends, case studies, and company updates.",
    href: "/blog",
    category: "Pages",
  },

  // Common search terms and solutions
  {
    id: "solution-1",
    title: "Business Process Automation",
    description:
      "Automate your business processes and workflows. Improve efficiency with process automation.",
    href: "/services/digital-transformation",
    category: "Solutions",
  },
  {
    id: "solution-2",
    title: "Sales Management System",
    description:
      "Manage your sales team and processes effectively. Sales pipeline tracking and management.",
    href: "/products/crm-platform",
    category: "Solutions",
  },
  {
    id: "solution-3",
    title: "Employee Management",
    description:
      "Comprehensive employee and HR management system. Attendance, payroll, and benefits management.",
    href: "/products/hrms-solution",
    category: "Solutions",
  },
  {
    id: "solution-4",
    title: "Financial Management",
    description:
      "Billing, invoicing, and financial tracking solutions. Accounting and financial reporting tools.",
    href: "/products/billing-software",
    category: "Solutions",
  },
  {
    id: "solution-5",
    title: "Retail Solutions",
    description:
      "Point of sale, inventory, and retail management. Merchandising and store management systems.",
    href: "/products/merchandising-platform",
    category: "Solutions",
  },
  {
    id: "solution-6",
    title: "Educational Software",
    description:
      "Student management and educational institution software. Admission, fees, and academic management.",
    href: "/products/admission-fees-management",
    category: "Solutions",
  },
  {
    id: "solution-7",
    title: "Field Sales Management",
    description:
      "Mobile app for field sales teams and representatives. Track sales On-the-go with AI assistance.",
    href: "/products/vansales-ai-mobile-sales",
    category: "Solutions",
  },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(!!searchParams.get("q"));

  // Perform search
  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const filtered = searchableContent.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        return titleMatch || descriptionMatch;
      });

      setResults(filtered);
      setHasSearched(true);
    } else {
      setResults([]);
      setHasSearched(false);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Query is already synced via setSearchQuery
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-32 md:pt-36 px-6 pb-20 md:pb-32 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl">
          {/* Search Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Search results
            </h1>
          </div>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="flex gap-3 mb-12 sm:flex-row flex-col"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across entire website..."
              className="flex-1 rounded-full border border-zinc-700 bg-zinc-950/50 px-6 py-3 text-base text-white outline-none placeholder:text-zinc-500 focus:border-orange-400 transition-colors"
              autoFocus
            />
            <button
              type="submit"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition-colors hover:bg-white/90"
            >
              SUBMIT
            </button>
          </form>

          {/* Results */}
          {hasSearched ? (
            <div className="space-y-4">
              {results.length > 0 ? (
                <>
                  <p className="text-zinc-400 mb-6">
                    Results for "{searchQuery}"
                  </p>
                  {results.map((result) => (
                    <Link key={result.id} href={result.href}>
                      <article className="group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/50">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                                {result.title}
                              </h3>
                            </div>
                            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                              {result.description}
                            </p>
                          </div>
                          <span className="text-2xl text-zinc-600 group-hover:text-orange-400 transition-colors flex-shrink-0">
                            →
                          </span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-zinc-400 text-lg">
                    No results found for "{searchQuery}". Try another search.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-zinc-500 text-lg">
                Start typing to search across our website
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
