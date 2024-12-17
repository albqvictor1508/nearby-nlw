import { View, Alert, Text } from "react-native";

import { api } from "@/services/api";
import { fontFamily, colors } from "@/styles/theme";

import { useEffect, useState } from "react";

import { Categories, type CategoriesProps } from "@/components/categories";
import type { PlaceProps } from "@/components/place";
import Places from "@/components/places";
import MapView, { Callout, Marker } from "react-native-maps";
import { router } from "expo-router";

type MarketsProps = PlaceProps & {
	latitude: number;
	longitude: number;
};

const currentLocation = {
	latitude: -23.561187293883442,
	longitude: -46.656451388116494,
};

const Home = () => {
	const [categories, setCategories] = useState<CategoriesProps>([]);
	const [category, setCategory] = useState("");
	const [markets, setMarkets] = useState<MarketsProps[]>([]);

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
	}, [category]); //depende do useEffect de categories pra funcionar, pois é filtrado por categoria na API e nas props

	return (
		<View style={{ flex: 1, backgroundColor: "#CECECE" }}>
			<Categories
				data={categories}
				onSelect={setCategory}
				selected={category}
			/>

			<MapView
				style={{ flex: 1, backgroundColor: "#CECECE" }}
				initialRegion={{
					latitude: currentLocation.latitude,
					longitude: currentLocation.longitude,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
			>
				<Marker
					identifier="current"
					coordinate={{
						latitude: currentLocation.latitude,
						longitude: currentLocation.longitude,
					}}
					image={require("@/assets/location.png")}
				/>

				{markets.map((item) => (
					<Marker
						key={item.id}
						identifier={item.id}
						coordinate={{ latitude: item.latitude, longitude: item.longitude }}
						image={require("@/assets/pin.png")}
					>
						<Callout onPress={() => router.navigate(`/market/${item.id}`)}>
							<View>
								<Text
									style={{
										fontSize: 14,
										color: colors.gray[600],
										fontFamily: fontFamily.medium,
									}}
								>
									{item.name}
								</Text>
								<Text
									style={{
										fontSize: 12,
										color: colors.gray[600],
										fontFamily: fontFamily.regular,
									}}
								>
									{item.address}
								</Text>
							</View>
						</Callout>
					</Marker>
				))}
			</MapView>

			<Places data={markets} />
		</View>
	);
};

export default Home;
