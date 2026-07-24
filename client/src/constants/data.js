import heroImage from "../assets/images/hero.jpg";

import electronics from "../assets/images/categories/electronics.jpg";
import fashion from "../assets/images/categories/fashion.jpg";
import footwear from "../assets/images/categories/footwear.jpg";
import beauty from "../assets/images/categories/beauty.jpg";
import furniture from "../assets/images/categories/furniture.jpg";
import grocery from "../assets/images/categories/grocery.jpg";
import watches from "../assets/images/categories/watches.jpg";
import accessories from "../assets/images/categories/accessories.jpg";
import iphone from "../assets/images/products/iphone.jpg";
import laptop from "../assets/images/products/laptop.jpg";
import headphones from "../assets/images/products/headphones.jpg";
import smartwatch from "../assets/images/products/smartwatch.jpg";
import camera from "../assets/images/products/camera.jpg";
import shoes from "../assets/images/products/shoes.jpg";
import tshirt from "../assets/images/products/tshirt.jpg";
import hoodie from "../assets/images/products/hoodie.jpg";
import saleBanner from "../assets/images/banners/sale-banner.jpg";

export const heroData = {
  badge: "🔥 Biggest Sale of the Year",

  title: "Discover The Best",

  highlight: "Shopping Experience",

  description:
    "Explore premium electronics, fashion, accessories and much more with exciting offers and fast delivery.",

  primaryButton: "Shop Now",

  secondaryButton: "Explore",

  image: heroImage,

  stats: [
    {
      number: "10K+",
      label: "Happy Customers",
    },
    {
      number: "5K+",
      label: "Products",
    },
    {
      number: "24/7",
      label: "Support",
    },
  ],
};
export const categories = [
  {
    id: 1,
    name: "Electronics",
    image: electronics,
  },
  {
    id: 2,
    name: "Fashion",
    image: fashion,
  },
  {
    id: 3,
    name: "Footwear",
    image: footwear,
  },
  {
    id: 4,
    name: "Beauty",
    image: beauty,
  },
  {
    id: 5,
    name: "Furniture",
    image: furniture,
  },
  {
    id: 6,
    name: "Grocery",
    image: grocery,
  },
  {
    id: 7,
    name: "Watches",
    image: watches,
  },
  {
    id: 8,
    name: "Accessories",
    image: accessories,
  },
];
export const featuredProducts = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    image: iphone,
    price: 129999,
    originalPrice: 139999,
    rating: 4.8,
    reviews: 245,
    badge: "Sale",
  },
  {
    id: 2,
    name: "Gaming Laptop",
    image: laptop,
    price: 89999,
    originalPrice: 99999,
    rating: 4.7,
    reviews: 180,
    badge: "Hot",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    image: headphones,
    price: 7999,
    originalPrice: 9999,
    rating: 4.6,
    reviews: 320,
    badge: "New",
  },
  {
    id: 4,
    name: "Smart Watch",
    image: smartwatch,
    price: 5999,
    originalPrice: 7999,
    rating: 4.5,
    reviews: 270,
    badge: "Sale",
  },
];
export const bannerData = {
  title: "Mega Sale Up To 50% OFF",
  subtitle: "Discover amazing deals on electronics, fashion and accessories.",
  buttonText: "Shop Now",
  image: saleBanner,
};
export const whyChooseUs = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Free delivery on orders above ₹999.",
    icon: "🚚",
  },
  {
    id: 2,
    title: "Secure Payment",
    description: "100% secure payment gateway.",
    icon: "🔒",
  },
  {
    id: 3,
    title: "Easy Returns",
    description: "7-day hassle-free return policy.",
    icon: "↩️",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Customer support anytime you need.",
    icon: "🎧",
  },
];