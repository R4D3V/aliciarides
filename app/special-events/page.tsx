import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kukyala & Special Events",
  description:
    "Elegant transport for introductions, weddings, graduations and all your special celebrations in Uganda.",
};

const eventTypes = [
  {
    icon: "💍",
    title: "Kukyala",
    desc: "Traditional introduction ceremonies deserve elegant, punctual, and well-presented transport. We make the occasion even more special.",
    color: "var(--color-brand-pink)",
    bg: "#fce4ec",
  },
  {
    icon: "💒",
    title: "Weddings",
    desc: "From the bridal party to the reception convoy — coordinated, graceful, and on schedule for your perfect day.",
    color: "var(--color-brand-purple)",
    bg: "#f3e5f5",
  },
  {
    icon: "🎓",
    title: "Graduations",
    desc: "Celebrate your achievement in style. We transport you and your family to the ceremony and celebrations.",
    color: "var(--color-brand-orange)",
    bg: "#fff3e0",
  },
  {
    icon: "🎂",
    title: "Birthday Events",
    desc: "Make birthdays unforgettable. Arrive and depart from your celebration with flair and comfort.",
    color: "var(--color-brand-teal)",
    bg: "#e0f7fa",
  },
  {
    icon: "🍽️",
    title: "Dinner & Nights Out",
    desc: "A relaxed, safe ride to and from your favourite restaurants, clubs, and entertainment spots.",
    color: "var(--color-brand-red)",
    bg: "#fbe9e7",
  },
  {
    icon: "🏢",
    title: "Corporate Events",
    desc: "Executive transport for conferences, team retreats, client pickups, and business functions.",
    color: "var(--color-brand-blue)",
    bg: "#e8f1ff",
  },
];

const process = [
  {
    step: "01",
    title: "Contact Us",
    desc: "Call or message us with your event date, location, and transport needs.",
    color: "var(--color-brand-pink)",
  },
  {
    step: "02",
    title: "We Plan It",
    desc: "We coordinate routes, timing, and vehicle options to match your event perfectly.",
    color: "var(--color-brand-purple)",
  },
  {
    step: "03",
    title: "Confirm & Relax",
    desc: "Confirm the booking and leave the logistics entirely to us.",
    color: "var(--color-brand-orange)",
  },
  {
    step: "04",
    title: "Enjoy Your Day",
    desc: "Focus on your celebration while we ensure everyone arrives safely and on time.",
    color: "var(--color-brand-green)",
  },
];

export default function SpecialEventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fce4ec] py-20">
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--color-brand-purple)" }}
        />
        <div
          className="absolute -bottom-20 right-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--color-brand-pink)" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col gap-5">
            <Link
              href="/"
              className="text-sm font-semibold text-[var(--color-brand-pink)] hover:underline w-fit"
            >
              ← Back to Home
            </Link>
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">
              Service
            </span>
            <h1 className="text-5xl sm:text-6xl font-black leading-none text-[var(--color-charcoal)]">
              💍 Kukyala &
              <br />
              <span style={{ color: "var(--color-brand-pink)" }}>
                Special Events
              </span>
            </h1>
            <p className="text-lg text-[var(--color-charcoal)]/70 leading-relaxed max-w-lg">
              Your special moments deserve perfect transport. We handle the
              logistics so you can focus on celebrating.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0751050059"
                className="px-7 py-3 rounded-full font-bold text-white text-sm shadow-lg hover:brightness-110 transition-all w-fit"
                style={{ background: "var(--color-brand-pink)" }}
              >
                📞 Book for My Event
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div
              className="w-52 h-52 sm:w-72 sm:h-72 rounded-3xl flex items-center justify-center text-9xl shadow-2xl"
              style={{ background: "var(--color-brand-pink)" }}
            >
              💍
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-black mb-2 text-center">
          Events We{" "}
          <span style={{ color: "var(--color-brand-pink)" }}>Cover</span>
        </h2>
        <p className="text-center text-[var(--color-charcoal)]/60 mb-10">
          No event is too big or too small for AliciaRides.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {eventTypes.map((e) => (
            <div
              key={e.title}
              className="rounded-[var(--radius-card)] p-7 flex flex-col gap-3"
              style={{ background: e.bg }}
            >
              <span className="text-4xl">{e.icon}</span>
              <h3 className="font-black text-xl" style={{ color: e.color }}>
                {e.title}
              </h3>
              <p className="text-sm text-[var(--color-charcoal)]/65 leading-relaxed">
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--color-cream-dark)] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-10 text-center">
            How It{" "}
            <span style={{ color: "var(--color-brand-purple)" }}>Works</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                <div className="bg-white rounded-[var(--radius-card)] p-6 flex flex-col gap-3 h-full">
                  <span
                    className="text-4xl font-black opacity-20"
                    style={{ color: p.color }}
                  >
                    {p.step}
                  </span>
                  <h3
                    className="font-black text-lg"
                    style={{ color: p.color }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--color-charcoal)]/65 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                {/* Arrow connector (desktop) */}
                {i < process.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center text-[var(--color-charcoal)]/30 text-xl font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial-style quote */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-[var(--color-cream-dark)]">
          <span className="text-5xl mb-4 block">❝</span>
          <p className="text-xl font-semibold text-[var(--color-charcoal)]/80 leading-relaxed italic">
            "AliciaRides made our kukyala day so seamless. The vehicle was clean, the
            driver was professional, and everyone arrived right on time. We
            highly recommend them!"
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "var(--color-brand-pink)" }}
            >
              S
            </div>
            <div className="text-left">
              <p className="font-bold text-sm">Sarah & Family</p>
              <p className="text-xs text-[var(--color-charcoal)]/50">
                Kukyala Client, Kampala
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 pb-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          Have an upcoming event?
        </h2>
        <p className="text-[var(--color-charcoal)]/60 mb-8 max-w-md mx-auto">
          Book early to secure your preferred date and vehicle. We accommodate
          groups of all sizes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:0751050059"
            className="px-8 py-3.5 rounded-full font-bold text-white shadow-lg hover:brightness-110 transition-all"
            style={{ background: "var(--color-brand-pink)" }}
          >
            📞 Call 0751050059
          </a>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full font-bold border-2"
            style={{
              borderColor: "var(--color-brand-pink)",
              color: "var(--color-brand-pink)",
            }}
          >
            Send Event Details
          </Link>
        </div>
      </section>
    </>
  );
}
