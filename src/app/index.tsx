import { View } from "react-native";

import Welcome from "@/components/welcome";
import Steps from "@/components/steps";
import { Button } from "@/components/button";
import { router } from "expo-router";

const HomeScreen = () => {
	return (
		<View style={{ flex: 1, padding: 40, gap: 40 }}>
			<Welcome />
			<Steps />

			<Button onPress={() => router.navigate("/home")}>
				<Button.Title>Entrar</Button.Title>
			</Button>
		</View>
	);
};

export default HomeScreen;
