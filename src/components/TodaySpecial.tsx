import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import type { MenuItem } from "@/types/menu";

interface TodaySpecialProps {
  item: MenuItem;
  blurb: string;
  soldOut: boolean;
  closed: boolean;
}

export function TodaySpecial({
  item,
  blurb,
  soldOut,
  closed,
}: TodaySpecialProps) {
  return (
    <section
      className="overflow-hidden rounded-2xl bg-brand text-white shadow-lg"
      aria-labelledby="special-heading"
    >
      <div className="flex flex-col sm:flex-row">
        {item.image && (
          <div className="relative h-48 w-full shrink-0 sm:h-auto sm:w-48 md:w-56">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 224px"
              priority
            />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-widest uppercase opacity-80">
            Today&apos;s Special
          </p>
          <h2
            id="special-heading"
            className="mt-1 font-display text-2xl font-bold sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {item.name}
          </h2>
          <p className="mt-2 text-sm leading-relaxed opacity-90">{blurb}</p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-lg font-semibold">
              {formatPrice(item.price)}
            </span>

            {soldOut && (
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                Sold out
              </span>
            )}
            {closed && (
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                Available tomorrow
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
