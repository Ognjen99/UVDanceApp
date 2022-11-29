import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

export default function BackButton({ navigation }) {
    return (

        <TouchableOpacity onPress={navigation.goBack}>
            <View style={styles.buttonContainer}>
                <Icon name='chevron-back-outline' size={30} color={'#fff'} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderColor: '#CCCCCC',
        backgroundColor: '#CCCCCC'
    }
})