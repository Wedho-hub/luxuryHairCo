// Silk Sculpture Hair — 100% Raw Vietnamese Hair, Luxury Grade Quality
// "featured" products have a full photo gallery (see /assets/<product> folders)
// and are primarily displayed with a clickable detail page. Everything else is
// listed minimally until more photography is available.

// ── Black Desire (10" 5×5 Closure, Natural) ────────────────────────────────
import blackDesireCover from "../assets/blackDesire/blackDesrie102.jpeg";
import blackDesireSpec  from "../assets/blackDesire/blackDesrie101.jpeg";
import blackDesireLife  from "../assets/blackDesire/blackDesrie103.jpeg";

// ── Black Obsession (16" 5×5 Closure, Natural) ──────────────────────────────
import blackObsessionCover from "../assets/blackobsession16inch/blackObsession2.jpeg";
import blackObsessionSpec  from "../assets/blackobsession16inch/blackObsession1.jpeg";
import blackObsessionLife  from "../assets/blackobsession16inch/blackObsession3.jpeg";

// ── Golden 33 (10" 5×5 Closure, Colour 33) ──────────────────────────────────
import golden33Cover from "../assets/golden33/golden33102.jpeg";
import golden33Spec  from "../assets/golden33/golden33101.jpeg";
import golden33Close from "../assets/golden33/golden33103.jpeg";
import golden33Mann  from "../assets/golden33/golden3310.jpeg";

// ── Scarlet Obsession (16" 5×5 Closure, Burgundy) ───────────────────────────
import scarletCover from "../assets/scarletObsession/scarletObsession2.jpeg";
import scarletSpec  from "../assets/scarletObsession/scarletObsession.jpeg";
import scarletLife  from "../assets/scarletObsession/scarletObsession1.jpeg";

// ── Single-photo products (more photography coming soon) ───────────────────
import chocolateDesireBrown22Img from "../assets/chocolateDesireBrown22.jpeg";
import rubieLuxe22      from "../assets/rubieLuxe22.jpeg";
import chocolateDesire  from "../assets/chocolateDesire22.jpeg";
import naomiSeduction   from "../assets/naomiSeduction26.jpeg";
import wineVelvet30     from "../assets/wineVelvet30.jpeg";

const img = {
  // Natural / jet-black straight
  naturalC: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
  naturalE: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",

  // Burgundy / wine / ruby
  burgundyA: "https://images.unsplash.com/photo-1580501170888-80668882ca0c?auto=format&fit=crop&w=800&q=80",
  burgundyB: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80",

  // Brown / chocolate / mocha
  brownB: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80",

  // Two-tone / ombré
  ombreA: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80",
  ombreB: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
};

export const products = [
  // ── 10 Inch ──────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Black Desire",
    tier: "5×5 Closure",
    color: "Natural",
    part: "Middle Part",
    description: "Natural Colour · Middle Part",
    length: 10,
    texture: "Straight",
    price: 6500,
    image: blackDesireCover,
    gallery: [blackDesireSpec, blackDesireCover, blackDesireLife],
    featured: true,
    tagline: "Effortless Luxury. Timeless Elegance.",
    longDescription:
      "Black Desire is the perfect luxury bob for women who appreciate sophistication in its purest form. Featuring a sleek natural black finish and a flawless middle part, this unit creates a polished look that transitions effortlessly from the boardroom to brunch. Crafted from 100% Raw Vietnamese Hair, Black Desire delivers natural movement, luxurious shine, and a lightweight feel while maintaining fullness from root to tip.",
    stylingOptions: [
      "Sleek straight luxury finish",
      "Soft inward curls",
      "Chic bob waves",
      "Side-tucked elegant look",
      "Professional executive styling",
    ],
    perfectFor: "Business professionals, luxury minimalists, everyday elegance, and women who prefer a polished look.",
    hairCare: "Wash with sulphate-free shampoo, deep condition monthly, and store on a wig stand to maintain shape and shine.",
    videoUrl: null,
  },
  {
    id: 2,
    name: "Velvet Kiss",
    tier: "5×5 Closure",
    color: "Burgundy",
    part: "3 Part",
    description: "Burgundy · 3 Part",
    length: 10,
    texture: "Straight",
    price: 7000,
    image: rubieLuxe22,
    tagline: "Bold Colour. Refined Luxury.",
    longDescription:
      "Velvet Kiss is for the woman who commands attention with grace. Its rich burgundy hue creates an unforgettable luxury statement while remaining sophisticated and elegant. The premium density and flawless construction ensure movement, softness, and long-lasting beauty.",
    stylingOptions: ["Sleek burgundy bob", "Soft glamorous curls", "Textured waves", "Side-swept luxury styling"],
    perfectFor: "Fashion-forward women, luxury events, date nights, and statement-making moments.",
    hairCare: "Use colour-safe products and avoid excessive heat to preserve the richness of the burgundy tone.",
    videoUrl: null,
  },
  {
    id: 3,
    name: "Golden 33",
    tier: "5×5 Closure",
    color: "Colour 33",
    part: "3 Part",
    description: "Colour 33 · 3 Part",
    length: 10,
    texture: "Straight",
    price: 7000,
    image: golden33Cover,
    gallery: [golden33Spec, golden33Cover, golden33Close, golden33Mann],
    featured: true,
    tagline: "Radiance Meets Luxury.",
    longDescription:
      "Golden 33 features beautiful honey and caramel tones that illuminate the face and enhance every complexion. This sophisticated shade delivers warmth, glamour, and effortless elegance.",
    stylingOptions: ["Sleek straight finish", "Soft curls", "Beach-inspired waves", "Side-part glamour"],
    perfectFor: "Luxury vacations, brunch dates, content creators, and women who love warm-toned glamour.",
    hairCare: "Use a moisturizing hair mask regularly to maintain colour vibrancy and softness.",
    videoUrl: null,
  },

  // ── 16 Inch ──────────────────────────────────────────────────────────────
  {
    id: 4,
    name: "Black Obsession",
    tier: "5×5 Closure",
    color: "Natural",
    part: "Middle Part",
    description: "Natural Colour · Middle Part",
    length: 16,
    texture: "Straight",
    price: 9800,
    image: blackObsessionCover,
    gallery: [blackObsessionSpec, blackObsessionCover, blackObsessionLife],
    featured: true,
    tagline: "Classic Beauty Never Goes Out Of Style.",
    longDescription:
      "Black Obsession is the perfect balance between natural beauty and luxury sophistication. The versatile length offers endless styling possibilities while maintaining a refined appearance.",
    stylingOptions: ["Bone-straight finish", "Soft body waves", "Loose curls"],
    perfectFor: "Women seeking an everyday luxury unit that works for every occasion.",
    hairCare: "Detangle gently from ends to roots and deep condition regularly to preserve softness.",
    videoUrl: null,
  },
  {
    id: 5,
    name: "Scarlet Obsession",
    tier: "5×5 Closure",
    color: "Burgundy",
    part: "Middle Part",
    description: "Burgundy · Middle Part",
    length: 16,
    texture: "Straight",
    price: 10500,
    image: scarletCover,
    gallery: [scarletSpec, scarletCover, scarletLife],
    featured: true,
    tagline: "Rich. Seductive. Unforgettable.",
    longDescription:
      "Scarlet Obsession showcases a luxurious burgundy shade that exudes confidence and sophistication. Designed for women who aren't afraid to stand out while maintaining elegance.",
    stylingOptions: ["Straight sleek look", "Glamorous curls", "Romantic waves", "Soft volume styling"],
    perfectFor: "Luxury dinners, photoshoots, celebrations, and special occasions.",
    hairCare: "Use heat protectant before styling and store away from direct sunlight to preserve colour richness.",
    videoUrl: null,
  },
  {
    id: 20,
    name: "Mocha Obsession",
    tier: "5×5 Closure",
    color: "Brown",
    part: "Middle Part",
    description: "Brown · Middle Part",
    length: 16,
    texture: "Straight",
    price: 10500,
    image: chocolateDesireBrown22Img,
  },

  // ── 22 Inch ──────────────────────────────────────────────────────────────
  {
    id: 6,
    name: "Shadow Seduction",
    tier: "5×5 Closure",
    color: "Two Tone",
    part: "3 Part",
    description: "Two Tone · 3 Part",
    length: 22,
    texture: "Straight",
    price: 12600,
    image: img.ombreA,
    tagline: "Dimension. Depth. Desire.",
    longDescription:
      "Shadow Seduction features a luxurious blend of tones that create natural dimension and movement. This stunning unit delivers a salon-finished appearance that turns heads effortlessly.",
    stylingOptions: ["Hollywood waves", "Body curls", "Sleek middle part", "Side-part glamour"],
    perfectFor: "Women who appreciate elevated beauty and luxury styling versatility.",
    hairCare: "Use lightweight serums to maintain movement and avoid heavy products that weigh the hair down.",
    videoUrl: null,
  },
  {
    id: 7,
    name: "Rubie Luxe",
    tier: "Full Frontal",
    color: "Burgundy",
    part: null,
    description: "Burgundy",
    length: 22,
    texture: "Straight",
    price: 13000,
    image: rubieLuxe22,
    tagline: "Luxury In Every Strand.",
    longDescription:
      "Rubie Luxe combines rich burgundy tones with the versatility of a full frontal installation. This luxurious unit allows limitless styling while maintaining an elegant and sophisticated appearance.",
    stylingOptions: ["Hollywood curls", "Side part", "Sleek straight styling"],
    perfectFor: "Luxury events, birthdays, weddings, and women who love statement beauty.",
    hairCare: "Always use a silk scarf or bonnet during storage to maintain smoothness.",
    videoUrl: null,
  },
  {
    id: 8,
    name: "Chocolate Desire",
    tier: "Full Frontal",
    color: "Brown",
    part: null,
    description: "Brown",
    length: 22,
    texture: "Straight",
    price: 13000,
    image: chocolateDesire,
    tagline: "Soft Glamour. Pure Sophistication.",
    longDescription:
      "Chocolate Desire delivers rich brown tones that complement every skin tone beautifully. The luxurious colour and premium texture create a naturally expensive look.",
    stylingOptions: ["Voluminous curls", "Straight luxury finish", "Soft waves"],
    perfectFor: "Women seeking effortless luxury and timeless beauty.",
    hairCare: "Deep condition every 3–4 weeks to maintain moisture and shine.",
    videoUrl: null,
  },
  {
    id: 9,
    name: "Midnight Mocha",
    tier: "Full Frontal",
    color: "Two Tone",
    part: null,
    description: "Two Tone",
    length: 22,
    texture: "Straight",
    price: 13000,
    image: img.ombreB,
    tagline: "Luxury Dimension At Its Finest.",
    longDescription:
      "Midnight Mocha blends rich espresso shades with lighter tones to create depth and movement. The result is a glamorous unit that appears custom-coloured and salon perfected.",
    stylingOptions: ["Glam waves", "Soft curls", "Straight finish"],
    perfectFor: "Women who love sophisticated colour with luxury appeal.",
    hairCare: "Apply lightweight oils only to mid-lengths and ends.",
    videoUrl: null,
  },

  // ── 26 Inch ──────────────────────────────────────────────────────────────
  {
    id: 10,
    name: "Naomi Seduction",
    tier: "5×5 Closure",
    color: "Natural",
    part: "3 Part",
    description: "Natural Colour · 3 Part",
    length: 26,
    texture: "Straight",
    price: 16000,
    image: naomiSeduction,
    tagline: "Inspired By Iconic Beauty.",
    longDescription:
      "Naomi Seduction embodies confidence, glamour, and luxury. The long flowing length delivers elegance while maintaining a naturally beautiful appearance.",
    stylingOptions: ["Sleek straight", "Loose waves", "Glam curls", "Side-part styling"],
    perfectFor: "Luxury lifestyles, special occasions, and everyday glamour.",
    hairCare: "Avoid sleeping with wet hair and always detangle before storage.",
    videoUrl: null,
  },
  {
    id: 11,
    name: "Ruby Silk",
    tier: "Full Frontal",
    color: "Burgundy",
    part: null,
    description: "Burgundy",
    length: 26,
    texture: "Straight",
    price: 17000,
    image: img.burgundyA,
    tagline: "Silky. Rich. Luxurious.",
    longDescription:
      "Ruby Silk combines dramatic length with a rich burgundy tone for the ultimate statement piece. This luxurious unit was designed for women who love confidence and glamour.",
    stylingOptions: ["Glam curls", "Soft waves", "Straight finish"],
    perfectFor: "Red carpet moments, luxury celebrations, and content creation.",
    hairCare: "Use a heat protectant and avoid excessive temperatures above 180°C.",
    videoUrl: null,
  },
  {
    id: 12,
    name: "Zendaya Mocha Glow",
    tier: "Full Frontal",
    color: "Brown",
    part: null,
    description: "Brown",
    length: 26,
    texture: "Straight",
    price: 17000,
    image: img.brownB,
    tagline: "Modern Luxury With Effortless Beauty.",
    longDescription:
      "Zendaya Mocha Glow features warm mocha tones and luxurious movement that enhance every complexion. This unit radiates confidence and elegance from every angle.",
    stylingOptions: ["Body waves", "Straight styling"],
    perfectFor: "Fashion lovers, professionals, and luxury trendsetters.",
    hairCare: "Use moisturizing products to maintain softness and elasticity.",
    videoUrl: null,
  },
  {
    id: 13,
    name: "Lori Luxe",
    tier: "Full Frontal",
    color: "Two Tone",
    part: null,
    description: "Two Tone",
    length: 26,
    texture: "Straight",
    price: 17000,
    image: img.ombreA,
  },

  // ── 28 Inch ──────────────────────────────────────────────────────────────
  {
    id: 14,
    name: "Onyx Silk",
    tier: "5×5 Closure",
    color: "Natural",
    part: "Middle Part",
    description: "Natural Colour · Middle Part",
    length: 28,
    texture: "Straight",
    price: 17500,
    image: img.naturalC,
  },
  {
    id: 15,
    name: "Ruby Obsession",
    tier: "Full Frontal",
    color: "Burgundy",
    part: null,
    description: "Burgundy",
    length: 28,
    texture: "Straight",
    price: 18400,
    image: img.burgundyB,
  },
  {
    id: 16,
    name: "Espresso Luxe",
    tier: "Full Frontal",
    color: "Two Tone",
    part: null,
    description: "Two-Tone",
    length: 28,
    texture: "Straight",
    price: 18400,
    image: img.ombreB,
  },

  // ── 30 Inch ──────────────────────────────────────────────────────────────
  {
    id: 17,
    name: "Black Diamond Straight",
    tier: "Full Frontal",
    color: "Natural",
    part: null,
    description: "Natural Colour",
    length: 30,
    texture: "Straight",
    price: 19000,
    image: img.naturalE,
  },
  {
    id: 18,
    name: "Midnight Mocha",
    tier: "Full Frontal",
    color: "Two Tone",
    part: null,
    description: "Two-Tone",
    length: 30,
    texture: "Straight",
    price: 19600,
    image: img.ombreA,
  },
  {
    id: 19,
    name: "Wine Velvet",
    tier: "Full Frontal",
    color: "Burgundy",
    part: null,
    description: "Burgundy",
    length: 30,
    texture: "Straight",
    price: 19600,
    image: wineVelvet30,
  },
];
