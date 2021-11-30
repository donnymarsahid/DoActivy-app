import React from 'react'
import { Pressable, View, Text } from 'react-native'

const Detail = ({ navigation }) => {
    const navigateEdit = () => navigation.navigate("EditActivity")
    return (
        <View>
            <Pressable onPress={navigateEdit}>
                <Text>Edit Activity</Text>
            </Pressable>
        </View>
    )
}

export default Detail
