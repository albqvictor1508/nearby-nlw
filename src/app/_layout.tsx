import { Stack } from "expo-router";
import { colors } from "@/styles/theme";

import {
	useFonts,
	Rubik_600SemiBold,
	Rubik_400Regular,
	Rubik_500Medium,
	Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import Loading from "@/components/loading";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = () => {
	const [fontsLoaded] = useFonts({
		Rubik_400Regular,
		Rubik_500Medium,
		Rubik_600SemiBold,
		Rubik_700Bold,
	});

	if (!fontsLoaded) {
		return <Loading />;
	}

	return (
		<GestureHandlerRootView>
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: colors.gray[100] },
				}}
			/>
		</GestureHandlerRootView>
	);
};

export default Layout;
