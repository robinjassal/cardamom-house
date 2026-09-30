import { CategoryNav } from "@/components/CategoryNav";
import { ClosedBanner } from "@/components/ClosedBanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HoursTable } from "@/components/HoursTable";
import { MenuSection } from "@/components/MenuSection";
import { Navbar } from "@/components/Navbar";
import { TodaySpecial } from "@/components/TodaySpecial";
import { categories, restaurant, todaySpecial } from "@/data/menu";
import { getOpenStatus, parseState } from "@/lib/utils";

interface PageProps {
  searchParams: Promise<{ state?: string | string[] }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const state = parseState(params.state);
  const status = getOpenStatus(restaurant.hours, state);

  const specialItem = categories
    .flatMap((c) => c.items)
    .find((item) => item.id === todaySpecial.itemId);

  const isSoldOut = state === "special-sold-out";

  return (
    <>
      <Navbar isOpen={status.isOpen} statusLabel={status.label} />

      <Hero restaurant={restaurant} isOpen={status.isOpen} />

      {!status.isOpen && <ClosedBanner nextOpen={status.nextOpen} />}

      <CategoryNav
        categories={categories.map((c) => ({ id: c.id, name: c.name }))}
      />

      <main id="menu" className="mx-auto max-w-5xl space-y-14 px-4 py-10 sm:px-5">
        {specialItem && (
          <TodaySpecial
            item={specialItem}
            blurb={todaySpecial.blurb}
            soldOut={isSoldOut}
            closed={!status.isOpen}
          />
        )}

        {categories.map((category) => (
          <MenuSection
            key={category.id}
            category={category}
            highlightedId={status.isOpen ? todaySpecial.itemId : null}
            soldOutId={isSoldOut ? todaySpecial.itemId : null}
          />
        ))}

        <HoursTable hours={restaurant.hours} today={status.today} />
      </main>

      <Footer
        address={restaurant.address}
        phone={restaurant.phone}
        instagram={restaurant.instagram}
        currentState={state}
      />
    </>
  );
}
