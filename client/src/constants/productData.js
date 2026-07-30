import iphone from "../assets/images/products/iphone.jpg";
import laptop from "../assets/images/products/laptop.jpg";
import headphones from "../assets/images/products/headphones.jpg";
import smartwatch from "../assets/images/products/smartwatch.jpg";
import camera from "../assets/images/products/camera.jpg";
import shoes from "../assets/images/products/shoes.jpg";
import tshirt from "../assets/images/products/tshirt.jpg";
import hoodie from "../assets/images/products/hoodie.jpg";

import iphone1 from "../assets/images/products/iphone/iphone-1.jpg";
import iphone2 from "../assets/images/products/iphone/iphone-2.jpg";
import iphone3 from "../assets/images/products/iphone/iphone-3.jpg";
import iphone4 from "../assets/images/products/iphone/iphone-4.jpg";

import laptop1 from "../assets/images/products/laptop/laptop-1.jpg";
import laptop2 from "../assets/images/products/laptop/laptop-2.jpg";
import laptop3 from "../assets/images/products/laptop/laptop-3.jpg";
import laptop4 from "../assets/images/products/laptop/laptop-4.jpg";

import headphones1 from "../assets/images/products/headphones/headphones-1.jpg";
import headphones2 from "../assets/images/products/headphones/headphones-2.jpg";
import headphones3 from "../assets/images/products/headphones/headphones-3.jpg";
import headphones4 from "../assets/images/products/headphones/headphones-4.jpg";

import smartwatch1 from "../assets/images/products/smartwatch/smartwatch-1.jpg";
import smartwatch2 from "../assets/images/products/smartwatch/smartwatch-2.jpg";
import smartwatch3 from "../assets/images/products/smartwatch/smartwatch-3.jpg";
import smartwatch4 from "../assets/images/products/smartwatch/smartwatch-4.jpg";
export const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    category: "Electronics",
    image: iphone1,
    images: [
  iphone1,
  iphone2,
  iphone3,
  iphone4,
],
    price: 129999,
    originalPrice: 139999,
    rating: 4.8,
    reviews: 245,
    badge: "Sale",
  },
  {
    id: 2,
    name: "Gaming Laptop",
    category: "Electronics",
    image: laptop1,

images: [
  laptop1,
  laptop2,
  laptop3,
  laptop4,
],
    price: 89999,
    originalPrice: 99999,
    rating: 4.7,
    reviews: 180,
    badge: "Hot",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Electronics",
    image: headphones1,

images: [
  headphones1,
  headphones2,
  headphones3,
  headphones4,
],
    price: 7999,
    originalPrice: 9999,
    rating: 4.6,
    reviews: 320,
    badge: "New",
  },
  {
    id: 4,
    name: "DSLR Camera",
    category: "Electronics",
    image: camera,
    price: 55999,
    originalPrice: 62999,
    rating: 4.7,
    reviews: 142,
    badge: "Best Seller"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Electronics",
    image: headphones,
    price: 3499,
    originalPrice: 4499,
    rating: 4.5,
    reviews: 95,
    badge: "Sale",
  },

  {
    id: 6,
    name: "Cotton T-Shirt",
    category: "Fashion",
    image: tshirt,
    price: 999,
    originalPrice: 1499,
    rating: 4.4,
    reviews: 110,
    badge: "New",
  },
  {
    id: 7,
    name: "Premium Hoodie",
    category: "Fashion",
    image: hoodie,
    price: 1999,
    originalPrice: 2499,
    rating: 4.6,
    reviews: 84,
    badge: "Hot",
  },
  {
    id: 8,
    name: "Casual T-Shirt",
    category: "Fashion",
    image: tshirt,
    price: 799,
    originalPrice: 999,
    rating: 4.3,
    reviews: 65,
    badge: "Sale",
  },
  {
    id: 9,
    name: "Winter Hoodie",
    category: "Fashion",
    image: hoodie,
    price: 2299,
    originalPrice: 2799,
    rating: 4.5,
    reviews: 71,
    badge: "Best Seller"
  },

  {
    id: 10,
    name: "Running Shoes",
    category: "Footwear",
    image: shoes,
    price: 3499,
    originalPrice: 4499,
    rating: 4.5,
    reviews: 210,
    badge: "Sale",
  },
  {
    id: 11,
    name: "Sports Shoes",
    category: "Footwear",
    image: shoes,
    price: 4299,
    originalPrice: 4999,
    rating: 4.7,
    reviews: 134,
    badge: "Hot",
  },

  {
    id: 12,
    name: "Luxury Smart Watch",
    category: "Watches",
    image: smartwatch1,

images: [
  smartwatch1,
  smartwatch2,
  smartwatch3,
  smartwatch4,
],
    price: 5999,
    originalPrice: 7999,
    rating: 4.5,
    reviews: 270,
    badge: "Sale",
  },
  {
    id: 13,
    name: "Fitness Smart Watch",
    category: "Watches",
    image: smartwatch,
    price: 4999,
    originalPrice: 6499,
    rating: 4.6,
    reviews: 188,
    badge: "New",
  },

  {
    id: 14,
    name: "Beauty Kit",
    category: "Beauty",
    image: tshirt,
    price: 1499,
    originalPrice: 1999,
    rating: 4.2,
    reviews: 52,
    badge: "Sale",
  },
  {
    id: 15,
    name: "Skin Care Combo",
    category: "Beauty",
    image: hoodie,
    price: 1899,
    originalPrice: 2399,
    rating: 4.4,
    reviews: 68,
    badge: "Best Seller"
  },

  {
    id: 16,
    name: "Wooden Chair",
    category: "Furniture",
    image: laptop,
    price: 5499,
    originalPrice: 6999,
    rating: 4.3,
    reviews: 39,
    badge: "Hot",
  },
  {
    id: 17,
    name: "Study Table",
    category: "Furniture",
    image: laptop,
    price: 8999,
    originalPrice: 10999,
    rating: 4.5,
    reviews: 58,
    badge: "Sale",
  },

  {
    id: 18,
    name: "Healthy Grocery Pack",
    category: "Grocery",
    image: headphones,
    price: 899,
    originalPrice: 1199,
    rating: 4.4,
    reviews: 44,
    badge: "New",
  },

  {
    id: 19,
    name: "Travel Backpack",
    category: "Accessories",
    image: hoodie,
    price: 1599,
    originalPrice: 1999,
    rating: 4.5,
    reviews: 87,
    badge: "Hot",
  },

  {
    id: 20,
    name: "Wireless Earbuds",
    category: "Accessories",
    image: headphones,
    price: 2999,
    originalPrice: 3999,
    rating: 4.6,
    reviews: 166,
    badge: "Best Seller"
  },
];