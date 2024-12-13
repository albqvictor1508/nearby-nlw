import { View, Text } from "react-native";

import Welcome from "@/components/welcome";
import Steps from "@/components/steps";

const HomeScreen = () => {
	return (
		<View style={{ flex: 1, padding: 40, gap: 40 }}>
			<Welcome />
			<Steps />
		</View>
	);
};

export default HomeScreen;
