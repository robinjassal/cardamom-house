"use client";

import { useEffect, useState } from "react";

interface CategoryNavProps {
  categories: { id: string; name: string }[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
  const [active, setActive] = useState(categories[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [categories]);

  return (
    <nav
      className="no-print sticky top-[53px] z-30 border-b border-stone-200/80 bg-cream/95 backdrop-blur-md"
      aria-label="Menu categories"
    >
      <div className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 py-3 scrollbar-none">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className={`nav-link whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === cat.id
                ? "bg-brand text-white"
                : "text-muted hover:bg-stone-100 hover:text-ink"
            }`}
          >
            {cat.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
