import Image from "next/image";
import type { Restaurant } from "@/types/menu";

interface HeroProps {
  restaurant: Restaurant;
  isOpen: boolean;
}

export function Hero({ restaurant, isOpen }: HeroProps) {
  return (
    <header className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-5 sm:py-14 lg:py-16">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-brand uppercase">
              Lisbon · Since 2021
            </p>

            <h1
              className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Slow brunch.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Strong coffee.</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 -z-0 rounded-md opacity-40"
                  style={{ background: "#FDBA74" }}
                  aria-hidden
                />
              </span>
            </h1>

            <p className="mt-4 max-w-md mx-auto text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
              {restaurant.tagline} Local eggs, house sourdough, and
              single-origin coffee from Porto.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#menu"
                className="inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand/25 transition hover:bg-brand-dark"
              >
                View Menu
              </a>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center rounded-full border-2 border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                Call Us
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/image.jpg"
                alt="Saffron French Toast at Cardamom House"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 90vw, 400px"
                priority
              />
            </div>

            <div className="absolute -left-2 top-6 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg ring-1 ring-black/5 sm:-left-4">
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
                    isOpen
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {isOpen ? "✓" : "–"}
                </span>
                <div>
                  <p className="text-xs font-semibold text-ink">
                    {isOpen ? "Open now" : "Closed today"}
                  </p>
                  <p className="text-[11px] text-muted">
                    {isOpen ? "Until 15:00" : "See you tomorrow"}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 bottom-0 rounded-2xl bg-white px-3.5 py-2.5 shadow-lg ring-1 ring-black/5 sm:-right-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-brand text-sm">
                  📍
                </span>
                <div>
                  <p className="text-xs font-semibold text-ink">Lisbon</p>
                  <p className="text-[11px] text-muted">Rua da Boavista</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[
            {
              icon: "🍳",
              title: "Local Eggs",
              desc: "Fresh from nearby farms",
            },
            {
              icon: "☕",
              title: "Single-Origin",
              desc: "Reverb Roasters, Porto",
            },
            { icon: "🌿", title: "Slow Food", desc: "Nothing rushed here" },
            { icon: "🥖", title: "House Bread", desc: "Sourdough & rye daily" },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-stone-100 transition hover:shadow-md sm:p-5"
            >
              <span className="text-2xl" aria-hidden>
                {f.icon}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-ink">{f.title}</h3>
              <p className="mt-0.5 text-xs text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
