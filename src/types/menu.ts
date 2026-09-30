export type Tag = "V" | "GF" | "spicy";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  tags: Tag[];
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export interface Restaurant {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  instagram: string;
  brandColor: string;
  hours: Record<string, string>;
}

export type PageState = "open" | "closed" | "special-sold-out";
