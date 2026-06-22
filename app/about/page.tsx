import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AliciaRides — Uganda's friendliest and most reliable transport service. Our story, our values, and our team.",
};

const values = [
  {
    icon: "🛡️",
    title: "Safety First",
    desc: "Every driver is vetted, every vehicle is inspected, and every journey is tracked. Your safety is not negotiable — it is our foundation.",
    color: "var(--color-brand-blue)",
    bg: "#e8f1ff",
  },
  {
    icon: "💛",
    title: "Warmth & Care",
    desc: "We treat every client like family. From the moment you book to the moment you arrive, you'll feel the AliciaRides difference.",
    color: "var(--color-brand-yellow)",
    bg: "#fffde7",
  },
  {
    icon: "⏰",
    title: "Punctuality",
    desc: "Your time is precious. We arrive early, leave on time, and keep you updated every step of the way — no excuses.",
    color: "var(--color-brand-orange)",
    bg: "#fff3e0",
  },
  {
    icon: "🌍",
    title: "Community",
    desc: "We're proud to be Ugandan and committed to supporting local communities through responsible, sustainable transport.",
    color: "var(--color-brand-green)",
    bg: "#e8f5e9",
  },
];

const milestones = [
  { year: "2020", title: "AliciaRides is Born", desc: "Started with one car and a dream — to make transport in Uganda personal, safe, and truly cozy.", color: "var(--color-brand-pink)" },
  { year: "2021", title: "First 100 Clients", desc: "Word spread fast. Within a year we hit 100 happy clients through referrals alone.", color: "var(--color-brand-orange)" },
  { year: "2022", title: "Special Events Launch", desc: "Expanded into weddings, kukyala, and corporate events after clients requested elegant convoy services.", color: "var(--color-brand-purple)" },
  { year: "2023", title: "500+ Rides Milestone", desc: "Half a thousand journeys completed — from Entebbe Airport to the hills of Kabale.", color: "var(--color-brand-blue)" },
  { year: "2024", title: "TikTok & Community", desc: "Launched our TikTok @aliciarides and built a vibrant community of loyal riders across Uganda.", color: "var(--color-brand-teal)" },
  { year: "2025", title: "1,050+ Happy Clients", desc: "Over a thousand families, travellers, and businesses trust AliciaRides for every journey.", color: "var(--color-brand-green)" },
];

const team = [
  {
    name: "Alicia",
    role: "Founder & Lead Driver",
    bio: "Alicia started this journey with a simple belief: every Ugandan deserves safe, warm, and reliable transport. With years of experience on Uganda's roads and a heart full of passion for people, she turned that belief into AliciaRides.",
    color: "var(--color-brand-pink)",
    emoji: "👩🏾‍✈️",
  },
  {
    name: "The AliciaRides Team",
    role: "Drivers & Support Staff",
    bio: "Our team of professional drivers are carefully selected for their skill, character, and commitment to service. Every team member completes safety training and shares our core values.",
    color: "var(--color-brand-green)",
    emoji: "🚗",
  },
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 24 hours in advance, especially for events and upcountry trips. For airport transfers, 48 hours is ideal. However, we also handle same-day bookings when available — just call us!",
  },
  {
    q: "What areas do you cover?",
    a: "We are based in Kampala but serve all of Uganda — from Entebbe airport to Kabale, Gulu, Fort Portal, and beyond. No destination is too far for AliciaRides.",
  },
  {
    q: "How do I pay?",
    a: "We accept Mobile Money (MTN & Airtel), cash, and bank transfers. Payment details are confirmed at booking. We keep our pricing transparent with no hidden charges.",
  },
  {
    q: "Do you offer group transport?",
    a: "Absolutely! We cater to groups of all sizes — from 1 person to large event convoys. Just let us know your group size and we'll arrange the right vehicles.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[var(--color-cream-dark)] py-20">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--color-brand-pink)" }}
        />
        <div
          className="absolute bottom-0 -left-20 w-72 h-72 rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--color-brand-green)" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <Link
            href="/"
            className="text-sm font-semibold text-[var(--color-brand-orange)] hover:underline inline-block mb-8"
          >
            ← Back to Home
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col gap-5">
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-pink)]">
                Our Story
              </span>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight">
                Transport with a{" "}
                <span className="gradient-text">Heart</span>
              </h1>
              <p className="text-lg text-[var(--color-charcoal)]/70 leading-relaxed max-w-lg">
                AliciaRides was born out of a simple conviction: transport in Uganda
                should feel warm, safe, and personal. Not just a ride — an experience
                you look forward to.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-sm">
                  <p className="text-2xl font-black gradient-text">1,050+</p>
                  <p className="text-xs text-[var(--color-charcoal)]/55 font-semibold">Happy Clients</p>
                </div>
                <div className="bg-white rounded-2xl px-5 py-3 shadow-sm">
                  <p className="text-2xl font-black gradient-text">5+ yrs</p>
                  <p className="text-xs text-[var(--color-charcoal)]/55 font-semibold">On the Road</p>
                </div>
                <div className="bg-white rounded-2xl px-5 py-3 shadow-sm">
                  <p className="text-2xl font-black gradient-text">24/7</p>
                  <p className="text-xs text-[var(--color-charcoal)]/55 font-semibold">Available</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-[var(--color-cream)]">
                <Image
                  src="/AliciaRides.png"
                  alt="AliciaRides Logo"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-teal)]">
              Why We Exist
            </span>
            <h2 className="text-4xl font-black mt-2 mb-5">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-[var(--color-charcoal)]/70 leading-relaxed mb-4">
              We exist to make every journey in Uganda feel safe, comfortable, and
              genuinely human. In a world of rushed, impersonal transport, AliciaRides
              is the reminder that how you travel matters just as much as where you're going.
            </p>
            <p className="text-[var(--color-charcoal)]/70 leading-relaxed mb-6">
              Whether you're catching a red-eye flight, heading home for the holidays, or
              celebrating a milestone — we show up for you with a clean car, a warm greeting,
              and the professionalism your journey deserves.
            </p>
            <div className="p-5 rounded-2xl bg-[#e8f5e9] border-l-4 border-[var(--color-brand-green)]">
              <p className="font-bold text-[var(--color-brand-green)] italic">
                "Every ride is a promise — to get you there safely, on time, and with a smile."
              </p>
              <p className="text-sm text-[var(--color-charcoal)]/55 mt-2">— Alicia, Founder</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🇺🇬", label: "Proudly Ugandan", sub: "Born & built in Uganda" },
              { icon: "🤝", label: "Client-First", sub: "You're always our priority" },
              { icon: "🌟", label: "Excellence", sub: "We never compromise quality" },
              { icon: "💬", label: "Open Communication", sub: "Always reachable, always honest" },
            ].map((item) => (
              <div key={item.label} className="bg-[var(--color-cream-dark)] rounded-2xl p-5 flex flex-col gap-2">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-black text-sm text-[var(--color-charcoal)]">{item.label}</p>
                <p className="text-xs text-[var(--color-charcoal)]/55">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="bg-[var(--color-cream-dark)] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-purple)]">
              What Drives Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mt-2">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[var(--radius-card)] p-7 flex flex-col gap-4"
                style={{ background: v.bg }}
              >
                <span className="text-4xl">{v.icon}</span>
                <h3 className="font-black text-lg" style={{ color: v.color }}>{v.title}</h3>
                <p className="text-sm text-[var(--color-charcoal)]/65 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-orange)]">
            The People Behind the Wheel
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-2">
            Meet the <span className="gradient-text">Team</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-[var(--radius-card)] p-8 flex flex-col gap-5 shadow-sm border border-[var(--color-cream-dark)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-4xl flex-shrink-0"
                  style={{ background: `${member.color}20` }}
                >
                  {member.emoji}
                </div>
                <div>
                  <h3 className="font-black text-xl" style={{ color: member.color }}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--color-charcoal)]/55 font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[var(--color-charcoal)]/70 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE / MILESTONES ── */}
      <section className="bg-[var(--color-charcoal)] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-teal)]">
              Our Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mt-2 text-white">
              From One Car to{" "}
              <span className="gradient-text">1,050+ Smiles</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="bg-white/5 rounded-[var(--radius-card)] p-6 flex flex-col gap-3 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span className="text-3xl font-black" style={{ color: m.color }}>
                  {m.year}
                </span>
                <h3 className="font-black text-white text-lg">{m.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-brand-blue)]">
            Common Questions
          </span>
          <h2 className="text-4xl font-black mt-2">
            FAQ
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-cream-dark)]"
            >
              <h3 className="font-black text-[var(--color-charcoal)] mb-3 flex items-start gap-2">
                <span className="gradient-text text-lg leading-none mt-0.5">Q</span>
                {faq.q}
              </h3>
              <p className="text-sm text-[var(--color-charcoal)]/65 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div
          className="rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--color-brand-pink), var(--color-brand-orange))",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to ride with us?
          </h2>
          <p className="text-white/80 text-lg max-w-md mx-auto mb-7">
            Join over 1,050 happy clients who trust AliciaRides for every journey in Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0751050059"
              className="px-8 py-3.5 rounded-full bg-white font-black hover:scale-105 transition-transform shadow-lg text-base"
              style={{ color: "var(--color-brand-pink)" }}
            >
              📞 Call 0751050059
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors text-base"
            >
              Book a Ride →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
