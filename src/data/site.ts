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
  mediaKitUrl: "https://njlk.it/godotconlat",
  supabaseFunctionName: "instagram-metrics",
};

export const publicMetricsMethodology = {
  capturedAt: "2026-04-18",
  sampledPostCount: 12,
  excludesMostRecentPost: true,
  refreshWindow: "24h",
  sourceLabel: "Not Just Analytics public media kit",
};

export const overviewCards = [
  {
    label: "01",
    title: "Sponsored work",
    body: "Reels and carousels where the product has to live in real rooms, real wind, and real tired dogs — not a rented loft with fake plants.",
  },
  {
    label: "02",
    title: "Casting & production",
    body: "Call sheets that need two large animals to arrive vaccinated, insured, and unbothered by a boom swinging overhead.",
  },
  {
    label: "03",
    title: "Outdoor & boat life",
    body: "Salt air, wet decks, long shadows on the pontoon. They have already clocked more miles on water than most talent ever will.",
  },
  {
    label: "04",
    title: "Solo or together",
    body: "Godot for gravity, Freyja for motion — or both when the story needs contrast without doubling the crew.",
  },
  {
    label: "05",
    title: "One handler",
    body: "No rotating strangers with treats in their pockets. One voice on set keeps cues clean and the dogs honest.",
  },
  {
    label: "06",
    title: "Europe-first travel",
    body: "Italy as home port, EU paperwork sorted, flights and ferries discussed like adults — not improvised the night before.",
  },
];

export const brandSubsections = [
  {
    title: "Where they fit",
    body: "Outdoor brands, slow travel, pet accessories with weight, hospitality that still believes in dogs in the lobby — anywhere the frame should feel lived-in.",
  },
  {
    title: "Who watches",
    body: "People who save boat tours they will never book, who buy expensive leashes, who argue about light in the comments. The audience skews toward design and weather, not tricks.",
  },
  {
    title: "How it looks",
    body: "Natural light first, minimal staging, colour that follows the hour of day instead of a LUT someone found on sale.",
  },
  {
    title: "What ships",
    body: "Vertical cuts, story stacks, stills for print, behind-the-scenes for the team chat — delivered with filenames that make editors less angry.",
  },
];

export const castingSubsections = [
  {
    title: "Temperament on the floor",
    body: "Both dogs have been walked through the boring parts of set life — marks, resets, strangers walking past — until it reads as routine, not theatre.",
  },
  {
    title: "Handling",
    body: "One experienced owner-handler on the day. Cues stay consistent, breaks stay honest, and nobody improvises a new command because the clock is loud.",
  },
  {
    title: "Paperwork",
    body: "EU pet passports, vaccination history, insurance, grooming call before camera — the unglamorous stack that keeps production legal and calm.",
  },
  {
    title: "Travel",
    body: "Italy and the wider EU by default; further afield when the schedule and climate make sense for thick coats and long holds.",
  },
];

export const metrics = [
  { label: "Instagram followers", value: 701, suffix: "" },
  { label: "Avg. reel views", value: 1180, suffix: "" },
  { label: "Avg. likes / post", value: 54, suffix: "" },
  { label: "Avg. comments / post", value: 3, suffix: "" },
  { label: "Engagement rate", value: 8.3, suffix: "%" },
  { label: "Posts sampled", value: 12, suffix: "" },
];

export const topCountries = [
  { label: "Italy", value: 62 },
  { label: "United States", value: 7 },
  { label: "Germany", value: 3 },
  { label: "France", value: 2 },
  { label: "United Kingdom", value: 2 },
  { label: "Other", value: 24 },
];

export const languages = [
  { label: "Female audience", value: 40 },
  { label: "Male audience", value: 32 },
  { label: "Undefined / not disclosed", value: 27 },
];

export const partnerships = [
  {
    brand: "Marine safety",
    type: "Concept — life aboard",
    deliverables: "Hero stills · vertical cut · story sequence",
    outcome: "Imagery that treats the boat as workplace, not wallpaper.",
    image: freyjaPhotos.foodBoat,
  },
  {
    brand: "Outdoor kit",
    type: "Concept — gear in use",
    deliverables: "Carousel · packshots on location · UGC pack",
    outcome: "Product held by dogs that already live outside the studio walls.",
    image: godotPhotos.lifeJacket,
  },
  {
    brand: "Travel & family",
    type: "Concept — duo narrative",
    deliverables: "Campaign stills · duo set · vertical cutdown",
    outcome: "Two silhouettes, one scene — contrast without choreography.",
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
  { src: freyjaPhotos.wetClose, category: "Water", alt: "Freyja wet and smiling in the water" },
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
  { title: "Sponsored reels", body: "Concept through colour grade — vertical first, sound designed for phones, not cinema speakers." },
  { title: "Story arcs", body: "Serialized stories with a beginning and an end, instead of five random frames and a sticker." },
  { title: "Carousels", body: "Editorial pacing for people who still swipe slowly and read captions." },
  { title: "UGC packs", body: "Looser cuts meant for brand-owned channels — handheld, honest, slightly imperfect on purpose." },
  { title: "Product in scene", body: "Gear shown where it actually gets used: salt, mud, hotel carpet, boat fibreglass." },
  { title: "Campaign days", body: "Full-day shoots with one handler, scheduled breaks, and a shot list that respects thick coats in heat." },
  { title: "Still modelling", body: "Editorial and commercial stills with marks that make sense for dogs who do not do ballet." },
  { title: "Duo days", body: "Two dogs, one schedule — built for wardrobe changes and light that has to turn together." },
  { title: "Travel & boat", body: "Location work on docks, decks, and roads — logistics discussed before anyone packs a drone." },
  { title: "Custom retainers", body: "Longer arcs for brands that want season-long coherence instead of one-off posts." },
];

export const whyPoints = [
  { title: "Silhouette", body: "Two large northern breeds read instantly on a small screen — no explaining the breed in the caption." },
  { title: "Real context", body: "Harbour mornings and apartment evenings are already their default; the camera rarely has to invent a life." },
  { title: "Discipline", body: "Marks, waits, and resets are rehearsed like a craft, not performed like a trick for treats." },
  { title: "Modular booking", body: "Solo days when the script calls for one dog, duo days when contrast carries the scene." },
  { title: "Production hygiene", body: "Paperwork, insurance, grooming windows — handled before the van arrives, not during lunch." },
  { title: "Quiet sets", body: "Temperament that does not need chaos to look interesting — useful when the sound department is already tired." },
];

export const pressKitItems = [
  { title: "Media kit", body: "PDF overview for brands — rates on request inside.", action: "Request media kit" },
  { title: "Casting sheet", body: "Measurements, temperament, travel — formatted for agents.", action: "Request casting sheet" },
  { title: "Rate card", body: "Numbers for budgets that already cleared legal.", action: "Request rate card" },
  { title: "Metrics deck", body: "Followers, saves, geography — refreshed on a fixed cadence.", action: "Request metrics" },
  { title: "Portfolio deck", body: "Selected stills and treatments from recent seasons.", action: "Request portfolio" },
];
