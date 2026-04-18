import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import lifestyle from "@/assets/lifestyle-boat.jpg";

export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "brands", label: "Brands" },
  { id: "casting", label: "Casting" },
  { id: "profiles", label: "Profiles" },
  { id: "metrics", label: "Metrics" },
  { id: "work", label: "Work" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const instagramProfile = {
  handle: "godotconlat",
  url: "https://instagram.com/godotconlat",
  metricsEndpoint: import.meta.env.VITE_SOCIAL_METRICS_URL?.trim() || "",
};

// TODO: Update `instagramProfile.handle` and `instagramProfile.url` as soon as the Instagram rename is finalized.

export const overviewCards = [
  {
    label: "01",
    title: "Brand Collaborations",
    body: "Sponsored content, ambassador programs, and long-form partnerships with premium brands.",
  },
  {
    label: "02",
    title: "Modeling & Casting",
    body: "Available for editorial shoots, commercials, and branded productions through agencies.",
  },
  {
    label: "03",
    title: "Outdoor / Travel / Boat",
    body: "An authentic adventure context, from coastal sailing to mountain trails and editorial road trips.",
  },
  {
    label: "04",
    title: "Individual & Duo",
    body: "Bookable as solo talent or as a duo for stronger narrative and visual contrast.",
  },
];

export const brandSubsections = [
  {
    title: "Brand Fit",
    body: "Premium pet, outdoor, travel, lifestyle, automotive, and apparel brands seeking a distinctive, cinematic aesthetic.",
  },
  {
    title: "Audience Snapshot",
    body: "An engaged, design-aware audience with strong interest in travel, sailing, dog culture, and elevated lifestyle content.",
  },
  {
    title: "Content Style",
    body: "Editorial framing, natural light, lived-in storytelling. No staged performances — real moments, refined execution.",
  },
  {
    title: "Collaboration Options",
    body: "Sponsored reels, story sets, carousels, UGC-style assets, ambassador agreements, and bespoke campaign shoots.",
  },
];

export const castingSubsections = [
  {
    title: "Set Suitability",
    body: "Comfortable with lighting rigs, boom microphones, multiple crew members, and prolonged shoot days.",
  },
  {
    title: "Temperament & Handling",
    body: "Composed, non-reactive, responsive to clear cues. Always handled by a dedicated, experienced owner-handler.",
  },
  {
    title: "Production Readiness",
    body: "Full vaccination records, EU pet passports, microchipped, insured. Clean grooming presentation on call.",
  },
  {
    title: "Travel Availability",
    body: "Available across Italy and Europe. Open to international productions with appropriate lead time.",
  },
];

export const metrics = [
  { label: "Instagram Followers", value: 24800, suffix: "" },
  { label: "Avg. Reel Views", value: 38500, suffix: "" },
  { label: "Avg. Likes / Post", value: 1850, suffix: "" },
  { label: "Avg. Comments / Post", value: 96, suffix: "" },
  { label: "Engagement Rate", value: 7.4, suffix: "%" },
  { label: "Monthly Reach", value: 312000, suffix: "" },
];

export const topCountries = [
  { label: "Italy", value: 38 },
  { label: "United States", value: 18 },
  { label: "Germany", value: 9 },
  { label: "United Kingdom", value: 7 },
  { label: "France", value: 6 },
  { label: "Other", value: 22 },
];

export const languages = [
  { label: "Italian", value: 42 },
  { label: "English", value: 39 },
  { label: "German", value: 8 },
  { label: "Spanish", value: 5 },
  { label: "Other", value: 6 },
];

export const partnerships = [
  {
    brand: "Selected Sample Collaboration",
    type: "Outdoor Apparel — Lifestyle Reel",
    deliverables: "1 Reel · 3 Stories · Usage rights 30 days",
    outcome: "Concept-ready format suitable for premium adventure brands.",
    image: g3,
  },
  {
    brand: "Selected Sample Collaboration",
    type: "Premium Pet Goods — Product Feature",
    deliverables: "Carousel post · 2 Stories · UGC pack",
    outcome: "Editorial product placement with authentic environment.",
    image: g5,
  },
  {
    brand: "Selected Sample Collaboration",
    type: "Travel & Sailing — Branded Storytelling",
    deliverables: "Reel series · Behind-the-scenes set",
    outcome: "Cinematic narrative built around boat-life context.",
    image: lifestyle,
  },
];

export const galleryItems = [
  { src: g6, category: "Duo", alt: "Godot and Freyja duo studio portrait" },
  { src: g1, category: "Outdoor", alt: "Akita running through tall grass at sunset" },
  { src: g2, category: "Portraits", alt: "Malamute editorial portrait in misty forest" },
  { src: g3, category: "Lifestyle", alt: "Two dogs walking with handler on mountain trail" },
  { src: g4, category: "Full Body", alt: "Akita full body studio shot" },
  { src: g5, category: "Product", alt: "Malamute close-up with leather collar" },
  { src: lifestyle, category: "Outdoor", alt: "Two dogs on sailing yacht at sunset" },
  { src: g6, category: "Portraits", alt: "Duo portrait against dark background" },
  { src: g1, category: "Lifestyle", alt: "Outdoor lifestyle action shot" },
];

export const galleryCategories = [
  "All",
  "Portraits",
  "Full Body",
  "Lifestyle",
  "Outdoor",
  "Product",
  "Duo",
] as const;

export const services = [
  { title: "Sponsored Reels", body: "Concept, shoot, edit, and delivery in vertical format." },
  { title: "Stories & Story Sets", body: "Serialized story arcs designed for native engagement." },
  { title: "Carousel Posts", body: "Editorial multi-image posts with consistent visual language." },
  { title: "UGC-Style Content", body: "Authentic, unpolished assets for brand reuse." },
  { title: "Product Features", body: "Premium product placement in lived-in context." },
  { title: "Lifestyle Campaigns", body: "Full-day shoots with art direction and styling support." },
  { title: "Dog Modeling", body: "Modeling for commercials, editorial, and brand campaigns." },
  { title: "Duo Shoots", body: "Two-dog narrative content with strong visual contrast." },
  { title: "Travel & Boat Settings", body: "Shoots aboard sailing yachts and on coastal locations." },
  { title: "Custom Partnerships", body: "Bespoke long-form collaborations and ambassador roles." },
];

export const whyPoints = [
  { title: "Distinctive Visual Identity", body: "Two large-breed dogs with strong silhouettes and natural screen presence." },
  { title: "Authentic Lifestyle", body: "Real travel, sailing, and outdoor context — not staged generic content." },
  { title: "Cinematic Quality", body: "Every frame is treated as part of a campaign, not a casual feed post." },
  { title: "Individual & Duo", body: "Solo talent cards or duo storytelling — two formats from one production." },
  { title: "Production-Ready", body: "Vaccinated, insured, passport-equipped, and handled by an experienced owner." },
  { title: "Brand-Safe", body: "Composed temperament, professional handling, no surprises on set." },
];

export const pressKitItems = [
  { title: "Media Kit", body: "Full PDF overview for brands.", action: "Download Media Kit" },
  { title: "Casting Sheet", body: "Talent profile for agencies.", action: "Download Casting Sheet" },
  { title: "Rate Card", body: "Pricing on request.", action: "Request Rate Card" },
  { title: "Full Metrics", body: "Detailed performance data.", action: "Request Metrics" },
  { title: "Portfolio Deck", body: "Selected work and concepts.", action: "Request Portfolio" },
];
