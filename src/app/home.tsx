import { Text, View, Alert } from "react-native";

import { api } from "@/services/api";
import { useEffect, useState } from "react";

const Home = () => {
	const [categories, setCategories] = useState();

	useEffect(() => {
		async function fetchCategorys() {
			try {
				const { data } = await api.get("/categories");
				setCategories(data);
			} catch (e) {
				console.log(e);
				Alert.alert("Categorias", "Não foi possível carregar as categorias");
			}
		}

		fetchCategorys();
	}, []);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Home</Text>
		</View>
	);
};

export default Home;
