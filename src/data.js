export const WHATSAPP_NUMBER = "919999999999";
export const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const CATEGORIES = ["All", "Flagship", "Mid-Range", "Budget", "Accessories"];

export const PHONES = [
  {
    id: 1,
    slug: "nova-x1-pro",
    name: "Nova X1 Pro",
    category: "Flagship",
    price: 89999,
    compareAtPrice: 99999,
    colors: [
      { name: "Titanium Black", hex: "#1D2027" },
      { name: "Nebula Blue", hex: "#2454FF" },
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    specs: [
      { label: "Display", value: "6.8\" LTPO AMOLED, 120Hz" },
      { label: "Chipset", value: "Snapdragon 8 Gen 4" },
      { label: "RAM", value: "12GB / 16GB" },
      { label: "Camera", value: "50MP + 48MP + 12MP" },
      { label: "Battery", value: "5000mAh, 100W charging" },
      { label: "Warranty", value: "1 year manufacturer" },
    ],
    description:
      "Our top-tier flagship with a titanium frame, a 120Hz LTPO display, and a triple-camera system tuned for low light.",
    images: [
      "https://images.unsplash.com/photo-1592286927505-1def25115481?w=900&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80",
    ],
  },
  {
    id: 2,
    slug: "nova-x1",
    name: "Nova X1",
    category: "Flagship",
    price: 69999,
    compareAtPrice: 77999,
    colors: [
      { name: "Graphite", hex: "#3A3F4B" },
      { name: "Pearl White", hex: "#F0EFEA" },
    ],
    storageOptions: ["128GB", "256GB"],
    specs: [
      { label: "Display", value: "6.5\" AMOLED, 120Hz" },
      { label: "Chipset", value: "Snapdragon 8 Gen 3" },
      { label: "RAM", value: "8GB / 12GB" },
      { label: "Camera", value: "50MP + 12MP" },
      { label: "Battery", value: "4700mAh, 65W charging" },
      { label: "Warranty", value: "1 year manufacturer" },
    ],
    description:
      "The flagship experience at a sharper price — same core chipset as the Pro, a slightly smaller dual-camera setup.",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80",
      "https://images.unsplash.com/photo-1592286927505-1def25115481?w=900&q=80",
    ],
  },
  {
    id: 3,
    slug: "nova-air-5g",
    name: "Nova Air 5G",
    category: "Mid-Range",
    price: 24999,
    compareAtPrice: 28999,
    colors: [
      { name: "Ocean Teal", hex: "#17D9B4" },
      { name: "Midnight", hex: "#1D2027" },
    ],
    storageOptions: ["128GB", "256GB"],
    specs: [
      { label: "Display", value: "6.4\" AMOLED, 90Hz" },
      { label: "Chipset", value: "Snapdragon 7s Gen 2" },
      { label: "RAM", value: "8GB" },
      { label: "Camera", value: "50MP + 8MP" },
      { label: "Battery", value: "5000mAh, 44W charging" },
      { label: "Warranty", value: "1 year manufacturer" },
    ],
    description:
      "A well-balanced 5G mid-ranger — AMOLED display, all-day battery, and a camera that holds up in daylight and dusk.",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80",
      "https://images.unsplash.com/photo-1592286927505-1def25115481?w=900&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    ],
  },
  {
    id: 4,
    slug: "nova-air",
    name: "Nova Air",
    category: "Mid-Range",
    price: 19999,
    compareAtPrice: 22999,
    colors: [
      { name: "Sky Blue", hex: "#4D96FF" },
      { name: "Graphite", hex: "#3A3F4B" },
    ],
    storageOptions: ["128GB"],
    specs: [
      { label: "Display", value: "6.4\" IPS LCD, 90Hz" },
      { label: "Chipset", value: "Snapdragon 6 Gen 1" },
      { label: "RAM", value: "6GB / 8GB" },
      { label: "Camera", value: "48MP + 2MP" },
      { label: "Battery", value: "5000mAh, 33W charging" },
      { label: "Warranty", value: "1 year manufacturer" },
    ],
    description:
      "The non-5G Air, for anyone who wants the same design language and battery life without paying for a radio they don't need yet.",
    images: [
      "https://images.unsplash.com/photo-1592286927505-1def25115481?w=900&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80",
    ],
  },
  {
    id: 5,
    slug: "nova-spark",
    name: "Nova Spark",
    category: "Budget",
    price: 11999,
    compareAtPrice: 13999,
    colors: [
      { name: "Coral", hex: "#FF6B6B" },
      { name: "Black", hex: "#1D2027" },
    ],
    storageOptions: ["64GB", "128GB"],
    specs: [
      { label: "Display", value: "6.6\" IPS LCD, 90Hz" },
      { label: "Chipset", value: "Helio G99" },
      { label: "RAM", value: "4GB / 6GB" },
      { label: "Camera", value: "50MP + 2MP" },
      { label: "Battery", value: "5000mAh, 18W charging" },
      { label: "Warranty", value: "1 year manufacturer" },
    ],
    description:
      "A genuinely capable first smartphone or backup device — big battery, smooth-enough 90Hz screen, no bloatware.",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80",
      "https://images.unsplash.com/photo-1592286927505-1def25115481?w=900&q=80",
    ],
  },
  {
    id: 6,
    slug: "nova-spark-lite",
    name: "Nova Spark Lite",
    category: "Budget",
    price: 8999,
    compareAtPrice: 10499,
    colors: [
      { name: "Mint", hex: "#6BCB77" },
      { name: "Black", hex: "#1D2027" },
    ],
    storageOptions: ["64GB"],
    specs: [
      { label: "Display", value: "6.5\" IPS LCD, 60Hz" },
      { label: "Chipset", value: "Helio G85" },
      { label: "RAM", value: "4GB" },
      { label: "Camera", value: "13MP + 2MP" },
      { label: "Battery", value: "5000mAh, 10W charging" },
      { label: "Warranty", value: "1 year manufacturer" },
    ],
    description:
      "The essentials, priced honestly — calls, messages, apps, and a battery that comfortably lasts a full day.",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=80",
      "https://images.unsplash.com/photo-1592286927505-1def25115481?w=900&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    ],
  },
  {
    id: 7,
    slug: "nova-buds-pro",
    name: "Nova Buds Pro",
    category: "Accessories",
    price: 6999,
    compareAtPrice: 8499,
    colors: [
      { name: "White", hex: "#F0EFEA" },
      { name: "Black", hex: "#1D2027" },
    ],
    storageOptions: ["Standard"],
    specs: [
      { label: "Driver", value: "11mm dynamic driver" },
      { label: "ANC", value: "Active noise cancellation, up to 42dB" },
      { label: "Battery", value: "8hrs (buds) + 32hrs (case)" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Warranty", value: "1 year manufacturer" },
    ],
    description:
      "True wireless earbuds with strong ANC and a genuinely comfortable fit for long listening sessions.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&q=80",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=900&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=900&q=80",
    ],
  },
  {
    id: 8,
    slug: "nova-fastcharge-65w",
    name: "Nova FastCharge 65W",
    category: "Accessories",
    price: 2499,
    compareAtPrice: 2999,
    colors: [
      { name: "White", hex: "#F0EFEA" },
    ],
    storageOptions: ["Standard"],
    specs: [
      { label: "Output", value: "65W GaN fast charging" },
      { label: "Ports", value: "1x USB-C, 1x USB-A" },
      { label: "Compatibility", value: "USB-PD, works with most brands" },
      { label: "Cable Included", value: "Yes, 1.5m USB-C" },
      { label: "Safety", value: "Over-current & over-heat protection" },
      { label: "Warranty", value: "1 year manufacturer" },
    ],
    description:
      "A compact GaN charger that can top up a phone and a laptop at the same time without either device throttling.",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=900&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=900&q=80",
      "https://images.unsplash.com/photo-1591290619762-c8f505f6dd08?w=900&q=80",
    ],
  },
  {
    id: 9,
    slug: "nova-armor-case",
    name: "Nova Armor Case",
    category: "Accessories",
    price: 999,
    compareAtPrice: 1299,
    colors: [
      { name: "Clear", hex: "#F0EFEA" },
      { name: "Black", hex: "#1D2027" },
      { name: "Teal", hex: "#17D9B4" },
    ],
    storageOptions: ["Standard"],
    specs: [
      { label: "Material", value: "TPU + polycarbonate hybrid" },
      { label: "Drop Rating", value: "Military-grade, up to 2m" },
      { label: "Camera Protection", value: "Raised bezel" },
      { label: "Compatibility", value: "Nova X1 / X1 Pro / Air" },
      { label: "Wireless Charging", value: "Compatible" },
      { label: "Warranty", value: "6 months" },
    ],
    description:
      "Drop-tested protection that doesn't add bulk — a raised camera bezel and reinforced corners without a thick grip.",
    images: [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=900&q=80",
      "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?w=900&q=80",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=900&q=80",
    ],
  },
];

export const getPhoneBySlug = (slug) => PHONES.find((p) => p.slug === slug);
