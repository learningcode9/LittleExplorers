import { StyleSheet, View } from "react-native";
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

export function HomeAdventureScene() {
  return (
    <View style={styles.wrap}>
      <Svg width="100%" height="100%" viewBox="0 0 760 430" preserveAspectRatio="xMidYMid slice">
        <Defs>
          <LinearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#8EDCF4" />
            <Stop offset="1" stopColor="#DDF8FF" />
          </LinearGradient>
          <LinearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#8DDA72" />
            <Stop offset="1" stopColor="#62BE68" />
          </LinearGradient>
          <LinearGradient id="soil" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#9B6B4C" />
            <Stop offset="1" stopColor="#704832" />
          </LinearGradient>
        </Defs>

        <Rect width="760" height="430" fill="url(#sky)" />

        {/* sun */}
        <Circle cx="650" cy="70" r="58" fill="#FFF1A9" opacity="0.5" />
        <Circle cx="650" cy="70" r="39" fill="#FFD85A" />
        <G stroke="#FFD85A" strokeWidth="5" strokeLinecap="round">
          <Path d="M650 8V22" /><Path d="M650 118V132" />
          <Path d="M588 70H602" /><Path d="M698 70H712" />
          <Path d="M606 26L616 36" /><Path d="M684 104L694 114" />
          <Path d="M694 26L684 36" /><Path d="M616 104L606 114" />
        </G>

        {/* soft clouds */}
        <G fill="#FFFFFF" opacity="0.96">
          <Ellipse cx="118" cy="78" rx="78" ry="25" />
          <Circle cx="78" cy="68" r="26" /><Circle cx="119" cy="54" r="34" /><Circle cx="157" cy="69" r="25" />
          <Ellipse cx="535" cy="126" rx="76" ry="24" />
          <Circle cx="500" cy="116" r="24" /><Circle cx="537" cy="101" r="32" /><Circle cx="572" cy="116" r="23" />
        </G>

        {/* distant hills */}
        <Path d="M0 318 Q110 246 220 296 Q350 218 485 292 Q615 228 760 302 V430 H0Z" fill="#B8E9A0" />
        <Path d="M0 350 Q120 286 250 328 Q390 270 530 326 Q650 280 760 338 V430 H0Z" fill="#8EDB83" />

        {/* floating island */}
        <Path d="M115 286 C185 229 278 207 380 207 C482 207 575 229 645 286 C580 331 495 349 380 349 C265 349 180 331 115 286Z" fill="url(#grass)" />
        <Path d="M145 294 C210 326 292 341 380 341 C468 341 550 326 615 294 L566 386 L505 414 L255 414 L194 386Z" fill="url(#soil)" />
        <Path d="M359 343 C370 361 376 382 380 402 C384 382 390 361 401 343Z" fill="#69D6E4" />

        {/* trees */}
        <G>
          <Rect x="208" y="205" width="11" height="88" rx="5" fill="#4E9B61" />
          <Circle cx="214" cy="188" r="38" fill="#70C96C" />
          <Circle cx="184" cy="205" r="29" fill="#5FBA64" />
          <Circle cx="243" cy="205" r="29" fill="#65BE67" />
          <Circle cx="214" cy="171" r="27" fill="#7DD276" />
        </G>
        <G>
          <Rect x="542" y="205" width="11" height="88" rx="5" fill="#4E9B61" />
          <Circle cx="548" cy="188" r="38" fill="#70C96C" />
          <Circle cx="518" cy="205" r="29" fill="#5FBA64" />
          <Circle cx="577" cy="205" r="29" fill="#65BE67" />
          <Circle cx="548" cy="171" r="27" fill="#7DD276" />
        </G>

        {/* flowers */}
        <G>
          <Path d="M165 309 Q174 292 183 310" fill="none" stroke="#459B5D" strokeWidth="5" strokeLinecap="round" />
          <Circle cx="164" cy="294" r="8" fill="#FF7197" /><Circle cx="182" cy="291" r="8" fill="#FFD85A" />
          <Path d="M592 309 Q601 292 610 310" fill="none" stroke="#459B5D" strokeWidth="5" strokeLinecap="round" />
          <Circle cx="590" cy="294" r="8" fill="#FF7197" /><Circle cx="608" cy="291" r="8" fill="#FFFFFF" />
        </G>

        {/* explorer child */}
        <G>
          {/* backpack */}
          <Rect x="305" y="195" width="50" height="78" rx="15" fill="#245B8E" />
          <Rect x="311" y="202" width="38" height="64" rx="11" fill="#347AB2" />
          <Circle cx="330" cy="218" r="7" fill="#FFD85A" />

          {/* hat */}
          <Path d="M348 159 Q380 126 416 158 L409 176 Q378 165 348 176Z" fill="#E7A340" />
          <Path d="M342 164 Q382 151 422 164 L417 174 Q380 166 345 174Z" fill="#D58A32" />

          {/* head */}
          <Circle cx="382" cy="185" r="31" fill="#F4B990" />
          <Path d="M350 180 Q353 147 384 148 Q412 149 416 177 Q392 164 350 180Z" fill="#5B3D35" />
          <Circle cx="372" cy="184" r="3.5" fill="#172D50" />
          <Circle cx="394" cy="184" r="3.5" fill="#172D50" />
          <Path d="M376 196 Q383 202 391 196" fill="none" stroke="#C86B75" strokeWidth="3" strokeLinecap="round" />

          {/* shirt */}
          <Rect x="354" y="215" width="58" height="73" rx="11" fill="#FF7197" />
          {/* arms */}
          <Path d="M357 229 Q338 238 328 257" fill="none" stroke="#F4B990" strokeWidth="14" strokeLinecap="round" />
          <Path d="M409 229 Q430 240 440 255" fill="none" stroke="#F4B990" strokeWidth="14" strokeLinecap="round" />
          <Circle cx="328" cy="257" r="8" fill="#F4B990" /><Circle cx="440" cy="255" r="8" fill="#F4B990" />

          {/* shorts and shoes */}
          <Path d="M364 288 L382 288 L376 327 L358 327Z" fill="#315D8D" />
          <Path d="M390 288 L408 288 L415 327 L397 327Z" fill="#315D8D" />
          <Path d="M355 327 L379 327 L379 335 L352 335Z" fill="#E86C57" />
          <Path d="M396 327 L418 327 L421 335 L395 335Z" fill="#E86C57" />
        </G>

        {/* puppy */}
        <G>
          <Ellipse cx="455" cy="304" rx="40" ry="30" fill="#C98755" />
          <Circle cx="432" cy="282" r="25" fill="#C98755" />
          <Circle cx="480" cy="282" r="25" fill="#C98755" />
          <Path d="M418 270 L407 244 L432 257Z" fill="#A96846" />
          <Path d="M491 269 L503 245 L477 257Z" fill="#A96846" />
          <Circle cx="424" cy="282" r="4" fill="#172D50" /><Circle cx="443" cy="282" r="4" fill="#172D50" />
          <Ellipse cx="434" cy="296" rx="10" ry="8" fill="#F3D1B3" />
          <Circle cx="434" cy="294" r="3" fill="#172D50" />
          <Path d="M430 302 Q435 307 440 302" fill="none" stroke="#172D50" strokeWidth="2" strokeLinecap="round" />
          <Path d="M423 312 Q434 322 445 312" fill="none" stroke="#F5C0A0" strokeWidth="5" strokeLinecap="round" />
          <Path d="M485 302 Q499 311 508 306" fill="none" stroke="#C98755" strokeWidth="8" strokeLinecap="round" />
        </G>

        {/* little floating sparkles */}
        <G fill="#FFFFFF">
          <Circle cx="272" cy="260" r="5" /><Circle cx="294" cy="248" r="4" /><Circle cx="520" cy="255" r="5" />
        </G>

        {/* water ribbons */}
        <Path d="M55 360 Q135 318 220 357" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" opacity="0.92" />
        <Path d="M535 365 Q620 325 705 356" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" opacity="0.92" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    height: 390,
    overflow: "hidden",
    backgroundColor: "#AEE6F7",
  },
});
