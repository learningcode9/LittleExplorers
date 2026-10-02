import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CompletionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.confetti}>🎉</Text>
      <Text style={styles.title}>Great exploring!</Text>
      <Text style={styles.subtitle}>You discovered something new.</Text>

      <View style={styles.card}>
        <Text style={styles.cardEmoji}>🌟</Text>
        <Text style={styles.cardText}>Adventure complete</Text>
      </View>

      <Pressable onPress={() => router.replace("/island/" + id)} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
        <Text style={styles.buttonText}>Explore More</Text>
      </Pressable>

      <Pressable onPress={() => router.replace("/map")} style={styles.secondary}>
        <Text style={styles.secondaryText}>Back to Map</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF9FE", alignItems: "center", justifyContent: "center", padding: 28 },
  confetti: { fontSize: 82 },
  title: { color: "#172D50", fontSize: 34, fontWeight: "900", marginTop: 12, textAlign: "center" },
  subtitle: { color: "#52627A", fontSize: 17, marginTop: 8, textAlign: "center" },
  card: { width: "100%", maxWidth: 440, backgroundColor: "#FFE89A", borderRadius: 28, minHeight: 150, alignItems: "center", justifyContent: "center", marginTop: 28 },
  cardEmoji: { fontSize: 48 },
  cardText: { color: "#172D50", fontSize: 18, fontWeight: "900", marginTop: 8 },
  button: { width: "100%", maxWidth: 440, minHeight: 62, borderRadius: 22, backgroundColor: "#172D50", alignItems: "center", justifyContent: "center", marginTop: 24 },
  buttonText: { color: "#FFFFFF", fontSize: 18, fontWeight: "900" },
  secondary: { marginTop: 16, padding: 12 },
  secondaryText: { color: "#172D50", fontWeight: "800" },
  pressed: { transform: [{ scale: 0.98 }], opacity: 0.9 },
});