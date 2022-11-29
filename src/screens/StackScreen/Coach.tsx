import { View, Text, FlatList, StyleSheet, Dimensions, Animated, ImageBackground, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BackButton from '../../components/BackButton';
import { useDispatch, useSelector } from 'react-redux';
import { GET_TIMELINE } from '../../redux/actions/timeline.action';
import { RootState } from '../../redux/reducers/root.reducer';
import { Timeline } from '../../models/timeline.model';
import { DayConverter } from '../../utils/DayConverter';
import { TimelineItem } from '../../models/timeline-item.model';


const converter = new DayConverter;

const { width, height } = Dimensions.get("window");
const HEIGHT_HALF = height / 2

const Coach = ({ route, navigation }) => {
  const { item, danceId } = route.params;
  const { items, trenerIds } = route.params;
  const dispatch = useDispatch();
  const { list, pending } = useSelector((state: RootState) => state.timelineStyle);
  const [data, setData] = useState<Timeline[]>([]);
 

  /* console.log(item.id); */


  useEffect(() => {
    dispatch({ type: GET_TIMELINE, payload: item.id });


    slideInUp();
    slideInDown();
  }, []);

  useEffect(() => {
    setData(list);
  }, [list]);

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

   const newData = data.map((dataItem) => {
    const timeObject = dataItem.timetable.filter((timeItem) => {
      return timeItem.danceId === danceId && timeItem.trenerIds.includes(item.id)
    })
    console.log(timeObject);
  
   return {...dataItem, timetable: timeObject};
  })
 
  

  const Render = ({ item, index }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listDate}>{item.date}</Text>
        <View style={styles.listSubitem}>
          <Text style={styles.listDay}>{converter.convert(item.day).slice(0, 3)}</Text>
          <FlatList
            style={styles.listStyle}
            data={item.timetable}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.listTime}>{item.time}</Text>
              </View>
            )}
            horizontal={true}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
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
            ListHeaderComponent={<Text style={{ color: 'purple', marginLeft: 10, marginTop: 10 }}>Termini</Text>}
            style={styles.listStyle}
            data={newData}
            renderItem={Render}
            vertical={true}
            showsVerticalScrollIndicator={false}
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
  listStyle: {
    width: '100%'
  },
  listItem: {
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
  listDay: {
    fontSize: 13
  },
  listTime: {
    color: 'black',
    fontSize: 20,
  },
  header: {
    color: '#8257B6',
    marginLeft: 10,
    marginTop: 10
  },
  downContainer: {
    height: HEIGHT_HALF,
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
    color: 'white',
  },
})

export default Coach;