import React from "react"
import { Text } from "react-native"
import { Button, ButtonContent } from "./styles"

interface ButtonComponentProps {
	handlePress: () => void;
	buttonText:  string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ handlePress, buttonText }) => {
	return (
	<Button activeOpacity={0.95} onPress={handlePress}>
			<Text>
			<ButtonContent>{buttonText}</ButtonContent>
			</Text>
		</Button>
	)
}

export default ButtonComponent