"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

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
      "Akshat Enclave, Kanti Chandra Rd, Kanti Nagar, Sindhi Camp, Jaipur, Rajasthan - 302016 Rajasthan",
    phone: "+91 14143 76417",
    email: "hr@techsopi.com",
  },
  {
    name: "Corporate Office",
    address:
      "44203 ,Prestige Aston Park, Prestige City Sarjapura Road Bangalore - 562125 Bangalore",
    phone: "+91 14143 76417",
    email: "hr@techsopi.com",
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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  // Initialize EmailJS
  useEffect(() => {
    // Use your actual Public Key (Account ID) from https://dashboard.emailjs.com/admin/account
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (value && !/^[a-zA-Z\s]+$/.test(value)) {
          error = "Name can only contain letters and spaces";
        }
        break;
      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (value && !/^\d+$/.test(value)) {
          error = "Phone number can only contain digits";
        }
        break;
    }
    setFieldErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    // Validate all fields
    const hasErrors = Object.values(fieldErrors).some((err) => err !== "");
    const requiredFieldsFilled =
      formData.fullName && formData.email && formData.message;

    if (!requiredFieldsFilled || hasErrors) {
      setError("Please fill in all required fields correctly");
      setLoading(false);
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_8dzpmvl", // Your service ID
        "template_ulv3vdr", // Your template ID
        {
          to_email: "hr@techsopi.com",
          from_email: formData.email,
          from_name: formData.fullName,
          full_name: formData.fullName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
      );

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
      setFieldErrors({
        fullName: "",
        email: "",
        phone: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: unknown) {
      console.error("Email error:", err);
      setError(
        (err as Error).message ||
          "Failed to send message. Please try again later.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="bg-[url('/images/service-bg-inner.webp')] bg-bottom relative overflow-hidden px-6 pb-20 pt-20 md:pb-64 md:pt-64 sm:px-10 lg:px-14">
        <div className="absolute left-12 top-8 h-44 w-44 rounded-full " />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full" />

        <div className="relative mx-auto max-w-[1400px] text-center px-4">
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="mt-2 max-w-3xl text-base text-white/50 sm:text-lg mx-auto">
            Ready to start your next project? Contact us today for a free
            consultation and let us transform your ideas into reality.
          </p>
        </div>
      </section>
      <div className="bg-black bg-[url('/images/service-sec-2-bg.png')]  bg-no-repeat  bg-top">
        <section className=" px-6 pb-20 md:pb-48 sm:px-10 lg:px-14">
          <div className="mx-auto grid max-w-350 gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            <article className="rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.8)] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.4)] sm:p-8">
              <h2 className="text-3xl font-semibold text-blue-50 sm:text-4xl">
                Let&apos;s Start a Conversation
              </h2>
              <p className="mt-3 text-sm leading-7 text-blue-100/80 sm:text-base">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              <form
                className="mt-7 grid gap-4 sm:grid-cols-2"
                onSubmit={handleSubmit}
              >
                {submitted && (
                  <div className="sm:col-span-2 rounded-lg bg-green-500/20 border border-green-500/50 p-4 text-green-200">
                    Thank you for your message! We&apos;ll get back to you
                    within 24 hours.
                  </div>
                )}

                {error && (
                  <div className="sm:col-span-2 rounded-lg bg-red-500/20 border border-red-500/50 p-4 text-red-200">
                    {error}
                  </div>
                )}

                <label className="flex flex-col gap-2 text-sm text-gray-100/85">
                  Full Name *
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="rounded-xl border border-gray-600/35 bg-black/50 !important px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-blue-200/35 focus:border-orange-400/60"
                  />
                  {fieldErrors.fullName && (
                    <span className="text-red-400 text-xs">
                      {fieldErrors.fullName}
                    </span>
                  )}
                </label>

                <label className="flex flex-col gap-2 text-sm text-gray-100/85">
                  Email Address *
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="rounded-xl border border-gray-600/35 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-blue-200/35 focus:border-orange-400/60"
                  />
                  {fieldErrors.email && (
                    <span className="text-red-400 text-xs">
                      {fieldErrors.email}
                    </span>
                  )}
                </label>

                <label className="flex flex-col gap-2 text-sm text-gray-100/85">
                  Company
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="rounded-xl border border-gray-600/35 bg-black/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-blue-200/35 focus:border-orange-400/60"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-gray-100/85">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="rounded-xl border border-gray-600/35 bg-black/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-blue-200/35 focus:border-orange-400/60"
                  />
                  {fieldErrors.phone && (
                    <span className="text-red-400 text-xs">
                      {fieldErrors.phone}
                    </span>
                  )}
                </label>

                <label className="sm:col-span-2 flex flex-col gap-2 text-sm text-gray-100/85">
                  Service Interested In
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="rounded-xl border border-gray-600/35 bg-black/50 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-orange-400/60"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="sm:col-span-2 flex flex-col gap-2 text-sm text-gray-100/85">
                  Message *
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project"
                    required
                    className="resize-none rounded-xl border border-gray-600/35 bg-black/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-blue-200/35 focus:border-orange-400/60"
                  />
                </label>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/80 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </article>

            <aside className="space-y-5">
              <article className="rounded-3xl border border-white/15 bg-[rgba(18,17,17,0.8)] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.4)] sm:p-8">
                <h3 className="text-2xl text-gradient font-semibold text-blue-50">
                  Get in Touch Today
                </h3>
                <p className="mt-2 text-sm text-blue-100/75">
                  Multiple ways to reach us for your convenience.
                </p>

                <div className="mt-6 space-y-5 text-sm text-blue-100/85">
                  <div>
                    <p className="text-[#48a5db]">Phone</p>
                    <a
                      href="tel:+911414376417"
                      className="mt-1 block text-base font-semibold text-blue-50 hover:text-orange-200"
                    >
                      +91 141-4376417
                    </a>

                    <p className="mt-1 text-blue-200/65">
                      Call us during business hours
                    </p>
                  </div>

                  <div>
                    <p className="text-[#48a5db]">Email</p>
                    <a
                      href="mailto:hr@techsopi.com"
                      className="mt-1 block text-base font-semibold text-blue-50 hover:text-orange-200"
                    >
                      hr@techsopi.com
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

              <article className="rounded-3xl border border-white/15  bg-[rgba(18,17,17,0.8)] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.4)] sm:p-8">
                <h3 className="text-xl font-semibold text-white">
                  Quick Contact
                </h3>
                <div className="mt-4 flex flex-col gap-3 text-sm">
                  <a
                    href="tel:+911414376417"
                    className="rounded-lg border border-white/15 bg-[rgba(18,17,17,0.5)] bg-black/25 px-4 py-2.5 font-medium text-white transition-colors "
                  >
                    Call us now: +91 14143 76417
                  </a>
                  <a
                    href="mailto:hr@techsopi.com"
                    className="rounded-lg border border-white/15 bg-[rgba(18,17,17,0.5)] bg-black/25 px-4 py-2.5 font-medium text-white transition-colors "
                  >
                    Email: hr@techsopi.com
                  </a>
                  <a
                    href="https://wa.me/+911414376417"
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
                  <p className="mt-3 text-sm leading-7 text-white-100/85">
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
