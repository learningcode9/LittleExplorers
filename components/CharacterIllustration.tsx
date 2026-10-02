import Svg, { Circle, Ellipse, Path, Rect } from "react-native-svg";
import { CharacterId } from "../data/characters";

type Props = {
  id: CharacterId;
  size?: number;
};

export function CharacterIllustration({ id, size = 150 }: Props) {
  if (id === "puppy") {
    return (
      <Svg width={size} height={size} viewBox="0 0 160 160">
        <Ellipse cx="80" cy="143" rx="48" ry="8" fill="#172D5018" />
        <Circle cx="80" cy="78" r="42" fill="#C98A55" />
        <Ellipse cx="48" cy="72" rx="17" ry="30" fill="#7B4A2F" transform="rotate(18 48 72)" />
        <Ellipse cx="112" cy="72" rx="17" ry="30" fill="#7B4A2F" transform="rotate(-18 112 72)" />
        <Ellipse cx="80" cy="91" rx="25" ry="20" fill="#F3C48D" />
        <Circle cx="65" cy="78" r="5" fill="#172D50" />
        <Circle cx="95" cy="78" r="5" fill="#172D50" />
        <Ellipse cx="80" cy="92" rx="8" ry="6" fill="#172D50" />
        <Path d="M72 103 Q80 110 88 103" stroke="#172D50" strokeWidth="3" fill="none" strokeLinecap="round" />
        <Rect x="58" y="117" width="44" height="23" rx="11" fill="#FFD34F" />
        <Circle cx="80" cy="128" r="5" fill="#172D50" />
      </Svg>
    );
  }

  if (id === "fox") {
    return (
      <Svg width={size} height={size} viewBox="0 0 160 160">
        <Ellipse cx="80" cy="143" rx="48" ry="8" fill="#172D5018" />
        <Path d="M43 62 L52 22 L76 43 L84 39 L108 22 L117 62 Q120 105 80 116 Q40 105 43 62Z" fill="#D97732" />
        <Path d="M56 65 L68 42 L80 53 L92 42 L104 65 L98 92 Q80 107 62 92Z" fill="#FFF1DE" />
        <Circle cx="66" cy="68" r="5" fill="#172D50" />
        <Circle cx="94" cy="68" r="5" fill="#172D50" />
        <Path d="M73 84 Q80 90 87 84" stroke="#172D50" strokeWidth="3" fill="none" strokeLinecap="round" />
        <Path d="M64 112 Q80 104 96 112 L102 140 L58 140Z" fill="#FF8A4C" />
        <Circle cx="80" cy="123" r="5" fill="#FFD34F" />
      </Svg>
    );
  }

  if (id === "bunny") {
    return (
      <Svg width={size} height={size} viewBox="0 0 160 160">
        <Ellipse cx="80" cy="143" rx="48" ry="8" fill="#172D5018" />
        <Ellipse cx="61" cy="43" rx="16" ry="37" fill="#F4C6B8" transform="rotate(-10 61 43)" />
        <Ellipse cx="99" cy="43" rx="16" ry="37" fill="#F4C6B8" transform="rotate(10 99 43)" />
        <Ellipse cx="80" cy="83" rx="42" ry="40" fill="#F4C6B8" />
        <Ellipse cx="61" cy="43" rx="7" ry="24" fill="#E9A9A1" transform="rotate(-10 61 43)" />
        <Ellipse cx="99" cy="43" rx="7" ry="24" fill="#E9A9A1" transform="rotate(10 99 43)" />
        <Circle cx="65" cy="82" r="5" fill="#172D50" />
        <Circle cx="95" cy="82" r="5" fill="#172D50" />
        <Ellipse cx="80" cy="95" rx="7" ry="5" fill="#172D50" />
        <Path d="M73 103 Q80 109 87 103" stroke="#172D50" strokeWidth="3" fill="none" strokeLinecap="round" />
        <Path d="M59 116 Q80 108 101 116 L106 140 L54 140Z" fill="#B99AF7" />
        <Circle cx="80" cy="125" r="5" fill="#FFD34F" />
      </Svg>
    );
  }

  return (
    <Svg width={size} height={size} viewBox="0 0 160 160">
      <Ellipse cx="80" cy="143" rx="48" ry="8" fill="#172D5018" />
      <Circle cx="80" cy="58" r="33" fill="#F4B183" />
      <Path d="M47 57 Q49 22 80 24 Q111 22 113 57 Q99 42 80 43 Q61 42 47 57Z" fill="#5B3528" />
      <Circle cx="66" cy="62" r="4.5" fill="#172D50" />
      <Circle cx="94" cy="62" r="4.5" fill="#172D50" />
      <Path d="M72 76 Q80 82 88 76" stroke="#172D50" strokeWidth="3" fill="none" strokeLinecap="round" />
      <Path d="M55 96 Q80 84 105 96 L110 140 L50 140Z" fill="#FF6F9F" />
      <Path d="M56 105 L39 122 L47 128 L65 111Z" fill="#F4B183" />
      <Path d="M104 105 L121 122 L113 128 L95 111Z" fill="#F4B183" />
      <Path d="M64 137 L58 150" stroke="#315A91" strokeWidth="8" strokeLinecap="round" />
      <Path d="M96 137 L102 150" stroke="#315A91" strokeWidth="8" strokeLinecap="round" />
    </Svg>
  );
}
