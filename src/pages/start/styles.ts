import styled from 'styled-components/native' // Corrigido para React Native
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(50)}px;
  background-color: #131313;
`

export const LogoText = styled.Text`
  font-size: ${RFValue(40)}px;
  font-weight: bold;
  color: #ffcc00;
  text-transform: uppercase;
`

export const  WelcomeText = styled.Text`
font-size: ${RFValue(30)}px;
color: #ffcc00;
margin-top: 40px;
`
export const SelectAMode = styled.Text`
font-size: ${RFValue(20)}px;
color: #ffcc00;
margin-top: 100px;
`
