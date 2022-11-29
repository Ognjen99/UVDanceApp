import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground, ScrollView, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { GET_STYLES } from '../redux/actions/dance.action';
import { RootState } from '../redux/reducers/root.reducer';

const { width, height } = Dimensions.get('window');

const SPACE = 20;
const ITEM_SIZE = width * 0.72;
export default function HomeScreen({ }) {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const { list } = useSelector((state: RootState) => state.danceStyle);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: GET_STYLES })
    }, [])

    const renderCategoryItem = ({ item, index }) => {
        console.log(item)
        const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE
        ];
        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8]
        });
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8]
        });
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Coaches', { item })
                }}>
                <View style={{ width: ITEM_SIZE, }}>
                    <Animated.View
                        style={[
                            styles.categoriesItemWrapper,
                            {
                                marginHorizontal: SPACE,
                                transform: [{ scale }],
                                opacity,
                            },
                        ]}>
                        <ImageBackground
                            style={styles.imageBackground} source={{ uri: item.image }}>
                            <Text style={styles.textBackground}>{item.name}</Text>
                        </ImageBackground>
                    </Animated.View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Plesna škola</Text>
            </View>
            <ScrollView>
                <View style={styles.categoriesListWrapper}>
                    <Animated.FlatList
                        data={list}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: true }
                        )}
                        renderItem={renderCategoryItem}
                        keyExtractor={(item, index) => 'key' + index}
                        horizontal={true}
                        snapToAlignment={'start'}
                        decelerationRate={0}
                        snapToInterval={ITEM_SIZE}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    titleWrapper: {
        width: '100%',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        flex: 1
    },
    textBackground: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'black',
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',


    },
    categoriesItemWrapper: {
        flex: 1,
        marginBottom: 20,
        borderRadius: 25,
        height: 470,
        width: ITEM_SIZE,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 10,
        overflow: 'hidden',

    },
});

