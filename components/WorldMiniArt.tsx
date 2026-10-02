import Svg, { Circle, Path, Rect } from "react-native-svg";

export function WorldMiniArt({ type }: { type: string }) {
  if (type === "flight") {
    return (
      <Svg width={68} height={60} viewBox="0 0 68 60">
        <Path d="M6 30 L27 26 L40 9 Q42 6 45 9 L39 25 L58 22 Q64 21 64 27 L57 31 L39 33 L33 51 L28 51 L29 35 L12 38 Q7 39 4 35Z" fill="#FFFFFF" stroke="#172D50" strokeWidth="3" strokeLinejoin="round" />
        <Circle cx="48" cy="28" r="4" fill="#FF7197" />
      </Svg>
    );
  }
  if (type === "animals") {
    return (
      <Svg width={68} height={60} viewBox="0 0 68 60">
        <Circle cx="34" cy="36" r="17" fill="#D88B58" stroke="#172D50" strokeWidth="3" />
        <Path d="M20 24 L16 9 L29 17Z" fill="#C4764C" stroke="#172D50" strokeWidth="3" />
        <Path d="M48 24 L52 9 L39 17Z" fill="#C4764C" stroke="#172D50" strokeWidth="3" />
        <Circle cx="28" cy="34" r="3" fill="#172D50" />
        <Circle cx="40" cy="34" r="3" fill="#172D50" />
        <Ellipse cx="34" cy="42" rx="7" ry="5" fill="#F3D1B3" />
        <Circle cx="34" cy="41" r="2.5" fill="#172D50" />
      </Svg>
    );
  }
  if (type === "underwater") {
    return (
      <Svg width={68} height={60} viewBox="0 0 68 60">
        <Path d="M7 30 Q27 7 49 30 Q27 53 7 30Z" fill="#FFD75E" stroke="#172D50" strokeWidth="3" />
        <Path d="M49 30 L62 19 L59 30 L62 41Z" fill="#55C7D9" stroke="#172D50" strokeWidth="3" strokeLinejoin="round" />
        <Circle cx="26" cy="25" r="3" fill="#172D50" />
        <Path d="M34 34 Q39 39 44 34" fill="none" stroke="#FF7197" strokeWidth="3" strokeLinecap="round" />
        <Path d="M14 17 Q11 12 15 9 M21 13 Q19 8 23 5" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      </Svg>
    );
  }
  return (
    <Svg width={68} height={60} viewBox="0 0 68 60">
      <Path d="M35 7 C19 7 8 17 8 31 C8 46 20 53 32 51 C39 50 37 43 43 40 C48 37 58 44 61 35 C64 26 57 15 49 11 C44 8 39 7 35 7Z" fill="#FFFFFF" stroke="#172D50" strokeWidth="3" />
      <Circle cx="22" cy="27" r="5" fill="#FF7197" />
      <Circle cx="34" cy="19" r="5" fill="#FFD75E" />
      <Circle cx="47" cy="24" r="5" fill="#55C7D9" />
      <Circle cx="50" cy="36" r="5" fill="#9B7BEA" />
    </Svg>
  );
}
