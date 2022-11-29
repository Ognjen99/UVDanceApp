import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { Videos } from '../../assets/Data/DummyData';
import YoutubePlayer from 'react-native-youtube-iframe';

const { width, height } = Dimensions.get("window");


export default function VideoScreen({ navigation }) {

  const [isActive, setIsActive] = useState(false)

  const handleState = () =>{
    setIsActive(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Video</Text>
      <FlatList
        data={Videos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.videoSection}>
            <View style={styles.videoContainer}>
              <YoutubePlayer
                style={{height: isActive ? height : 250}}
                height={250}
                width={width}
                play={false}
                videoId={item.value}
                onChangeState={handleState} />
            </View>
          </View>
        )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  videoSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    height: 250
  }
})