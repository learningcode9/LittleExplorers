import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FloatingIslandScene } from "../components/FloatingIslandScene";
import { COLORS, RADIUS } from "../theme";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.cloudLeft} />
      <View style={styles.cloudRight} />
      <View style={styles.content}>
        <Text style={styles.eyebrow}>A LITTLE WORLD TO DISCOVER</Text>
        <Text style={styles.title}>Let’s go exploring!</Text>
        <Text style={styles.subtitle}>
          Discover, create, and learn through playful adventures.
        </Text>

        <View style={styles.sceneCard}>
          <FloatingIslandScene height={330} />
          <View style={styles.sceneLabel}>
            <Text style={styles.sceneLabelTitle}>Your adventure starts here</Text>
            <Text style={styles.sceneLabelText}>Pick a world and see what you can discover.</Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Start exploring"
          onPress={() => router.push("/map")}
          style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
        >
          <Text style={styles.primaryButtonText}>Start Exploring</Text>
          <Text style={styles.arrow}>→</Text>
        </Pressable>

        <Text style={styles.parentNote}>Grown-ups can explore settings later.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.cream,
    overflow: "hidden",
  },
  content: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingTop: 46,
    paddingBottom: 30,
    alignItems: "center",
  },
  cloudLeft: {
    position: "absolute",
    width: 190,
    height: 76,
    borderRadius: 60,
    backgroundColor: COLORS.sky,
    left: -90,
    top: 70,
    opacity: 0.9,
  },
  cloudRight: {
    position: "absolute",
    width: 230,
    height: 88,
    borderRadius: 60,
    backgroundColor: COLORS.lavender,
    right: -120,
    top: 125,
    opacity: 0.6,
  },
  eyebrow: {
    color: COLORS.navy,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 2.2,
    textAlign: "center",
  },
  title: {
    color: COLORS.navy,
    fontSize: 40,
    lineHeight: 46,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 8,
  },
  subtitle: {
    color: COLORS.navySoft,
    fontSize: 17,
    lineHeight: 25,
    textAlign: "center",
    maxWidth: 520,
    marginTop: 10,
    marginBottom: 22,
  },
  sceneCard: {
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 36,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#E8E0DA",
    shadowColor: "#172D50",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  sceneLabel: {
    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 19,
    backgroundColor: COLORS.white,
  },
  sceneLabelTitle: {
    color: COLORS.navy,
    fontSize: 19,
    fontWeight: "900",
    textAlign: "center",
  },
  sceneLabelText: {
    color: COLORS.inkSoft,
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
  primaryButton: {
    marginTop: 22,
    width: "100%",
    maxWidth: 520,
    minHeight: 68,
    borderRadius: RADIUS.button,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: 19,
    fontWeight: "900",
  },
  arrow: {
    color: COLORS.butter,
    fontSize: 24,
    fontWeight: "900",
    marginTop: -2,
  },
  pressed: {
    transform: [{ scale: 0.985 }],
    opacity: 0.92,
  },
  parentNote: {
    color: COLORS.inkSoft,
    fontSize: 12,
    marginTop: 12,
  },
});
