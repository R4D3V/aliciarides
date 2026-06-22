// CarAnimation.tsx — fixed background layer, pointer-events none
// Pure CSS animations, no JS state required

const SmallCar = ({ color, windowColor = "#a8e6ff" }: { color: string; windowColor?: string }) => (
  <svg viewBox="0 0 90 48" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    {/* Body */}
    <rect x="4" y="22" width="82" height="20" rx="6" fill={color} />
    {/* Roof/cabin */}
    <rect x="20" y="10" width="46" height="16" rx="5" fill={color} />
    {/* Front hood slope */}
    <polygon points="64,10 80,22 66,22" fill={color} />
    {/* Rear slope */}
    <polygon points="22,10 6,22 20,22" fill={color} />
    {/* Windows */}
    <rect x="24" y="12" width="18" height="11" rx="3" fill={windowColor} opacity="0.85" />
    <rect x="46" y="12" width="16" height="11" rx="3" fill={windowColor} opacity="0.85" />
    {/* Window divider */}
    <rect x="43" y="12" width="2" height="11" fill={color} opacity="0.5" />
    {/* Wheels */}
    <circle cx="22" cy="40" r="8" fill="#2d2d2d" />
    <circle cx="22" cy="40" r="3.5" fill="#aaa" />
    <circle cx="68" cy="40" r="8" fill="#2d2d2d" />
    <circle cx="68" cy="40" r="3.5" fill="#aaa" />
    {/* Headlight */}
    <rect x="80" y="25" width="6" height="5" rx="2" fill="#fff9c4" opacity="0.9" />
    {/* Taillight */}
    <rect x="4" y="25" width="5" height="5" rx="2" fill="#ff6b6b" opacity="0.8" />
    {/* Door lines */}
    <rect x="42" y="23" width="1.5" height="17" rx="1" fill="white" opacity="0.3" />
  </svg>
);

const BigCar = ({ color, roofColor, windowColor = "#b3e0ff" }: { color: string; roofColor?: string; windowColor?: string }) => (
  <svg viewBox="0 0 130 56" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    {/* Body */}
    <rect x="5" y="28" width="120" height="22" rx="8" fill={color} />
    {/* Roof */}
    <rect x="22" y="10" width="78" height="22" rx="6" fill={roofColor || color} />
    {/* Hood slope front */}
    <polygon points="98,10 120,28 100,28" fill={color} />
    {/* Trunk slope back */}
    <polygon points="24,10 8,28 24,28" fill={color} />
    {/* Windows */}
    <rect x="28" y="13" width="22" height="14" rx="3" fill={windowColor} opacity="0.85" />
    <rect x="54" y="13" width="22" height="14" rx="3" fill={windowColor} opacity="0.85" />
    <rect x="80" y="13" width="16" height="14" rx="3" fill={windowColor} opacity="0.85" />
    {/* Window pillars */}
    <rect x="51" y="13" width="2" height="14" fill={roofColor || color} opacity="0.6" />
    <rect x="77" y="13" width="2" height="14" fill={roofColor || color} opacity="0.6" />
    {/* Wheels */}
    <circle cx="28" cy="47" r="9" fill="#1a1a1a" />
    <circle cx="28" cy="47" r="4" fill="#999" />
    <circle cx="28" cy="47" r="1.5" fill="#ccc" />
    <circle cx="100" cy="47" r="9" fill="#1a1a1a" />
    <circle cx="100" cy="47" r="4" fill="#999" />
    <circle cx="100" cy="47" r="1.5" fill="#ccc" />
    {/* Headlights */}
    <rect x="116" y="30" width="8" height="7" rx="3" fill="#fff9c4" opacity="0.95" />
    {/* Taillights */}
    <rect x="5" y="30" width="6" height="7" rx="3" fill="#ff4444" opacity="0.85" />
    {/* Door lines */}
    <rect x="52" y="29" width="2" height="19" rx="1" fill="white" opacity="0.25" />
    <rect x="78" y="29" width="2" height="19" rx="1" fill="white" opacity="0.25" />
    {/* Side stripe */}
    <rect x="8" y="36" width="114" height="2" rx="1" fill="white" opacity="0.15" />
  </svg>
);

const TinyCar = ({ color }: { color: string }) => (
  <svg viewBox="0 0 60 34" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    <rect x="3" y="16" width="54" height="14" rx="5" fill={color} />
    <rect x="14" y="6" width="30" height="13" rx="4" fill={color} />
    <polygon points="42,6 56,16 44,16" fill={color} />
    <polygon points="16,6 4,16 14,16" fill={color} />
    <rect x="17" y="8" width="11" height="8" rx="2" fill="#c8ecff" opacity="0.85" />
    <rect x="31" y="8" width="10" height="8" rx="2" fill="#c8ecff" opacity="0.85" />
    <circle cx="14" cy="28" r="6" fill="#222" />
    <circle cx="14" cy="28" r="2.5" fill="#999" />
    <circle cx="46" cy="28" r="6" fill="#222" />
    <circle cx="46" cy="28" r="2.5" fill="#999" />
    <rect x="54" y="18" width="4" height="4" rx="1.5" fill="#fffacd" opacity="0.9" />
    <rect x="2" y="18" width="3" height="4" rx="1.5" fill="#ff5555" opacity="0.8" />
  </svg>
);

interface CarConfig {
  id: string;
  size: "tiny" | "small" | "big";
  color: string;
  roofColor?: string;
  direction: "ltr" | "rtl";
  bottom: string;
  width: number;
  duration: string;
  delay: string;
  opacity: number;
}

const cars: CarConfig[] = [
  // Lane 1 — very bottom, big green going left
  { id: "c1", size: "big", color: "#4caf50", roofColor: "#388e3c", direction: "rtl", bottom: "2%", width: 110, duration: "28s", delay: "0s", opacity: 0.22 },
  // Lane 2 — small pink going right
  { id: "c2", size: "small", color: "#e91e8c", direction: "ltr", bottom: "8%", width: 75, duration: "18s", delay: "-6s", opacity: 0.18 },
  // Lane 3 — tiny yellow going right fast
  { id: "c3", size: "tiny", color: "#f5c400", direction: "ltr", bottom: "14%", width: 50, duration: "12s", delay: "-3s", opacity: 0.16 },
  // Lane 4 — big blue going right
  { id: "c4", size: "big", color: "#2979ff", roofColor: "#1565c0", direction: "ltr", bottom: "6%", width: 110, duration: "35s", delay: "-14s", opacity: 0.20 },
  // Lane 5 — small orange going left
  { id: "c5", size: "small", color: "#f5960a", direction: "rtl", bottom: "18%", width: 75, duration: "22s", delay: "-9s", opacity: 0.14 },
  // Lane 6 — tiny purple going right
  { id: "c6", size: "tiny", color: "#8b3fc2", direction: "ltr", bottom: "22%", width: 50, duration: "15s", delay: "-5s", opacity: 0.13 },
  // Lane 7 — big red going left
  { id: "c7", size: "big", color: "#e53935", roofColor: "#b71c1c", direction: "rtl", bottom: "10%", width: 110, duration: "40s", delay: "-20s", opacity: 0.18 },
  // Lane 8 — small teal going right
  { id: "c8", size: "small", color: "#00bcd4", direction: "ltr", bottom: "26%", width: 75, duration: "20s", delay: "-11s", opacity: 0.13 },
  // Lane 9 — tiny green going left small
  { id: "c9", size: "tiny", color: "#4caf50", direction: "rtl", bottom: "30%", width: 50, duration: "13s", delay: "-2s", opacity: 0.12 },
  // Lane 10 — small purple going right, high up
  { id: "c10", size: "small", color: "#8b3fc2", direction: "ltr", bottom: "32%", width: 75, duration: "25s", delay: "-17s", opacity: 0.10 },
];

export default function CarAnimation() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {cars.map((car) => {
        const animationName = car.direction === "ltr" ? "car-ltr" : "car-rtl";

        return (
          <div
            key={car.id}
            style={{
              position: "absolute",
              bottom: car.bottom,
              left: 0,
              width: `${car.width}px`,
              opacity: car.opacity,
              animation: `${animationName} ${car.duration} linear ${car.delay} infinite`,
              willChange: "transform",
            }}
          >
            {car.size === "tiny" && <TinyCar color={car.color} />}
            {car.size === "small" && <SmallCar color={car.color} />}
            {car.size === "big" && (
              <BigCar color={car.color} roofColor={car.roofColor} />
            )}
          </div>
        );
      })}
    </div>
  );
}
