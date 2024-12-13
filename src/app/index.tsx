import { View, Text } from "react-native";

const HomeScreen = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text
				style={{
					fontWeight: "semibold",
					fontSize: 24,
				}}
			>
				Bom dia!
			</Text>
			<Text style={{ fontWeight: "light", fontSize: 14, marginTop: 5 }}>
				Você está linda hoje lexsa!
			</Text>
		</View>
	);
};

export default HomeScreen;
