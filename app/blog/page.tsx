"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { blogPosts, categories } from "./posts-data";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const featuredPost = useMemo(
    () => blogPosts.find((post) => post.featured) ?? blogPosts[0],
    [],
  );

  const visiblePosts = useMemo(
    () =>
      blogPosts.filter(
        (post) =>
          post.title !== featuredPost.title &&
          (activeCategory === "All Posts" || post.category === activeCategory),
      ),
    [activeCategory, featuredPost.title],
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 relative overflow-hidden bg-black bg-[url('/images/service-bg-inner.webp')] bg-cover bg-bottom  sm:py-20 xl:pb-48 xl:pt-80">
        <div className="absolute -left-10 top-8 h-44 w-44 rounded-full " />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full " />

        <div className="relative mx-auto max-w-[1400px] text-center px-4">
          <p className="text-xs  inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-inter font-medium text-white/80">
            BLOG
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Tech <span className="text-orange-500">Insights</span> and{" "}
            <span className="text-orange-500">Innovation</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base text-blue-100/90 sm:text-lg mx-auto">
            Stay updated with the latest trends, insights, and best practices in
            technology, digital transformation, and software development from
            our expert team.
          </p>
        </div>
      </section>

      <section className=" px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold text-blue-50 sm:text-4xl">
              Featured Article
            </h2>
            <span className="rounded-full border border-orange-400/35 bg-orange-500/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-orange-200">
              HIGHLIGHT
            </span>
          </div>

          <article className="grid overflow-hidden rounded-3xl border border-blue-500/25 bg-[linear-gradient(145deg,rgba(9,16,34,0.96),rgba(8,12,24,0.96))] shadow-[0_18px_60px_rgba(0,0,0,0.45)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-70 lg:min-h-95">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#070b16] via-[#070b16]/10 to-transparent" />
            </div>

            <div className="flex flex-col p-6 sm:p-8">
              <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-blue-100/75">
                <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-orange-200">
                  {featuredPost.category}
                </span>
                <span>{featuredPost.date}</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <h3 className="text-2xl font-semibold text-blue-50 sm:text-3xl">
                {featuredPost.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-blue-100/85 sm:text-base">
                {featuredPost.excerpt}
              </p>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
              >
                Read Article
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[url('/images/service-sec-2-bg.png')] bg-cover bg-center px-6 pb-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm cursor-pointer ${
                    isActive
                      ? "border-white/15 bg-[#46A4DB]/27 text-white"
                      : "border border-white/15 bg-[rgba(18,17,17,0.5)] text-white/75 hover:bg-[#46A4DB]/27 transition-colors"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visiblePosts.map((post) => (
              <article
                key={post.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-[rgba(18,17,17,0.5)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#03060d] via-[#03060d]/25 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-blue-100/70">
                    <span className="rounded-full border border-white/10 bg-[#46A4DB]/27 px-3 py-1 text-white/80">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold leading-snug text-blue-50">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-4 text-sm leading-7 text-blue-100/80">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-orange-200"
                  >
                    Read More
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
