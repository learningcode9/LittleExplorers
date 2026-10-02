import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const worlds = [
  { id: "flight", emoji: "✈️", name: "Flight Adventure", color: "#CDEBFF", locked: false },
  { id: "animals", emoji: "🦊", name: "Animal Village", color: "#D9F5E8", locked: false },
  { id: "underwater", emoji: "🐠", name: "Underwater World", color: "#D9E5FF", locked: false },
  { id: "creative", emoji: "🎨", name: "Creative Island", color: "#E5D9FF", locked: false },
  { id: "space", emoji: "🚀", name: "Space Discovery", color: "#D9D7FF", locked: false },
  { id: "nature", emoji: "🌱", name: "Nature Explorer", color: "#E8F6C8", locked: true },
];

export default function MapScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>ADVENTURE MAP</Text>
          <Text style={styles.title}>Where shall we explore?</Text>
        </View>
        <Pressable onPress={() => router.back()} style={styles.back}>
          <Text style={styles.backText}>Home</Text>
        </Pressable>
      </View>

      <View style={styles.sky}>
        <View style={styles.sun} />
        <Text style={styles.cloud}>☁️</Text>
        <Text style={[styles.cloud, styles.cloudTwo]}>☁️</Text>
        <View style={styles.grid}>
          {worlds.map((world) => (
            <Pressable
              key={world.id}
              accessibilityRole="button"
              accessibilityLabel={world.name}
              disabled={world.locked}
              onPress={() => router.push("/island/" + world.id)}
              style={({ pressed }) => [
                styles.card,
                { backgroundColor: world.color },
                pressed && styles.pressed,
                world.locked && styles.locked,
              ]}
            >
              <Text style={styles.emoji}>{world.emoji}</Text>
              <Text style={styles.name}>{world.name}</Text>
              {world.locked && <Text style={styles.lock}>Soon</Text>}
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#FFF9FE", padding: 24, paddingTop: 60 },
  header: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 },
  eyebrow: { color: "#172D50", fontSize: 12, fontWeight: "900", letterSpacing: 2 },
  title: { color: "#172D50", fontSize: 28, fontWeight: "900", marginTop: 6 },
  back: { backgroundColor: "#FFFFFF", borderRadius: 16, paddingHorizontal: 14, paddingVertical: 10 },
  backText: { color: "#172D50", fontWeight: "800" },
  sky: { minHeight: 650, borderRadius: 36, backgroundColor: "#EAF7FF", padding: 18, overflow: "hidden" },
  sun: { position: "absolute", width: 100, height: 100, borderRadius: 50, backgroundColor: "#FFE89A", right: 25, top: 22 },
  cloud: { position: "absolute", fontSize: 54, left: 20, top: 18 },
  cloudTwo: { left: undefined, right: 105, top: 92, fontSize: 42 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 14, paddingTop: 145 },
  card: { width: "48%", minHeight: 150, borderRadius: 28, alignItems: "center", justifyContent: "center", padding: 14 },
  emoji: { fontSize: 52 },
  name: { color: "#172D50", fontSize: 16, fontWeight: "900", textAlign: "center", marginTop: 8 },
  lock: { color: "#65738A", fontSize: 12, fontWeight: "800", marginTop: 4 },
  locked: { opacity: 0.55 },
  pressed: { transform: [{ scale: 0.97 }] },
});