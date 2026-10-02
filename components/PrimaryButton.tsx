import { Pressable, StyleSheet, Text, type PressableProps } from "react-native";

type Props = PressableProps & { label: string };

export function PrimaryButton({ label, style, ...props }: Props) {
  return (
    <Pressable accessibilityRole="button" {...props} style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { minHeight: 60, borderRadius: 20, backgroundColor: "#172D50", alignItems: "center", justifyContent: "center", paddingHorizontal: 24 },
  label: { color: "#FFFFFF", fontSize: 18, fontWeight: "900" },
  pressed: { transform: [{ scale: 0.98 }], opacity: 0.9 },
});