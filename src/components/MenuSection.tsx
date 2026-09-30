import { MenuItemCard } from "./MenuItemCard";
import type { Category } from "@/types/menu";

interface MenuSectionProps {
  category: Category;
  highlightedId?: string | null;
  soldOutId?: string | null;
}

export function MenuSection({
  category,
  highlightedId,
  soldOutId,
}: MenuSectionProps) {
  return (
    <section id={category.id} className="scroll-mt-20">
      <div className="mb-5">
        <h2
          className="font-display text-2xl font-bold text-ink sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {category.name}
        </h2>
        {category.description && (
          <p className="mt-1 text-muted">{category.description}</p>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {category.items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            isHighlighted={item.id === highlightedId}
            isSoldOut={item.id === soldOutId}
          />
        ))}
      </div>
    </section>
  );
}
