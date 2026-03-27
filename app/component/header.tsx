"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import logo from "../../public/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industies" },
  { label: "Technologies", href: "/technologies" },
  { label: "Career", href: "/career" },
  // { label: "Blog", href: "/blog" },
];

const industryItems = [
  {
    label: "VanSales - AI Mobile Sales",
    href: "/products/vansales-ai-mobile-sales",
    description:
      "AI-assisted field sales mobility platform for faster, smarter selling.",
  },
  {
    label: "Merchandising Platform",
    href: "/products/merchandising-platform",
    description:
      "Centralized merchandising workflows for planning, execution, and tracking.",
  },
  {
    label: "HRMS Solution",
    href: "/products/hrms-solution",
    description:
      "Integrated HR management for employee lifecycle and payroll operations.",
  },
  {
    label: "Admission & Fees Management",
    href: "/products/admission-fees-management",
    description:
      "End-to-end admissions and fee collection with streamlined operations.",
  },
  {
    label: "CRM Platform",
    href: "/products/crm-platform",
    description:
      "Customer relationship workflows for lead management and retention.",
  },
  {
    label: "Billing Software",
    href: "/products/billing-software",
    description:
      "Automated invoicing, payments, and billing reconciliation tools.",
  },
];

const serviceItems = [
  {
    label: "Custom Software Development",
    href: "/services/custom-software-development",
    description:
      "Build scalable, secure applications tailored to your business goals.",
  },
  {
    label: "AI & Machine Learning",
    href: "/services/ai-machine-learning",
    description:
      "Leverage intelligent models to automate and optimize key workflows.",
  },
  {
    label: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Modernize systems and processes for faster digital growth.",
  },
  {
    label: "Staff Augmentation",
    href: "/services/staff-augmentation",
    description: "Extend your team with skilled engineers ready to deliver.",
  },
  {
    label: "IT Consulting",
    href: "/services/it-consulting",
    description:
      "Get strategic technology guidance for architecture and delivery.",
  },
  {
    label: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Accelerate reach and engagement with data-driven campaigns.",
  },
];

function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktopNavHovered, setIsDesktopNavHovered] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<
    "services" | "products" | null
  >(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuInnerRef = useRef<HTMLDivElement | null>(null);

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnResize = () => {
      if (window.innerWidth >= 1200) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [menuOpen]);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    const inner = mobileMenuInnerRef.current;
    if (!menu || !inner) {
      return;
    }

    const menuItems = inner.querySelectorAll("[data-mobile-item]");

    if (menuOpen) {
      gsap.killTweensOf([menu, menuItems]);
      gsap.set(menu, { display: "block" });
      gsap.fromTo(
        menu,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" },
      );
      gsap.fromTo(
        menuItems,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.28, ease: "power2.out", stagger: 0.04 },
      );
      return;
    }

    gsap.killTweensOf([menu, menuItems]);
    gsap.to(menuItems, {
      y: 10,
      opacity: 0,
      duration: 0.18,
      ease: "power2.in",
      stagger: 0.02,
      onComplete: () => {
        gsap.to(menu, {
          height: 0,
          opacity: 0,
          duration: 0.24,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(menu, { display: "none" });
          },
        });
      },
    });
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      setMobileServicesOpen(false);
      setMobileProductsOpen(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    setActiveMegaMenu(null);
    setIsDesktopNavHovered(false);
  }, [pathname]);

  return (
    <header className="fixed z-50 font-inter w-full bg-transparent text-white md:pt-3">
      {(activeMegaMenu || isDesktopNavHovered) && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-40 bg-black/45 backdrop-blur-md"
        />
      )}
      <div className="relative z-50 mx-auto flex w-full max-w-350 items-center justify-between px-3.5 py-1 md:rounded-4xl border-1 border-zinc-800 bg-black/40 backdrop-blur-[2px]">
        <div className="navbar7_logo flex items-center">
          <Link href="/" aria-label="home" className="inline-flex items-center">
            <Image
              loading="lazy"
              src={logo}
              alt="Logo"
              className="h-auto w-[120px] md:w-[170px]  pl-2"
            />
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="header-mobile-toggle inline-flex h-11 w-11 items-center justify-center md:rounded-full md:border md:border-white text-zinc-100 transition-colors hover:bg-white"
        >
          <span className="relative block h-4 w-5 opacity-70">
            <span
              className={`absolute left-0 top-0 block h-[2px] w-5 bg-current transition-transform duration-300 border-1 border-white ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-[2px] w-5 bg-current transition-opacity duration-200 border-1 border-white ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-[2px] w-5 bg-current transition-transform duration-300 border-1 border-white ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <nav
          aria-label="Main navigation"
          className="header-desktop-nav"
          onMouseEnter={() => setIsDesktopNavHovered(true)}
          onMouseLeave={() => {
            setIsDesktopNavHovered(false);
            setActiveMegaMenu(null);
          }}
          onFocusCapture={() => setIsDesktopNavHovered(true)}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(event.relatedTarget as Node | null)
            ) {
              setIsDesktopNavHovered(false);
              setActiveMegaMenu(null);
            }
          }}
        >
          <ul className="flex flex-wrap items-center justify-end gap-4 text-sm font-inter font-medium uppercase tracking-wide text-zinc-100">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isActivePath(item.href)
                      ? "text-orange-500"
                      : "hover:text-white/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li
              className="group static"
              onMouseEnter={() => setActiveMegaMenu("services")}
              onMouseLeave={() => setActiveMegaMenu(null)}
              onFocusCapture={() => setActiveMegaMenu("services")}
              onBlurCapture={() => setActiveMegaMenu(null)}
            >
              <Link
                href="/services"
                className={`inline-flex items-center gap-1 rounded-md px-0 py-2 transition-colors ${
                  isActivePath("/services")
                    ? "text-orange-500"
                    : "hover:text-white/80"
                }`}
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform ${
                    activeMegaMenu === "services" ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 8L10 13L15 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <div
                className={`absolute left-0 top-[calc(100%+12px)] z-20 w-full rounded-3xl border border-zinc-800 bg-black/95 p-3 shadow-2xl transition-all duration-200 ${
                  activeMegaMenu === "services"
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {serviceItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block h-full rounded-3xl border border-zinc-800 hover:bg-zinc-950 px-6 py-5 transition-colors hover:border-zinc-600 font-inter ${
                          isActivePath(item.href) ? "text-orange-500" : ""
                        }`}
                      >
                        <div className="mb-3 flex items-start justify-between gap-4">
                          <h3 className="text-[22px] font-semibold normal-case tracking-normal text-zinc-100">
                            {item.label}
                          </h3>
                          <span className="text-2xl text-zinc-300">→</span>
                        </div>
                        <p className="font-inter font-normal text-base normal-case tracking-normal text-zinc-400">
                          {item.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className="group static"
              onMouseEnter={() => setActiveMegaMenu("products")}
              onMouseLeave={() => setActiveMegaMenu(null)}
              onFocusCapture={() => setActiveMegaMenu("products")}
              onBlurCapture={() => setActiveMegaMenu(null)}
            >
              <Link
                href="/products"
                className={`inline-flex items-center gap-1 rounded-md px-0 py-2 transition-colors ${
                  isActivePath("/products")
                    ? "text-orange-500"
                    : "hover:text-white/80"
                }`}
              >
                Products
                <svg
                  className={`h-4 w-4 transition-transform ${
                    activeMegaMenu === "products" ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 8L10 13L15 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <div
                className={`absolute left-0 top-[calc(100%+12px)] z-20 w-full rounded-3xl border border-zinc-800 bg-black/95 p-3 shadow-2xl transition-all duration-200 ${
                  activeMegaMenu === "products"
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {industryItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block h-full rounded-3xl border border-zinc-800 hover:bg-zinc-950 hover:border-zinc-600 px-6 py-5 transition-colors ${
                          isActivePath(item.href) ? "text-orange-500" : ""
                        }`}
                      >
                        <div className="mb-3 flex items-start justify-between gap-4">
                          <h3 className="text-[22px] font-semibold normal-case tracking-normal text-zinc-100">
                            {item.label}
                          </h3>
                          <span className="text-2xl text-zinc-300">&rarr;</span>
                        </div>
                        <p className="font-inter font-normal text-base normal-case tracking-normal text-zinc-400">
                          {item.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {navItems.slice(3).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors font-inter font-medium ${
                    isActivePath(item.href)
                      ? "text-orange-500"
                      : "hover:text-white/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="relative">
              <button
                type="button"
                aria-label="Search"
                onClick={() => setSearchOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 transition-colors hover:text-white/80 uppercase tracking-wide font-normal"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M12.8 12.8L16 16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-hn-light">Search</span>
              </button>
              {searchOpen && (
                <form
                  onSubmit={(event) => event.preventDefault()}
                  className="absolute right-0 top-[calc(100%+10px)]"
                >
                  <input
                    type="text"
                    placeholder="Search"
                    aria-label="Search input"
                    className="w-56 rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm normal-case tracking-normal text-zinc-100 outline-none placeholder:text-zinc-500"
                  />
                </form>
              )}
            </li>
            <li>
              <Link
                href="/contact-us"
                className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-hn-medium uppercase tracking-wide text-black transition-colors hover:bg-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        id="mobile-nav-panel"
        ref={mobileMenuRef}
        className="header-mobile-panel mx-auto mt-3 w-full max-w-350 overflow-hidden rounded-3xl border border-zinc-800 bg-black/95"
        style={{ display: "none", height: 0, opacity: 0 }}
      >
        <div ref={mobileMenuInnerRef} className="px-4 py-4">
          <ul className="space-y-1 text-sm uppercase tracking-wide text-zinc-100">
            {navItems
              .filter((item) => item.href !== "/products")
              .map((item) => (
                <li key={`mobile-${item.href}`} data-mobile-item>
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-3 py-2 font-hn-medium transition-colors hover:bg-zinc-800 ${
                      isActivePath(item.href) ? "text-orange-500" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            <li data-mobile-item className="px-3 pt-2">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-submenu"
                className={`flex w-full items-center justify-between rounded-xl py-2 text-left text-xs text-zinc-400 transition-colors hover:bg-zinc-800 ${
                  isActivePath("/services") ? "text-orange-500" : ""
                }`}
              >
                <span
                  className={`font-hn-medium text-sm uppercase ${
                    isActivePath("/services") ? "text-orange-500" : "text-white"
                  }`}
                >
                  Services
                </span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 8L10 13L15 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            {mobileServicesOpen && (
              <li>
                <ul id="mobile-services-submenu" className="space-y-1 pl-5">
                  {serviceItems.map((item) => (
                    <li key={`mobile-service-${item.href}`} data-mobile-item>
                      <Link
                        href={item.href}
                        className={`font-hn-medium block rounded-xl px-3 py-2 text-sm uppercase transition-colors hover:bg-zinc-800 ${
                          isActivePath(item.href)
                            ? "text-orange-500"
                            : "text-white"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}
            <li data-mobile-item className="px-3 pt-2">
              <button
                type="button"
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                aria-expanded={mobileProductsOpen}
                aria-controls="mobile-products-submenu"
                className={`flex w-full items-center justify-between rounded-xl py-2 text-left text-xs text-zinc-400 transition-colors hover:bg-zinc-800 ${
                  isActivePath("/products") ? "text-orange-500" : ""
                }`}
              >
                <span
                  className={`font-hn-medium text-sm uppercase ${
                    isActivePath("/products") ? "text-orange-500" : "text-white"
                  }`}
                >
                  Products
                </span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileProductsOpen ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 8L10 13L15 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            {mobileProductsOpen && (
              <li>
                <ul id="mobile-products-submenu" className="space-y-1 pl-5">
                  {industryItems.map((item) => (
                    <li key={`mobile-product-${item.href}`} data-mobile-item>
                      <Link
                        href={item.href}
                        className={`font-hn-medium block rounded-xl px-3 py-2 text-sm uppercase transition-colors hover:bg-zinc-800 ${
                          isActivePath(item.href)
                            ? "text-orange-500"
                            : "text-white"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}
            <li data-mobile-item>
              <Link
                href="/contact-us"
                className="mt-3 inline-flex rounded-full bg-white px-5 py-2 text-sm font-hn-medium uppercase tracking-wide text-black transition-colors hover:bg-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
