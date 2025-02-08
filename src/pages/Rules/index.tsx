import React from "react"
import { Alert } from "react-native"
import { Container, Icon, NumberParagraph, Paragraph, ScrollTextRules, Title } from "./styles"


const Rules = () => {

	const handleNavToStart = () => {
		Alert.alert("Ícone clicado!")
	}

	return (
		<Container>
			<Icon name='arrow-back-ios' onPress={handleNavToStart} />
			<ScrollTextRules>
				<Title>Solo Mode</Title>
				<Paragraph>
				<NumberParagraph>1 - </NumberParagraph>
				You will receive a password hint, which will be a math problem, with a fixed time of 5 minutes to solve it and disarm the bomb.
				</Paragraph>
				<Paragraph>
				<NumberParagraph>2 - </NumberParagraph>
				Every time you make a mistake, your device will vibrate and the password fields will be cleared. If you answer correctly, you will be sent to a success page; if you answer incorrectly, you will be sent to a failure page.
				</Paragraph>
				<Title style={{marginTop: 30}}>2v2 Mode</Title>
				<Paragraph>
				<NumberParagraph>1 - </NumberParagraph>
				To play this game, you need a partner. Person 01 will set: the bomb's timer, a password hint, and the password.
				</Paragraph>
				<Paragraph>
				<NumberParagraph>2 - </NumberParagraph>
				Once everything is filled out, click 'Start,' and the countdown will begin. If a mistake is made, the phone will vibrate to indicate an error.
				</Paragraph>
				<Paragraph>
				<NumberParagraph>3 - </NumberParagraph>
				If you answer correctly, you will be sent to a success page if you answer incorrectly, you will be sent to a failure page, ending the game.
				</Paragraph>
			</ScrollTextRules>
		</Container>
	)
}

export default Rules