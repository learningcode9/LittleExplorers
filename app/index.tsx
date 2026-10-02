import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const COLORS = {
  navy: "#172D50",
  pink: "#FFD7EA",
  yellow: "#FFE89A",
  blue: "#CDEBFF",
  mint: "#D9F5E8",
  lavender: "#E5D9FF",
  background: "#FFF9FE",
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cloudOne} />
      <View style={styles.cloudTwo} />

      <Text style={styles.eyebrow}>LITTLE EXPLORERS</Text>
      <Text style={styles.title}>Ready for a little adventure?</Text>
      <Text style={styles.subtitle}>
        Explore playful worlds, discover new things, and learn through play.
      </Text>

      <View style={styles.island}>
        <View style={[styles.bubble, styles.bubblePink]} />
        <View style={[styles.bubble, styles.bubbleBlue]} />
        <View style={[styles.bubble, styles.bubbleMint]} />
        <Text style={styles.islandEmoji}>🌈</Text>
        <Text style={styles.islandLabel}>Your adventure starts here</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Start exploring"
        style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
        onPress={() => router.push("/map")}
      >
        <Text style={styles.primaryButtonText}>Start Exploring</Text>
      </Pressable>

      <Text style={styles.parentNote}>Grown-ups can explore settings later.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    overflow: "hidden",
  },
  cloudOne: {
    position: "absolute",
    width: 180,
    height: 72,
    borderRadius: 40,
    backgroundColor: COLORS.blue,
    top: 55,
    left: -55,
    opacity: 0.8,
  },
  cloudTwo: {
    position: "absolute",
    width: 210,
    height: 82,
    borderRadius: 45,
    backgroundColor: COLORS.lavender,
    top: 100,
    right: -75,
    opacity: 0.7,
  },
  eyebrow: {
    color: COLORS.navy,
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 2.5,
    marginBottom: 12,
  },
  title: {
    color: COLORS.navy,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "900",
    textAlign: "center",
    maxWidth: 520,
  },
  subtitle: {
    color: "#52627A",
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    marginTop: 12,
    maxWidth: 500,
  },
  island: {
    width: "100%",
    maxWidth: 520,
    height: 190,
    marginTop: 28,
    borderRadius: 36,
    backgroundColor: COLORS.yellow,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  bubble: { position: "absolute", borderRadius: 100 },
  bubblePink: { width: 90, height: 90, left: 22, top: 20, backgroundColor: COLORS.pink },
  bubbleBlue: { width: 110, height: 110, right: 18, bottom: -25, backgroundColor: COLORS.blue },
  bubbleMint: { width: 70, height: 70, right: 105, top: 18, backgroundColor: COLORS.mint },
  islandEmoji: { fontSize: 62 },
  islandLabel: { marginTop: 8, color: COLORS.navy, fontSize: 16, fontWeight: "800" },
  primaryButton: {
    marginTop: 24,
    width: "100%",
    maxWidth: 520,
    minHeight: 64,
    borderRadius: 22,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: { transform: [{ scale: 0.98 }], opacity: 0.9 },
  primaryButtonText: { color: "#FFFFFF", fontSize: 19, fontWeight: "800" },
  parentNote: { marginTop: 14, color: "#7A8799", fontSize: 13 },
});