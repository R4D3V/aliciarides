import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AliciaRides 💚 — Safe & Cozy Transport in Uganda",
};

const services = [
  {
    emoji: "✈️",
    title: "Airport Transfers",
    description:
      "Stress-free airport pickups and drop-offs. We track your flight and are there when you land.",
    color: "var(--color-brand-blue)",
    bg: "#e8f1ff",
    href: "/airport-transfers",
  },
  {
    emoji: "🛣️",
    title: "Upcountry Trips",
    description:
      "Comfortable long-distance journeys across Uganda. Safe, timely, and relaxed travel.",
    color: "var(--color-brand-green)",
    bg: "#e8f5e9",
    href: "/upcountry-trips",
  },
  {
    emoji: "💍",
    title: "Kukyala & Special Events",
    description:
      "Elegant transport for introductions, weddings, graduations and all your memorable celebrations.",
    color: "var(--color-brand-pink)",
    bg: "#fce4ec",
    href: "/special-events",
  },
];

const stats = [
  { value: "1,050+", label: "Happy Clients" },
  { value: "24/7", label: "Availability" },
  { value: "100%", label: "Safe Rides" },
  { value: "Uganda 🇺🇬", label: "Based In" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        {/* Colorful background blobs */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--color-brand-orange)" }}
        />
        <div
          className="absolute -top-20 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--color-brand-pink)" }}
        />
        <div
          className="absolute top-60 -left-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--color-brand-blue)" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 flex flex-col items-center text-center gap-8">
          {/* Logo circle — real image */}
          <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-[var(--color-cream-dark)] flex items-center justify-center">
            <Image
              src="/AliciaRides.png"
              alt="AliciaRides Logo"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-orange)]">
              Safe & Cozy Transport in Uganda 🇺🇬
            </span>
            <h1 className="text-5xl sm:text-7xl font-black leading-none tracking-tight">
              Your Ride,{" "}
              <span className="gradient-text">Your Way.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-charcoal)]/70 font-medium leading-relaxed max-w-xl mx-auto">
              Airport transfers, upcountry adventures, and unforgettable event
              transport — all with a smile. Call us anytime.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="tel:0751050059"
              className="px-8 py-3.5 rounded-full font-bold text-white shadow-lg hover:shadow-xl hover:brightness-110 transition-all text-base"
              style={{ background: "var(--color-brand-green)" }}
            >
              📞 Call 0751050059
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full font-bold border-2 border-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white transition-all text-base"
            >
              Book a Ride →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[var(--color-charcoal)] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-black gradient-text">
                {s.value}
              </span>
              <span className="text-xs sm:text-sm text-white/50 font-medium uppercase tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-purple)]">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">
            Our <span className="gradient-text">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative rounded-[var(--radius-card)] p-8 flex flex-col gap-4 hover:scale-[1.02] transition-transform cursor-pointer overflow-hidden"
              style={{ background: s.bg }}
            >
              {/* Colored top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 rounded-t-[var(--radius-card)]"
                style={{ background: s.color }}
              />
              <span className="text-4xl">{s.emoji}</span>
              <h3
                className="text-xl font-black"
                style={{ color: s.color }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-[var(--color-charcoal)]/70 leading-relaxed flex-1">
                {s.description}
              </p>
              <span
                className="text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                style={{ color: s.color }}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY ALICIA RIDES ── */}
      <section className="bg-[var(--color-cream-dark)] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-teal)]">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mt-2">
              The <span className="gradient-text">AliciaRides</span> Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "🛡️",
                title: "Always Safe",
                desc: "Every trip is handled with the utmost care for your safety and comfort.",
                color: "var(--color-brand-blue)",
              },
              {
                icon: "⏰",
                title: "Always On Time",
                desc: "We value your schedule. Punctuality is part of our promise to you.",
                color: "var(--color-brand-orange)",
              },
              {
                icon: "🛋️",
                title: "Cozy Ride",
                desc: "Clean, comfortable vehicles so you arrive refreshed and relaxed.",
                color: "var(--color-brand-pink)",
              },
              {
                icon: "📞",
                title: "24/7 Support",
                desc: "Need a ride at midnight? We're just one call away, anytime.",
                color: "var(--color-brand-green)",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-cream)] rounded-[var(--radius-card)] p-6 flex flex-col gap-3 shadow-sm"
              >
                <span className="text-3xl">{item.icon}</span>
                <h4
                  className="font-black text-lg"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-[var(--color-charcoal)]/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-orange)]">
            Happy Clients
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">
            What People <span className="gradient-text">Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              quote: "AliciaRides picked me up from Entebbe at 3am without any issues. So professional and the car was spotless!",
              name: "Brian M.", role: "Airport Client, Kampala", color: "var(--color-brand-blue)",
            },
            {
              quote: "They handled our entire kukyala convoy flawlessly. Everyone arrived on time and the drivers were so respectful.",
              name: "Priscilla N.", role: "Kukyala Client, Wakiso", color: "var(--color-brand-pink)",
            },
            {
              quote: "Best upcountry ride I've had. Drove me from Kampala to Kabale and I slept the whole way — so comfortable.",
              name: "Isaac O.", role: "Upcountry Client, Gulu", color: "var(--color-brand-green)",
            },
          ].map((t) => (
            <div key={t.name} className="bg-white rounded-[var(--radius-card)] p-7 flex flex-col gap-4 shadow-sm border border-[var(--color-cream-dark)]">
              <span className="text-3xl" style={{ color: t.color }}>❝</span>
              <p className="text-sm text-[var(--color-charcoal)]/75 leading-relaxed italic flex-1">{t.quote}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-cream-dark)]">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: t.color }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-[var(--color-charcoal)]/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 pb-24">
        <div
          className="rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--color-brand-green), var(--color-brand-teal))",
          }}
        >
          <div className="absolute inset-0 opacity-10 text-[18rem] font-black flex items-center justify-center leading-none select-none pointer-events-none">
            🚗
          </div>
          <div className="relative z-10 flex flex-col gap-5 items-center">
            <h2 className="text-3xl sm:text-5xl font-black leading-tight">
              Ready for your next ride?
            </h2>
            <p className="text-white/80 text-lg max-w-md">
              Call us now or send a message to book your trip across Uganda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0751050059"
                className="px-8 py-3.5 rounded-full bg-white font-black text-[var(--color-brand-green)] hover:scale-105 transition-transform shadow-lg text-base"
              >
                📞 0751050059
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors text-base"
              >
                Message Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
