import { View, Alert } from "react-native";

import { api } from "@/services/api";

import { useEffect, useState } from "react";

import { Categories, type CategoriesProps } from "@/components/categories";
import type { PlaceProps } from "@/components/place";
import Places from "@/components/places";

type MarketsProps = PlaceProps & {};

const Home = () => {
	const [categories, setCategories] = useState<CategoriesProps>([]);
	const [category, setCategory] = useState("");
	const [markets, setMarkets] = useState();

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

	useEffect(() => {
		fetchCategorys();
	}, []);

	async function fetchMarkets() {
		try {
			if (!category) {
				return;
			}

			const { data } = await api.get(`/markets/category/${category}`);
			setMarkets(data);
		} catch (e) {
			console.log(e);
			Alert.alert("Locais", "não foi possível carregar os locais");
		}
	}

	useEffect(() => {
		fetchMarkets();
	}, [category]); //depende do useEffect de categorys pra funcionar, pois é filtrado por categoria na API e nas props

	return (
		<View style={{ flex: 1, backgroundColor: "#CECECE" }}>
			<Categories
				data={categories}
				onSelect={setCategory}
				selected={category}
			/>

			<Places data={markets} />
		</View>
	);
};

export default Home;
