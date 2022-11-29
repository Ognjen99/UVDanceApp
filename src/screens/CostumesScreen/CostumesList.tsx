import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get("window");

const Item = ({ outfit, foundation, date }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.listItem}>
            <Text style={styles.listDate}>{date}</Text>
            <View style={styles.listSubitem}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('VideoScreen')
                    }}>
                    <Text style={styles.listfoundation}>{foundation}</Text>
                    <Text style={styles.listOutfit}>{outfit}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const CostumesList = ({ searchPhrase, setClicked, data }) => {

    const renderItem = ({ item }) => {
        // when no input, show all
        if (searchPhrase === "") {
            return <Item outfit={item.outfit} date={item.date} foundation={item.foundation} />;
        }
        // filter of the name
        if (item.outfit.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item outfit={item.outfit} date={item.date} foundation={item.foundation} />;
        }
        // filter of the description
        if (item.foundation.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item outfit={item.outfit} date={item.date} foundation={item.foundation} />;
        }
    };
    return (
        <SafeAreaView style={{
            margin: 10,
            height: "85%",
            width: "100%",
        }}>
            <View
                onStartShouldSetResponder={() =>
                    setClicked(false)}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10
    },
    listSubitem: {
        marginLeft: width / 10,
        paddingTop: 30
    },
    listDate: {
        fontSize: 55,
        color: '#CCCCCC',
        paddingTop: 30
    },
    listfoundation: {
        fontSize: 13
    },
    listOutfit: {
        color: 'black',
        fontSize: 20,
    }
})

export default CostumesList;