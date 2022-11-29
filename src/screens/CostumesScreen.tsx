
import { StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { costumess } from '../assets/Data/DummyData';
import SearchBar from '../components/SearchBar';
import CostumesList from './CostumesScreen/CostumesList';
import { Costume } from '../models/costumes.model'

const { width } = Dimensions.get("window");

export default function CostumesScreen(navigation) {

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState<Costume[]>([]);

  useEffect(() => {
    setFakeData(costumess);
  }, []);

  return (
    <SafeAreaView style={{
      justifyContent: "center",
      alignItems: "center",
    }}>
      {/*<SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
  />*/}
      <CostumesList
        searchPhrase={searchPhrase}
        data={fakeData}
        setClicked={setClicked}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: 'black',
    marginLeft: 10
  },
})