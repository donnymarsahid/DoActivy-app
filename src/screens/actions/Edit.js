import React from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native'
import ButtonStyle1 from '../../assets/button/ButtonStyle-1'

const Edit = () => {

    return (
        <View style={Style.container}>
            <View style={Style.formInput}>
                <View>
                    <Text style={Style.textLabel}>Activity</Text>
                    <TextInput style={Style.textInput} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={Style.textLabel}>Date</Text>
                    <TextInput style={Style.textInput} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={Style.textLabel}>Time</Text>
                    <TextInput style={Style.textInput} />
                </View>
            </View>
            <View style={{ marginTop: 120 }}>
                <ButtonStyle1 title="EDIT ACTIVITY" />
            </View>
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
    fontTextMedium: {
        fontFamily: 'Poppins-Medium',
        color: '#161E54'
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
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 5,
        fontFamily: 'Poppins-Regular'
    },
    noAccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 8
    },
    fontReguler: {
        color: '#161E54',
        fontFamily: 'Poppins-Regular'
    },
    fontBold: {
        color: '#161E54',
        fontFamily: 'Poppins-Medium',
        textDecorationLine: 'underline'
    }
})


export default Edit
