import { View, Text, StyleSheet, ImageBackground, Dimensions, Animated, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import React, { useEffect, useRef, useState } from 'react';

import BackButton from '../../components/BackButton';
import { useDispatch, useSelector } from 'react-redux';
import { GET_INSTRUCTORS } from '../../redux/actions/instructor.action';
import { RootState } from '../../redux/reducers/root.reducer';
import { Instructor } from '../../models/instructor.model';

const stateColor = {
    color: 'black',
    color2: 'black',
    pressed: false,
};

const { width, height } = Dimensions.get("window");
const HEIGHT_HALF = height / 2

const Coaches = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { item } = route.params;
    const { list, pending } = useSelector((state: RootState) => state.instructor);
    const [Data, setData] = useState<{instructor: Instructor[], danceId: number}>();
    const [isActive, setIsActive] = useState(stateColor);

    console.log(list);
    
    useEffect(() => {
        dispatch({ type: GET_INSTRUCTORS, payload: item.id });
        // console.error(" + ++ + + ++ + +  + ++ + + + + + ETF is item", item);

        slideInUp();
        slideInDown();

        printAdultsLabel();
    }, []);

    useEffect(() => {
        setData({instructor: list, danceId:item.id});
    }, [list]);

    //slideInUpAnim will be used as the value for SlideAnimation for Up View
    //slideInDownAnim will be used as the value for SlideAnimation for Down View

    const slideInDownAnim = useRef(new Animated.Value(HEIGHT_HALF * 2)).current;
    const slideInUpAnim = useRef(new Animated.Value(HEIGHT_HALF * -1)).current;

    const slideInDown = () => {
        Animated.timing(slideInDownAnim, {
            toValue: 0,
            delay: 50,
            useNativeDriver: true,
        }).start();
    };

    const slideInUp = () => {
        Animated.timing(slideInUpAnim, {
            toValue: 0,
            delay: 50,
            useNativeDriver: true,
        }).start();
    };

    // re-render flatList
    const changeColor = () => {
        if (!isActive.pressed) {
            setIsActive({ pressed: true, color: '#8257B6', color2: 'gray' });
        } else {
            setIsActive({ pressed: false, color: 'gray', color2: '#8257B6' });
        }
    }

    const printAdultsLabel = () => {
        if (isActive.pressed) {
            return;
        } else {
            // setData(list);
            changeColor();
        }
    }

    const printChildrenLabel = () => {
        if (isActive.pressed) {
            // setData(list);
            changeColor();
        } else {
            return;
        }
    }


    const listNavigation = () => {


        return (
            /*<View style={styles.containerFlatHeader}>
                <TouchableOpacity onPress={printAdultsLabel}>
                    <Text style={[isActive.pressed ? styles.txtActive : styles.txt, { color: isActive.color, padding: 15 }]} >Odrasli</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={printChildrenLabel}
                >
                    <Text style={[!isActive.pressed ? styles.txtActive : styles.txt, { color: isActive.color2, padding: 15 }]}>Deca</Text>
                </TouchableOpacity>
            </View>*/
            <Text></Text>
        )
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.upContainer, {
                transform: [{
                    translateY: slideInUpAnim
                }],
            }]}>
                {(item.image && item.image.length > 0) ?
                    <ImageBackground style={styles.imageBackground} source={{ uri: item.image }}>
                        <BackButton navigation={navigation} />
                        <Text style={styles.textBackground}>{item.name}</Text>
                    </ImageBackground>
                    :
                    <View>
                        <BackButton navigation={navigation} />
                        <Text style={styles.textBackground}>{item.name}</Text>
                    </View>

                }
            </Animated.View>
            <Animated.View style={[styles.downContainer, {
                transform: [{
                    translateY: slideInDownAnim
                }],
            }]}>
                {pending ?
                    <ActivityIndicator></ActivityIndicator>

                    :
                    <FlatList
                        ListHeaderComponent={listNavigation}
                        data={Data?.instructor}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Coach', { item, danceId: Data?.danceId })
                                }}>
                                <View key={item.id} style={styles.listContainer}>
                                     <Image style={styles.avatarContainer} source={{ uri: item.image }} /> 
                                    <Text style={styles.names}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                }
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    upContainer: {
        height: HEIGHT_HALF,
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
        color: "#fff",
    },
    downContainer: {
        height: HEIGHT_HALF,
    },

    avatarContainer: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginBottom:30,
        borderRadius:10
    },
    listContainer: {
        flexDirection: 'row',
    },
    names: {
        fontSize: 16,
        marginLeft: 50,
        fontWeight: 'bold',
        color:"black",
        marginTop: 20
    },
    containerFlatHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    txt: {
        fontSize: 17,
        color: 'gray',
        fontWeight: '300'
    },
    txtActive: {
        fontSize: 17,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
})

export default Coaches