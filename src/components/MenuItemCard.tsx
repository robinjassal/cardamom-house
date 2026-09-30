import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import type { MenuItem, Tag } from "@/types/menu";

const TAG_LABELS: Record<Tag, string> = {
  V: "Vegetarian",
  GF: "Gluten-free",
  spicy: "Spicy",
};

interface MenuItemCardProps {
  item: MenuItem;
  isHighlighted?: boolean;
  isSoldOut?: boolean;
}

export function MenuItemCard({
  item,
  isHighlighted,
  isSoldOut,
}: MenuItemCardProps) {
  return (
    <article
      className={`menu-item-card group flex gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 transition-shadow ${
        isSoldOut
          ? "opacity-60 ring-stone-200"
          : isHighlighted
            ? "ring-brand/40 shadow-md"
            : "ring-stone-100 hover:shadow-md"
      }`}
    >
      {item.image && (
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-24">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="96px"
          />
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-ink">{item.name}</h3>
          <span className="shrink-0 font-semibold text-brand">
            {formatPrice(item.price)}
          </span>
        </div>

        {item.description && (
          <p className="mt-1 text-sm leading-snug text-muted">
            {item.description}
          </p>
        )}

        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {isSoldOut && (
            <span className="rounded-full bg-stone-200 px-2 py-0.5 text-xs font-medium text-stone-600">
              Sold out
            </span>
          )}
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-light px-2 py-0.5 text-xs font-medium text-brand-dark"
              title={TAG_LABELS[tag]}
            >
              {tag === "spicy" ? "🌶" : tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
