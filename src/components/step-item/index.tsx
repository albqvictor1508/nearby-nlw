import { type Image, Text, View } from "react-native";
import { s } from "./style";
import type { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/theme";

interface StepItemProps {
	title: string;
	description: string;
	icon: React.ComponentType<IconProps>;
}

const StepItem = ({ title, description, icon: Icon }: StepItemProps) => {
	return (
		<View style={s.container}>
			<Icon size={32} color={colors.red.base} />
			<View style={s.details}>
				<Text style={s.title}>{title}</Text>
				<Text style={s.description}>{description}</Text>
			</View>
		</View>
	);
};

export default StepItem;
