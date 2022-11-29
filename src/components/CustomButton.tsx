import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export const CustomButton = ({ buttons, doSomethingAfterClick }) => {

    const [clickedId, setClickedId] = useState(0)

    const handleClick = (item, id) => {
        setClickedId(id)
        doSomethingAfterClick(item)
    }
    return (
        <View style={styles.container}>
            {
                buttons.map((buttonLabel, index) => {
                    return (
                        <TouchableOpacity
                            onPress={(item) => handleClick(item, index)}
                            key={index}>
                            <Text style={index === clickedId ? styles.txtActive : styles.txt}>{buttonLabel}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    txt: {
        fontSize: 17,
        color: 'gray',
        marginLeft: 15,
        marginTop: 15,
        fontWeight: '300'
    },
    txtActive: {
        fontSize: 17,
        color: '#8257B6',
        marginLeft: 15,
        marginTop: 15,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
})