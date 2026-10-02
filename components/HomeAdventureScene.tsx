import { StyleSheet, View } from "react-native";
import Svg, { Circle, Ellipse, G, Path, Rect } from "react-native-svg";

export function HomeAdventureScene() {
  return (
    <View style={styles.wrap}>
      <Svg width="100%" height="100%" viewBox="0 0 760 430" preserveAspectRatio="xMidYMid slice">
        <Rect width="760" height="430" fill="#AEE6F7" />

        <Circle cx="650" cy="72" r="38" fill="#FFD75E" />
        <Circle cx="650" cy="72" r="52" fill="#FFF0A8" opacity="0.45" />

        <G opacity="0.95">
          <Ellipse cx="120" cy="80" rx="76" ry="25" fill="#FFFFFF" />
          <Circle cx="83" cy="68" r="25" fill="#FFFFFF" />
          <Circle cx="123" cy="57" r="31" fill="#FFFFFF" />
          <Circle cx="158" cy="70" r="23" fill="#FFFFFF" />
        </G>

        <G opacity="0.9">
          <Ellipse cx="555" cy="120" rx="74" ry="24" fill="#FFFFFF" />
          <Circle cx="520" cy="110" r="25" fill="#FFFFFF" />
          <Circle cx="557" cy="98" r="30" fill="#FFFFFF" />
          <Circle cx="590" cy="113" r="22" fill="#FFFFFF" />
        </G>

        <Path
          d="M135 294 C190 244 270 220 380 220 C490 220 570 244 625 294 C570 338 490 356 380 356 C270 356 190 338 135 294Z"
          fill="#78C86F"
        />
        <Path
          d="M166 301 C225 331 294 343 380 343 C466 343 535 331 594 301 L548 386 L486 414 L274 414 L212 386Z"
          fill="#8D6548"
        />

        <Path d="M365 345 C374 362 378 380 380 398 C382 380 386 362 395 345Z" fill="#69D6E4" />

        <G>
          <Rect x="230" y="205" width="10" height="76" rx="5" fill="#4C9E65" />
          <Circle cx="235" cy="190" r="34" fill="#79C978" />
          <Circle cx="211" cy="204" r="25" fill="#68B96C" />
          <Circle cx="259" cy="204" r="25" fill="#68B96C" />
        </G>

        <G>
          <Rect x="530" y="205" width="10" height="76" rx="5" fill="#4C9E65" />
          <Circle cx="535" cy="190" r="34" fill="#79C978" />
          <Circle cx="511" cy="204" r="25" fill="#68B96C" />
          <Circle cx="559" cy="204" r="25" fill="#68B96C" />
        </G>

        <G>
          <Circle cx="178" cy="302" r="8" fill="#FF6F91" />
          <Circle cx="195" cy="291" r="8" fill="#FFD75E" />
          <Circle cx="575" cy="303" r="8" fill="#FF6F91" />
          <Circle cx="590" cy="291" r="8" fill="#FFFFFF" />
          <Path d="M188 320 Q198 300 208 320" fill="none" stroke="#49A968" strokeWidth="5" strokeLinecap="round" />
          <Path d="M568 320 Q578 300 588 320" fill="none" stroke="#49A968" strokeWidth="5" strokeLinecap="round" />
        </G>

        <G>
          <Rect x="315" y="210" width="44" height="73" rx="12" fill="#1F5B92" />
          <Rect x="319" y="216" width="36" height="61" rx="9" fill="#2F78B4" />
          <Circle cx="337" cy="232" r="7" fill="#FFD75E" />

          <Circle cx="383" cy="185" r="31" fill="#F4B990" />
          <Path d="M349 180 C350 147 415 142 418 179 C402 164 367 163 349 180Z" fill="#5B3D35" />
          <Path d="M345 167 C352 142 378 131 403 142 L414 166 L398 161 L386 148 L374 160 L360 164Z" fill="#E4A84F" />
          <Path d="M355 157 L345 145 L360 141 L372 149 L395 140 L413 148 L409 163Z" fill="#D9973E" />

          <Rect x="354" y="214" width="58" height="73" rx="10" fill="#FF7197" />
          <Path d="M357 228 Q337 238 329 255" fill="none" stroke="#F4B990" strokeWidth="13" strokeLinecap="round" />
          <Path d="M409 228 Q430 239 438 254" fill="none" stroke="#F4B990" strokeWidth="13" strokeLinecap="round" />
          <Circle cx="328" cy="256" r="8" fill="#F4B990" />
          <Circle cx="440" cy="255" r="8" fill="#F4B990" />

          <Path d="M366 287 L382 287 L375 327 L359 327Z" fill="#315D8D" />
          <Path d="M389 287 L405 287 L414 327 L398 327Z" fill="#315D8D" />
          <Path d="M356 327 L378 327 L378 334 L353 334Z" fill="#E86C57" />
          <Path d="M396 327 L417 327 L420 334 L395 334Z" fill="#E86C57" />

          <Circle cx="372" cy="183" r="3.5" fill="#172D50" />
          <Circle cx="395" cy="183" r="3.5" fill="#172D50" />
          <Path d="M376 195 Q384 202 392 195" fill="none" stroke="#C86B75" strokeWidth="3" strokeLinecap="round" />
        </G>

        <G>
          <Ellipse cx="453" cy="304" rx="37" ry="28" fill="#C98755" />
          <Circle cx="430" cy="283" r="24" fill="#C98755" />
          <Circle cx="477" cy="282" r="24" fill="#C98755" />
          <Path d="M417 270 L408 247 L430 257Z" fill="#A96846" />
          <Path d="M485 269 L494 247 L472 257Z" fill="#A96846" />
          <Circle cx="423" cy="282" r="4" fill="#172D50" />
          <Circle cx="441" cy="282" r="4" fill="#172D50" />
          <Ellipse cx="432" cy="295" rx="9" ry="7" fill="#F3D1B3" />
          <Circle cx="432" cy="293" r="3" fill="#172D50" />
          <Path d="M429 301 Q433 305 438 301" fill="none" stroke="#172D50" strokeWidth="2" strokeLinecap="round" />
          <Path d="M421 310 Q430 319 439 310" fill="none" stroke="#F5C0A0" strokeWidth="5" strokeLinecap="round" />
        </G>

        <Path d="M72 356 Q145 320 215 356" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" opacity="0.9" />
        <Path d="M535 362 Q615 325 694 355" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" opacity="0.9" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    height: 360,
    overflow: "hidden",
    backgroundColor: "#AEE6F7",
  },
});
