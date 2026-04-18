import { freyjaPhotos, godotPhotos } from "@/data/photos";

export type DogProfile = {
  id: "godot" | "freyja";
  name: string;
  breed: string;
  sex: string;
  born: string;
  weight: string;
  height: string;
  coat: string;
  base: string;
  passport: string;
  vaccinations: string;
  temperament: string;
  strengths: string[];
  commands: string[];
  environments: string[];
  handlerNotes: string;
  image: string;
};

export const profiles: DogProfile[] = [
  {
    id: "godot",
    name: "Godot",
    breed: "American Akita",
    sex: "Male",
    born: "2022",
    weight: "48 kg",
    height: "68 cm at withers",
    coat: "Red and white, dense double coat",
    base: "Italy — EU travel by default",
    passport: "EU pet passport, travel-ready",
    vaccinations: "Current schedule; vet records on request",
    temperament: "Observant, low chatter, prefers clear direction from one voice",
    strengths: [
      "Settles on a mark while crew crosses behind him — movement reads as background, not threat.",
      "Holds eye-line without needing a bounce board of treats every ninety seconds.",
      "Tolerates grooming passes and wardrobe tweaks if the handler stays in frame.",
      "Reads fatigue honestly; when he is done, he shows it before anyone has to guess.",
    ],
    commands: ["Sit", "Stay", "Down", "Place", "Mark", "Heel", "Wait", "Look", "Hold"],
    environments: ["Studio", "Outdoor / nature", "Urban", "Beach & boat", "Interior sets"],
    handlerNotes:
      "Godot works cleanest when one person directs. He does not enjoy cue ping-pong from three different voices. Build recovery breaks into the schedule — heavy coat, heavy dog — and he will give you the last hour looking as composed as the first.",
    image: godotPhotos.studioRed,
  },
  {
    id: "freyja",
    name: "Freyja",
    breed: "Alaskan Malamute",
    sex: "Female",
    born: "2022",
    weight: "38 kg",
    height: "62 cm at withers",
    coat: "Wolf-grey and white, plush double coat",
    base: "Italy — EU travel by default",
    passport: "EU pet passport, travel-ready",
    vaccinations: "Current schedule; vet records on request",
    temperament: "Warm with people, expressive eyes, happiest when the air is cool",
    strengths: [
      "Finds the lens without being asked to perform — useful for portrait beats and tight rooms.",
      "Comfortable in motion: walking shots, gentle running sequences, embark/disembark on docks.",
      "Soft around talent and children when the set stays calm; chaos still costs you time.",
      "Carries colour in flat light; coat reads even when the sky refuses to cooperate.",
    ],
    commands: ["Sit", "Stay", "Down", "Place", "Spin", "Heel", "Wait", "Touch", "Speak"],
    environments: ["Studio", "Outdoor / adventure", "Snow & cold", "Beach & boat", "Interior sets"],
    handlerNotes:
      "Freyja is honest about temperature. Summer midday exteriors are negotiated, not assumed. She travels well by car and train; flights are discussed case by case. Positive reinforcement keeps her quick; harsh corrections cost more time than they save.",
    image: freyjaPhotos.homePortrait,
  },
];
