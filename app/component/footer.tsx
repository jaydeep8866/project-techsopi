import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Digital Business", href: "/services" },
      { label: "Platform Modernization", href: "/services" },
      { label: "AI/GenAI", href: "/services/ai-machine-learning" },
      { label: "Intelligent Systems and Operations", href: "/services" },
      { label: "Digital Enterprise", href: "/services/digital-transformation" },
      { label: "Digital Operations", href: "/services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "BFSI", href: "/industies" },
      { label: "Life Sciences", href: "/industies" },
      { label: "Retail & CPG", href: "/industies" },
      { label: "Automotive", href: "/industies" },
      { label: "Manufacturing", href: "/industies" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Data Engineering", href: "/services" },
      { label: "Cloud Engineering", href: "/services" },
      { label: "DevSecOps", href: "/services" },
      { label: "Agile", href: "/services" },
      { label: "Information Security", href: "/services" },
      { label: "Site Reliability Engineering (SRE)", href: "/services" },
      { label: "Quality Engineering", href: "/services" },
      { label: "Salesforce", href: "/services" },
      { label: "Digital Engineering", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", href: "/blog" },
      { label: "Case Studies", href: "/blog" },
      { label: "White Papers", href: "/blog" },
      { label: "Videos", href: "/blog" },
      { label: "Glossary", href: "/blog" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Press", href: "/about-us" },
      { label: "Careers", href: "/career" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Transparency in Coverage Rule", href: "/transparency" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M24 12a12 12 0 1 0-13.88 11.85v-8.39h-3.03V12h3.03V9.36c0-3 1.79-4.66 4.52-4.66 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.96.92-1.96 1.87V12h3.33l-.53 3.46h-2.8v8.39A12 12 0 0 0 24 12Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.23l-4.88-7.09L5.89 22H2.78l7.24-8.27L.8 2h6.39l4.41 6.42L18.9 2Zm-1.09 18.1h1.72L6.27 3.8H4.44L17.81 20.1Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.98 3.5A2.48 2.48 0 1 1 5 8.46a2.48 2.48 0 0 1-.02-4.96ZM3 9h4v12H3V9Zm7 0h3.84v1.71h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.53c0-1.32-.02-3.01-1.84-3.01-1.84 0-2.12 1.43-2.12 2.92V21h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M23.5 7.2a3.1 3.1 0 0 0-2.18-2.2C19.4 4.5 12 4.5 12 4.5s-7.4 0-9.32.5A3.1 3.1 0 0 0 .5 7.2 32 32 0 0 0 0 12a32 32 0 0 0 .5 4.8 3.1 3.1 0 0 0 2.18 2.2c1.92.5 9.32.5 9.32.5s7.4 0 9.32-.5a3.1 3.1 0 0 0 2.18-2.2A32 32 0 0 0 24 12a32 32 0 0 0-.5-4.8ZM9.6 15.3V8.7l6.2 3.3-6.2 3.3Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden  bg-black pt-20 text-white">
      <div className="pointer-events-none absolute inset-0 " />

      <div className="relative mx-auto w-full max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xl font-medium leading-tight text-white sm:text-[25px]">
                {column.title}
              </h3>
              <ul className="mt-2 space-y-1">
                {column.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] leading-tight text-white/90 transition-colors hover:text-white font-hn-light"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/15 pt-10 pb-12">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <Link
              href="/"
              aria-label="Altimetrik home"
              className="inline-flex items-center"
            >
              <Image
                src={logo}
                alt="Altimetrik Logo"
                className="h-auto w-90"
                priority={false}
              />
            </Link>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/90">
              <span>© 2026 Techsopi</span>
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-white font-hn-light"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-7 text-white/95">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="transition-colors hover:text-white/70"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
