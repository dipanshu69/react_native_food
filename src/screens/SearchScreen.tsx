import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";

const SearchScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [characters, setCharacters] = useState<{}[]>([]);

  const searchAPi = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      if (res.data && res.data.results) {
        setCharacters(res.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={() => {
          console.log("submitted");
        }}
      />
      <Text>{searchTerm}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
