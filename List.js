import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

class List extends Component {
  state = {
    names: [
      {
        id: 0,
        name: "Hrishikesh",
      },
      {
        id: 1,
        name: "Ganesh",
      },
      {
        id: 2,
        name: "Akshay",
      },
      {
        id: 3,
        name: "Prasanna",
      },
    ],
  };
  alertItemName = (item) => {
    alert("Hello " + item.name + " Welcome to CommonKey");
  };
  render() {
    return (
      <View>
        <Text style={styles.title}>Team Member CommonKey</Text>

        {this.state.names.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alertItemName(item)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
export default List;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 3,
    backgroundColor: "#d9f9b1",
    alignItems: "center",
  },
  text: {
    color: "#4f603c",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    marginTop:20
  },
});
