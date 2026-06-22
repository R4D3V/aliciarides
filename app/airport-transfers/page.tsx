import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airport Transfers",
  description:
    "Reliable airport pickup and drop-off in Uganda. AliciaRides tracks your flight and ensures you're never left waiting.",
};

const features = [
  {
    icon: "🛬",
    title: "Flight Tracking",
    desc: "We monitor your flight in real-time and adjust pickup time if there are any delays.",
  },
  {
    icon: "🪧",
    title: "Meet & Greet",
    desc: "Your driver waits at arrivals with a name board, ready to help with your luggage.",
  },
  {
    icon: "🌙",
    title: "Any Hour, Any Day",
    desc: "Early morning, late night — we're available around the clock for all your flights.",
  },
  {
    icon: "🧳",
    title: "Luggage Friendly",
    desc: "Spacious vehicles with plenty of room for suitcases, bags, and carry-ons.",
  },
  {
    icon: "📍",
    title: "Doorstep Pickup",
    desc: "We come to your hotel, home, or office to collect you before your flight.",
  },
  {
    icon: "💳",
    title: "Fixed Rates",
    desc: "No surge pricing. Know what you pay before you book — transparent flat rates.",
  },
];

const airports = [
  { name: "Entebbe International Airport", code: "EBB", flag: "🇺🇬" },
  { name: "Kasese Airport", code: "KSE", flag: "🛩️" },
  { name: "Gulu Airport", code: "ULU", flag: "🛩️" },
];

export default function AirportTransfersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#e8f1ff] py-20">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--color-brand-blue)" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col gap-5">
            <Link
              href="/"
              className="text-sm font-semibold text-[var(--color-brand-blue)] hover:underline w-fit"
            >
              ← Back to Home
            </Link>
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-blue)]">
              Service
            </span>
            <h1 className="text-5xl sm:text-6xl font-black leading-none text-[var(--color-charcoal)]">
              ✈️ Airport
              <br />
              <span style={{ color: "var(--color-brand-blue)" }}>
                Transfers
              </span>
            </h1>
            <p className="text-lg text-[var(--color-charcoal)]/70 leading-relaxed max-w-lg">
              From Entebbe International to your destination — smooth, on-time,
              and stress-free every single trip.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0751050059"
                className="px-7 py-3 rounded-full font-bold text-white text-sm shadow-lg hover:brightness-110 transition-all"
                style={{ background: "var(--color-brand-blue)" }}
              >
                📞 Book Airport Transfer
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div
              className="w-52 h-52 sm:w-72 sm:h-72 rounded-3xl flex items-center justify-center text-9xl shadow-2xl"
              style={{ background: "var(--color-brand-blue)" }}
            >
              ✈️
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-black mb-10 text-center">
          What's{" "}
          <span style={{ color: "var(--color-brand-blue)" }}>Included</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#e8f1ff] rounded-[var(--radius-card)] p-6 flex flex-col gap-3"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3
                className="font-black text-lg"
                style={{ color: "var(--color-brand-blue)" }}
              >
                {f.title}
              </h3>
              <p className="text-sm text-[var(--color-charcoal)]/65 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Airports Served */}
      <section className="bg-[var(--color-cream-dark)] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black mb-8 text-center">
            Airports We <span style={{ color: "var(--color-brand-blue)" }}>Serve</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {airports.map((a) => (
              <div
                key={a.code}
                className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4 shadow-sm flex-1 max-w-xs"
              >
                <span className="text-3xl">{a.flag}</span>
                <div>
                  <p className="font-bold text-sm text-[var(--color-charcoal)]">
                    {a.name}
                  </p>
                  <p
                    className="text-xs font-black"
                    style={{ color: "var(--color-brand-blue)" }}
                  >
                    {a.code}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          Flying soon? Let's get you there.
        </h2>
        <p className="text-[var(--color-charcoal)]/60 mb-8 max-w-md mx-auto">
          Call or message us with your flight details and we'll handle the rest.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:0751050059"
            className="px-8 py-3.5 rounded-full font-bold text-white shadow-lg hover:brightness-110 transition-all"
            style={{ background: "var(--color-brand-blue)" }}
          >
            📞 Call 0751050059
          </a>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full font-bold border-2"
            style={{
              borderColor: "var(--color-brand-blue)",
              color: "var(--color-brand-blue)",
            }}
          >
            Send Message
          </Link>
        </div>
      </section>
    </>
  );
}
