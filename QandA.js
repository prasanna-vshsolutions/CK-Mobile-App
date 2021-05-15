import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function QandA() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>What should be type of assets?</Text>
        <Text style={styles.answer}>WebP image integration for React Native apps. By utilizing WebP instead of png/jpg you can significantly reduce the size of your app without quality loss. </Text> 
        <Text style={styles.text}>How to use portrait or landscape?</Text>
        <Text style={styles.answer}>
        Pass "ORIENTATION" in app.json file as `"orientation": "portrait"` or `"orientation": "landscape"`
        </Text> 
        <Text style={styles.text}>Which is the best resolution's for image</Text>
        <Text style={styles.answer}>use flex ratio as "1" then pass width and height as "undefined" and resizeMode as "contain"</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginLeft: 30,
    marginRight:30
  },
  text:{
    fontSize:20,
    fontWeight:"700",
  },    
  answer:{
    fontSize:18,
    fontWeight:"400",
    marginBottom:30
  },    
});


