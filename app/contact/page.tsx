"use client";

import Link from "next/link";
import { useState } from "react";

const contactMethods = [
  {
    icon: "📞",
    title: "Call Us",
    detail: "0751050059",
    sub: "Available 24/7 — we always pick up",
    href: "tel:0751050059",
    color: "var(--color-brand-green)",
    bg: "#e8f5e9",
    cta: "Call Now",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    detail: "0751050059",
    sub: "Quick response — usually within minutes",
    href: "https://wa.me/256751050059",
    color: "var(--color-brand-teal)",
    bg: "#e0f7fa",
    cta: "Chat on WhatsApp",
  },
  {
    icon: "📱",
    title: "TikTok",
    detail: "@aliciarides",
    sub: "Follow us for ride updates & offers",
    href: "https://www.tiktok.com/@aliciarides",
    color: "var(--color-brand-purple)",
    bg: "#f3e5f5",
    cta: "Follow Us",
  },
];

const services = [
  { label: "Airport Transfer", emoji: "✈️", desc: "Entebbe or any airport pickup/drop-off" },
  { label: "Upcountry Trip", emoji: "🛣️", desc: "Long-distance travel across Uganda" },
  { label: "Kukyala / Introduction", emoji: "💍", desc: "Traditional introduction ceremony transport" },
  { label: "Wedding Transport", emoji: "💒", desc: "Bridal party & guest convoys" },
  { label: "Graduation", emoji: "🎓", desc: "Ceremony & celebration transport" },
  { label: "Corporate / Business", emoji: "🏢", desc: "Executive & team transport" },
  { label: "Dinner & Night Out", emoji: "🍽️", desc: "Restaurant, events & outings" },
  { label: "Other / Custom", emoji: "✨", desc: "Tell us what you need" },
];

const whyBook = [
  { icon: "⚡", title: "Fast Confirmation", desc: "We confirm your booking within 30 minutes of your enquiry.", color: "var(--color-brand-orange)" },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees. The price quoted is the price you pay.", color: "var(--color-brand-green)" },
  { icon: "🔒", title: "Secure & Reliable", desc: "Licensed, insured vehicles with professional drivers only.", color: "var(--color-brand-blue)" },
  { icon: "🌟", title: "5-Star Service", desc: "1,050+ happy clients can't be wrong. We go above and beyond.", color: "var(--color-brand-pink)" },
];

const WHATSAPP_NUMBER = "256751050059";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    passengers: "",
    date: "",
    pickup_time: "",
    pickup: "",
    destination: "",
    message: "",
    referral: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (label: string) => {
    setForm((prev) => ({ ...prev, service: label }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines: string[] = [];
    lines.push("🚗 *New Booking Enquiry — AliciaRides*");
    lines.push("");
    lines.push(`👤 *Name:* ${form.name}`);
    lines.push(`📞 *Phone:* ${form.phone}`);
    if (form.email) lines.push(`📧 *Email:* ${form.email}`);
    if (form.service) lines.push(`🎯 *Service:* ${form.service}`);
    if (form.passengers) lines.push(`👥 *Passengers:* ${form.passengers}`);
    if (form.date) lines.push(`📅 *Date:* ${form.date}`);
    if (form.pickup_time) lines.push(`⏰ *Pickup Time:* ${form.pickup_time}`);
    if (form.pickup) lines.push(`📍 *Pickup:* ${form.pickup}`);
    if (form.destination) lines.push(`🏁 *Destination:* ${form.destination}`);
    if (form.message) lines.push(`📝 *Details:* ${form.message}`);
    if (form.referral) lines.push(`🔎 *Heard about us via:* ${form.referral}`);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-cream-dark)] py-16">
        <div
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--color-brand-green)" }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative">
          <Link
            href="/"
            className="text-sm font-semibold text-[var(--color-brand-orange)] hover:underline inline-block mb-6"
          >
            ← Back to Home
          </Link>
          <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-green)] block mb-3">
            Get In Touch
          </span>
          <h1 className="text-5xl sm:text-6xl font-black leading-none mb-4">
            Book Your <span className="gradient-text">Ride</span>
          </h1>
          <p className="text-lg text-[var(--color-charcoal)]/65 max-w-xl mx-auto">
            Ready to go? Reach out via call, WhatsApp, or fill in the form
            below. We'll confirm your booking fast.
          </p>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {whyBook.map((item) => (
            <div key={item.title} className="text-center p-5 bg-white rounded-2xl shadow-sm border border-[var(--color-cream-dark)]">
              <span className="text-3xl block mb-2">{item.icon}</span>
              <h3 className="font-black text-sm" style={{ color: item.color }}>{item.title}</h3>
              <p className="text-xs text-[var(--color-charcoal)]/55 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact methods */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="text-2xl font-black mb-6 text-center">
          Reach Us <span className="gradient-text">Directly</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contactMethods.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-[var(--radius-card)] p-7 flex flex-col gap-3 hover:scale-[1.02] transition-transform"
              style={{ background: c.bg }}
            >
              <span className="text-4xl">{c.icon}</span>
              <h3 className="font-black text-xl" style={{ color: c.color }}>
                {c.title}
              </h3>
              <p className="font-bold text-[var(--color-charcoal)]">
                {c.detail}
              </p>
              <p className="text-sm text-[var(--color-charcoal)]/55">{c.sub}</p>
              <span
                className="text-sm font-bold mt-1"
                style={{ color: c.color }}
              >
                {c.cta} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Booking enquiry form */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-24">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[var(--color-cream-dark)]">
          <h2 className="text-2xl font-black mb-2">
            Send a Booking Enquiry
          </h2>
          <p className="text-sm text-[var(--color-charcoal)]/55 mb-8">
            Fill in the details below and we'll get back to you within 30 minutes.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--color-charcoal)]">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Amara Nakato"
                className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-cream-dark)] focus:outline-none focus:border-[var(--color-brand-green)] transition-colors text-sm font-medium bg-[var(--color-cream)]"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--color-charcoal)]">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 0751 000 000"
                className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-cream-dark)] focus:outline-none focus:border-[var(--color-brand-green)] transition-colors text-sm font-medium bg-[var(--color-cream)]"
              />
            </div>

            {/* Email (optional) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--color-charcoal)]">
                Email Address <span className="font-normal text-[var(--color-charcoal)]/40">(optional)</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="e.g. yourname@email.com"
                className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-cream-dark)] focus:outline-none focus:border-[var(--color-brand-green)] transition-colors text-sm font-medium bg-[var(--color-cream)]"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[var(--color-charcoal)]">
                Service Needed *
              </label>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                {services.map((s) => (
                  <label
                    key={s.label}
                    className="flex items-start gap-2 p-3 rounded-xl border-2 border-[var(--color-cream-dark)] cursor-pointer hover:border-[var(--color-brand-green)] transition-colors has-[:checked]:border-[var(--color-brand-green)] has-[:checked]:bg-[#e8f5e9]"
                  >
                    <input
                      type="radio"
                      name="service"
                      value={s.label}
                      checked={form.service === s.label}
                      onChange={() => handleServiceChange(s.label)}
                      className="sr-only"
                      required
                    />
                    <span className="text-lg leading-none mt-0.5 flex-shrink-0">{s.emoji}</span>
                    <div>
                      <p className="text-xs font-bold text-[var(--color-charcoal)]">{s.label}</p>
                      <p className="text-xs text-[var(--color-charcoal)]/45 mt-0.5">{s.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Number of passengers */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--color-charcoal)]">
                Number of Passengers
              </label>
              <select
                name="passengers"
                value={form.passengers}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-cream-dark)] focus:outline-none focus:border-[var(--color-brand-green)] transition-colors text-sm font-medium bg-[var(--color-cream)]"
              >
                <option value="">Select passengers...</option>
                <option value="1">1 passenger</option>
                <option value="2">2 passengers</option>
                <option value="3-4">3-4 passengers</option>
                <option value="5-7">5-7 passengers</option>
                <option value="8+">8+ passengers (convoy)</option>
              </select>
            </div>

            {/* Travel date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--color-charcoal)]">
                Travel / Event Date *
              </label>
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-cream-dark)] focus:outline-none focus:border-[var(--color-brand-green)] transition-colors text-sm font-medium bg-[var(--color-cream)]"
              />
            </div>

            {/* Pickup time */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--color-charcoal)]">
                Preferred Pickup Time
              </label>
              <input
                type="time"
                name="pickup_time"
                value={form.pickup_time}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-cream-dark)] focus:outline-none focus:border-[var(--color-brand-green)] transition-colors text-sm font-medium bg-[var(--color-cream)]"
              />
            </div>

            {/* Pickup & destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--color-charcoal)]">
                  Pickup Location *
                </label>
                <input
                  type="text"
                  name="pickup"
                  required
                  value={form.pickup}
                  onChange={handleChange}
                  placeholder="e.g. Kampala City Centre"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-cream-dark)] focus:outline-none focus:border-[var(--color-brand-green)] transition-colors text-sm font-medium bg-[var(--color-cream)]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[var(--color-charcoal)]">
                  Destination *
                </label>
                <input
                  type="text"
                  name="destination"
                  required
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="e.g. Entebbe Airport"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-cream-dark)] focus:outline-none focus:border-[var(--color-brand-green)] transition-colors text-sm font-medium bg-[var(--color-cream)]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--color-charcoal)]">
                Additional Details
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Flight number, number of suitcases, special requests, event details..."
                className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-cream-dark)] focus:outline-none focus:border-[var(--color-brand-green)] transition-colors text-sm font-medium bg-[var(--color-cream)] resize-none"
              />
            </div>

            {/* How did you hear */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[var(--color-charcoal)]">
                How did you hear about us?
              </label>
              <select
                name="referral"
                value={form.referral}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-cream-dark)] focus:outline-none focus:border-[var(--color-brand-green)] transition-colors text-sm font-medium bg-[var(--color-cream)]"
              >
                <option value="">Select an option...</option>
                <option value="Friend or Family Referral">Friend or Family Referral</option>
                <option value="TikTok (@aliciarides)">TikTok (@aliciarides)</option>
                <option value="Google Search">Google Search</option>
                <option value="Returning client">I'm a returning client</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full font-black text-white text-base shadow-lg hover:brightness-110 transition-all mt-2 flex items-center justify-center gap-2"
              style={{ background: "var(--color-brand-green)" }}
            >
              <span>💬</span> Send via WhatsApp →
            </button>

            <p className="text-xs text-center text-[var(--color-charcoal)]/40">
              Tapping the button will open WhatsApp with your booking details pre-filled. Or call us directly on{" "}
              <a
                href="tel:0751050059"
                className="font-bold underline"
                style={{ color: "var(--color-brand-green)" }}
              >
                0751050059
              </a>{" "}
              for immediate assistance. We're available 24/7.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
