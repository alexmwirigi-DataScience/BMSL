
import { Branch, Service, Product } from './types';

export const COLORS = {
  primary: '#002B49', // Royal Blue / Navy from Logo
  secondary: '#E32636', // Red from Logo
  accent: '#F39200', // Orange from Logo
  green: '#8BC53F', // Lime Green from Logo
  light: '#F8FAFC',
};

export const BRANCHES: Branch[] = [
  {
    name: "Githurai 45 (HQ)",
    isHQ: true,
    phones: ["0702 432 508", "0708 198 931"]
  },
  {
    name: "Ruiru",
    phones: ["0798 660 180", "0743 257 420"]
  },
  {
    name: "Nyeri",
    phones: ["0716 305 302", "0708 271 540"]
  },
  {
    name: "Kenol",
    phones: ["0728 854 284", "0718 365 556"]
  },
  {
    name: "Naivasha",
    phones: ["0708 455 708", "0718 978 881"]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Screen Replacement",
    description: "High-quality original LCD and glass replacements for all major phone brands.",
    icon: "Monitor"
  },
  {
    title: "Battery Upgrades",
    description: "Restore your phone's battery life with our premium, high-capacity batteries.",
    icon: "Battery"
  },
  {
    title: "Charging Port Repairs",
    description: "Fixing loose connections and faulty charging ports with genuine components.",
    icon: "Zap"
  },
  {
    title: "System Diagnostics",
    description: "Professional troubleshooting for software bugs and hardware malfunctions.",
    icon: "Activity"
  }
];

export const PRODUCTS: Product[] = [
  { name: "Original LCDs", image: "https://picsum.photos/seed/lcd/400/300" },
  { name: "Premium Batteries", image: "https://picsum.photos/seed/battery/400/300" },
  { name: "Charging Cables", image: "https://picsum.photos/seed/cable/400/300" },
  { name: "Replacement Housings", image: "https://picsum.photos/seed/housing/400/300" },
  { name: "Tempered Glass", image: "https://picsum.photos/seed/glass/400/300" }
];
