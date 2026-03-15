type Office = {
  name: string;
  address: string;
  phone?: string;
  email?: string;
};

const offices: Office[] = [
  {
    name: "Registered Office",
    address:
      "G-01, Freedom Fighter Nagar, Near Water Tank, Nanded, Maharashtra - 431603",
    phone: "+91 78800 97779",
    email: "info@prifabit.com",
  },
  {
    name: "Corporate Office",
    address:
      "Office No : 202-B, Radhika Premier, Mahalaxmi Nagar Main Road, Indore 452010",
    phone: "+91 731 4995680",
    email: "info@prifabit.com",
  },
  {
    name: "Dubai Office",
    address:
      "Office 1304 - The One Tower, Barsha Heights, Dubai, United Arab Emirates",
  },
  {
    name: "UK Office",
    address: "Manfield Avenue, Coventry, UK",
    phone: "+44 7799517086",
  },
];

const serviceOptions = [
  "Custom Software Development",
  "Digital Transformation",
  "Staff Augmentation",
  "IT Consulting",
  "Digital Marketing",
  "AI & Machine Learning",
];

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="bg-[url('/images/service-bg-inner.webp')] bg-bottom relative overflow-hidden px-6 pb-20 pt-20 md:pb-48 md:pt-48 sm:px-10 lg:px-14">
        <div className="absolute left-12 top-8 h-44 w-44 rounded-full " />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full" />

        <div className="relative mx-auto max-w-[1400px] text-center px-4">
          <p className="text-xs  inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-inter font-medium text-white/80">
            CONTACT
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base text-blue-100/90 sm:text-lg mx-auto">
            Ready to start your next project? Contact us today for a free
            consultation and let us transform your ideas into reality.
          </p>
        </div>
      </section>
      <div className="bg-black bg-[url('/images/service-sec-2-bg.png')]  bg-no-repeat bg-cover bg-top">
        <section className=" px-6 pb-20 md:pb-48 sm:px-10 lg:px-14">
          <div className="mx-auto grid max-w-350 gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            <article className="rounded-3xl border border-white/15 border border-white/15 bg-[rgba(18,17,17,0.8)] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.4)] sm:p-8">
              <h2 className="text-3xl font-semibold text-blue-50 sm:text-4xl">
                Let&apos;s Start a Conversation
              </h2>
              <p className="mt-3 text-sm leading-7 text-blue-100/80 sm:text-base">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              <form className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-blue-100/85">
                  Full Name *
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="rounded-xl border border-blue-600/35 bg-black/50 !important px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-blue-200/35 focus:border-orange-400/60"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-blue-100/85">
                  Email Address *
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="rounded-xl border border-blue-600/35 bg-black/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-blue-200/35 focus:border-orange-400/60"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-blue-100/85">
                  Company
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    className="rounded-xl border border-blue-600/35 bg-black/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-blue-200/35 focus:border-orange-400/60"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-blue-100/85">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="rounded-xl border border-blue-600/35 bg-black/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-blue-200/35 focus:border-orange-400/60"
                  />
                </label>

                <label className="sm:col-span-2 flex flex-col gap-2 text-sm text-blue-100/85">
                  Service Interested In
                  <select
                    name="service"
                    defaultValue=""
                    className="rounded-xl border border-blue-600/35 bg-black/50 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-orange-400/60"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="sm:col-span-2 flex flex-col gap-2 text-sm text-blue-100/85">
                  Message *
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project"
                    className="resize-none rounded-xl border border-blue-600/35 bg-black/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-blue-200/35 focus:border-orange-400/60"
                  />
                </label>

                <div className="sm:col-span-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/80 cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </article>

            <aside className="space-y-5">
              <article className="rounded-3xl border border-white/15 border border-white/15 bg-[rgba(18,17,17,0.8)] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.4)] sm:p-8">
                <h3 className="text-2xl font-semibold text-blue-50">
                  Get in Touch Today
                </h3>
                <p className="mt-2 text-sm text-blue-100/75">
                  Multiple ways to reach us for your convenience.
                </p>

                <div className="mt-6 space-y-5 text-sm text-blue-100/85">
                  <div>
                    <p className="text-[#48a5db]">Phone</p>
                    <a
                      href="tel:+917880097779"
                      className="mt-1 block text-base font-semibold text-blue-50 hover:text-orange-200"
                    >
                      +91 78800 97779
                    </a>
                    <a
                      href="tel:+917312999008"
                      className="block text-base font-semibold text-blue-50 hover:text-orange-200"
                    >
                      +91 731 2999008
                    </a>
                    <p className="mt-1 text-blue-200/65">
                      Call us during business hours
                    </p>
                  </div>

                  <div>
                    <p className="text-[#48a5db]">Email</p>
                    <a
                      href="mailto:contact@prifabit.com"
                      className="mt-1 block text-base font-semibold text-blue-50 hover:text-orange-200"
                    >
                      contact@prifabit.com
                    </a>
                    <p className="mt-1 text-blue-200/65">
                      Send us an email anytime
                    </p>
                  </div>

                  <div>
                    <p className="text-[#48a5db]">Business Hours</p>
                    <p className="mt-1 text-base font-semibold text-blue-50">
                      Monday - Friday: 10:00 AM - 7:00 PM
                    </p>
                    <p className="mt-1 text-blue-200/65">
                      When we are available
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-white/15 border border-white/15 bg-[rgba(18,17,17,0.8)] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.4)] sm:p-8">
                <h3 className="text-xl font-semibold text-white">
                  Quick Contact
                </h3>
                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <a
                    href="tel:+917880097779"
                    className="rounded-lg border border-white/15 bg-[rgba(18,17,17,0.5)] bg-black/25 px-4 py-2.5 font-medium text-white transition-colors "
                  >
                    Call us now: +91 78800 97779
                  </a>
                  <a
                    href="mailto:info@prifabit.com"
                    className="rounded-lg border border-white/15 bg-[rgba(18,17,17,0.5)] bg-black/25 px-4 py-2.5 font-medium text-white transition-colors "
                  >
                    Email: info@prifabit.com
                  </a>
                  <a
                    href="https://wa.me/917880097779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/15 bg-[rgba(18,17,17,0.5)] bg-black/25 px-4 py-2.5 font-medium text-white transition-colors 0"
                  >
                    Live Chat Support
                  </a>
                </div>
              </article>
            </aside>
          </div>
        </section>

        <section className="md:pb-48 px-6 pb-20 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-350">
            <h2 className="text-3xl font-semibold text-blue-50 sm:text-4xl">
              Visit Our Offices
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-100/80 sm:text-base">
              We have offices across major cities to serve you better. Visit us
              or schedule a meeting at your convenience.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {offices.map((office) => (
                <article
                  key={office.name}
                  className="rounded-2xl border border-white/15 bg-[rgba(18,17,17,0.5)] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
                >
                  <h3 className="text-xl font-semibold text-orange-500">
                    {office.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100/85">
                    {office.address}
                  </p>

                  {office.phone && (
                    <a
                      href={`tel:${office.phone.replace(/\s+/g, "")}`}
                      className="mt-4 block text-sm font-semibold text-blue-50 hover:text-orange-200"
                    >
                      {office.phone}
                    </a>
                  )}

                  {office.email && (
                    <a
                      href={`mailto:${office.email}`}
                      className="mt-2 block text-sm font-semibold text-blue-50 hover:text-orange-200"
                    >
                      {office.email}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
