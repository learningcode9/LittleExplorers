import Svg, {
  Circle,
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";
import { StyleSheet, View } from "react-native";

type FloatingIslandSceneProps = {
  height?: number;
};

export function FloatingIslandScene({ height = 330 }: FloatingIslandSceneProps) {
  return (
    <View style={[styles.wrap, { height }]}>
      <Svg width="100%" height="100%" viewBox="0 0 760 360" preserveAspectRatio="xMidYMid meet">
        <Defs>
          <LinearGradient id="skyGlow" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#EAF9FF" />
            <Stop offset="1" stopColor="#D8F1FF" />
          </LinearGradient>
          <LinearGradient id="islandTop" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#9EDC9A" />
            <Stop offset="1" stopColor="#70BE79" />
          </LinearGradient>
          <LinearGradient id="rock" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#A98162" />
            <Stop offset="1" stopColor="#79563F" />
          </LinearGradient>
        </Defs>

        <Rect x="0" y="0" width="760" height="360" rx="34" fill="url(#skyGlow)" />

        <Circle cx="655" cy="68" r="38" fill="#FFE39A" opacity="0.9" />
        <Circle cx="655" cy="68" r="52" fill="#FFE39A" opacity="0.18" />

        <G opacity="0.92">
          <Ellipse cx="120" cy="78" rx="74" ry="27" fill="#FFFFFF" />
          <Circle cx="82" cy="66" r="25" fill="#FFFFFF" />
          <Circle cx="125" cy="57" r="31" fill="#FFFFFF" />
          <Circle cx="161" cy="70" r="22" fill="#FFFFFF" />
        </G>

        <G opacity="0.8">
          <Ellipse cx="555" cy="125" rx="65" ry="23" fill="#FFFFFF" />
          <Circle cx="525" cy="115" r="23" fill="#FFFFFF" />
          <Circle cx="562" cy="105" r="28" fill="#FFFFFF" />
        </G>

        <Path
          d="M168 250 C205 212 265 193 380 193 C495 193 555 212 592 250 C545 285 474 302 380 302 C286 302 215 285 168 250Z"
          fill="url(#islandTop)"
        />
        <Path
          d="M198 253 C241 278 296 287 380 287 C464 287 519 278 562 253 L523 315 L474 339 L286 339 L237 315Z"
          fill="url(#rock)"
        />
        <Path
          d="M355 277 C364 290 370 306 374 326 L389 326 C392 306 398 290 407 277Z"
          fill="#75D6E2"
          opacity="0.9"
        />

        <G>
          <Rect x="250" y="184" width="8" height="65" rx="4" fill="#4F9E69" />
          <Circle cx="254" cy="175" r="31" fill="#77C98B" />
          <Circle cx="232" cy="187" r="22" fill="#68B97B" />
          <Circle cx="274" cy="188" r="22" fill="#68B97B" />
        </G>

        <G>
          <Rect x="493" y="184" width="8" height="65" rx="4" fill="#4F9E69" />
          <Circle cx="497" cy="175" r="31" fill="#77C98B" />
          <Circle cx="476" cy="187" r="22" fill="#68B97B" />
          <Circle cx="518" cy="188" r="22" fill="#68B97B" />
        </G>

        <G>
          <Circle cx="300" cy="238" r="8" fill="#FF8FAE" />
          <Circle cx="320" cy="229" r="8" fill="#FFE39A" />
          <Circle cx="445" cy="231" r="8" fill="#DCCBFF" />
          <Circle cx="465" cy="240" r="8" fill="#FF8FAE" />
          <Circle cx="288" cy="249" r="5" fill="#FFFFFF" />
          <Circle cx="455" cy="247" r="5" fill="#FFFFFF" />
        </G>

        <G>
          <Circle cx="380" cy="181" r="25" fill="#F5C7A9" />
          <Path d="M356 177 C357 151 404 148 405 178 C394 166 369 164 356 177Z" fill="#5D463D" />
          <Path d="M352 209 C363 194 398 194 409 209 L409 249 L352 249Z" fill="#FF8FAE" />
          <Path d="M365 249 L375 249 L365 275 L355 275Z" fill="#3B5A80" />
          <Path d="M386 249 L396 249 L406 275 L396 275Z" fill="#3B5A80" />
          <Circle cx="371" cy="180" r="3" fill="#172D50" />
          <Circle cx="389" cy="180" r="3" fill="#172D50" />
          <Path d="M374 190 Q380 195 386 190" fill="none" stroke="#C46B75" strokeWidth="2" strokeLinecap="round" />
          <Path d="M350 216 Q335 223 329 237" fill="none" stroke="#F5C7A9" strokeWidth="10" strokeLinecap="round" />
          <Path d="M411 216 Q426 223 432 237" fill="none" stroke="#F5C7A9" strokeWidth="10" strokeLinecap="round" />
        </G>

        <G>
          <Ellipse cx="447" cy="259" rx="25" ry="18" fill="#D9A67A" />
          <Circle cx="433" cy="243" r="16" fill="#D9A67A" />
          <Circle cx="463" cy="244" r="16" fill="#D9A67A" />
          <Circle cx="428" cy="232" r="7" fill="#B67C5C" />
          <Circle cx="467" cy="232" r="7" fill="#B67C5C" />
          <Circle cx="429" cy="243" r="2.5" fill="#172D50" />
          <Circle cx="438" cy="243" r="2.5" fill="#172D50" />
          <Path d="M432 250 Q434 254 438 250" fill="none" stroke="#172D50" strokeWidth="2" strokeLinecap="round" />
        </G>

        <G opacity="0.9">
          <Path d="M90 296 Q150 270 205 296" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <Path d="M555 305 Q620 277 680 300" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 34,
  },
});
