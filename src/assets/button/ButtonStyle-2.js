import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const ButtonStyle2 = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={Style.button} onPress={onPress === undefined ? null : () => onPress()}>
            <Text style={Style.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}

const Style = StyleSheet.create({
    button: {
        backgroundColor: '#B9BBCB',
        borderRadius: 10,
        height: 60,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        color: '#161E54'
    }
})

export default ButtonStyle2
