import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { COLORS, RADIUS } from "../theme";

const worlds = [
  { id: "flight", name: "Flight Adventure", accent: "#9EDFF2", icon: "plane", locked: false },
  { id: "animals", name: "Animal Village", accent: "#BDEFD8", icon: "paw", locked: false },
  { id: "underwater", name: "Underwater World", accent: "#BFD9FF", icon: "fish", locked: false },
  { id: "creative", name: "Creative Island", accent: "#DCCBFF", icon: "palette", locked: false },
  { id: "space", name: "Space Discovery", accent: "#C8C3FF", icon: "rocket", locked: false },
  { id: "nature", name: "Nature Explorer", accent: "#D7F0AE", icon: "leaf", locked: true },
];

function WorldIcon({ type }: { type: string }) {
  if (type === "plane") {
    return (
      <Svg width={82} height={64} viewBox="0 0 82 64">
        <Path d="M8 34 L36 29 L52 10 Q55 7 58 10 L50 30 L72 26 Q78 25 79 30 L74 34 L50 37 L42 54 L36 54 L38 38 L16 42 Q9 43 5 39Z" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" strokeLinejoin="round" />
      </Svg>
    );
  }
  if (type === "paw") {
    return (
      <Svg width={82} height={64} viewBox="0 0 82 64">
        <Circle cx="41" cy="39" r="17" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" />
        <Circle cx="21" cy="27" r="9" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" />
        <Circle cx="33" cy="16" r="9" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" />
        <Circle cx="49" cy="16" r="9" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" />
        <Circle cx="61" cy="27" r="9" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" />
      </Svg>
    );
  }
  if (type === "fish") {
    return (
      <Svg width={82} height={64} viewBox="0 0 82 64">
        <Path d="M9 32 Q28 8 54 32 Q28 56 9 32Z" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" />
        <Path d="M54 32 L74 18 L70 32 L74 46Z" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" strokeLinejoin="round" />
        <Circle cx="28" cy="27" r="3.5" fill={COLORS.navy} />
        <Path d="M37 35 Q43 40 49 35" fill="none" stroke={COLORS.coral} strokeWidth="3" strokeLinecap="round" />
      </Svg>
    );
  }
  if (type === "palette") {
    return (
      <Svg width={82} height={64} viewBox="0 0 82 64">
        <Path d="M41 8 C20 8 8 21 8 37 C8 53 21 59 34 56 C40 55 39 48 43 45 C48 41 58 48 66 43 C74 38 70 22 61 15 C55 10 48 8 41 8Z" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" />
        <Circle cx="25" cy="28" r="5" fill={COLORS.coral} />
        <Circle cx="38" cy="20" r="5" fill={COLORS.butter} />
        <Circle cx="53" cy="24" r="5" fill={COLORS.aqua} />
        <Circle cx="58" cy="37" r="5" fill={COLORS.lavender} />
      </Svg>
    );
  }
  if (type === "rocket") {
    return (
      <Svg width={82} height={64} viewBox="0 0 82 64">
        <Path d="M41 7 C54 15 61 27 58 43 L41 56 L24 43 C21 27 28 15 41 7Z" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" />
        <Circle cx="41" cy="28" r="6" fill={COLORS.skyDeep} stroke={COLORS.navy} strokeWidth="2" />
        <Path d="M28 41 L18 47 L24 32 M54 41 L64 47 L58 32" fill={COLORS.coral} stroke={COLORS.navy} strokeWidth="3" strokeLinejoin="round" />
        <Path d="M35 53 Q41 65 47 53" fill={COLORS.butter} stroke={COLORS.navy} strokeWidth="3" />
      </Svg>
    );
  }
  return (
    <Svg width={82} height={64} viewBox="0 0 82 64">
      <Path d="M41 56 C37 39 38 23 44 8" fill="none" stroke={COLORS.navy} strokeWidth="4" strokeLinecap="round" />
      <Path d="M43 31 C26 26 17 15 16 8 C30 9 41 15 45 25Z" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" />
      <Path d="M43 39 C56 33 66 23 69 14 C56 16 46 22 42 31Z" fill={COLORS.white} stroke={COLORS.navy} strokeWidth="3" />
    </Svg>
  );
}

export default function MapScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerCopy}>
          <Text style={styles.eyebrow}>YOUR ADVENTURE MAP</Text>
          <Text style={styles.title}>Choose a world to explore</Text>
          <Text style={styles.subtitle}>Each island has something new to discover.</Text>
        </View>
        <Pressable onPress={() => router.back()} style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Home</Text>
        </Pressable>
      </View>

      <View style={styles.sky}>
        <View style={styles.sun} />
        <View style={styles.cloudOne} />
        <View style={styles.cloudTwo} />

        <View style={styles.path}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.grid}>
          {worlds.map((world) => (
            <Pressable
              key={world.id}
              accessibilityRole="button"
              accessibilityLabel={world.name}
              disabled={world.locked}
              onPress={() => router.push("/island/" + world.id)}
              style={({ pressed }) => [
                styles.island,
                { backgroundColor: world.accent },
                pressed && styles.pressed,
                world.locked && styles.locked,
              ]}
            >
              <View style={styles.islandTop}>
                <WorldIcon type={world.icon} />
              </View>
              <Text style={styles.name}>{world.name}</Text>
              {world.locked ? <Text style={styles.lock}>Coming soon</Text> : <Text style={styles.explore}>Explore →</Text>}
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.cream,
    paddingHorizontal: 24,
    paddingTop: 42,
    paddingBottom: 50,
  },
  header: {
    width: "100%",
    maxWidth: 1000,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  headerCopy: { flex: 1, paddingRight: 18 },
  eyebrow: { color: COLORS.navy, fontSize: 12, fontWeight: "900", letterSpacing: 2 },
  title: { color: COLORS.navy, fontSize: 31, lineHeight: 37, fontWeight: "900", marginTop: 6 },
  subtitle: { color: COLORS.inkSoft, fontSize: 15, marginTop: 7 },
  homeButton: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: "#E8E0DA",
    borderRadius: 17,
    paddingHorizontal: 17,
    paddingVertical: 11,
  },
  homeButtonText: { color: COLORS.navy, fontWeight: "900" },
  sky: {
    width: "100%",
    maxWidth: 1000,
    minHeight: 650,
    alignSelf: "center",
    backgroundColor: COLORS.sky,
    borderRadius: 38,
    padding: 22,
    overflow: "hidden",
  },
  sun: {
    position: "absolute",
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: COLORS.butter,
    right: 45,
    top: 28,
    opacity: 0.9,
  },
  cloudOne: {
    position: "absolute",
    width: 180,
    height: 58,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    left: -55,
    top: 70,
    opacity: 0.85,
  },
  cloudTwo: {
    position: "absolute",
    width: 160,
    height: 52,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    right: -40,
    top: 155,
    opacity: 0.7,
  },
  path: {
    position: "absolute",
    left: "10%",
    right: "10%",
    top: 128,
    height: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dot: { width: 9, height: 9, borderRadius: 5, backgroundColor: COLORS.white, opacity: 0.85 },
  grid: {
    paddingTop: 168,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 18,
  },
  island: {
    width: "31.8%",
    minHeight: 190,
    borderRadius: 30,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.navy,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 7 },
    elevation: 3,
  },
  islandTop: {
    width: 112,
    height: 82,
    borderRadius: 34,
    backgroundColor: "rgba(255,255,255,0.45)",
    alignItems: "center",
    justifyContent: "center",
  },
  name: { color: COLORS.navy, fontSize: 16, fontWeight: "900", textAlign: "center", marginTop: 9 },
  explore: { color: COLORS.navySoft, fontSize: 13, fontWeight: "900", marginTop: 6 },
  lock: { color: COLORS.inkSoft, fontSize: 12, fontWeight: "800", marginTop: 6 },
  locked: { opacity: 0.55 },
  pressed: { transform: [{ scale: 0.975 }], opacity: 0.92 },
});
