export type World = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  locked?: boolean;
};

export const worlds: World[] = [
  { id: "flight", name: "Flight Adventure", emoji: "✈️", color: "#CDEBFF" },
  { id: "animals", name: "Animal Village", emoji: "🦊", color: "#D9F5E8" },
  { id: "underwater", name: "Underwater World", emoji: "🐠", color: "#D9E5FF" },
  { id: "creative", name: "Creative Island", emoji: "🎨", color: "#E5D9FF" },
  { id: "space", name: "Space Discovery", emoji: "🚀", color: "#D9D7FF" },
  { id: "nature", name: "Nature Explorer", emoji: "🌱", color: "#E8F6C8", locked: true },
];