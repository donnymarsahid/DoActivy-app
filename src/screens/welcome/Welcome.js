import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import ButtonStyle1 from '../../assets/button/ButtonStyle-1'
import ButtonStyle2 from '../../assets/button/ButtonStyle-2'
import ilustratorWelcome from '../../assets/img/welcome-ilustrator.png'

const Welcome = ({ navigation }) => {
    const navigateLogin = () => navigation.navigate("Login")
    const navigateRegister = () => navigation.navigate("Register")
    return (
        <View style={Style.container}>
            <View style={Style.titleText}>
                <Text style={[Style.fontTextMedium, { fontSize: 26 }]}>Welcome To </Text>
                <Text style={[Style.fontTextBold, { fontSize: 26 }]}>DoActivy</Text>
            </View>
            <Image source={ilustratorWelcome} style={Style.image} />
            <View style={Style.button}>
                <ButtonStyle1 title="LOGIN" onPress={navigateLogin} />
                <ButtonStyle2 title="REGISTER" onPress={navigateRegister} />
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 75,
        paddingStart: 40,
        paddingEnd: 40,
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    image: {
        marginTop: 45,
        width: 270,
        height: 246.38,
    },
    titleText: {
        flexDirection: 'row',
    },
    fontTextMedium: {
        fontFamily: 'Poppins-Medium',
        color: '#161E54'
    },
    fontTextBold: {
        fontFamily: 'Poppins-Bold',
        color: '#161E54'
    },
    button: {
        marginTop: 70,
        height: 160,
        justifyContent: 'space-around',
    },
})

export default Welcome
