import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeAdventureScene } from "../components/HomeAdventureScene";
import { WorldMiniArt } from "../components/WorldMiniArt";
import { storage } from "../storage/storage";

const worlds = [
  {
    id: "flight",
    title: "Flight Adventure",
    subtitle: "Puzzles, stories & travel fun",
    color: "#B8ECFF",
    icon: "flight",
  },
  {
    id: "animals",
    title: "Animal Village",
    subtitle: "Meet friendly animals",
    color: "#FFD0DE",
    icon: "animals",
  },
  {
    id: "underwater",
    title: "Underwater World",
    subtitle: "Explore, count & find treasures",
    color: "#B9F1E7",
    icon: "underwater",
  },
  {
    id: "creative",
    title: "Creative Island",
    subtitle: "Create, imagine and play",
    color: "#D8C5FF",
    icon: "creative",
  },
];

export default function HomeScreen() {
  const [checkingCharacter, setCheckingCharacter] = useState(true);

  useEffect(() => {
    let active = true;

    storage.get<string>("selected-character").then((selected) => {
      if (!active) return;
      if (!selected) {
        router.replace("/character-select");
        return;
      }
      setCheckingCharacter(false);
    });

    return () => {
      active = false;
    };
  }, []);

  if (checkingCharacter) {
    return <View style={styles.loading}><Text style={styles.loadingText}>Little Explorers</Text></View>;
  }

  return (
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <View style={styles.sunMark}>
            <View style={styles.sunCore} />
            {Array.from({ length: 8 }).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.sunRay,
                  { transform: [{ rotate: `${index * 45}deg` }] },
                ]}
              />
            ))}
          </View>
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
  loading: {
    flex: 1,
    backgroundColor: "#FFF8F1",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    color: "#172D50",
    fontSize: 28,
    fontWeight: "900",
  },
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
  sunMark: {
    width: 40,
    height: 40,
    marginRight: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  sunCore: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFD34F",
  },
  sunRay: {
    position: "absolute",
    width: 3,
    height: 11,
    borderRadius: 2,
    backgroundColor: "#172D50",
  },
  brand: {
    color: "#172D50",
    fontSize: 30,
    lineHeight: 35,
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
    fontSize: 24,
  },
  heroCopy: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 14,
  },
  tagline: {
    color: "#172D50",
    fontSize: 16,
    fontWeight: "900",
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
    borderWidth: 3,
    borderColor: "#FFFFFF",
    shadowColor: "#172D50",
    shadowOpacity: 0.14,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 9 },
    elevation: 5,
  },
  worldList: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
    marginTop: 16,
    gap: 12,
  },
  worldCard: {
    minHeight: 116,
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#172D50",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  worldIcon: {
    width: 78,
    height: 78,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.62)",
    alignItems: "center",
    justifyContent: "center",
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
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  goText: {
    color: "#172D50",
    fontSize: 36,
    lineHeight: 37,
    fontWeight: "800",
    marginTop: -4,
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
