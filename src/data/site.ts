import { duoPhotos, freyjaPhotos, godotPhotos } from "@/data/photos";

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
  supabaseFunctionName: "instagram-metrics",
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
    brand: "Concept Format",
    type: "Marine Safety / Boat Lifestyle",
    deliverables: "Hero stills · Reel cutdown · Story sequence",
    outcome: "High-trust sailing imagery with authentic onboard context.",
    image: freyjaPhotos.foodBoat,
  },
  {
    brand: "Concept Format",
    type: "Pet Accessories / Outdoor Apparel",
    deliverables: "Carousel post · Product stills · UGC pack",
    outcome: "Editorial product placement in real outdoor and city settings.",
    image: godotPhotos.lifeJacket,
  },
  {
    brand: "Concept Format",
    type: "Travel / Hospitality / Family Adventure",
    deliverables: "Campaign stills · Duo narrative set · Vertical cut",
    outcome: "Warm duo storytelling with strong contrast between the two dogs.",
    image: duoPhotos.sunsetBoat,
  },
];

export const galleryItems = [
  { src: duoPhotos.studioTight, category: "Duo", alt: "Godot and Freyja duo portrait in studio" },
  { src: duoPhotos.studioWide, category: "Studio", alt: "Godot and Freyja full-body studio portrait" },
  { src: duoPhotos.sunsetBoat, category: "Boat", alt: "Godot and Freyja aboard the sailboat at sunset" },
  { src: duoPhotos.countryside, category: "Outdoor", alt: "Godot and Freyja in the countryside" },
  { src: duoPhotos.dogRun, category: "Outdoor", alt: "Godot and Freyja in the dog park" },
  { src: duoPhotos.twilightHarbor, category: "Duo", alt: "Godot and Freyja together near the harbor at sunset" },
  { src: duoPhotos.eventPoster, category: "Events", alt: "Godot and Freyja featured at pet event" },
  { src: godotPhotos.editorialWithHandler, category: "Lifestyle", alt: "Godot with handler during golden hour" },
  { src: godotPhotos.bariCloseup, category: "Portraits", alt: "Close portrait of Godot in Bari" },
  { src: godotPhotos.lifeJacket, category: "Boat", alt: "Godot wearing a life jacket on board" },
  { src: godotPhotos.pumpkinPortrait, category: "Seasonal", alt: "Godot posed among pumpkins" },
  { src: godotPhotos.bariPortrait, category: "City", alt: "Godot by the sea in Bari" },
  { src: godotPhotos.seaPose, category: "City", alt: "Godot posed by the sea near a street lamp" },
  { src: godotPhotos.outdoorPortrait, category: "Portraits", alt: "Outdoor portrait of Godot with pumpkins in the background" },
  { src: godotPhotos.pumpkinSide, category: "Seasonal", alt: "Profile portrait of Godot among pumpkins" },
  { src: godotPhotos.atHelm, category: "Boat", alt: "Godot at the helm of the sailboat" },
  { src: godotPhotos.studioRed, category: "Studio", alt: "Godot studio portrait through red paper" },
  { src: godotPhotos.barbieEvent, category: "Events", alt: "Godot on pink carpet at Barbie exhibition" },
  { src: godotPhotos.gangway, category: "Boat", alt: "Godot on the gangway of the boat" },
  { src: freyjaPhotos.brindisi, category: "City", alt: "Freyja in Brindisi at sunset" },
  { src: freyjaPhotos.homePortrait, category: "Portraits", alt: "Portrait of Freyja indoors" },
  { src: freyjaPhotos.waiting, category: "Lifestyle", alt: "Freyja waiting on the sidewalk" },
  { src: freyjaPhotos.benchLook, category: "Lifestyle", alt: "Freyja lying down outdoors" },
  { src: freyjaPhotos.redBackdropWide, category: "Studio", alt: "Freyja portrait through red paper backdrop" },
  { src: freyjaPhotos.wetPortrait, category: "Water", alt: "Wet portrait of Freyja in shallow water" },
  { src: freyjaPhotos.redBackdropPortrait, category: "Studio", alt: "Freyja studio portrait with red backdrop" },
  { src: freyjaPhotos.wetWater, category: "Water", alt: "Freyja standing in the water" },
  { src: freyjaPhotos.foodBoat, category: "Boat", alt: "Freyja aboard the boat looking at food" },
  { src: freyjaPhotos.goldenTongue, category: "Boat", alt: "Close portrait of Freyja during golden hour on the boat" },
  { src: freyjaPhotos.goldenHour, category: "Boat", alt: "Freyja on the boat at golden hour" },
  { src: freyjaPhotos.cutePortrait, category: "Portraits", alt: "Cute close portrait of Freyja" },
  { src: freyjaPhotos.couch, category: "Lifestyle", alt: "Freyja relaxed on the couch" },
  { src: freyjaPhotos.flowersClose, category: "Outdoor", alt: "Freyja among purple flowers" },
  { src: freyjaPhotos.seafront, category: "City", alt: "Freyja by the seafront" },
  { src: freyjaPhotos.wetClose, category: "Water", alt: "Frejya wet and smiling in the water" },
  { src: freyjaPhotos.park, category: "Outdoor", alt: "Freyja in the countryside with a red bandana" },
  { src: freyjaPhotos.cityPortrait, category: "City", alt: "Freyja in Piazza Liberty" },
  { src: freyjaPhotos.flowersField, category: "Outdoor", alt: "Freyja in a field with dandelions" },
  { src: freyjaPhotos.sneeze, category: "Lifestyle", alt: "Freyja sneezing on the boat" },
  { src: freyjaPhotos.lookout, category: "Boat", alt: "Freyja looking out from the boat" },
  { src: freyjaPhotos.beachNight, category: "Water", alt: "Freyja on the beach at night" },
];

export const galleryCategories = [
  "All",
  "Portraits",
  "Studio",
  "Lifestyle",
  "Outdoor",
  "Boat",
  "Water",
  "Duo",
  "City",
  "Seasonal",
  "Events",
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
