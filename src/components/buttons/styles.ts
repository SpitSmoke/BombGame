import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"


export const Button = styled.TouchableOpacity`
	width: ${RFValue(200)}px;
	height: ${RFValue(60)}px;
	background-color: #FFf;
	border-radius: ${RFValue(10)}px;
	margin: ${RFValue(20)}px;
	margin-bottom: 0;
	justify-content: center;
	align-items: center;
	margin-top: ${RFValue(30)}px;
`

export const ButtonContent = styled.Text`
	font-size: ${RFValue(20)}px;
	color: #000;
	font-family: sans-serif;

`

