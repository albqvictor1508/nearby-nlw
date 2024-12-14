import Category from "../category";
import { FlatList } from "react-native";
import { s } from "./style";

export type CategoriesProps = {
	id: string;
	name: string;
}[];

interface Props {
	data: CategoriesProps;
	selected: string;
	onSelect: (id: string) => void;
}

const Categories = ({ data, selected, onSelect }: Props) => {
	console.log(data);

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<Category
					name={item.name}
					iconId={item.id}
					onPress={() => onSelect(item.id)}
					isSelected={item.id === selected}
				/>
			)}
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={s.content}
			style={s.container}
		/>
	);
};

export { Categories };
