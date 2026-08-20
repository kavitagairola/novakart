import heroImage from "../assets/images/hero.jpg";

export const heroData = {
  badge: "Autumn / Winter Collection 2026",
  title: "Elevated Everyday",
  highlight: "Dressing.",
  description:
    "Discover meticulously crafted silhouettes, luxurious fluid satins, breathable linens, and modern tailoring designed for the contemporary woman.",
  primaryButton: "Shop Collection",
  secondaryButton: "Explore New Arrivals",
  image: heroImage,
  stats: [
    { number: "100%", label: "Sustainable Fabrics" },
    { number: "48Hrs", label: "Express Dispatch" },
    { number: "7-Day", label: "Hassle-Free Returns" },
  ],
};

export const categories = [
  { id: 1, name: "Dresses", slug: "dresses", image: heroImage },
  { id: 2, name: "Tops & Bodysuits", slug: "tops-bodysuits", image: heroImage },
  { id: 3, name: "Kurtis & Ethnic", slug: "kurtis-ethnic", image: heroImage },
  { id: 4, name: "Co-ord Sets", slug: "co-ord-sets", image: heroImage },
  { id: 5, name: "Oversized Tees", slug: "oversized-tees", image: heroImage },
  { id: 6, name: "Party Wear", slug: "party-wear", image: heroImage },
  { id: 7, name: "Skirts & Bottoms", slug: "skirts-bottoms", image: heroImage },
];

// Added featuredProducts export to resolve the import error
export const featuredProducts = [
  {
    id: 1,
    name: "Satin Cowl Neck Midi Slip Dress",
    category: "Dresses",
    price: 2499,
    originalPrice: 3499,
    rating: 4.9,
    reviews: 142,
    badge: "Bestseller",
    image: heroImage
  },
  {
    id: 2,
    name: "Tiered Cotton Voile Maxi Dress",
    category: "Dresses",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 98,
    badge: "New",
    image: heroImage
  },
  {
    id: 3,
    name: "Pleated Halter-Neck Evening Gown",
    category: "Dresses",
    price: 3899,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 64,
    badge: "Exclusive",
    image: heroImage
  },
  {
    id: 4,
    name: "Linen Trench Button-Down Dress",
    category: "Dresses",
    price: 3299,
    originalPrice: 4299,
    rating: 4.7,
    reviews: 82,
    badge: "Sale",
    image: heroImage
  }
];

export const whyChooseUs = [
  { id: 1, title: "Complimentary Shipping", description: "Enjoy free insured delivery on all orders above ₹999.", icon: "✦" },
  { id: 2, title: "Artisanal Craftsmanship", description: "Thoughtfully sourced premium textiles with exquisite finish.", icon: "✧" },
  { id: 3, title: "Seamless Exchanges", description: "7-day effortless doorstep pickup and exchange policy.", icon: "↩" },
  { id: 4, title: "Styling Concierge", description: "Personalized fashion assistance available 24/7.", icon: "◆" },
];

export const bannerData = {
  title: "The Transition Edit — Up to 40% Off",
  subtitle: "Embrace effortless sophistication with our curated seasonal transitional wear.",
  buttonText: "Shop The Edit",
  image: heroImage,
};