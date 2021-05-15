import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Shapes() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Line</Text>
      <View style={styles.line}></View>
      <Text style={styles.text}>Square</Text>
      <View style={styles.square}></View>
      <Text style={styles.text}>Circle</Text>
      <View style={styles.circle}></View>
      <Text style={styles.text}>Rectangle</Text>
      <View style={styles.rectangle}></View>
      <Text style={styles.text}>Triangle</Text>
      <View style={styles.triangle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:50
  },
  text:{
    fontSize:16,
    fontWeight:"700",
    marginBottom:20,
    color:"#000"
  },    
  square:{
    width: 100,
    height: 100,
    backgroundColor: '#555',
    marginBottom:20
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#555',
    marginBottom:20

  },
  rectangle:{
    width: 120 * 2,
    height: 120,
    backgroundColor: '#555',
    marginBottom:20

  },
  triangle:{
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#555',
    marginBottom:20
  },
  line:{
    backgroundColor: '#555',
    height: 2,
    width: 200,
    marginBottom:20

  }
});