import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Calculator({ navigation }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [total, setTotal] = useState("");
  const [data, setData] = useState([]);

  const Add = () => {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let sum = n1 + n2;
    let strSum = num1 + " + " + num2 + " = " + sum;
    setTotal(sum);
    setData([...data, strSum]);

  };
  const Subtract = () => {
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let sum = n1 - n2;
    let strSum = num1 + " - " + num2 + " = " + sum;
    setTotal(sum);
    setData([...data, strSum]);
    
  };
  return (
    <View style={styles.container}>
      <Text>Result: {total}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType={"numeric"}
        onChangeText={(num1) => setNum1(num1)}
        value={num1}
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType={"numeric"}
        onChangeText={(num2) => setNum2(num2)}
        value={num2}
      ></TextInput>

      <View style={styles.buttons}>
        <Button title="+" onPress={Add}></Button>
        <Button title="-" onPress={Subtract}></Button>
        <Button
          title="History"
          onPress={() => navigation.navigate("History", { history: data })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 350,
    borderColor: "red",
    borderWidth: 2,
    textAlign: "center",
    margin: 6,
    height: 40,
  },
  buttons: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-evenly",
    
  },
});