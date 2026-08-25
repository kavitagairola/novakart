// src/constants/productData.js
import { getProductImageUrl } from "../utils/imageLoader";

export const products = [
  // --- DRESSES (Products 01 to 06) ---
  {
    id: 1,
    name: "Satin Cowl Neck Midi Slip Dress",
    category: "Dresses",
    image: getProductImageUrl("Dresses", "product-01-01.jpg"),
    images: [
      getProductImageUrl("Dresses", "product-01-01.jpg"),
      getProductImageUrl("Dresses", "product-01-02.jpg"),
      getProductImageUrl("Dresses", "product-01-03.jpg")
    ],
    price: 2499,
    originalPrice: 3499,
    rating: 4.9,
    reviews: 142,
    badge: "Bestseller",
    description: "Crafted from liquid-drape satin on the bias, featuring an elegant cowl neckline and delicate adjustable rouleau straps.",
    colors: ["Champagne", "Emerald Green", "Obsidian Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    specifications: { "Fabric": "Polyester Satin", "Fit": "Bias Cut", "Length": "Midi", "Care": "Dry Clean" }
  },
  {
    id: 2,
    name: "Tiered Cotton Voile Maxi Dress",
    category: "Dresses",
    image: getProductImageUrl("Dresses", "product-02-01.jpg"),
    images: [
      getProductImageUrl("Dresses", "product-02-01.jpg"),
      getProductImageUrl("Dresses", "product-02-02.jpg"),
      getProductImageUrl("Dresses", "product-02-03.jpg")
    ],
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 98,
    badge: "New",
    description: "Lightweight pure cotton voile dress with voluminous tiered ruffles, bishop sleeves, and a removable waist belt.",
    colors: ["Soft Ivory", "Dusty Rose"],
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Fabric": "100% Organic Cotton", "Fit": "Relaxed Tiered", "Care": "Machine Wash Gentle" }
  },
  {
    id: 3,
    name: "Pleated Halter-Neck Evening Gown",
    category: "Dresses",
    image: getProductImageUrl("Dresses", "product-03-01.jpg"),
    images: [
      getProductImageUrl("Dresses", "product-03-01.jpg"),
      getProductImageUrl("Dresses", "product-03-02.jpg"),
      getProductImageUrl("Dresses", "product-03-03.jpg")
    ],
    price: 3899,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 64,
    badge: "Exclusive",
    description: "Striking micro-pleated georgette gown featuring an open architectural back and an elongated neck-tie drape.",
    colors: ["Burgundy Noir", "Champagne Gold"],
    sizes: ["XS", "S", "M", "L"],
    specifications: { "Fabric": "Micro-Pleated Georgette", "Care": "Dry Clean" }
  },
  {
    id: 4,
    name: "Linen Trench Button-Down Dress",
    category: "Dresses",
    image: getProductImageUrl("Dresses", "product-04-01.jpg"),
    images: [
      getProductImageUrl("Dresses", "product-04-01.jpg"),
      getProductImageUrl("Dresses", "product-04-02.jpg"),
      getProductImageUrl("Dresses", "product-04-03.jpg")
    ],
    price: 3299,
    originalPrice: 4299,
    rating: 4.7,
    reviews: 82,
    badge: "Sale",
    description: "Structured tailoring meets breezy Mediterranean linen with horn buttons and notched lapels.",
    colors: ["Oatmeal", "Khaki Olive"],
    sizes: ["S", "M", "L"],
    specifications: { "Fabric": "100% French Flax Linen", "Care": "Hand Wash" }
  },
  {
    id: 5,
    name: "Square Neck Puff Sleeve Mini Dress",
    category: "Dresses",
    image: getProductImageUrl("Dresses", "product-05-01.jpg"),
    images: [
      getProductImageUrl("Dresses", "product-05-01.jpg"),
      getProductImageUrl("Dresses", "product-05-02.jpg"),
      getProductImageUrl("Dresses", "product-05-03.jpg")
    ],
    price: 1999,
    originalPrice: 2799,
    rating: 4.6,
    reviews: 110,
    badge: "Sale",
    description: "Playful romanticism cut in crisp cotton poplin with elasticated puff sleeves and a smocked back bodice.",
    colors: ["Sage Green", "White"],
    sizes: ["XS", "S", "M", "L"],
    specifications: { "Fabric": "100% Cotton Poplin", "Care": "Machine Wash" }
  },
  {
    id: 6,
    name: "Cut-Out Ribbed Knit Column Dress",
    category: "Dresses",
    image: getProductImageUrl("Dresses", "product-06-01.jpg"),
    images: [
      getProductImageUrl("Dresses", "product-06-01.jpg"),
      getProductImageUrl("Dresses", "product-06-02.jpg"),
      getProductImageUrl("Dresses", "product-06-03.jpg")
    ],
    price: 2699,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 76,
    badge: "New",
    description: "Seamless column silhouette sculpted from rich modal knit with a subtle asymmetrical waist cut-out.",
    colors: ["Warm Espresso", "Charcoal Black"],
    sizes: ["S", "M", "L"],
    specifications: { "Fabric": "Modal Viscose", "Care": "Dry Flat" }
  },

  // --- TOPS & BODYSUITS (Products 01 to 06) ---
  {
    id: 20,
    name: "Ribbed Knit Asymmetrical Top",
    category: "Tops & Bodysuits",
    image: getProductImageUrl("Tops & Bodysuits", "product-01-01.jpg"),
    images: [
      getProductImageUrl("Tops & Bodysuits", "product-01-01.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-01-02.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-01-03.jpg")
    ],
    price: 1499,
    originalPrice: 2199,
    rating: 4.8,
    reviews: 52,
    badge: "Bestseller",
    description: "Sculptural ribbed knit top featuring a modern asymmetrical neckline and soft stretch cotton blend.",
    colors: ["Ivory", "Black", "Olive"],
    sizes: ["XS", "S", "M", "L"],
    specifications: { "Fabric": "Cotton Rib Knit", "Fit": "Fitted", "Care": "Machine Wash Gentle" }
  },
  {
    id: 21,
    name: "Layered Cotton Jersey Top",
    category: "Tops & Bodysuits",
    image: getProductImageUrl("Tops & Bodysuits", "product-02-01.jpg"),
    images: [
      getProductImageUrl("Tops & Bodysuits", "product-02-01.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-02-02.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-02-03.jpg")
    ],
    price: 1699,
    originalPrice: 2399,
    rating: 4.7,
    reviews: 40,
    badge: "New",
    description: "Effortless everyday jersey top with subtle layered detailing and breathable cotton fabrication.",
    colors: ["White", "Soft Grey"],
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Fabric": "100% Cotton", "Fit": "Relaxed", "Care": "Machine Wash" }
  },
  {
    id: 22,
    name: "V-Neck Wrap Knit Top",
    category: "Tops & Bodysuits",
    image: getProductImageUrl("Tops & Bodysuits", "product-03-01.jpg"),
    images: [
      getProductImageUrl("Tops & Bodysuits", "product-03-01.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-03-02.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-03-03.jpg")
    ],
    price: 1799,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 65,
    badge: "Exclusive",
    description: "Chic wrap-style knit top designed with a flattering V-neckline and waist-defining tie.",
    colors: ["Beige", "Black"],
    sizes: ["XS", "S", "M", "L"],
    specifications: { "Fabric": "Viscose Blend", "Fit": "Wrap Style", "Care": "Gentle Hand Wash" }
  },
  {
    id: 23,
    name: "Structured Poplin Shirt Top",
    category: "Tops & Bodysuits",
    image: getProductImageUrl("Tops & Bodysuits", "product-04-01.jpg"),
    images: [
      getProductImageUrl("Tops & Bodysuits", "product-04-01.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-04-02.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-04-03.jpg")
    ],
    price: 1999,
    originalPrice: 2799,
    rating: 4.6,
    reviews: 31,
    badge: "New",
    description: "Crisp cotton poplin shirt top featuring structured cuffs and a modern cropped hem.",
    colors: ["Optic White", "Striped Blue"],
    sizes: ["S", "M", "L"],
    specifications: { "Fabric": "Cotton Poplin", "Fit": "Tailored", "Care": "Machine Wash" }
  },
  {
    id: 24,
    name: "Pleated Halter Neck Top",
    category: "Tops & Bodysuits",
    image: getProductImageUrl("Tops & Bodysuits", "product-05-01.jpg"),
    images: [
      getProductImageUrl("Tops & Bodysuits", "product-05-01.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-05-02.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-05-03.jpg")
    ],
    price: 2199,
    originalPrice: 2999,
    rating: 4.8,
    reviews: 44,
    badge: "Sale",
    description: "Graceful micro-pleated halter neck top designed for evening statements and celebrations.",
    colors: ["Emerald", "Champagne"],
    sizes: ["XS", "S", "M", "L"],
    specifications: { "Fabric": "Pleated Georgette", "Care": "Dry Clean" }
  },
  {
    id: 25,
    name: "Draped Satin Bodysuit",
    category: "Tops & Bodysuits",
    image: getProductImageUrl("Tops & Bodysuits", "product-06-01.jpg"),
    images: [
      getProductImageUrl("Tops & Bodysuits", "product-06-01.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-06-02.jpg"),
      getProductImageUrl("Tops & Bodysuits", "product-06-03.jpg")
    ],
    price: 1899,
    originalPrice: 2599,
    rating: 4.9,
    reviews: 38,
    badge: "New",
    description: "Sophisticated satin bodysuit designed with a fluid draped neckline and secure snap-button gusset.",
    colors: ["Champagne", "Espresso", "Black"],
    sizes: ["S", "M", "L"],
    specifications: { "Fabric": "Polyester Satin", "Fit": "Tailored Bodysuit", "Care": "Dry Clean" }
  },

  // --- KURTIS & ETHNIC (Products 01 to 06) ---
  {
    id: 13,
    name: "Hand-Block Floral Cambric Kurti",
    category: "Kurtis & Ethnic",
    image: getProductImageUrl("Kurtis & Ethnic", "product-01-01.jpg"),
    images: [
      getProductImageUrl("Kurtis & Ethnic", "product-01-01.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-01-02.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-01-03.jpg")
    ],
    price: 1699,
    originalPrice: 2399,
    rating: 4.8,
    reviews: 45,
    badge: "Bestseller",
    description: "Traditional hand-block printed cambric cotton kurti featuring delicate floral motifs and fine thread detailing.",
    colors: ["Indigo", "Madder Red"],
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Fabric": "100% Cambric Cotton", "Craft": "Hand-Block Printed", "Care": "Hand Wash Separately" }
  },
  {
    id: 16,
    name: "Indigo Block Print Cotton Kurti",
    category: "Kurtis & Ethnic",
    image: getProductImageUrl("Kurtis & Ethnic", "product-02-01.jpg"),
    images: [
      getProductImageUrl("Kurtis & Ethnic", "product-02-01.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-02-02.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-02-03.jpg")
    ],
    price: 1799,
    originalPrice: 2499,
    rating: 4.7,
    reviews: 38,
    badge: "New",
    description: "Charming indigo block-printed cotton kurti tailored for a graceful ethnic silhouette.",
    colors: ["Indigo Blue"],
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Fabric": "Cotton", "Craft": "Block Print", "Care": "Hand Wash" }
  },
  {
    id: 15,
    name: "Angrakha A-Line Cotton Tunic",
    category: "Kurtis & Ethnic",
    image: getProductImageUrl("Kurtis & Ethnic", "product-03-01.jpg"),
    images: [
      getProductImageUrl("Kurtis & Ethnic", "product-03-01.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-03-02.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-03-03.jpg")
    ],
    price: 1899,
    originalPrice: 2599,
    rating: 4.7,
    reviews: 32,
    badge: "New",
    description: "Classic angrakha style A-line cotton tunic designed with graceful side tie-ups and subtle border trims.",
    colors: ["Ivory", "Mustard Yellow"],
    sizes: ["XS", "S", "M", "L", "XL"],
    specifications: { "Fabric": "Pure Cotton", "Fit": "A-Line Angrakha", "Care": "Gentle Machine Wash" }
  },
  {
    id: 17,
    name: "Embroidered Chanderi Kurti Set",
    category: "Kurtis & Ethnic",
    image: getProductImageUrl("Kurtis & Ethnic", "product-04-01.jpg"),
    images: [
      getProductImageUrl("Kurtis & Ethnic", "product-04-01.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-04-02.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-04-03.jpg")
    ],
    price: 2199,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 54,
    badge: "Exclusive",
    description: "Exquisite embroidered Chanderi kurti crafted with delicate festive details.",
    colors: ["Pastel Pink", "Mint Green"],
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Fabric": "Chanderi Silk", "Care": "Dry Clean" }
  },
  {
    id: 18,
    name: "Printed Slit Kurti Tunic",
    category: "Kurtis & Ethnic",
    image: getProductImageUrl("Kurtis & Ethnic", "product-05-01.jpg"),
    images: [
      getProductImageUrl("Kurtis & Ethnic", "product-05-01.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-05-02.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-05-03.jpg")
    ],
    price: 1599,
    originalPrice: 2199,
    rating: 4.6,
    reviews: 28,
    badge: "Sale",
    description: "Modern high-slit printed kurti designed for casual elegance and daily wear.",
    colors: ["Mustard", "Teal"],
    sizes: ["XS", "S", "M", "L"],
    specifications: { "Fabric": "Rayon Cotton", "Care": "Machine Wash" }
  },
  {
    id: 31,
    name: "Festive Gota Patti Kurti",
    category: "Kurtis & Ethnic",
    image: getProductImageUrl("Kurtis & Ethnic", "product-06-01.jpg"),
    images: [
      getProductImageUrl("Kurtis & Ethnic", "product-06-01.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-06-02.jpg"),
      getProductImageUrl("Kurtis & Ethnic", "product-06-03.jpg")
    ],
    price: 2499,
    originalPrice: 3499,
    rating: 4.9,
    reviews: 71,
    badge: "Bestseller",
    description: "Stunning festive kurti embellished with traditional Gota Patti work along the yoke and hem.",
    colors: ["Maroon", "Royal Blue"],
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Fabric": "Silk Blend", "Care": "Dry Clean" }
  },

  // --- OVERSIZED TEES (Products 01 to 04) ---
  {
    id: 40,
    name: "Classic Heavyweight Oversized Tee",
    category: "Oversized Tees",
    image: getProductImageUrl("Oversized Tees", "product-01-01.jpg"),
    images: [
      getProductImageUrl("Oversized Tees", "product-01-01.jpg"),
      getProductImageUrl("Oversized Tees", "product-01-02.jpg"),
      getProductImageUrl("Oversized Tees", "product-01-03.jpg")
    ],
    price: 999,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 84,
    badge: "Bestseller",
    description: "Premium heavyweight cotton oversized tee engineered with a relaxed drop-shoulder streetwear fit.",
    colors: ["Jet Black", "Bone White", "Faded Washed Grey"],
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Fabric": "100% Heavy Cotton", "Fit": "Oversized Drop-Shoulder", "Care": "Machine Wash Cold" }
  },
  {
    id: 41,
    name: "Washed Vintage Fit Tee",
    category: "Oversized Tees",
    image: getProductImageUrl("Oversized Tees", "product-02-01.jpg"),
    images: [
      getProductImageUrl("Oversized Tees", "product-02-01.jpg"),
      getProductImageUrl("Oversized Tees", "product-02-02.jpg"),
      getProductImageUrl("Oversized Tees", "product-02-03.jpg")
    ],
    price: 1099,
    originalPrice: 1699,
    rating: 4.7,
    reviews: 56,
    badge: "New",
    description: "Vintage-washed relaxed fit tee featuring a soft lived-in feel and classic broken-in tone.",
    colors: ["Vintage Charcoal", "Sage Wash"],
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Fabric": "Washed Cotton Jersey", "Fit": "Relaxed Vintage", "Care": "Machine Wash" }
  },
  {
    id: 42,
    name: "Graphic Streetwear Oversized Tee",
    category: "Oversized Tees",
    image: getProductImageUrl("Oversized Tees", "product-03-01.jpg"),
    images: [
      getProductImageUrl("Oversized Tees", "product-03-01.jpg"),
      getProductImageUrl("Oversized Tees", "product-03-02.jpg"),
      getProductImageUrl("Oversized Tees", "product-03-03.jpg")
    ],
    price: 1199,
    originalPrice: 1799,
    rating: 4.9,
    reviews: 62,
    badge: "Exclusive",
    description: "Bold graphic oversized tee crafted from soft breathable cotton for modern streetwear styling.",
    colors: ["Off White", "Dark Navy"],
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Fabric": "100% Combed Cotton", "Fit": "Streetwear Oversized", "Care": "Machine Wash" }
  },
  {
    id: 43,
    name: "Minimalist Ribbed Collar Tee",
    category: "Oversized Tees",
    image: getProductImageUrl("Oversized Tees", "product-04-01.jpg"),
    images: [
      getProductImageUrl("Oversized Tees", "product-04-01.jpg"),
      getProductImageUrl("Oversized Tees", "product-04-02.jpg"),
      getProductImageUrl("Oversized Tees", "product-04-03.jpg")
    ],
    price: 899,
    originalPrice: 1399,
    rating: 4.6,
    reviews: 45,
    badge: "Sale",
    description: "Clean minimal design featuring a structured ribbed collar and comfortable everyday drape.",
    colors: ["Olive", "Sand", "Black"],
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Fabric": "Cotton Blend", "Fit": "Relaxed", "Care": "Machine Wash" }
  },

  // --- CO-ORD SETS (Products 01 to 06) ---
  {
    id: 19,
    name: "Linen Relaxed Shirt & Trouser Co-ord",
    category: "Co-ord Sets",
    image: getProductImageUrl("Co-ord Sets", "product-01-01.jpg"),
    images: [
      getProductImageUrl("Co-ord Sets", "product-01-01.jpg"),
      getProductImageUrl("Co-ord Sets", "product-01-02.jpg"),
      getProductImageUrl("Co-ord Sets", "product-01-03.jpg")
    ],
    price: 3299,
    originalPrice: 4499,
    rating: 4.9,
    reviews: 58,
    badge: "Exclusive",
    description: "An effortless matching pairing featuring a relaxed-fit linen shirt and high-waisted wide-leg trousers.",
    colors: ["Sand", "Sage", "White"],
    sizes: ["S", "M", "L"],
    specifications: { "Fabric": "100% Flax Linen", "Style": "Matching Co-ord Set", "Care": "Dry Clean Recommended" }
  },
  {
    id: 26,
    name: "Textured Knit Co-ord Set",
    category: "Co-ord Sets",
    image: getProductImageUrl("Co-ord Sets", "product-02-01.jpg"),
    images: [
      getProductImageUrl("Co-ord Sets", "product-02-01.jpg"),
      getProductImageUrl("Co-ord Sets", "product-02-02.jpg"),
      getProductImageUrl("Co-ord Sets", "product-02-03.jpg")
    ],
    price: 3499,
    originalPrice: 4699,
    rating: 4.8,
    reviews: 35,
    badge: "New",
    description: "Cohesive textured knit pairing designed for elevated comfort and effortless style.",
    colors: ["Oatmeal", "Charcoal"],
    sizes: ["S", "M", "L"],
    specifications: { "Fabric": "Cotton Knit", "Style": "Co-ord Set", "Care": "Hand Wash" }
  },
  {
    id: 27,
    name: "Printed Resort Co-ord Set",
    category: "Co-ord Sets",
    image: getProductImageUrl("Co-ord Sets", "product-03-01.jpg"),
    images: [
      getProductImageUrl("Co-ord Sets", "product-03-01.jpg"),
      getProductImageUrl("Co-ord Sets", "product-03-02.jpg"),
      getProductImageUrl("Co-ord Sets", "product-03-03.jpg")
    ],
    price: 3199,
    originalPrice: 4299,
    rating: 4.7,
    reviews: 29,
    badge: "Exclusive",
    description: "Airy resort-ready printed co-ord set crafted for leisurely getaways and warm afternoons.",
    colors: ["Blue Motif", "Rust Floral"],
    sizes: ["XS", "S", "M", "L"],
    specifications: { "Fabric": "Voile Cotton", "Style": "Resort Co-ord", "Care": "Gentle Machine Wash" }
  },
  {
    id: 28,
    name: "Tailored Blazer & Short Co-ord",
    category: "Co-ord Sets",
    image: getProductImageUrl("Co-ord Sets", "product-04-01.jpg"),
    images: [
      getProductImageUrl("Co-ord Sets", "product-04-01.jpg"),
      getProductImageUrl("Co-ord Sets", "product-04-02.jpg"),
      getProductImageUrl("Co-ord Sets", "product-04-03.jpg")
    ],
    price: 3899,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 51,
    badge: "Bestseller",
    description: "Modern smart-casual pairing featuring a structured lightweight blazer and matching tailored shorts.",
    colors: ["Sage", "Sand"],
    sizes: ["S", "M", "L"],
    specifications: { "Fabric": "Linen Twill", "Style": "Blazer Co-ord", "Care": "Dry Clean" }
  },
  {
    id: 29,
    name: "Ribbed Lounge Co-ord Set",
    category: "Co-ord Sets",
    image: getProductImageUrl("Co-ord Sets", "product-05-01.jpg"),
    images: [
      getProductImageUrl("Co-ord Sets", "product-05-01.jpg"),
      getProductImageUrl("Co-ord Sets", "product-05-02.jpg"),
      getProductImageUrl("Co-ord Sets", "product-05-03.jpg")
    ],
    price: 2899,
    originalPrice: 3899,
    rating: 4.8,
    reviews: 62,
    badge: "Sale",
    description: "Plush ribbed modal lounge set engineered for supreme softness and relaxed chic aesthetics.",
    colors: ["Mink", "Olive", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    specifications: { "Fabric": "Modal Rib", "Style": "Lounge Co-ord", "Care": "Machine Wash Gentle" }
  },
  {
    id: 30,
    name: "Satin Evening Co-ord Set",
    category: "Co-ord Sets",
    image: getProductImageUrl("Co-ord Sets", "product-06-01.jpg"),
    images: [
      getProductImageUrl("Co-ord Sets", "product-06-01.jpg"),
      getProductImageUrl("Co-ord Sets", "product-06-02.jpg"),
      getProductImageUrl("Co-ord Sets", "product-06-03.jpg")
    ],
    price: 4199,
    originalPrice: 5499,
    rating: 5.0,
    reviews: 74,
    badge: "Exclusive",
    description: "Lustrous fluid satin evening co-ord set designed to make a striking statement after dark.",
    colors: ["Midnight Blue", "Emerald", "Champagne"],
    sizes: ["S", "M", "L"],
    specifications: { "Fabric": "Polyester Satin", "Style": "Evening Co-ord", "Care": "Dry Clean" }
  },

  // --- SKIRTS & BOTTOMS ---
  {
    id: 37,
    name: "High-Waisted Pleated Linen Trousers",
    category: "Skirts & Bottoms",
    image: getProductImageUrl("Skirts & Bottoms", "product-01-01.jpg"),
    images: [getProductImageUrl("Skirts & Bottoms", "product-01-01.jpg")],
    price: 2499,
    originalPrice: 3299,
    rating: 4.8,
    reviews: 41,
    badge: "",
    description: "Tailored high-waisted trousers crafted from structured linen fabric, featuring front pleats and a clean silhouette.",
    colors: ["Natural Oatmeal", "Black", "Navy"],
    sizes: ["XS", "S", "M", "L"],
    specifications: { "Fabric": "Linen Blend", "Rise": "High-Waisted", "Care": "Hand Wash" }
  },

  // --- FLASH SALE PRODUCTS ---
  {
    id: 101,
    name: "Tailored Wool Blazer",
    category: "Outerwear",
    image: "/src/assets/images/products/product-01.jpg",
    images: ["/src/assets/images/products/product-01.jpg", "/src/assets/images/products/product-01-hover.jpg"],
    price: 2499,
    originalPrice: 4999,
    rating: 4.8,
    reviews: 124,
    badge: "Sale",
    description: "Crafted from premium mid-weight wool blend, this structured oversized blazer offers a sharp, modern silhouette.",
    colors: ["Camel", "Espresso", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    specifications: { "Fabric": "Wool Blend", "Care": "Dry Clean Only" }
  },
  {
    id: 102,
    name: "Champagne Satin Midi Dress",
    category: "Dresses",
    image: "/src/assets/images/products/product-02.jpg",
    images: ["/src/assets/images/products/product-02.jpg", "/src/assets/images/products/product-02-hover.jpg"],
    price: 1999,
    originalPrice: 3999,
    rating: 4.9,
    reviews: 89,
    badge: "Sale",
    description: "Glossy fluid satin midi dress designed with a sleek silhouette for special evenings.",
    colors: ["Champagne", "Black"],
    sizes: ["S", "M", "L"],
    specifications: { "Fabric": "Satin", "Care": "Dry Clean" }
  },
  {
    id: 103,
    name: "Ivory Chanderi Silk Kurti",
    category: "Kurtis & Ethnic",
    image: "/src/assets/images/products/product-03.jpg",
    images: ["/src/assets/images/products/product-03.jpg", "/src/assets/images/products/product-03-hover.jpg"],
    price: 1299,
    originalPrice: 2599,
    rating: 4.7,
    reviews: 67,
    badge: "Sale",
    description: "Elegant Chanderi silk kurti featuring delicate Zari weaving along the neckline and sleeves.",
    colors: ["Ivory", "Pastel Pink"],
    sizes: ["S", "M", "L", "XL"],
    specifications: { "Fabric": "Chanderi Silk", "Care": "Dry Clean Only" }
  },
  {
    id: 104,
    name: "Pleated Espresso Trousers",
    category: "Skirts & Bottoms",
    image: "/src/assets/images/products/product-04.jpg",
    images: ["/src/assets/images/products/product-04.jpg", "/src/assets/images/products/product-04-hover.jpg"],
    price: 1599,
    originalPrice: 3199,
    rating: 4.8,
    reviews: 52,
    badge: "Sale",
    description: "Deep espresso trousers featuring sharp front pleats and a comfortable tailored waistband.",
    colors: ["Espresso", "Charcoal"],
    sizes: ["XS", "S", "M", "L"],
    specifications: { "Fabric": "Crepe Twill", "Care": "Machine Wash" }
  }
];