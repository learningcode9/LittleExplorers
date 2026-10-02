export type CharacterId = "explorer-kid" | "puppy" | "fox" | "bunny";

export type Character = {
  id: CharacterId;
  name: string;
  description: string;
  accent: string;
  shirt: string;
  skin: string;
  hair: string;
};

export const characters: Character[] = [
  {
    id: "explorer-kid",
    name: "Explorer Kid",
    description: "Ready for every adventure!",
    accent: "#B8ECFF",
    shirt: "#FF6F9F",
    skin: "#F4B183",
    hair: "#5B3528",
  },
  {
    id: "puppy",
    name: "Puppy",
    description: "Your playful adventure buddy!",
    accent: "#FFE3B8",
    shirt: "#FFD34F",
    skin: "#C98A55",
    hair: "#7B4A2F",
  },
  {
    id: "fox",
    name: "Fox",
    description: "Curious and clever!",
    accent: "#FFD0DE",
    shirt: "#FF8A4C",
    skin: "#D97732",
    hair: "#7B351E",
  },
  {
    id: "bunny",
    name: "Bunny",
    description: "Gentle, happy, and curious!",
    accent: "#DCCEFF",
    shirt: "#B99AF7",
    skin: "#F4C6B8",
    hair: "#8A6A65",
  },
];
