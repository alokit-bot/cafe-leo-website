// Cafe Leo content data
export const BUSINESS = {
  name: "Cafe Leo",
  tagline: "Bold Flavours, Warm Hearts",
  subTagline: "Where Every Cup Tells a Story",
  phone: "+91 70907 09058",
  phoneRaw: "+917090709058",
  address: "805/A, Mico Employees Layout, 7th Cross Rd, BTM 2nd Stage, Nirmana Sangha Layout, Bengaluru, Karnataka 560076",
  shortAddress: "BTM 2nd Stage, Bengaluru",
  rating: 4.8,
  reviews: 287,
  hoursLabel: "Open daily till midnight",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Leo+BTM+2nd+Stage+Bengaluru",
  swiggyUrl: "https://www.swiggy.com/search?query=cafe+leo+btm",
  zomatoUrl: "https://www.zomato.com/bangalore/restaurants?q=cafe+leo+btm",
};

export const MENU = [
  {
    id: "coffee",
    title: "Coffee & Beverages",
    blurb: "Where it all began — pulled, poured, and steeped with care.",
    items: [
      { name: "Filter Coffee", desc: "South Indian classic, frothed in a tumbler", price: 60 },
      { name: "Cappuccino", desc: "Double shot, velvety microfoam", price: 120 },
      { name: "Cold Brew", desc: "Slow steeped 18 hours, smooth & bright", price: 150 },
      { name: "Chai Latte", desc: "House masala blend, steamed milk", price: 80 },
      { name: "Fresh Juices", desc: "Seasonal fruit, no added sugar", price: 100 },
    ],
  },
  {
    id: "brunch",
    title: "Breakfast & Brunch",
    blurb: "Lazy Sundays, weekday wins, and everything in between.",
    items: [
      { name: "Eggs Benedict", desc: "Poached eggs, hollandaise, sourdough", price: 220 },
      { name: "Pancake Stack", desc: "Buttermilk fluffies, maple, butter", price: 180 },
      { name: "Avocado Toast", desc: "Smashed avo, chilli flakes, microgreens", price: 200 },
      { name: "Masala Omelette", desc: "Onion, tomato, green chilli, toast", price: 140 },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    blurb: "Honest portions. Generous hearts. Real cooking.",
    items: [
      { name: "Pasta — Arrabbiata / Alfredo", desc: "Fresh tomato or four-cheese", price: 240 },
      { name: "Leo Burger", desc: "House patty, cheddar, smoked aioli, fries", price: 220 },
      { name: "Grilled Sandwiches", desc: "Veg / chicken / cheese — your call", price: 180 },
      { name: "Rice Bowls", desc: "Korean / Mexican / Tikka — bowl of joy", price: 200 },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    blurb: "Sweet endings. (Or middles. We don't judge.)",
    items: [
      { name: "Cheesecake", desc: "New York classic, berry compote", price: 180 },
      { name: "Chocolate Brownie", desc: "Warm, fudgy, scoop of vanilla on top", price: 140 },
      { name: "Tiramisu", desc: "Mascarpone, espresso, cocoa dust", price: 200 },
    ],
  },
  {
    id: "latenight",
    title: "Late Night Bites",
    blurb: "Available till midnight — for the cravings that don't sleep.",
    items: [
      { name: "Loaded Fries", desc: "Cheese, jalapeños, sour cream", price: 160 },
      { name: "Nachos", desc: "Beans, salsa, guac, the works", price: 180 },
      { name: "Garlic Bread", desc: "Cheesy, herby, golden", price: 120 },
      { name: "Maggi — 4 Ways", desc: "Cheese / masala / schezwan / butter", price: 110 },
    ],
  },
];

export const SPECIALS = [
  {
    icon: "Heart",
    title: "Women-Owned & Proud",
    body: "Built from scratch by a woman who cares about every plate that leaves the kitchen.",
  },
  {
    icon: "Moon",
    title: "Open Till Midnight",
    body: "Late shift cravings, post-movie hangouts, 11 PM coffee — we stay open for you.",
  },
  {
    icon: "Star",
    title: "287+ Happy Regulars",
    body: "4.8★ on Google, and a whole lot of familiar faces who walk in by name.",
  },
  {
    icon: "Coffee",
    title: "Neighbourhood Favourite",
    body: "BTM's quiet little corner. Not a chain. Not a franchise. Just home.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aditi R.",
    when: "2 weeks ago",
    rating: 5,
    body: "The cosiest spot in BTM. Filter coffee here is unreal, and the staff actually remembers your order. My weekend ritual now.",
  },
  {
    name: "Rohan M.",
    when: "1 month ago",
    rating: 5,
    body: "Came in at 11:40 PM expecting to be turned away — got a hot Maggi, fresh coffee and a smile. This place is gold.",
  },
  {
    name: "Sneha K.",
    when: "3 weeks ago",
    rating: 5,
    body: "Eggs Benedict at Cafe Leo > most upscale brunch places in Indiranagar. And half the price. Tell everyone.",
  },
  {
    name: "Karan P.",
    when: "5 days ago",
    rating: 4,
    body: "Brought my parents here for the first time. They've come back twice without me. Says enough.",
  },
];

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80&auto=format&fit=crop",
    alt: "Warm cafe interior with hanging lights",
    tag: "The Room",
  },
  {
    src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=900&q=80&auto=format&fit=crop",
    alt: "Latte art in a ceramic cup",
    tag: "Latte Art",
  },
  {
    src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=900&q=80&auto=format&fit=crop",
    alt: "Plated brunch food",
    tag: "Brunch",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=80&auto=format&fit=crop",
    alt: "Friends laughing at a cafe table",
    tag: "Regulars",
  },
  {
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=900&q=80&auto=format&fit=crop",
    alt: "Cafe entrance with a wooden door",
    tag: "Welcome",
  },
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80&auto=format&fit=crop",
    alt: "Close up of a chocolate dessert",
    tag: "Desserts",
  },
];
