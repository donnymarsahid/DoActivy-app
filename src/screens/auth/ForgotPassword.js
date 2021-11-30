import React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import ButtonStyle1 from '../../assets/button/ButtonStyle-1'

const ForgotPassword = ({ navigation }) => {

    const goBack = () => navigation.navigate("Login")
    return (
        <View style={Style.container}>

            <View style={Style.formInput}>
                <View>
                    <Text style={Style.textLabel}>Enter your email</Text>
                    <TextInput style={Style.textInput} />
                </View>
            </View>
            <View style={{ marginTop: 120 }}>
                <ButtonStyle1 title="SEND MAIL" />
            </View>
            <Pressable onPress={goBack}>
                <Text style={Style.textGoBack}>GO BACK</Text>
            </Pressable>
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        paddingTop: 75,
        paddingStart: 40,
        paddingEnd: 40,
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    formInput: {
        backgroundColor: 'transparent',
        marginTop: 55
    },
    textInput: {
        borderWidth: 1.5,
        borderColor: '#161E54',
        backgroundColor: 'rgba(185, 187, 203, 0.2)',
        borderRadius: 8,
        padding: 12
    },
    textLabel: {
        color: '#161E54',
        fontSize: 16,
        paddingBottom: 5,
        fontFamily: 'Poppins-Regular'
    },
    textGoBack: {
        textDecorationLine: 'underline',
        color: '#161E54',
        marginTop: 20,
        textAlign: 'center'
    }
})


export default ForgotPassword
