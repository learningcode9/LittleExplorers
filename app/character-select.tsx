import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { CharacterIllustration } from "../components/CharacterIllustration";
import { characters, CharacterId } from "../data/characters";
import { storage } from "../storage/storage";

export default function CharacterSelectScreen() {
  const chooseCharacter = async (id: CharacterId) => {
    await storage.set("selected-character", id);
    router.replace("/");
  };

  return (
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
      <View style={styles.topMark}>
        <View style={styles.sun} />
      </View>

      <Text style={styles.brand}>Little Explorers</Text>
      <Text style={styles.eyebrow}>LET'S GET READY</Text>
      <Text style={styles.title}>Choose your explorer!</Text>
      <Text style={styles.subtitle}>Pick a friend to join you on every adventure.</Text>

      <View style={styles.characters}>
        {characters.map((character) => (
          <Pressable
            key={character.id}
            onPress={() => chooseCharacter(character.id)}
            accessibilityRole="button"
            accessibilityLabel={`Choose ${character.name}`}
            style={({ pressed }) => [
              styles.card,
              { backgroundColor: character.accent },
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.artFrame}>
              <CharacterIllustration id={character.id} size={150} />
            </View>
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.description}>{character.description}</Text>
            <View style={styles.choosePill}>
              <Text style={styles.chooseText}>Choose</Text>
              <Text style={styles.arrow}>›</Text>
            </View>
          </Pressable>
        ))}
      </View>

      <Text style={styles.note}>You can change your explorer later in Settings.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: "#FFF8F1",
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 40,
    alignItems: "center",
  },
  topMark: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFD34F",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  sun: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#172D50",
  },
  brand: {
    color: "#172D50",
    fontSize: 28,
    fontWeight: "900",
  },
  eyebrow: {
    color: "#172D50",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.8,
    marginTop: 28,
  },
  title: {
    color: "#172D50",
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 6,
  },
  subtitle: {
    color: "#5D718D",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    maxWidth: 520,
    marginTop: 8,
  },
  characters: {
    width: "100%",
    maxWidth: 780,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 14,
    marginTop: 24,
  },
  card: {
    width: 180,
    minHeight: 270,
    borderRadius: 30,
    padding: 12,
    alignItems: "center",
    shadowColor: "#172D50",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  artFrame: {
    width: "100%",
    height: 158,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.62)",
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  name: {
    color: "#172D50",
    fontSize: 17,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 10,
  },
  description: {
    color: "#29466F",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
    marginTop: 3,
    minHeight: 32,
  },
  choosePill: {
    marginTop: 8,
    minWidth: 104,
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  chooseText: {
    color: "#172D50",
    fontSize: 13,
    fontWeight: "900",
  },
  arrow: {
    color: "#172D50",
    fontSize: 22,
    lineHeight: 23,
    fontWeight: "900",
  },
  note: {
    color: "#70809A",
    fontSize: 12,
    textAlign: "center",
    marginTop: 18,
  },
  pressed: {
    transform: [{ scale: 0.975 }],
    opacity: 0.94,
  },
});
