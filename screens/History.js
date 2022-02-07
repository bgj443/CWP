import React from "react";
import { Text, View, FlatList } from "react-native";

export default function History({ route }) {
  const { history } = route.params;

  return (
    <View
      style={{
        alignItems: "center",
        height: 600,
      }}
    >
      <FlatList data={history} renderItem={({ item }) => <Text>{item}</Text>}
       keyExtractor={(item, index) => index.toString()}/> 
    </View>
  );
}