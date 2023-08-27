import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  onTermSubmit: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  onTermSubmit,
}) => {
  return (
    <View style={styles.backGround}>
      <FontAwesome style={styles.icon} name="search" size={30} color="black" />
      <TextInput
        onEndEditing={onTermSubmit}
        style={styles.input}
        placeholder="Search"
        value={searchTerm}
        onChangeText={setSearchTerm}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: "#CCCCCC",
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row",
  },
  input: {
    fontSize: 25,
    flex: 1,
  },
  icon: {
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
