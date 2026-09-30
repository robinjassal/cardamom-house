import type { PageState } from "@/types/menu";
import Link from "next/link";

interface FooterProps {
  address: string;
  phone: string;
  instagram: string;
  currentState: PageState;
}

export function Footer({
  address,
  phone,
  instagram,
  currentState,
}: FooterProps) {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div>
            <p
              className="font-display text-lg font-bold text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Cardamom House
            </p>
            <p className="mt-1 text-sm text-muted">{address}</p>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-ink hover:text-brand"
            >
              {phone}
            </a>
            <a
              href={`https://instagram.com/${instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-brand"
            >
              {instagram}
            </a>
          </div>
        </div>

        <div className="no-print mt-8 flex flex-wrap items-center gap-2 border-t border-stone-100 pt-6 text-xs text-muted">
          <span>Demo states:</span>
          {(["open", "closed", "special-sold-out"] as const).map((s) => (
            <Link
              key={s}
              href={s === "open" ? "/" : `/?state=${s}`}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                currentState === s
                  ? "bg-brand text-white"
                  : "bg-stone-100 hover:bg-stone-200"
              }`}
            >
              {s}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
