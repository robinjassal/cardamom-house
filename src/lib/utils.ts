import type { PageState } from "@/types/menu";

export function formatPrice(price: number): string {
  return `€${price.toFixed(2)}`;
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function parseState(raw: string | string[] | undefined): PageState {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (value === "closed" || value === "special-sold-out") return value;
  return "open";
}

export function getOpenStatus(
  hours: Record<string, string>,
  state: PageState,
): { isOpen: boolean; today: string; label: string; nextOpen?: string } {
  if (state === "closed") {
    return {
      isOpen: false,
      today: "monday",
      label: "Closed today",
      nextOpen: "Tuesday at 08:00",
    };
  }

  return {
    isOpen: true,
    today: "tuesday",
    label: "Open now · until 15:00",
  };
}
