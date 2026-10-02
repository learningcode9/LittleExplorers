import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeAdventureScene } from "../components/HomeAdventureScene";
import { WorldMiniArt } from "../components/WorldMiniArt";

const worlds = [
  {
    id: "flight",
    title: "Flight Adventure",
    subtitle: "Puzzles, stories & travel fun",
    color: "#BCEFFF",
    icon: "flight",
  },
  {
    id: "animals",
    title: "Animal Village",
    subtitle: "Meet friendly animals",
    color: "#FFD1DF",
    icon: "animals",
  },
  {
    id: "underwater",
    title: "Underwater World",
    subtitle: "Explore, count & find treasures",
    color: "#BDF4E8",
    icon: "underwater",
  },
  {
    id: "creative",
    title: "Creative Island",
    subtitle: "Create, imagine and play",
    color: "#DCCBFF",
    icon: "creative",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <Text style={styles.sun}>☀</Text>
          <Text style={styles.brand}>Little Explorers</Text>
        </View>
        <Pressable accessibilityRole="button" accessibilityLabel="Parent settings" style={styles.settings}>
          <Text style={styles.settingsText}>⚙</Text>
        </Pressable>
      </View>

      <View style={styles.heroCopy}>
        <Text style={styles.tagline}>Explore • Learn • Grow</Text>
        <Text style={styles.question}>Where shall we explore today?</Text>
      </View>

      <View style={styles.heroCard}>
        <HomeAdventureScene />
      </View>

      <View style={styles.worldList}>
        {worlds.map((world) => (
          <Pressable
            key={world.id}
            accessibilityRole="button"
            accessibilityLabel={world.title}
            onPress={() => router.push("/island/" + world.id)}
            style={({ pressed }) => [
              styles.worldCard,
              { backgroundColor: world.color },
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.worldIcon}>
              <WorldMiniArt type={world.icon} />
            </View>
            <View style={styles.worldCopy}>
              <Text style={styles.worldTitle}>{world.title}</Text>
              <Text style={styles.worldSubtitle}>{world.subtitle}</Text>
            </View>
            <View style={styles.goButton}>
              <Text style={styles.goText}>›</Text>
            </View>
          </Pressable>
        ))}
      </View>

      <Text style={styles.parentNote}>Grown-ups can explore settings anytime.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: "#FFF8F1",
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 36,
  },
  header: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  sun: {
    fontSize: 35,
    marginRight: 8,
  },
  brand: {
    color: "#172D50",
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "900",
  },
  settings: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#172D50",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  settingsText: {
    fontSize: 25,
  },
  heroCopy: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 16,
  },
  tagline: {
    color: "#172D50",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  question: {
    color: "#172D50",
    fontSize: 31,
    lineHeight: 37,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 6,
  },
  heroCard: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: "#AEE6F7",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    shadowColor: "#172D50",
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  worldList: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
    marginTop: 16,
    gap: 12,
  },
  worldCard: {
    minHeight: 112,
    borderRadius: 26,
    paddingHorizontal: 16,
    paddingVertical: 13,
    flexDirection: "row",
    alignItems: "center",
  },
  worldIcon: {
    width: 76,
    height: 76,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },
  worldIconText: {
    fontSize: 42,
  },
  worldCopy: {
    flex: 1,
    paddingHorizontal: 14,
  },
  worldTitle: {
    color: "#172D50",
    fontSize: 21,
    lineHeight: 26,
    fontWeight: "900",
  },
  worldSubtitle: {
    color: "#29466F",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 3,
  },
  goButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  goText: {
    color: "#172D50",
    fontSize: 34,
    lineHeight: 35,
    fontWeight: "700",
    marginTop: -3,
  },
  parentNote: {
    color: "#61728C",
    fontSize: 12,
    textAlign: "center",
    marginTop: 14,
  },
  pressed: {
    transform: [{ scale: 0.985 }],
    opacity: 0.94,
  },
});
