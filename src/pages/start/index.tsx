import React, { useEffect } from "react"
import { View, Animated } from "react-native"
import { LogoText, SelectAMode, WelcomeText } from "./styles"
import ButtonComponent from "../../components/buttons"


const Start = () => {
  const scaleAnim = new Animated.Value(1); 

  const handleNavToPlayAlone = () => {
	console.log("You Choose Solo Mode!")
  }

  const handleNavToPlay2v2 = () => {
	console.log("You Choose 2v2!")
  }

  const handleNavToPlayRules = () => {
	console.log("You Choose Rules Mode!")
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
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop: 90  }}>
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim ,}],
		  alignItems: "center"
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
	  <ButtonComponent 
	  buttonText={'2V2'}
	  handlePress={handleNavToPlay2v2}
	  
	  />
	  <ButtonComponent 
	  buttonText={'Rules'}
	  handlePress={handleNavToPlayRules}
	  
	  />
    </View>
  )
}

export default Start
