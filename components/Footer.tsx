import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-charcoal)] text-white mt-20"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
              <Image
                src="/AliciaRides.png"
                alt="AliciaRides Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-black gradient-text">
              AliciaRides
            </span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Safe & Cozy Transport in Uganda. Your reliable ride is just a call
            away, 24 hours a day.
          </p>
          <a
            href="tel:0751050059"
            className="inline-flex items-center gap-2 mt-1 font-bold text-[var(--color-brand-green)] hover:underline"
          >
            📞 0751050059
          </a>
          <a
            href="https://wa.me/256751050059"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-[var(--color-brand-teal)] hover:underline text-sm"
          >
            💬 WhatsApp Us
          </a>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4 text-white/80 uppercase text-xs tracking-widest">
            Services
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-white/60">
            <li>
              <Link
                href="/airport-transfers"
                className="hover:text-white transition-colors"
              >
                ✈️ Airport Transfers
              </Link>
            </li>
            <li>
              <Link
                href="/upcountry-trips"
                className="hover:text-white transition-colors"
              >
                🛣️ Upcountry Trips
              </Link>
            </li>
            <li>
              <Link
                href="/special-events"
                className="hover:text-white transition-colors"
              >
                💍 Kukyala & Events
              </Link>
            </li>
            <li>
              <Link
                href="/special-events"
                className="hover:text-white transition-colors"
              >
                💒 Wedding Transport
              </Link>
            </li>
            <li>
              <Link
                href="/special-events"
                className="hover:text-white transition-colors"
              >
                🏢 Corporate Rides
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-4 text-white/80 uppercase text-xs tracking-widest">
            Company
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-white/60">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact / Book
              </Link>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@aliciarides"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                TikTok @aliciarides
              </a>
            </li>
          </ul>
        </div>

        {/* Based In */}
        <div>
          <h3 className="font-bold mb-4 text-white/80 uppercase text-xs tracking-widest">
            Based In
          </h3>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <p className="flex items-center gap-2">🇺🇬 Kampala, Uganda</p>
            <p className="flex items-center gap-2">🕐 24/7 Availability</p>
            <p className="flex items-center gap-2">🗺️ All Uganda Routes</p>
            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/40 mb-1">Book via WhatsApp</p>
              <a
                href="https://wa.me/256751050059?text=Hello%20AliciaRides%2C%20I%20would%20like%20to%20book%20a%20ride"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[var(--color-brand-teal)] hover:underline"
              >
                Chat Now →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/30">
        © {new Date().getFullYear()} AliciaRides. All rights reserved.
        <a
          href="http://raymonjohns.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-xs text-gray-400">
            Built with ❤️ by{" "}
            <span style={{ color: "var(--color-brand)" }}>RaymonJohns</span>
          </p>
        </a>
      </div>
    </footer>
  );
}
