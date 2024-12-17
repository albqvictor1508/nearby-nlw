import { colors } from "@/styles/theme";
import { s } from "./style";
import {
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
	type TextProps,
	ActivityIndicator,
} from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

const Title = ({ children }: TextProps) => {
	return <Text style={s.title}>{children}</Text>;
};

type ButtonProps = TouchableOpacityProps & {
	isLoading?: boolean;
};

const Button = ({
	children,
	style,
	isLoading = false,
	...rest
}: ButtonProps) => {
	return (
		<TouchableOpacity
			style={[s.container, style]}
			activeOpacity={0.8}
			disabled={isLoading}
			{...rest}
		>
			<Text>
				{isLoading ? (
					<ActivityIndicator size="small" color={colors.gray[100]} />
				) : (
					children
				)}
			</Text>
		</TouchableOpacity>
	);
};

interface IconProps {
	icon: React.ComponentType<TablerIconProps>;
}

function Icon({ icon: Icon }: IconProps) {
	return <Icon size={24} color={colors.gray[100]} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
