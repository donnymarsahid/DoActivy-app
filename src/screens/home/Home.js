import React from 'react'
import { SafeAreaView, View, Text, Pressable, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import profile from '../../assets/img/profile.png'

const Home = ({ navigation }) => {

    const navigateAdd = () => navigation.navigate("AddActivity")
    const navigateDetail = () => navigation.navigate("Detail")
    const navigateSetting = () => navigation.navigate("Setting")

    const activity = [
        {
            id: 1,
            title: "Playing Football",
            date: '10 September 2021, 10:33 AM'
        },
        {
            id: 2,
            title: "Learning",
            date: '15 September 2021, 11:33 PM'
        },
        {
            id: 3,
            title: "Sleeping",
            date: '15 Agustus 2021, 11:33 AM'
        },
        {
            id: 4,
            title: "Swimming",
            date: '15 Agustus 2021, 11:33 AM'
        },
        {
            id: 5,
            title: "Ngoding",
            date: '15 Agustus 2021, 11:33 AM'
        },
        {
            id: 6,
            title: "Eating",
            date: '15 Agustus 2021, 11:33 AM'
        },
    ]

    const renderItem = ({ item }) => (
        <View style={Style.boxList}>
            <View>
                <Text style={Style.textTitleList}>{item.title}</Text>
                <Text style={Style.textDateList}>{item.date}</Text>
            </View>
            <TouchableOpacity style={Style.buttonCheck} onPress={navigateDetail}><Text style={Style.textButtonCheck}>CHECK</Text></TouchableOpacity>
        </View>
    )

    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>

                <View style={Style.headerBackground}>
                    <View>
                        <Text style={Style.textHeaderBold}>Haii, Ansell Ma Putri</Text>
                        <Text style={Style.textHeaderMedium}>You have 10 activity</Text>
                        <Pressable onPress={navigateSetting}><Text style={[Style.textHeaderMedium, { fontSize: 14, textDecorationLine: 'underline' }]}>settings</Text></Pressable>
                    </View>
                    <View style={Style.flexProfile}>
                        <View></View>
                        <Image source={profile} style={Style.imageProfile} />
                    </View>
                </View>
                <TextInput style={Style.inputSearch} placeholder="Find your activity..." />
                <View style={{ marginTop: 60 }}>
                    <FlatList
                        data={activity}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={Style.buttonAdd} onPress={navigateAdd}>
                <Text style={Style.textButtonAdd}>+</Text>
            </TouchableOpacity>
        </SafeAreaView  >
    )
}

const Style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    headerBackground: {
        backgroundColor: '#161E54',
        height: 200,
        padding: 30,
        flexDirection: 'row'
    },
    textHeaderBold: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
    },
    textHeaderMedium: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins-Medium'
    },
    imageProfile: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    flexProfile: {
        flex: 1,
        alignItems: 'flex-end'
    },
    inputSearch: {
        width: '85%',
        alignSelf: 'center',
        padding: 10,
        height: 60,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#B9BBCB',
        elevation: 1,
        backgroundColor: '#fff',
        marginTop: -30,
        fontFamily: 'Poppins-Regular'
    },
    buttonAdd: {
        backgroundColor: '#232E7A',
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 25,
        right: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.22,

        elevation: 2,
    },
    textButtonAdd: {
        color: '#fff',
        fontSize: 60,
        fontFamily: 'Poppins-Medium',
        marginTop: -4
    },
    boxList: {
        backgroundColor: '#fff',
        width: '85%',
        alignSelf: 'center',
        borderRadius: 8,
        height: 80,
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.22,

        elevation: 2,
        marginBottom: 20
    },
    buttonCheck: {
        backgroundColor: '#161E54',
        paddingBottom: 7,
        paddingTop: 7,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 8,
    },
    textButtonCheck: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Poppins-Medium'
    },
    textTitleList: {
        fontFamily: 18,
        color: '#161E54',
        fontFamily: 'Poppins-Medium'
    },
    textDateList: {
        fontFamily: 18,
        color: '#161E54',
        fontFamily: 'Poppins-Regular',
        fontSize: 10
    }
})

export default Home
