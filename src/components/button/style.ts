import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
	container: {
		height: 56,
		gap: 12,
		backgroundColor: colors.green.base,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
	},
	title: {
		fontFamily: fontFamily.semiBold,
		color: colors.gray[100],
		fontSize: 16,
	},
});
