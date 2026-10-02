import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const islands: Record<string, { name: string; emoji: string; color: string; activities: string[] }> = {
  flight: { name: "Flight Adventure", emoji: "✈️", color: "#CDEBFF", activities: ["Pack the suitcase", "Build a rocket", "Find the clouds"] },
  animals: { name: "Animal Village", emoji: "🦊", color: "#D9F5E8", activities: ["Meet the animals", "Find each habitat", "Match the tracks"] },
  underwater: { name: "Underwater World", emoji: "🐠", color: "#D9E5FF", activities: ["Find the treasure", "Meet sea friends", "Explore the reef"] },
  creative: { name: "Creative Island", emoji: "🎨", color: "#E5D9FF", activities: ["Create a garden", "Build shapes", "Make a picture"] },
  space: { name: "Space Discovery", emoji: "🚀", color: "#D9D7FF", activities: ["Meet the Sun", "Visit a planet", "Count the stars"] },
};

export default function IslandScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const island = islands[id ?? ""] ?? islands.flight;

  return (
    <View style={[styles.container, { backgroundColor: island.color }]}>
      <View style={styles.topRow}>
        <Pressable onPress={() => router.back()} style={styles.smallButton}>
          <Text style={styles.smallButtonText}>Map</Text>
        </Pressable>
        <Text style={styles.progress}>0 / 3</Text>
      </View>

      <View style={styles.hero}>
        <Text style={styles.emoji}>{island.emoji}</Text>
        <Text style={styles.title}>{island.name}</Text>
        <Text style={styles.subtitle}>Pick something to explore.</Text>
      </View>

      <View style={styles.activities}>
        {island.activities.map((activity, index) => (
          <Pressable
            key={activity}
            accessibilityRole="button"
            onPress={() => router.push("/activity/" + id + "?index=" + index)}
            style={({ pressed }) => [styles.activity, pressed && styles.pressed]}
          >
            <View style={styles.number}><Text style={styles.numberText}>{index + 1}</Text></View>
            <Text style={styles.activityText}>{activity}</Text>
            <Text style={styles.arrow}>›</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 58 },
  topRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  smallButton: { backgroundColor: "#FFFFFF", paddingHorizontal: 16, paddingVertical: 10, borderRadius: 16 },
  smallButtonText: { color: "#172D50", fontWeight: "800" },
  progress: { color: "#172D50", fontWeight: "900" },
  hero: { alignItems: "center", marginTop: 42, marginBottom: 30 },
  emoji: { fontSize: 82 },
  title: { color: "#172D50", fontSize: 32, fontWeight: "900", textAlign: "center", marginTop: 12 },
  subtitle: { color: "#52627A", fontSize: 16, marginTop: 8 },
  activities: { gap: 12 },
  activity: { minHeight: 72, backgroundColor: "#FFFFFF", borderRadius: 22, flexDirection: "row", alignItems: "center", paddingHorizontal: 16 },
  number: { width: 42, height: 42, borderRadius: 21, backgroundColor: "#172D50", alignItems: "center", justifyContent: "center" },
  numberText: { color: "#FFFFFF", fontSize: 16, fontWeight: "900" },
  activityText: { flex: 1, color: "#172D50", fontSize: 17, fontWeight: "800", marginLeft: 14 },
  arrow: { color: "#7A8799", fontSize: 30, lineHeight: 30 },
  pressed: { transform: [{ scale: 0.98 }], opacity: 0.9 },
});