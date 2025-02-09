import React, { useEffect } from "react"
import { View, Animated, Alert } from 'react-native'
import { Container, LogoText, SelectAMode, WelcomeText } from './styles'
import ButtonComponent from '../../components/buttons'
import { useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../others/types' //
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Start = () => {
  const scaleAnim = new Animated.Value(1)

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, 'Start'>>()

  const handleNavToPlayAlone = () => {
    Alert.alert('You Choose Solo Mode!')
  }

  const handleNavToPlay2v2 = () => {
    Alert.alert('You Choose 2v2!')
  }

  const handleNavToPlayRules = () => {
    navigation.navigate('Rules')
  }

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ])
    ).start()
  }, [])

  return (
    <Container>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Animated.View
          style={{
            transform: [{ scale: scaleAnim }],
            alignItems: 'center',
          }}
        >
          <LogoText>Bomber</LogoText>
          <WelcomeText>IT!</WelcomeText>
        </Animated.View>

        <SelectAMode>Select a Mode</SelectAMode>
        <ButtonComponent
          buttonText={'Solo'}
          handlePress={handleNavToPlayAlone}
        />
        <ButtonComponent buttonText={'2V2'} handlePress={handleNavToPlay2v2} />
        <ButtonComponent
          buttonText={'Rules'}
          handlePress={handleNavToPlayRules}
        />
      </View>
    </Container>
  )
}

export default Start
