"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import project from "../public/images/5.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const slides = [
  {
    title: "Scale Your Team with Expert Developers",
    description:
      "End-to-end custom software development services built to meet your specific business requirements and drive digital transformation.",
    cta: "VIEW SERVICES",
    video: "/video/ai-first.mp4",
  },
  {
    title: "AI-Powered Business Solutions",
    description:
      "Transform your business with revolutionary AI-powered products including VanSales, Smart Admission Management, and automated business processes.",
    cta: "SCHEDULE DEMO",
    video: "/video/ai.mp4",
  },
  {
    title: "Custom Software Development",
    description:
      "End-to-end custom software development services built to meet your specific business requirements and drive digital transformation.",
    cta: "VIEW PORTFOLIO",
    video: "/video/data.mp4",
  },
  {
    title: "Digital Transformation Excellence",
    description:
      "Comprehensive digital transformation strategies to modernize your operations, enhance efficiency, and accelerate business growth.",
    cta: "LEARN MORE",
    video: "/video/Glassdoor.mp4",
  },
  {
    title: "Strategic IT Consulting",
    description:
      "Strategic technology guidance to optimize your IT infrastructure, improve security, and drive innovation across your organization.",
    cta: "OUR EXPERTISE",
    video: "/video/Glassdoor.mp4",
  },
];

const serviceCards = [
  {
    label: "CUSTOM SOFTWARE DEVELOPMENT",
    title:
      "Tailored software solutions built to meet your specific business requirements and objectives.",
    image: "/images/1.webp",
    href: "/services/custom-software-development",
  },
  {
    label: "DIGITAL TRANSFORMATION",
    title:
      "Comprehensive digital transformation strategies to modernize your business operations and processes.",
    image: "/images/2.webp",
    href: "/services/digital-transformation",
  },
  {
    label: "IT CONSULTING",
    title:
      "Strategic technology guidance to optimize your IT infrastructure and drive digital transformation.",
    image: "/images/3.webp",
    href: "/services/it-consulting",
  },
  {
    label: "DIGITAL MARKETING",
    title:
      "Comprehensive digital marketing strategies to enhance your online presence and drive business growth.",
    image: "/images/4.webp",
    href: "/services/digital-marketing",
  },
];

const partnerBrands = [
  { name: "React", image: "/images/react-original.svg" },
  { name: "Angular", image: "/images/angularjs-original.svg" },
  { name: "NextJS", image: "/images/nextjs-original.svg" },
  { name: "Vue.js", image: "/images/vuejs-original.svg" },
  { name: "Node.js", image: "/images/nodejs-original.svg" },
  { name: "DotNet", image: "/images/dotnetcore-original.svg" },
  { name: "PHP", image: "/images/php-original.svg" },
  { name: "Laravel", image: "/images/Laravel.svg" },
  { name: "JavaScript", image: "/images/javascript-original.svg" },
  { name: "Python", image: "/images/python-original.svg" },
  { name: "Java", image: "/images/java-original.svg" },
  { name: "ROR", image: "/images/rails-original-wordmark.svg" },
  { name: "React Native", image: "/images/react-native.svg" },
  { name: "Flutter", image: "/images/flutter-original.svg" },
  { name: "iOS", image: "/images/apple-original.svg" },
  { name: "Android", image: "/images/android-original.svg" },
  { name: "DevOps", image: "/images/docker-original.svg" },
  { name: "AI/ML", image: "/images/tensorflow-original.svg" },
  { name: "Kubernetes", image: "/images/kubernetes-plain.svg" },
  { name: "Jenkins", image: "/images/jenkins-original.svg" },
];

const aiAccelerators = [
  {
    title: "Ellow Talent Marketplaces",
    subtitle: "Technology",
    image: "/images/1.jpg",
  },
  {
    title: "Innowrap Technologies",
    subtitle: "Technology",
    image: "/images/2.jpg",
  },
  {
    title: "Mekanism Technologies",
    subtitle: "Technology",
    image: "/images/3.jpg",
  },
  {
    title: "Benchkart Services Pvt. Ltd.",
    subtitle: "Technology",
    image: "/images/4.jpg",
  },
  {
    title: "Capital Numbers",
    subtitle: "Technology",
    image: "/images/5.jpeg",
  },
];

const approachCards = [
  {
    title: "Expert team with 20+ years of industry experience",
    description:
      "We harness data pipelines, advanced analytics, and domain expertise to define use cases that move beyond proof-of-concept.",
    highlighted: false,
  },
  {
    title: "Agile development methodology for faster delivery",
    description:
      "Our Alti Agent Development & Assessment Framework (ADAF) ensures every agent is trustworthy, auditable, and production-ready.",
    highlighted: true,
  },
  {
    title: "24/7 support and maintenance services",
    description:
      "Prototypes from ALTI Labs graduate swiftly to client environments—accelerating time-to-value without sacrificing quality.",
    highlighted: false,
  },
  {
    title: "Competitive pricing with transparent billing",
    description:
      "Prototypes from ALTI Labs graduate swiftly to client environments—accelerating time-to-value without sacrificing quality.",
    highlighted: false,
  },
  {
    title: "Proven track record with 50+ successful projects",
    description:
      "Prototypes from ALTI Labs graduate swiftly to client environments—accelerating time-to-value without sacrificing quality.",
    highlighted: false,
  },
  {
    title: "Focus on scalable and maintainable solutions",
    description:
      "Prototypes from ALTI Labs graduate swiftly to client environments—accelerating time-to-value without sacrificing quality.",
    highlighted: false,
  },
];

const byTheNumbers = [
  { value: "50+", label: "Projects" },
  { value: "25+", label: "Happy Clients" },
  { value: "20+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
];

const splitNumberValue = (value: string) => {
  const match = value.match(/^(\d+)(.*)$/);

  if (!match) {
    return { target: 0, suffix: "", finalValue: value };
  }

  return {
    target: Number(match[1]),
    suffix: match[2] ?? "",
    finalValue: value,
  };
};

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSuccessOneHovered, setIsSuccessOneHovered] = useState(false);
  const [isSuccessTwoHovered, setIsSuccessTwoHovered] = useState(false);
  const [isSuccessThreeHovered, setIsSuccessThreeHovered] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<string[]>(() =>
    byTheNumbers.map((item) => {
      const { suffix } = splitNumberValue(item.value);
      return `0${suffix}`;
    }),
  );
  const pageRef = useRef<HTMLElement>(null);
  const numbersGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!pageRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const normalizer = ScrollTrigger.normalizeScroll({
        allowNestedScroll: true,
        momentum: () => 0.35,
      });

      const sections = gsap.utils.toArray<HTMLElement>("section:not(.hero)");

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 56 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 92%",
              end: "top 52%",
              scrub: 2,
            },
          },
        );
      });

      return () => {
        normalizer?.kill();
      };
    }, pageRef);

    return () => {
      context.revert();
    };
  }, []);

  useEffect(() => {
    if (!numbersGridRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimatedNumbers(byTheNumbers.map((item) => item.value));
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const counterTweens: gsap.core.Tween[] = [];

    const trigger = ScrollTrigger.create({
      trigger: numbersGridRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        byTheNumbers.forEach((item, index) => {
          const { target, suffix, finalValue } = splitNumberValue(item.value);

          if (!target) {
            setAnimatedNumbers((prev) => {
              const next = [...prev];
              next[index] = finalValue;
              return next;
            });
            return;
          }

          const counter = { value: 0 };

          const tween = gsap.to(counter, {
            value: target,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              const currentValue = Math.floor(counter.value);

              setAnimatedNumbers((prev) => {
                const next = [...prev];
                next[index] = `${currentValue}${suffix}`;
                return next;
              });
            },
            onComplete: () => {
              setAnimatedNumbers((prev) => {
                const next = [...prev];
                next[index] = finalValue;
                return next;
              });
            },
          });

          counterTweens.push(tween);
        });
      },
    });

    return () => {
      counterTweens.forEach((tween) => tween.kill());
      trigger.kill();
    };
  }, []);

  return (
    <main ref={pageRef}>
      <section className="hero relative h-full lg:h-[80vh] w-full overflow-hidden mt-0 lg:-mt-[90px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className=" sm:p-8 pb-0">
              <div className="flex items-center justify-between gap-8 flex-col lg:flex-row">
                <div className="text-white w-full lg:w-1/2">
                  <h1 className="text-4xl font-normal leading-tight sm:text-5xl text-orange-500 font-helvetica-neue">
                    {slides[activeSlide].title}
                  </h1>
                  <p className="mt-4 max-w-xl text-xl leading-snug text-white/90 sm:text-2xl">
                    {slides[activeSlide].description}
                  </p>
                  <button className="mt-8 rounded-full mt-8 rounded-full bg-orange-500 px-7 py-3 text-sm font-normal text-black transition hover:bg-orange-400 hover:cursor-pointermt-8 rounded-full bg-orange-500 px-7 py-3 text-sm font-normal text-black transition">
                    {slides[activeSlide].cta}
                  </button>
                </div>

                <div className="mt-20 lg:mt-0 w-80 h-80 lg:w-[425px] lg:h-[425px] overflow-hidden rounded-[50%]  order-first lg:order-last ">
                  <video
                    key={slides[activeSlide].video + activeSlide}
                    className=" h-[425px] w-[425px] object-cover sm:h-[425px] md:h-[425px] "
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={slides[activeSlide].video} type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeSlide === index ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="combine bg-black bg-[url('/images/service-bg.png')] bg-left bg-no-repeat bg-contain">
        <section className="our-services  py-16 sm:py-0">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 ">
            <div className="flex gap-3 snap-x snap-mandatory overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid lg:overflow-visible lg:snap-none lg:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map((card) => (
                <article
                  key={card.title}
                  className="group relative h-[400px] w-full min-w-full snap-start overflow-hidden border border-white/15 bg-black transition-all duration-300 hover:scale-101 hover:shadow-[0_0_8px_rgba(70,164,219,0.45)] lg:w-auto lg:min-w-0"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/95" />

                  <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                      {card.label}
                    </p>

                    <h3 className="mt-5 text-2xl font-medium leading-[1.25] text-white">
                      {card.title}
                    </h3>

                    <Link
                      href={card.href}
                      className="mt-auto flex translate-y-2 items-center justify-between text-orange-500 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <span className="text-base font-semibold">READ MORE</span>
                      <span className="text-[30px] leading-none">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[280px]" />

          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl  text-white sm:text-6xl">
              Industry-Leading{" "}
              <span className="text-orange-500">Technologies</span>
            </h2>

            <p className="text-center text-xl my-5 text-white/50 max-w-3xl mx-auto">
              Our expertise spans across modern frameworks and platforms to
              deliver cutting-edge solutions that drive innovation and business
              growth.
            </p>

            <div className="mx-auto mt-12 grid max-w-[1260px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sm:gap-5">
              {partnerBrands.map((brand) => (
                <div
                  key={brand.name}
                  className="group h-[100px] rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] px-6 text-white hover:bg-[#46A4DB]/27 transition-colors flex items-center justify-center cursor-pointer"
                >
                  <div className="flex h-full items-center justify-center">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="new-combine bg-black bg-[url('/images/right-bottom.webp')] bg-top bg-no-repeat bg-contain">
        <section className="relative overflow-hidden  py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[260px] " />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] " />

          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex flex-col items-start gap-0">
                <h2 className="max-w-3xl text-4xl font-medium leading-tight text-white sm:text-6xl">
                  Trusted by Industry
                  <span className="text-orange-500"> Leaders</span>
                </h2>
                <p className="text-left text-xl my-5 text-white/50 max-w-3xl mx-auto">
                  We're proud to work with innovative companies across various
                  industries, helping them achieve their digital transformation
                  goals and business success.
                </p>
              </div>
              <button className="rounded-full border border-white px-8 py-3 text-sm font-normal text-white transition hover:bg-white hover:text-black">
                EXPLORE MORE ACCELERATORS
              </button>
            </div>

            <div className="mt-12 flex gap-6 snap-x snap-mandatory overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid lg:overflow-visible lg:snap-none lg:grid-cols-5 trusted-companies">
              {aiAccelerators.map((accelerator) => (
                <article
                  key={accelerator.title}
                  className="w-full min-w-full snap-start rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.5)] p-4 lg:w-auto lg:min-w-0"
                >
                  <img
                    src={accelerator.image}
                    alt={accelerator.title}
                    className="h-[240px] w-full rounded-2xl object-cover"
                  />

                  <div className="mt-5">
                    <h3 className="text-2xl font-regular text-orange-500 capitalize">
                      {accelerator.title}
                    </h3>
                    <p className="mt-1 text-xl font-normal text-white flex items-center">
                      – {accelerator.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 " />

          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-medium text-white sm:text-[55px]">
              Excellence in Every Project
            </h2>

            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-4">
                {approachCards.map((card) => (
                  <article
                    key={card.title}
                    className={`rounded-3xl border px-2 py-2 sm:px-8 sm:py-4 ${
                      card.highlighted
                        ? "border-white/15 bg-black/60"
                        : "border-white/15 bg-black/60"
                    }`}
                  >
                    <h3 className="text-lg font-normal text-white sm:text-xl">
                      {card.title}
                    </h3>
                    {/* <p className="mt-3 max-w-full text-xl leading-relaxed text-white/85 sm:text-lg sm:leading-[1.35]">
                    {card.description}
                  </p> */}
                  </article>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center text-white rounded-xl overflow-hidden">
                <Image
                  src={project}
                  alt="Our Approach"
                  width={500}
                  height={500}
                  className="w-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="ecosyestem bg-black bg-[url('/images/ecosystem.png')] bg-top bg-no-repeat bg-cover    ">
        <section className="success relative overflow-hidden  py-16 sm:py-24">
          <div className="pointer-events-none absolute inset-0 " />

          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl font-medium text-white sm:text-6xl">
              <span className="text-orange-500">Your success</span> is our
              purpose
            </h2>

            <div className="relative mt-12 lg:min-h-[650px]">
              <div className="pointer-events-none static mx-auto lg:absolute left-1/2 top-1/2  w-auto lg:w-[440px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:block scale-80 lg:scale-100">
                <img
                  src="/images/success-ring-full.svg"
                  alt="Success graphic"
                  className="h-full w-full object-contain opacity-80"
                />

                <img
                  src="/images/success-ring-1.svg"
                  alt="Success graphic"
                  className={`h-full w-full object-contain absolute top-0 left-0 animate-spin-slow transition-opacity duration-300 ${
                    isSuccessOneHovered ? "opacity-80" : "opacity-0"
                  }`}
                />
                <img
                  src="/images/success-ring-2.svg"
                  alt="Success graphic"
                  className={`h-full w-full object-contain absolute top-0 left-0 animate-spin-slow transition-opacity duration-300 ${
                    isSuccessTwoHovered ? "opacity-80" : "opacity-0"
                  }`}
                />
                <img
                  src="/images/success-ring-3.svg"
                  alt="Success graphic"
                  className={`h-full w-full object-contain absolute top-0 left-0 animate-spin-slow transition-opacity duration-300 ${
                    isSuccessThreeHovered ? "opacity-80" : "opacity-0"
                  }`}
                />
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 -mt-40 md:mt-0">
                <article
                  className="success-1 ml-0 xl:ml-40 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.62)] hover:bg-[rgba(255,102,56,0.20)] p-6 backdrop-blur-[1px] mb-0 xl:mb-36 lg:max-w-[470px]"
                  onMouseEnter={() => setIsSuccessOneHovered(true)}
                  onMouseLeave={() => setIsSuccessOneHovered(false)}
                >
                  <h3 className="text-2xl font-medium text-white">
                    Services to drive digital growth
                  </h3>
                  <p className="hidden md:block mt-4 text-base leading-relaxed text-white/70">
                    Our digital enablement services redefine what's possible and
                    deliver outcomes with greater consistency, scale, and speed.
                  </p>
                  <Link
                    href="/services"
                    className="mt-10 flex justify-between items-center gap-3 text-sm font-normal uppercase text-white "
                  >
                    <span className="underline">Explore Services</span>
                    <span className="text-3xl leading-none">→</span>
                  </Link>
                </article>

                <article
                  className="success-2 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.62)] hover:bg-[rgba(255,102,56,0.20)] p-6 backdrop-blur-[1px] lg:mt-[160px] lg:ml-auto lg:max-w-[470px]"
                  onMouseEnter={() => setIsSuccessTwoHovered(true)}
                  onMouseLeave={() => setIsSuccessTwoHovered(false)}
                >
                  <h3 className="text-2xl font-medium text-white">
                    Practitioner-led capabilities
                  </h3>
                  <p className="hidden md:block mt-4 text-base leading-relaxed text-white/70">
                    Comprehensive digital capabilities to bolster enterprise
                    modernization and digital maturity.
                  </p>
                  <div className="flex ">
                    <Link
                      href="/services/it-consulting"
                      className="w-full mt-10 flex items-center justify-between gap-3 text-sm font-normal uppercase text-white "
                    >
                      <span className="underline">Explore Capabilities</span>
                      <span className="text-3xl leading-none">→</span>
                    </Link>
                  </div>
                </article>

                <article
                  className="success-3 rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.62)] hover:bg-[rgba(255,102,56,0.20)] p-6 backdrop-blur-[1px] lg:-mt-[60px] lg:max-w-[470px] ml-0 xl:ml-10"
                  onMouseEnter={() => setIsSuccessThreeHovered(true)}
                  onMouseLeave={() => setIsSuccessThreeHovered(false)}
                >
                  <h3 className="text-2xl font-medium text-white">
                    Industry focused expertise
                  </h3>
                  <p className="hidden md:block mt-4 text-base leading-relaxed text-white/70">
                    Our practitioners deliver tailored, industry-specific
                    digital solutions, products, and platforms, with deep
                    technical and domain expertise.
                  </p>
                  <Link
                    href="/industies"
                    className="mt-10 flex justify-between items-center gap-3 text-sm font-normal uppercase text-white"
                  >
                    <span className="underline">Explore Industries</span>
                    <span className="text-3xl leading-none">→</span>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden  py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 " />

          <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="text-5xl font-medium leading-tight text-white sm:text-7xl">
                  <span className="text-orange-500">Techsopi</span>
                  <br />
                  by the numbers
                </h2>
              </div>

              <div
                ref={numbersGridRef}
                className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-10"
              >
                {byTheNumbers.map((item, index) => (
                  <div key={item.label}>
                    <p className="font-georgia text-6xl leading-none text-white sm:text-7xl">
                      {animatedNumbers[index]}
                    </p>
                    <p className="mt-3 text-2xl font-normal text-white/90 sm:text-3xl">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="ready-business relative overflow-hidden bg-black  py-20 sm:py-28">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/video-bg.webm" type="video/webm" />
        </video>
        <div className="pointer-events-none absolute inset-0 " />

        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <h2 className="text-5xl font-medium leading-tight text-white sm:text-5xl">
              Ready to Transform
              <span className="text-orange-500"> Your Business?</span>
            </h2>

            <p className="mt-5 max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl sm:leading-[1.35]">
              Let's discuss how our IT solutions can help you achieve your
              business goals and drive digital transformation. Contact us today
              for a free consultation.
            </p>

            <Link
              href="/contact-us"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-normal uppercase tracking-wide text-black transition hover:bg-white/90"
            >
              Contact Our AI Experts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
