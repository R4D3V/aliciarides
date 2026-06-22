import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcountry Trips",
  description:
    "Comfortable, safe long-distance travel across Uganda. AliciaRides takes you upcountry in style and comfort.",
};

const destinations = [
  { name: "Mbarara", distance: "~270 km", icon: "🌄" },
  { name: "Gulu", distance: "~340 km", icon: "🌿" },
  { name: "Jinja", distance: "~80 km", icon: "💧" },
  { name: "Fort Portal", distance: "~300 km", icon: "🏔️" },
  { name: "Kabale", distance: "~420 km", icon: "🌲" },
  { name: "Mbale", distance: "~230 km", icon: "🌅" },
  { name: "Masaka", distance: "~130 km", icon: "🌾" },
  { name: "Arua", distance: "~490 km", icon: "🗺️" },
];

const features = [
  {
    icon: "🛋️",
    title: "Comfortable Seating",
    desc: "Spacious, air-conditioned vehicles designed for long journeys.",
    color: "var(--color-brand-green)",
  },
  {
    icon: "🛡️",
    title: "Safe & Insured",
    desc: "All vehicles are fully insured with experienced, vetted drivers.",
    color: "var(--color-brand-green)",
  },
  {
    icon: "⛽",
    title: "No Hidden Stops",
    desc: "Direct routes to your destination — no unnecessary detours.",
    color: "var(--color-brand-green)",
  },
  {
    icon: "📱",
    title: "Live Updates",
    desc: "We keep you and your loved ones updated on your journey status.",
    color: "var(--color-brand-green)",
  },
  {
    icon: "🧺",
    title: "Refreshment Friendly",
    desc: "Bring your snacks and enjoy the scenic Ugandan countryside.",
    color: "var(--color-brand-green)",
  },
  {
    icon: "🕐",
    title: "Flexible Scheduling",
    desc: "Choose your departure time — early morning or afternoon, your call.",
    color: "var(--color-brand-green)",
  },
];

export default function UpcountryTripsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#e8f5e9] py-20">
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--color-brand-green)" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col gap-5">
            <Link
              href="/"
              className="text-sm font-semibold text-[var(--color-brand-green)] hover:underline w-fit"
            >
              ← Back to Home
            </Link>
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-green)]">
              Service
            </span>
            <h1 className="text-5xl sm:text-6xl font-black leading-none text-[var(--color-charcoal)]">
              🛣️ Upcountry
              <br />
              <span style={{ color: "var(--color-brand-green)" }}>Trips</span>
            </h1>
            <p className="text-lg text-[var(--color-charcoal)]/70 leading-relaxed max-w-lg">
              From Kampala to the farthest corners of Uganda — we make every
              upcountry journey comfortable, safe, and memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0751050059"
                className="px-7 py-3 rounded-full font-bold text-white text-sm shadow-lg hover:brightness-110 transition-all w-fit"
                style={{ background: "var(--color-brand-green)" }}
              >
                📞 Book Upcountry Trip
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div
              className="w-52 h-52 sm:w-72 sm:h-72 rounded-3xl flex items-center justify-center text-9xl shadow-2xl"
              style={{ background: "var(--color-brand-green)" }}
            >
              🛣️
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-black mb-2 text-center">
          Popular{" "}
          <span style={{ color: "var(--color-brand-green)" }}>Destinations</span>
        </h2>
        <p className="text-center text-[var(--color-charcoal)]/60 mb-10">
          We travel across all major towns in Uganda and beyond.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {destinations.map((d) => (
            <div
              key={d.name}
              className="bg-[#e8f5e9] rounded-2xl p-5 flex flex-col items-center gap-2 text-center hover:scale-105 transition-transform"
            >
              <span className="text-3xl">{d.icon}</span>
              <p className="font-black text-[var(--color-charcoal)]">
                {d.name}
              </p>
              <p
                className="text-xs font-semibold"
                style={{ color: "var(--color-brand-green)" }}
              >
                {d.distance}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[var(--color-charcoal)]/50 mt-6">
          Don't see your destination? Call us — we go anywhere in Uganda. 📞
        </p>
      </section>

      {/* Features */}
      <section className="bg-[var(--color-cream-dark)] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black mb-10 text-center">
            Travel with{" "}
            <span style={{ color: "var(--color-brand-green)" }}>Confidence</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-[var(--radius-card)] p-6 flex flex-col gap-3"
              >
                <span className="text-3xl">{f.icon}</span>
                <h3
                  className="font-black text-lg"
                  style={{ color: f.color }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--color-charcoal)]/65 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          Where are you headed?
        </h2>
        <p className="text-[var(--color-charcoal)]/60 mb-8 max-w-md mx-auto">
          Tell us your destination and we'll get you there comfortably.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:0751050059"
            className="px-8 py-3.5 rounded-full font-bold text-white shadow-lg hover:brightness-110 transition-all"
            style={{ background: "var(--color-brand-green)" }}
          >
            📞 Call 0751050059
          </a>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full font-bold border-2"
            style={{
              borderColor: "var(--color-brand-green)",
              color: "var(--color-brand-green)",
            }}
          >
            Send Message
          </Link>
        </div>
      </section>
    </>
  );
}
