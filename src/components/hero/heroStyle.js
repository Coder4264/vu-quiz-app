import { StyleSheet, Dimensions, Platform } from "react-native";
import { typography } from "../../utils/typography";
import { colors } from "../../utils/colors";

const { width, height } = Dimensions.get("window");

// Check if it's a tablet screen
const isTablet = width >= 768;

export const styles = StyleSheet.create({
  header: {
    height: height * 0.32,
    backgroundColor: colors.primary,
    paddingHorizontal: isTablet ? 32 : 16, // more padding on tablet
  },
  logo: {
    alignSelf: "flex-start",
    width: isTablet ? width * 0.35 : width * 0.45, // smaller ratio on tablet
    height: isTablet ? height * 0.08 : height * 0.06,
    resizeMode: "contain",
    marginTop: isTablet ? 24 : 16,
  },
  headerContent: {
    position: "absolute",
    bottom: isTablet ? 60 : 40,
    left: isTablet ? 40 : 20,
    maxWidth: isTablet ? width * 0.7 : width * 0.6,
  },
  headerTitle: {
    ...typography.h3,
    fontSize: isTablet ? 28 : 20, // bigger on tablet
    color: colors.secondary,
    fontWeight: "700",
    marginBottom: 4,
    textAlign: isTablet ? "left" : "auto", // keep clean alignment
  },
  headerSubtitle: {
    ...typography.body,
    fontSize: isTablet ? 18 : 14, // bigger on tablet
    color: colors.secondary,
    marginTop: 4,
  },
  startButton: {
    marginTop: isTablet ? 24 : 16,
    backgroundColor: colors.secondary,
    width: isTablet ? width * 0.25 : width * 0.3,
    height: isTablet ? height * 0.06 : height * 0.042,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonText: {
    ...typography.button,
    fontSize: isTablet ? 18 : 14, // bigger text on tablet
    color: colors.primary,
    fontWeight: "600",
  },
  character: {
    width: isTablet ? width * 0.35 : width * 0.4,
    height: isTablet ? height * 0.25 : height * 0.2,
    resizeMode: "contain",
    position: "absolute",
    right: isTablet ? 20 : 0,
    bottom: 0,
  },
});
