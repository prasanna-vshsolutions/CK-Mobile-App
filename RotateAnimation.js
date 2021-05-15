import React, { Component } from "react";
import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback } from "react-native";

// create a component
export default class RotateAnimation extends Component {
  constructor() {
    super();
    this.state = {
      animValue: new Animated.Value(400)
    };
  }
  

  handleSelect = () => {
    this.state.animValue._value > 400
      ? Animated.timing(this.state.animValue, {
          toValue: 400,
          duration: 1000
        }).start()
      : Animated.timing(this.state.animValue, {
          toValue: 750,
          duration: 1000
        }).start();
  };

  renderRectangle = () => {
    let rotateAnimation = this.state.animValue.interpolate({
        inputRange: [400, 750],
        outputRange: ['0deg', '360deg']
    });

    const customStyle = {
      height: this.state.animValue,
      transform:[{rotate:rotateAnimation}]
    };

    return (
      <Animated.View style={[styles.rectangle, customStyle]}>
          <Text style={styles.text}>Click to Rotate</Text>
        <TouchableWithoutFeedback onPress={() => this.handleSelect()}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderRectangle()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  rectangle: {
    backgroundColor: "#555",
    width: 400
  },
  text:{
    textAlign:"center",
    color:"#fff",
    marginTop:200
  }
});