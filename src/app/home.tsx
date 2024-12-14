import { View, Alert } from "react-native";

import { api } from "@/services/api";

import { useEffect, useState } from "react";

import { Categories, type CategoriesProps } from "@/components/categories";

const Home = () => {
	const [categories, setCategories] = useState<CategoriesProps>([]);
	const [category, setCategory] = useState("");

	useEffect(() => {
		async function fetchCategorys() {
			try {
				const { data } = await api.get("/categories");
				setCategories(data);
				setCategory(data[0].id);
			} catch (e) {
				console.log(e);
				Alert.alert("Categorias", "Não foi possível carregar as categorias");
			}
		}

		fetchCategorys();
	}, []);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Categories
				data={categories}
				onSelect={setCategory}
				selected={category}
			/>
		</View>
	);
};

export default Home;
