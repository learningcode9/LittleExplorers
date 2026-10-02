import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const activities: Record<string, { title: string; prompt: string; choices: string[]; answer: number; emoji: string }> = {
  flight: { title: "Meet the Clouds", prompt: "Which one floats high in the sky?", choices: ["☁️ Cloud", "🐠 Fish", "🌱 Plant"], answer: 0, emoji: "☁️" },
  animals: { title: "Animal Homes", prompt: "Where would a fish feel at home?", choices: ["🌊 Water", "🌳 Tree", "🏠 House"], answer: 0, emoji: "🐠" },
  underwater: { title: "Treasure Hunt", prompt: "Tap the treasure chest.", choices: ["🐚 Shell", "💎 Treasure", "🪸 Coral"], answer: 1, emoji: "💎" },
  creative: { title: "Shape Builder", prompt: "Which shape has three sides?", choices: ["🔵 Circle", "🔺 Triangle", "⬜ Square"], answer: 1, emoji: "🔺" },
  space: { title: "Count the Stars", prompt: "How many stars do you see?", choices: ["⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐"], answer: 1, emoji: "⭐ ⭐ ⭐" },
};

export default function ActivityScreen() {
  const { id } = useLocalSearchParams<{ id: string; index?: string }>();
  const activity = activities[id ?? ""] ?? activities.flight;

  const choose = (index: number) => {
    if (index === activity.answer) {
      router.replace("/completion/" + id);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Text style={styles.backText}>Back</Text>
      </Pressable>

      <View style={styles.content}>
        <Text style={styles.emoji}>{activity.emoji}</Text>
        <Text style={styles.title}>{activity.title}</Text>
        <Text style={styles.prompt}>{activity.prompt}</Text>

        <View style={styles.choices}>
          {activity.choices.map((choice, index) => (
            <Pressable
              key={choice}
              accessibilityRole="button"
              accessibilityLabel={choice}
              onPress={() => choose(index)}
              style={({ pressed }) => [styles.choice, pressed && styles.pressed]}
            >
              <Text style={styles.choiceText}>{choice}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.hint}>Take your time and explore.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF9FE", padding: 24, paddingTop: 58 },
  back: { alignSelf: "flex-start", backgroundColor: "#FFFFFF", paddingHorizontal: 16, paddingVertical: 10, borderRadius: 16 },
  backText: { color: "#172D50", fontWeight: "800" },
  content: { flex: 1, alignItems: "center", justifyContent: "center", maxWidth: 560, width: "100%", alignSelf: "center" },
  emoji: { fontSize: 70, marginBottom: 16 },
  title: { color: "#172D50", fontSize: 30, fontWeight: "900", textAlign: "center" },
  prompt: { color: "#52627A", fontSize: 19, lineHeight: 26, textAlign: "center", marginTop: 10, marginBottom: 26 },
  choices: { width: "100%", gap: 12 },
  choice: { minHeight: 70, borderRadius: 22, backgroundColor: "#FFFFFF", borderWidth: 2, borderColor: "#E8EAF0", justifyContent: "center", alignItems: "center", padding: 12 },
  choiceText: { color: "#172D50", fontSize: 19, fontWeight: "800", textAlign: "center" },
  pressed: { transform: [{ scale: 0.98 }], borderColor: "#172D50" },
  hint: { color: "#7A8799", fontSize: 13, marginTop: 18 },
});