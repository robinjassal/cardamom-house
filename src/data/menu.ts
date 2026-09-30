import type { Category, Restaurant } from "@/types/menu";

export const restaurant: Restaurant = {
  name: "Cardamom House",
  tagline: "Slow brunch. Strong coffee. Lisbon, since 2021.",
  address: "Rua da Boavista 84, 1200-066 Lisboa, Portugal",
  phone: "+351 21 123 4567",
  instagram: "@cardamomhouse",
  brandColor: "#B45309",
  hours: {
    monday: "Closed",
    tuesday: "08:00 – 15:00",
    wednesday: "08:00 – 15:00",
    thursday: "08:00 – 15:00",
    friday: "08:00 – 16:00",
    saturday: "09:00 – 17:00",
    sunday: "09:00 – 17:00",
  },
};

export const todaySpecial = {
  itemId: "brunch_07",
  blurb: "Chef's pick today: our Saffron French Toast with cardamom syrup.",
};

export const categories: Category[] = [
  {
    id: "brunch",
    name: "Brunch",
    description: "Served all day. Local eggs, slow-cooked everything.",
    items: [
      {
        id: "brunch_01",
        name: "Shakshuka",
        description:
          "Two eggs poached in spiced tomato and pepper sauce, served with sourdough.",
        price: 11.5,
        tags: ["V"],
        image:
          "https://images.pexels.com/photos/5638331/pexels-photo-5638331.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "brunch_02",
        name: "Avocado Toast",
        description:
          "Smashed avocado, lemon, chili flakes, hemp seeds, soft poached egg.",
        price: 9.8,
        tags: ["V"],
        image:
          "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "brunch_03",
        name: "Full Lisbon Breakfast",
        description:
          "Eggs your way, chorizo, grilled tomato, beans, sourdough, salted butter.",
        price: 14.2,
        tags: [],
        image:
          "https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "brunch_04",
        name: "Acai Bowl",
        description: "Acai, banana, granola, blueberries, honey, coconut.",
        price: 10.4,
        tags: ["V", "GF"],
        image:
          "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "brunch_05",
        name: "Bircher Muesli",
        description:
          "Oats soaked overnight in apple juice with cinnamon, apple, almonds, yogurt.",
        price: 8.2,
        tags: ["V"],
        image:
          "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "brunch_06",
        name: "Eggs Benedict",
        description:
          "Two poached eggs, smoked salmon or ham, hollandaise, on toasted muffins.",
        price: 13.6,
        tags: [],
        image:
          "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "brunch_07",
        name: "Saffron French Toast",
        description:
          "Brioche soaked in saffron-cardamom custard, pistachios, mascarpone, honey.",
        price: 12.8,
        tags: ["V"],
        image:
          "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "brunch_08",
        name: "Veggie Hash",
        description:
          "Sweet potato, kale, peppers, two eggs, smoked paprika, avocado.",
        price: 12.2,
        tags: ["V", "GF"],
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches & Toasties",
    description: "Served on house sourdough or rye.",
    items: [
      {
        id: "sand_01",
        name: "Croque Monsieur",
        description: "Ham, gruyere, béchamel, mustard, on grilled sourdough.",
        price: 10.2,
        tags: [],
        image:
          "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "sand_02",
        name: "Mushroom Melt",
        description: "Garlic mushrooms, taleggio, truffle oil, rocket, on rye.",
        price: 11.4,
        tags: ["V"],
        image:
          "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "sand_03",
        name: "Smoked Salmon Bagel",
        description: "Cream cheese, dill, capers, red onion, smoked salmon.",
        price: 11.8,
        tags: [],
        image:
          "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "sand_04",
        name: "Tuna Crunch",
        description: "Tuna, celery, cornichons, mayo, lettuce, on sourdough.",
        price: 9.6,
        tags: [],
        image:
          "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "sand_05",
        name: "Halloumi & Harissa",
        description:
          "Grilled halloumi, harissa mayo, slaw, rocket, on sourdough.",
        price: 10.8,
        tags: ["V", "spicy"],
        image:
          "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "All coffee is single-origin from Reverb Roasters, Porto.",
    items: [
      {
        id: "drink_01",
        name: "Espresso",
        description: "Double shot.",
        price: 1.8,
        tags: [],
        image:
          "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "drink_02",
        name: "Flat White",
        description: "Double shot, silky milk.",
        price: 3.2,
        tags: [],
        image:
          "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "drink_03",
        name: "Cardamom Latte",
        description: "House blend, cardamom syrup, milk of your choice.",
        price: 3.8,
        tags: [],
        image:
          "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "drink_04",
        name: "Matcha",
        description: "Stone-ground Uji matcha, milk of your choice.",
        price: 4.2,
        tags: ["V"],
        image:
          "https://images.pexels.com/photos/5946975/pexels-photo-5946975.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "drink_05",
        name: "Fresh OJ",
        description: "Pressed to order.",
        price: 4.4,
        tags: ["V", "GF"],
        image:
          "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "drink_06",
        name: "Mint Lemonade",
        description: "House-made, lightly sparkling.",
        price: 3.8,
        tags: ["V", "GF"],
        image:
          "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
  {
    id: "sides",
    name: "Sides & Extras",
    description: "",
    items: [
      {
        id: "side_01",
        name: "Side of Bacon",
        price: 3.2,
        tags: [],
        image:
          "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "side_02",
        name: "Side of Sourdough",
        price: 2.4,
        tags: ["V"],
        image:
          "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "side_03",
        name: "Extra Egg",
        price: 1.6,
        tags: ["V"],
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "side_04",
        name: "Side of Avocado",
        price: 2.8,
        tags: ["V", "GF"],
        image:
          "https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
];
