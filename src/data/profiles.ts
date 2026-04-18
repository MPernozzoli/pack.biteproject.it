import godot from "@/assets/godot-portrait.jpg";
import freyja from "@/assets/freyja-portrait.jpg";

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
    coat: "Red & white, dense double coat",
    base: "Italy — available worldwide",
    passport: "EU Pet Passport, travel-ready",
    vaccinations: "Fully vaccinated, regular vet checks",
    temperament: "Composed, observant, confident around crews and equipment",
    strengths: [
      "Steady focus on cue",
      "Strong stationary presence",
      "Comfortable with lighting and movement",
      "Works well with stylists and groomers",
    ],
    commands: ["Sit", "Stay", "Down", "Place", "Mark", "Heel", "Wait", "Look", "Hold"],
    environments: ["Studio", "Outdoor / nature", "Urban", "Beach & boat", "Interior sets"],
    handlerNotes:
      "Best directed by a single handler on set. Responds to calm verbal cues and hand signals. Recovery breaks every 60–90 minutes recommended.",
    image: godot,
  },
  {
    id: "freyja",
    name: "Freyja",
    breed: "Alaskan Malamute",
    sex: "Female",
    born: "2022",
    weight: "38 kg",
    height: "62 cm at withers",
    coat: "Wolf-grey & white, plush double coat",
    base: "Italy — available worldwide",
    passport: "EU Pet Passport, travel-ready",
    vaccinations: "Fully vaccinated, regular vet checks",
    temperament: "Warm, expressive, naturally photogenic with people",
    strengths: [
      "Natural eye contact with camera",
      "Comfortable in motion sequences",
      "Soft handling around talent and children",
      "Excels in lifestyle and editorial framing",
    ],
    commands: ["Sit", "Stay", "Down", "Place", "Spin", "Heel", "Wait", "Touch", "Speak"],
    environments: ["Studio", "Outdoor / adventure", "Snow & cold", "Beach & boat", "Interior sets"],
    handlerNotes:
      "Thrives on positive reinforcement. Performs strongest in cooler conditions. Travels comfortably by car, train, and short-haul flights.",
    image: freyja,
  },
];
