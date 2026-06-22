import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarAnimation from "@/components/CarAnimation";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: {
    default: "AliciaRides 💚 — Safe & Cozy Transport in Uganda",
    template: "%s | AliciaRides",
  },
  description:
    "Safe & Cozy Transport in Uganda. Airport Transfers, Upcountry Trips, Kukyala & Special Events. Call 0751050059.",
  keywords: [
    "transport Uganda",
    "airport transfer Kampala",
    "upcountry trips Uganda",
    "wedding transport Uganda",
    "kukyala transport",
    "AliciaRides",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    siteName: "AliciaRides",
    locale: "en_UG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" style={{ position: "relative", zIndex: 1 }}>
        <CarAnimation />
        <ScrollAnimations />
        <Navbar />
        <main className="flex-1" style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
